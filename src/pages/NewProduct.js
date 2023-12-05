import React,{ useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios  from "axios";
import { addProduct } from "../redux/actions/productAction";
import { StyledButton } from "../styledcomponents/Button";

const NewProduct=()=>{
const dispatch=useDispatch();
const navigate=useNavigate();
const isLight = false;
const [title,setTitle]=useState("");
const [price,setPrice]=useState("");
const [category,setCategory]=useState("");
const [description,setDescription]=useState("");

const AddProduct=async(event)=>{
    event.preventDefault();
  const response=await axios.post('https://fakestoreapi.com/products', JSON.stringify(
    {
    title:`${title}`.toString(),
    price:`${price}`,
    image: 'https://i.pravatar.cc',
    category:`${category}`.toString(),
    description:`${description}`.toString()
    }
    ))
    .then(alert("go"));
     dispatch(addProduct(response.data));
    navigate("/");
}
    return (
        <div>
        <form onSubmit={AddProduct}>
            <div className="grid grid-cols-12 m-4">
            <label className="text-left text-2xl col-start-4 col-end-6">Title :                
            </label>
            <input type="text" className="col-start-7 col-end-10 py-5 w-full border border-slate-400" value={title} onChange={(event)=>setTitle(event.target.value)}></input>
            </div>
            
            <div className="mb-4 grid grid-cols-12">           
            <label className="text-left text-2xl col-start-4 col-end-6">Price :               
            </label>
            <input type="text" className="col-start-7 col-end-10 px-5 py-5 w-full border border-slate-400"  value={price} onChange={(event)=>setPrice(event.target.value)}></input>
            </div>
            
            <div className="mb-4 grid grid-cols-12">    
            <label className="text-left text-2xl col-start-4 col-end-6">Category :                
            </label>
            <input type="text" className="col-start-7 col-end-10 px-5 py-5 w-full border border-slate-400"  value={category} onChange={(event)=>setCategory(event.target.value)}></input>
            </div>
            
            <div className="mb-4 grid grid-cols-12">
            <label className="text-left text-2xl col-start-4 col-end-6">Description :                
            </label>
            <input type="text"  className="col-start-7 col-end-10 px-5 py-5 w-full border border-slate-400" value={description} onChange={(event)=>setDescription(event.target.value)}></input>
            </div>
            <div className="mb-4 grid grid-cols-12">
            <StyledButton primary={isLight} className="col-start-7 col-end-10 ">Save</StyledButton>
            {/* <button className="col-start-7 col-end-10 px-5 py-5 border border-slate-400">Save</button> */}
            </div>
        </form>
        </div>
    )
}

export default NewProduct;