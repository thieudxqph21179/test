import 'bootstrap/dist/css/bootstrap.min.css'
import { render, router } from './lib'
import addproduct from './pages/addproduct'
import editproduct from './pages/editproduct'
import product from './pages/product'

const app = document.querySelector("#app")

router.on("/",()=>render(addproduct,app))
router.on("/product",()=>render(product,app))
router.on("/product/:id/edit",({data})=>render(()=>editproduct(data),app))
router.resolve();
