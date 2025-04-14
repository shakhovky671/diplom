import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const Login = () => {
        const [formData, setFormData] = useState({
            email: '',
            password: ''
        });
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = async(e) => {
            e.preventDefault();
            try {
                const response = await AuthService.login(formData);
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            } catch (err) {
                setError(err.response.data.message || 'Login failed');
            }
        };

        return (
             <div className = "auth-form">
            <h2> Login </h2> {
                error && < div className = "error" > { error } </div>} 
                <form onSubmit = { handleSubmit }>
                    <div>
                    <label htmlFor = "email" > Email: </label> 
                    <input type = "email" id = "email" name = "email" value = { formData.email } onChange = { handleChange } required />
                    </div>
                     <div >
                    <label htmlFor = "password" > Password: </label> 
                    <input
                type = "password"
                id = "password"
                name = "password"
                value = { formData.password }
                onChange = { handleChange }
                required
                    />
                    </div> <button type = "submit" > Login </button> 
                    </form> 
                    <p>Don 't have an account? <a href="/register">Register</a> </p> 
                    </div>
            );
        };

        export default Login;