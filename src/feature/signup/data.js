import axios from "axios";
import _signupUserData from '../../mock-data/signup.json'
import { API_URL } from "../../config";

axios.defaults.timeout = 10000;
const USE_MOCK_DATA_PAGE_LEVEL = true;
const DELAY = 1000;

const delay = (ms) => new Promise(((resolve) => setTimeout(resolve, ms)))

export const signupAPI = (data) => {

    const USE_MOCK_DATA = false

    const url = API_URL + '/signup'
    if (USE_MOCK_DATA_PAGE_LEVEL || USE_MOCK_DATA) {
        const _data = _signupUserData
        return delay(DELAY).then(() => Promise.resolve(_data))
    } else {
        return axios.post(url, data)
    }
}