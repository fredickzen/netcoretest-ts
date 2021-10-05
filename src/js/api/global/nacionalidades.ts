import axios from "axios";
import { apiUrl } from "../../config/env";

const Get = async () => {
    return await axios.get(apiUrl + "Nacionalidads");
};

export const ApiNacionalidades = {
    Get,
};
