import  NoteInterface  from "../../Domain/Port/NoteInterface";


export default class UpdateNoteUseCase {

    constructor(readonly repository:NoteInterface) {}

    async run( id:number,contenido:string, date:string ):Promise<any> {
        try {
          
            return await this.repository.updateNote(id,contenido, date);
            
            
        }catch(error) {

        }
    }

   

}