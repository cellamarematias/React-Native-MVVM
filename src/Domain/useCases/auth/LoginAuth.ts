import { AuthRepositoryImp } from "../../../Data/sources/Repositories/AuthRepository"
import { Usuario } from "../../entities/Usuario"
const { Login } = new AuthRepositoryImp;

export const LoginAuthUseCase = async (user: Usuario) => {
    return await Login(user);
}