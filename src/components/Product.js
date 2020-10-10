import React from 'react'
import Card from 'react-bootstrap'
import products from '../products'

const Product = () => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`} >
                <Card.img src={product.image} variant={top} />

            </a>
        </Card>
    )
}

export default Product
