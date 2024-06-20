import { useEffect, useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { Usuario } from '../../../Domain/entities/Usuario';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUser';
import { useUserLocal } from '../../hooks/useUserLocal';

export const useLoginViewModel = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [values, setValues] = useState<Usuario>({
        usuario_id: 0,
        nombre: '',
        contrasena: '',
        token: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value })
    }

    const {user} = useUserLocal();

    const login = async () => {
        if (isValidForm()) {
            const user: Usuario = values;
            const response = await LoginAuthUseCase(user);
    
            if (response.status !== 200) {
                setErrorMessage(response.error.message);
            } else {
                // login exitoso
                await SaveUserUseCase(response.result);
            }
        }
    };
    

    const isValidForm = (): boolean => {
        if (values.nombre === '') {
            setErrorMessage('Ingresa el nombre de usuario');
            return false;
        }
        if (values.contrasena === '') {
            setErrorMessage('Ingresa la contraseña');
            return false;
        }

        return true;
    };

    return {
        ...values,
        login,
        user,
        errorMessage,
        onChange,
    };
};
