import  express  from "express";
import {  registerController} from "../Dependencies";

const noteRouter = express.Router();

noteRouter.post("/",registerController.run.bind(registerController));

export default noteRouter;