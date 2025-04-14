import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await AuthService.register(formData);
            navigate('/login');
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
        }
    };

    return ( <div className = "auth-form" >
        < h2 > Register </h2> {
            error && < div className = "error" > { error } </div>} <form onSubmit = { handleSubmit } >
                <div >
                < label > Name: </label>
                 <input
            type = "text"
            name = "name"
            value = { formData.name }
            onChange = { handleChange }
            required
                />
                </div> <div >
                <label > Email: </label> 
                < input
            type = "email"
            name = "email"
            value = { formData.email }
            onChange = { handleChange }
            required
                />
                </div> < div >
                < label > Password: </label>
                 < input
            type = "password"
            name = "password"
            value = { formData.password }
            onChange = { handleChange }
            required
                />
                </div> <button type = "submit" > Register </button> </form> <p >
                Already have an account ? < a href = "/login" > Login </a> </p> </div>
        );
    }

    export default Register;