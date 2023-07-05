import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>List of Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Products;



// import React, {useEffect, useState, useState} from "react";

// const Products = ()=>{
//     const[Products, setProducts] = useState({});

//     useEffect(() =>{

//     },[])

// const getProducts = async () =>{
//     try{
//         const response = await fetch(fetch('https://dummyjson.com/products')
//         const result = await response.json();
//         setProducts(result);
//     }
//     catch (error){
//         console.log(error.message);
//     }
// }    
//     return{
//         <div>
//         <h2>List of Products</h2>
//         </div>
//     }
// }
// export default Products