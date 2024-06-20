import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { Usuario } from "../../entities/Usuario";

const { save } = new UserLocalRepositoryImpl(); // es una clase!! necesita instanc con el 'new'

export const SaveUserUseCase = async (user: Usuario) => {
    return await save(user);
}