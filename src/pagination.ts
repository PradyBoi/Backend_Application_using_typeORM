import e = require("express");
import { AppDataSource } from "./data-source";
import { User } from "./entities";

const paginatedResults = async (req, res, next) => {
  try {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (page < 0) {
      return res.status(400).json({
        status: "fail",
        message: "This page does not exits",
      });
    }

    const totalRecords = await AppDataSource.getRepository(User).find();

    const model = await AppDataSource.getRepository(User).find({
      take: limit,
      skip: startIndex,
    });

    // const resolvedPromises = await Promise.all[totalRecords, model];

    const results: any = {};

    if (endIndex < totalRecords.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = model;

    res.paginatedResults = results;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

export default paginatedResults;
