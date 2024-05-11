/* eslint-disable prettier/prettier */
import axios from "axios";

const API = axios.create({
    url: "http://www.sysprev.com.br:8585/"
})

export default API;

// /prevmobile-ws/rest/acesso/padrao