import { getProduct, updateProductt } from "../api/product";
import { router, useEffect, useState } from "../lib";


const editproduct = ({id}) => {

  const[products,setProduct]= useState([]);
  useEffect(()=>{
    getProduct(id).then(({data})=>setProduct(data))
  },[])
  useEffect(()=>{
    const form = document.querySelector("#add-product");
    const ten = document.querySelector("#name");
    const anh = document.querySelector("#anh");
    
    form.addEventListener("submit",function(e){
        e.preventDefault();

        if(ten.value ==""){
            document.querySelector("#err-ten").innerHTML = "Bạn k được để trống ";
        }else if(anh.value ==""){
            document.querySelector("#err-anh").innerHTML = "Bạn k được để trống ";

        }
        else{
            const formData = {
              id,
              productName : ten.value,
                image : anh.value
               
            }
            alert("Bạn đã sửa thành công");
            updateProductt(formData).then(()=>router.navigate("/product"))
        }
        
    })
})
return (
`
<form id="add-product">
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Tên</label>
<input type="text" class="form-control" id="name" aria-describedby="emailHelp" value="${products.productName}">
<span id="err-ten"></span>
</div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Ảnh</label>
<input type="text" class="form-control" id="anh" aria-describedby="emailHelp"  value="${products.image}">
<span id="err-anh"></span>

</div>


<button type="submit" class="btn btn-primary">Submit</button>
</form>
`
)
}

export default editproduct