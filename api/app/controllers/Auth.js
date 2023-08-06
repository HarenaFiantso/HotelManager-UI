import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

import { pool } from "../../databaseConnection.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
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

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isadmin },
      process.env.JWT_SECRET || "default_secret"
    );

    // Exclude password and isAdmin from the response
    const { password, isadmin, ...otherDetails } = user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin: user.isadmin });
  } catch (err) {
    next(err);
  }
};
