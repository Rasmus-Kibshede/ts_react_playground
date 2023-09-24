import { Button } from '@mui/material';
import axios from 'axios'
import { useEffect } from 'react'
import { useAuthUserStore } from '../store/user';
import { User } from '../types/userDatatype';

const Login = () => {
    const { authUser, setAuthUser } = useAuthUserStore();

    const loginValidate = async () => {
        const user: User = {
            id: 1,
            email: 'user1@gmail.com',
            token: '',
            password: '1234'
        }

        const result = await axios.post('http://localhost:3000/login', {
            email: user.email,
            password: user.password
        });

        user.token = result.data.token;

        setAuthUser(user);
    }

    const checkauth = async () => {
        console.log(authUser);

        const result = await axios.get('http://localhost:3000/checkauth', {
            headers: {
                token: authUser?.token
            }
        });
        console.log(result);
    }

    useEffect(() => {
        loginValidate();
    }, []);


    return (
        <>
            <div>Login</div>
            <Button onClick={checkauth}>Check Auth</Button>
        </>
    )
}

export default Login