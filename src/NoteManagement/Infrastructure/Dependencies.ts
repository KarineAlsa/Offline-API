import RegisterNoteCase from "../Application/UseCase/CreateNoteUseCase";
import ListAllNotesUseCase from "../Application/UseCase/ListAllNotesUseCase";
import UpdateNoteUseCase from "../Application/UseCase/UpdateNoteUseCase";
import DeleteNoteUseCase from "../Application/UseCase/DeleteNoteUseCase";

import NoteMySQLRepository from "./Repository/NoteMySQLRepository"

import RegisterTutorController from './Controller/CreateNoteController'
import ListAllNotesController from './Controller/ListAllNotesController'
import UpdateNoteController from './Controller/UpdateNoteController'
import DeleteNoteController from './Controller/DeleteNoteController'

export const MySqlNoteRepository = new NoteMySQLRepository();
export const currentRepository =  MySqlNoteRepository

export const registerCase = new RegisterNoteCase(currentRepository);
export const listAllCase = new ListAllNotesUseCase(currentRepository);
export const updateCase = new UpdateNoteUseCase(currentRepository);
export const deleteCase = new DeleteNoteUseCase(currentRepository);

export const registerController = new RegisterTutorController(registerCase);
export const listAllController = new ListAllNotesController(listAllCase);
export const updateController = new UpdateNoteController(updateCase);
export const deleteController = new DeleteNoteController(deleteCase);