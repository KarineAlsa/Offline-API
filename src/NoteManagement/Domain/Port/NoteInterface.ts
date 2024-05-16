import {Note} from "../Entity/Note";

export default interface NoteInterface{
    registerNote(note:Note):Promise<Note|any>;
}