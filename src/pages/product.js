import { deleteProduct, getProducts } from "../api/product";
import { useEffect, useState } from "../lib";


const product = () => {
  const[products,setProduct]= useState([]);
  useEffect(()=>{
    getProducts().then(({data})=>setProduct(data))
  },[])
  useEffect(()=>{
    const btns = document.querySelectorAll(".btn-remove");
    for(let btn of btns){
        btn.addEventListener("click",function(){
          confirm("bạn có muốn xóa k");
            const id = btn.dataset.id;
            console.log("id",id)
            deleteProduct(id).then(()=>{
                const newProduct = products.filter((product)=>product.id != id);
                setProduct(newProduct);
                alert("Bạn đã xóa thành công")
            })
        })
    }
})
  return (
    `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tên sp</th>
      <th scope="col">Ảnh</th>
      <th><a class="btn btn-success" href="/">Thêm</a></th>
    </tr>
  </thead>
  <tbody>
  ${products.map((product)=>{
    return `
    
    <tr>
    <th scope="row">${product.id}</th>
    <td>${product.productName}</td>
    <td><img style="width:200px" src="${product.image}"></td>
    <td>
    <button data-id="${product.id}" class="btn btn-danger btn-remove">Xóa</button>
    <a class="btn btn-primary" href="/product/${product.id}/edit">Sửa</a>
    </td>
  </tr>`
  }).join("")}
   
  </tbody>
</table>
    `
    )
}

export default product