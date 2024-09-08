import React from "react"
import { useGlobalHook } from '@devhammed/use-global-hook'
 
const ProductListing = () => {
  const { isLoading, error, data } = useGlobalHook('servicesStore') 
    return (
        <div>
            <h1>
                Products
            </h1>
            {
                isLoading
                    ? <p>Loading</p>
                : data
                    ? data.map(d => Object.keys(d).map(k => <p>{k}: {d[k].toString()}</p>))
                : error
                    ? <p>Error</p>
                : null
            }
        </div>
    );
};
 
export default ProductListing;