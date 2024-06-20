import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

const { getUser } = new UserLocalRepositoryImpl(); // es una clase!! necesita instanc con el 'new'

export const GetUserUseCase = async () => {
    return await getUser();
}