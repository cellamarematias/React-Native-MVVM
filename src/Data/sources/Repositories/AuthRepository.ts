import { Usuario } from "../../../Domain/entities/Usuario";
import { AuthRepository } from "../../../Domain/repositories/authRepository";
import { ApiGastos } from "../remote/api/ApiGastos";
import { Response } from "../remote/models/Response";
import { AxiosResponse } from 'axios';

export class AuthRepositoryImp implements AuthRepository {

    async Login(user: Usuario): Promise<any> {
        try {
            const response: AxiosResponse<Response> = await ApiGastos.post<Response>('/users/auth', user);

            return Promise.resolve({ error: undefined, result: response.data, status: response.status });
        } catch (error: any) {
            let errorMessage;
            let statusCode;

            if (error.response) {
                // El error de respuesta del servidor está disponible
                statusCode = error.response.status;
                errorMessage = error.response.data; // O error.response.data.message si tu API proporciona un mensaje de error en ese formato
            } else {
                // Otro tipo de error (por ejemplo, error de red)
                statusCode = 500; // Puede establecer un código de estado por defecto
                errorMessage = error.message;
            }

            return Promise.resolve({ error: errorMessage, result: undefined, status: statusCode });
        }
    }

}
