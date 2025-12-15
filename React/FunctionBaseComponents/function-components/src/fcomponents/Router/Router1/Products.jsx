import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Products = () => {
    const [searchParams] = useSearchParams();
    const obj = Object.fromEntries([...searchParams]);
    return (<div>
        ProductsNo{obj.id}
        <br />
        ProductsType{obj.sort}
    </div>
    )
}
export default Products