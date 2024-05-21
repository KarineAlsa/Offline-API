import  express  from "express";
import {  registerController, listAllController, updateController,deleteController} from "../Dependencies";

const noteRouter = express.Router();

noteRouter.post("/",registerController.run.bind(registerController));
noteRouter.get("/",listAllController.run.bind(listAllController));
noteRouter.put("/:id",updateController.run.bind(updateController));
noteRouter.delete("/:id",deleteController.run.bind(deleteController));

export default noteRouter;