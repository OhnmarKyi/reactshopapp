import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {getProductById,updateProduct} from '../redux/actions/productAction';
import { StyledButton } from "../styledcomponents/Button";

const EditProduct=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const isLight=false;
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("0");
    const [category,setCategory]=useState("");
    const [description,setDescription]=useState("");
    const dispatch=useDispatch();    
    const product=useSelector((state)=>state.selectedproduct);
    
    const getSelectedData=async()=>{
      const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch((error)=>{
        console.log("Error",error)
    })     
       dispatch(getProductById(response.data));
    }
    useEffect(()=>{
        if (id && id!=="") getSelectedData(); 
    },[id]);

    const UpdateProduct=async(event)=>{
        event.preventDefault();
        const response=await axios.put(`https://fakestoreapi.com/products/${id}`,JSON.stringify({
            title:`${title}`.toString(),
            price:`${price}`,
            category:`${category}`.toString(),
            image: 'https://i.pravatar.cc',
            description:`${description}`.toString()
        })).catch((error)=>console.log("Error",error))
        dispatch(updateProduct(response.data));
        navigate('/');
    }

    return (
        <div>
        {
              Object.keys(product).length===0?(<div>...Loading</div>):(
                <form onSubmit={UpdateProduct}>
                <div className="grid grid-cols-12 m-4">
                    <label className="text-left text-2xl col-start-4 col-end-6">Title :                
                    </label>
                    <input type="text" className="col-start-7 col-end-10 py-4 text-2xl border border-slate-400" defaultValue={product.title} onChange={(event)=>setTitle(event.target.value)}></input>
                </div>                
                <div className="grid grid-cols-12 mb-4">
                    <label className="text-left text-2xl col-start-4 col-end-6">Price :               
                    </label>
                    <input type="text" className="col-start-7 col-end-10 py-4  text-2xl border border-slate-400"  defaultValue={product.price} onChange={(event)=>setPrice(event.target.value)}></input>
                </div>
                <div className="grid grid-cols-12 mb-4">
                    <label className="text-left text-2xl col-start-4 col-end-6">Category :                
                    </label>
                    <input type="text" className="col-start-7 col-end-10 py-4 text-2xl border border-slate-400"  defaultValue={product.category} onChange={(event)=>setCategory(event.target.value)}></input>
                </div> 
                <div className="grid grid-cols-12 mb-4">
                    <label className="text-left text-2xl col-start-4 col-end-6">Description :                
                    </label>
                    <input type="text"  className="col-start-7 col-end-10 py-4 border text-2xl border-slate-400" defaultValue={product.description} onChange={(event)=>setDescription(event.target.value)}></input>
                </div> 
                <div className="grid grid-cols-12 mb-4">  
                <StyledButton primary={isLight} className="col-start-7 col-end-10 ">Save</StyledButton>
                {/* <button className="px-5 py-3 col-start-7 col-end-10 text-2xl border border-slate-400">Save</button> */}
                </div> 
                </form>
              )
        }
        </div>
    )
}
export default EditProduct;