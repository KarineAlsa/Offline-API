import { Request, Response } from "express";
import  DeleteNoteUseCase  from "../../Application/UseCase/DeleteNoteUseCase";

export default class DeleteNoteController {

    constructor(readonly useCase:DeleteNoteUseCase){}

    async run(request:Request,response:Response) {
        const id=request.params.id
        try {
            let note = await this.useCase.run(Number(id));
            if (note) {
                
                return response.status(200).json({data:note,message:"Nota eliminada",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo eliminar la nota",
                    success: false,
                });
            }
        } catch (error) {
           
            response.status(500).send({
                data:error ,
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
            
    }
    }