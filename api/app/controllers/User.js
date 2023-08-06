import User from '../models/userModel.js';

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const userId = parseInt(req.params.id); // Convert id to integer if needed

  try {
    // Delete the user from the database using the deleteUser method
    await User.deleteUser(userId);

    res.status(200).json('User has been deleted.');
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}

export const getUsers = async (req, res, next) => {
  try {
    const user = await User.getUsers(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}
