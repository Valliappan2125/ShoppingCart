import { useState } from 'react';
import data from '../assets/products.json';
import ProductCard from './ProductCard';

const Home = () => {
    const [products] = useState(data);
  return (
    <div>
        <h1 className='text-4xl text-center font-bold'>Products</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 place-items-center gap-y-5'>
        {
            products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    </div>
  )
}

export default Home