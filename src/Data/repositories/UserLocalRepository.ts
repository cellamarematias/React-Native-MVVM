import { Usuario } from '../../Domain/entities/Usuario';
import { UserLocalRepository } from '../../Domain/repositories/UserLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

export class UserLocalRepositoryImpl implements UserLocalRepository {
    
    async save(user: Usuario): Promise<void> {
        const { save } = LocalStorage();
        await save('user', JSON.stringify(user)); // viene como un objeto por eso lo tengo que stringify
    }

    async getUser(): Promise<Usuario> {
        const { getItem } = LocalStorage();
        const data = await getItem('user');

        // tengo que parsear la data!!
        const user: Usuario = JSON.parse(data as any);

        return user;
    }
}