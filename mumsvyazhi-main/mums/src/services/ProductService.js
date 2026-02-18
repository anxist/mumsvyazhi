import axios from "axios";
//
// // @ts-ignore
// window.Buffer = Buffer;
const LOCALHOST = "http://localhost:8083"
const RENDERHOST = "https://mumsik.onrender.com"
let HOST = RENDERHOST
const PRODUCT_API_URL = HOST+"/products/";
const IMAGE_URL = HOST+"/images/get/";

export class ProductService {

    static getProducts(){
        return axios.get(PRODUCT_API_URL + "all");
    }
    static getProductById(id){
        return axios.get(PRODUCT_API_URL+id);
    }

    static GET_IMAGES() {
        return IMAGE_URL
    }

    static getImageByURL(url){
        return axios({
            method: 'GET',
            url: url,
            responseType: 'blob'
        })
            .then(response => {
                // Handle the response
                // Process the blob data as needed
                return response.data;
            })
            .catch(error => {
                // Handle any errors
                console.error('Error retrieving blob data:', error);
                throw error;
            });
    }

}