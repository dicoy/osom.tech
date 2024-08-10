import React from "react";
import { useParams } from 'react-router-dom';
 
const ProductDetails = (props) => {
    let { productId } = useParams();
    console.log({props, productId})
    return (
        <div>
            <h1>
                Producs
                for geeks.{productId}
            </h1>
        </div>
    );
};
 
export default ProductDetails;