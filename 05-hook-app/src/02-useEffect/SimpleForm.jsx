import { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'fernando',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;
    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('Cambio algo!');
        return () => {
        }
    }, [])

    useEffect(() => {
        // console.log('Cambio el  formState!');
        return () => {
        }
    }, [formState])

    useEffect(() => {
        //console.log('Cambio el email!');
        return () => {
        }
    }, [email])


    return (
        <>
            <h1>Simple Form</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'fernando') && <Message />
            }

        </>
    )
}
