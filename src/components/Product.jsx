import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { addToCart } from '../redux/actions';
import './Product.css';
import Like from '../image/like.svg';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className='product'>
            <div className="container product__container">
                <div className='product__card'>
                    <div className='product__block'>
                        <img className='product__image' src={Like} alt="" />
                    </div>
                    <img className='product__image2' src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    {}
                    <Link className='product__btn' to={'/product-details/' + product.id}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
