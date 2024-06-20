import { Usuario } from "../entities/Usuario";

export interface AuthRepository { // acá solo se definen las funciones a usar

    Login(user: Usuario): Promise<any>
}