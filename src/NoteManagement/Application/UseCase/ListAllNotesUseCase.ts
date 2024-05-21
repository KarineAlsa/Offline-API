import { Note } from "../../Domain/Entity/Note";
import  OrderInterface  from "../../Domain/Port/NoteInterface";

export default class RegisterStudentUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run():Promise<Note[]|any> {
        try {

            return await this.repository.listAll();
        }catch(error) {

        }
    }

}