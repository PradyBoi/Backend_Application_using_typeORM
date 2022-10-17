import { User } from "./entities";
import { AppDataSource } from "./data-source";

const checkBody = (req, res, next) => {
  if (!req.body.firstName && !req.body.lastName)
    res.status(400).json({
      status: "fail",
      message: "Missing firstName and lastName",
    });
  next();
};

const createUser = async (req, res) => {
  try {
    const userRespository = AppDataSource.getMongoRepository(User);
    const userObject = await userRespository.save(req.body);

    res.json({
      status: "success",
      data: userObject,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Bad request",
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await AppDataSource.getRepository(User).findOneBy(
      req.params.id
    );
    res.json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Bad request",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: res.paginatedResults,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Bad request",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await AppDataSource.getRepository(User).findOneBy(
      req.params.id
    );

    if (user) {
      await AppDataSource.getRepository(User).merge(user, req.body);
      const updatedUser = await AppDataSource.getRepository(User).save(user);
      res.status(202).json({
        status: "success",
        message: "Update user information",
      });
    }
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: "User updated!",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await AppDataSource.getRepository(User).delete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Bad request",
    });
  }
};

export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  checkBody,
};
