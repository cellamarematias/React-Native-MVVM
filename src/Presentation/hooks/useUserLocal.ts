import React, { useEffect, useState } from 'react'
import { Usuario } from '../../Domain/entities/Usuario';
import { GetUserUseCase } from '../../Domain/useCases/userLocal/GetUser';


export const useUserLocal = () => {

    const [user, setUser] = useState<Usuario>();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const user = await GetUserUseCase();
        console.log('USUARIO SESSION: ', JSON.stringify(user))
        setUser(user);
    }

    return { 
        getUser,
        user
    }
}
