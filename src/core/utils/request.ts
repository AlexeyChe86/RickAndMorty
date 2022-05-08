import axios from 'axios';
import { BASE_API_URL } from '../../config/network';

class Request {
    geberateUrl(endpoint: string): string {
        const url = `${BASE_API_URL}${endpoint}`;
        return url;
    }

    async get(endpoint: string) {
        const url = this.geberateUrl(endpoint);
        return axios.get(url);
    }
}

export default Request;