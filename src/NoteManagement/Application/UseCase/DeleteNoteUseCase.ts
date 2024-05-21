import { Note } from "../../Domain/Entity/Note";
import  NoteInterface  from "../../Domain/Port/NoteInterface";

export default class DeleteNoteUseCase {

    constructor(readonly repository: NoteInterface) {}

    async run( id:number):Promise<Note|any> {
        try {

            return await this.repository.delete(id);
        }catch(error) {

        }
    }

}