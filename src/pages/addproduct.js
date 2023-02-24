import { AddProduct } from "../api/product";
import { router, useEffect } from "../lib";

const addproduct = () => {

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
                  productName : ten.value,
                    image : anh.value
                   
                }
                alert("Bạn đã thêm thành công");
                AddProduct(formData).then(()=>router.navigate("/product"))
            }
            
        })
    })
  return (
   `
   <form id="add-product">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Tên</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
    <span id="err-ten"></span>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ảnh</label>
    <input type="text" class="form-control" id="anh" aria-describedby="emailHelp">
    <span id="err-anh"></span>

  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
   `
  )
}


export default addproduct