import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        AuthService.getCurrentUser()
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigate('/login');
            });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (loading) {
        return <div > Loading... </div>;
    }

    return ( <div className = "dashboard" >
        <h2> Welcome, { user.name }! </h2> <p> Email: { user.email } </p>
         <button onClick = { handleLogout } > Logout </button> 
         </div>
    );
}

export default Dashboard;