import React, { useEffect, useState } from 'react';
import ProductItem from '../Components/ProductItem';

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="products-page">
            <div className="products-grid">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
