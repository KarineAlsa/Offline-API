import { Request, Response } from "express";
import  UpdateUseCase  from "../../Application/UseCase/UpdateNoteUseCase";

export default class UpdateNoteController {

    constructor(readonly useCase:UpdateUseCase){}

    async run(request:Request,response:Response) {
        const id=request.params.id
        const contenido = request.body.content;
        if (!contenido) {
            return response.status(400).json({
                message: "Nada por actualizar",
                success: false
            });
        }
        
        if (id !=""){

        try {
            const updatedAt = new Date().toISOString().slice(0, 10);
            let user = await this.useCase.run(Number(id), contenido, updatedAt);
            if (user) {
                
                return response.status(200).json({data:user,message:"Nota actualizada",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo actualizar la nota",
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
            

        }else{
            response.status(400).send({
                data:"Error",
                message: "Error",
                success:false
            });
        }
    }
    }