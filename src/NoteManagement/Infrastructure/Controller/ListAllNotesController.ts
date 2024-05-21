import { Request, Response } from "express";
import  ListAllNotesUseCase  from "../../Application/UseCase/ListAllNotesUseCase";

export default class RegisterController {

    constructor(readonly useCase:ListAllNotesUseCase){}

    async run(request:Request,response:Response) {

        try {
            
            let notas = await this.useCase.run();
            if (notas) {
                return response.status(200).json({data:notas,message:"Notas obtenidas",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo obtener todas las notas",
                    success: false,
                });
            }
        } catch (error:any) {
            console.log(error)
            response.status(500).send({
                
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
    }
    }