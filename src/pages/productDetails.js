import React from "react";
import { useParams } from 'react-router-dom';
import { useGlobalHook } from '@devhammed/use-global-hook'



function Counter () {
  const { isLoading, error, data, refetch } = useGlobalHook('servicesStore') 

  return <>{
    isLoading
    ? (<div><button>loading</button></div>)
    : error
    ? (<div>error</div>)
    : data
    ? (<div>data<button onClick={() => refetch()}>refresh</button></div>)
    : null
  }
  </>
}
const ProductDetails = (props) => {
    let { productId } = useParams();
    console.log({props, productId})
    return (
        <div>
            <h1>
                Products
                for geeks.{productId}
            </h1>
            <Counter />
            <Counter />
        </div>
    );
};
 
export default ProductDetails;