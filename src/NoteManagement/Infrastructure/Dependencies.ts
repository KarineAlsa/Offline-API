import RegisterNoteCase from "../Application/UseCase/CreateNoteUseCase";

import NoteMySQLRepository from "./Repository/NoteMySQLRepository"

import RegisterTutorController from './Controller/CreateNoteController'

export const MySqlNoteRepository = new NoteMySQLRepository();
export const currentRepository =  MySqlNoteRepository

export const registerCase = new RegisterNoteCase(currentRepository);

export const registerController = new RegisterTutorController(registerCase);