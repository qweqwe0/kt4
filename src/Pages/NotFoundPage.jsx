import React from 'react';
import { useNavigate } from 'react-router-dom';
import err from '../images/404err.jpg'

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="content">
            <img width={400} src={err} alt='404'/>
            <button onClick={() => navigate('/products')}>Go to Products</button>
        </div>
    );
};

export default NotFoundPage;