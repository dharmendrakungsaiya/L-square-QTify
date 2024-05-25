import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

const fetchAlbum = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}