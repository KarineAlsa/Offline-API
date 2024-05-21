import {Note} from "../Entity/Note";

export default interface NoteInterface{
    updateNote(id: number, contenido: string, date:string): any;
    listAll(): Promise<Note[]|any>;
    registerNote(note:Note):Promise<Note|any>;
    delete(id:number):Promise<any>;
}