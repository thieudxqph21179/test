import axios from "axios";
const instance = axios.create({
    baseURL : "http://localhost:3000"
});

const getProducts = () =>{
    return instance.get(`/products`)
}
const getProduct = (id)=>{
    return instance.get(`/products/${id}`);
}

const AddProduct = (product)=>{
    return instance.post(`/products`,product);
}
const deleteProduct = (id)=>{
    return instance.delete(`/products/${id}`);
}
const updateProductt = (product)=>{
    return instance.put(`/products/${product.id}`,product);
}
const signupp =(user)=>{
    return instance.post(`/signup`,user);
}
const signinn =(user)=>{
    return instance.post(`/signin`,user);
}
export{
    getProducts,getProduct,AddProduct,deleteProduct,updateProductt,signupp,signinn
}