import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/CreateNoteUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {
        const { name, content } = request.body;
        
        if (!name || !content) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (name.trim() === "" ) {
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            const createdAt = new Date().toISOString().slice(0, 10);
            let note = await this.useCase.run({
                name: name,
                content: content,
                date: createdAt
            });
            if (note) {
                return response.status(200).json({data:note,message:"Nota creada",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo crear la nota",
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