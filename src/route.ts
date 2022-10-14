import userController from "./controller";
import * as express from "express";

const router = express.Router();

router.post("/createuser", userController.checkBody, userController.createUser);

router.get("/getUser/:id", userController.getUser);

router.get("/getAllUsers", userController.getAllUsers);

router.patch("/updateUser/:id", userController.updateUser);

router.delete("/deleteUser/:id", userController.deleteUser);

export default router;
