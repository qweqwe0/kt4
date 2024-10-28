import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Stars from '../Components/Stars';
import load from '../images/load.gif'


const ProductAbout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сетевая ошибка');
                }
                return response.json();
            })
            .then(data => setProduct(data))
            .catch(error => {
                console.error('Ошибка при получении данных о продукте:', error);
            });
    }, [id]);

    if (!product) {
        return <div className='load'><img width={40} src={load} alt=''/></div>; 
    }

    return (
        
        <div className='product-about'>

            <div className="product-card">
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p>Цена: ${product.price}</p>
                <p>{product.description}</p>
                <div> <Stars  rating={product.rating.rate} /></div>
            </div>

            <button className='btnBack' onClick={() => navigate(-1)}>Назад</button>

        </div>
         
        
       
        
    );
};

export default ProductAbout;
