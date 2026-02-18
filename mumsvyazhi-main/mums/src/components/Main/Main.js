import {ProductService} from "../../services/ProductService.js"
import { useState } from "react";
import { useEffect } from "react";
import {Products} from "./products";


const Main = () =>{
            const [prodList, setProdList] = useState([]);
            useEffect(() => {
                init();
            }, []);
            const init = () => {
                ProductService
                    .getProducts()
                    .then((res) => {
                        console.log(res.data);
                        setProdList(res.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        console.log("blyaaaaa")
                    });
            }
        return (
           <>
               <div className='main_osn' id='goods'>
                   <div className="card_wrap">
                       <Products products = {prodList} />
                   </div>
               </div>
           </>
        );

}

export default Main;