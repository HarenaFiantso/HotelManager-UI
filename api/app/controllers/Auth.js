import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const query = 'INSERT INTO "user" (username, email, country, img, city, phone, password, is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [
      req.body.username,
      req.body.email,
      req.body.country,
      req.body.img,
      req.body.city,
      req.body.phone,
      hash,
      false // is_admin set to false for registration, you can adjust this as needed
    ];

    await pool.query(query, values);
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM "user" WHERE username=$1';
    const values = [req.body.username];

    const { rows } = await pool.query(query, values);
    const user = rows[0];

    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user.id, isAdmin: user.is_admin },
      process.env.JWT
    );

    const { password, is_admin, ...otherDetails } = user;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin: user.is_admin });
  } catch (err) {
    next(err);
  }
};
