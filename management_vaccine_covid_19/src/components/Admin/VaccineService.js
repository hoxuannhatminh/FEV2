import axios from "axios";
import authHeader from "../auth-header";

const API_URL = "http://localhost:8080/congthongtin";

const create=(data) =>{
    return axios.post(API_URL+'/admin/vaccine',data, {headers:authHeader()})
}
export default {
    create
};