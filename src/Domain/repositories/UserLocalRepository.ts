import { Usuario } from "../entities/Usuario";

export interface UserLocalRepository {
    // acá van los métodos

    save(user: Usuario ): Promise<void>;
    getUser(user: Usuario ): Promise<Usuario>;

}