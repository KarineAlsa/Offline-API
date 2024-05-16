import { Note } from "../../Domain/Entity/Note";
import  NoteInterface  from "../../Domain/Port/NoteInterface";

export default class RegisterNoteUseCase {

    constructor(readonly repository: NoteInterface) {}

    async run( { name, content, date}: {
        name: string;
        content: string;
        date: string;
        
      } ):Promise<Note|any> {
        try {

            let note = new Note(
                name,
                content,
                date
            );
            return await this.repository.registerNote(note);
        }catch(error) {

        }
    }

}