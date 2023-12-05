import React,{ useEffect } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { getProductList } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import { StyledButton } from "../styledcomponents/Button";


const ProductList=()=>{
    const isLight = true;
  const products=useSelector((state)=>state.allproducts.products);
  const dispatch=useDispatch();
  const fetchProducts=async ()=>{
          const response= await axios.get(`https://fakestoreapi.com/products`)
          .catch((err)=>{
              console.log(err);
          })
    dispatch(getProductList(response.data));
  }
  
  useEffect(()=>{
      fetchProducts();
  },[])
  

const productList=products.map((product)=>{
    const {id,title,price,category}=product;
    return (
        <tr key={id} className="px-6 py-8">            
            <td className="border border-slate-400 px-6 py-5">{id}</td>
            <td className="border border-slate-400 px-6 py-5">{title}</td>
            <td className="border border-slate-400 px-6 py-5">{price}</td>
            <td className="border border-slate-400 px-6 py-5">{category}</td>
            <td className="border border-slate-400 px-6 py-5"><Link to={`/products/${id}`}>Edit</Link></td>
        </tr>
    )
});

return (   
  <div className="p-5">
    <StyledButton primary={isLight}  onClick={event=>window.location.href="/newproduct"}>New</StyledButton> 
    <table className="w-full text-2xl text-left text-gray-500 dark:text-gray-400 border-collapse border border-slate-400">
        <thead className="text-2xl text-gray-700 dark:text-gray-400">
            <tr>
            <th className="border border-slate-400 px-6 py-6">ID</th>
            <th className="border border-slate-400 px-6 py-6">Title</th>
            <th className="border border-slate-400 px-6 py-6">Price</th>
            <th className="border border-slate-400 px-6 py-6">Category</th>
            <th className="border border-slate-400 px-6 py-6">Action</th>
            </tr>
        </thead>
        <tbody>
           {productList}
        </tbody>
    </table>
    </div> 
)
}
export default ProductList;