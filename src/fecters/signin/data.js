import axios from 'axios';

import _loginUserData from '../../mock-data/login.json'

import { API_URL } from '../../config';

axios.defaults.timeout = 10000;
const USE_MOCK_DATA_PAGE_LEVEL = true;
const DELAY = 1000;

const delay = (ms) => new Promise(((resolve) => setTimeout(resolve, ms)))

export const loginAPI = (data) => {
    const USE_MOCK_DATA = false;

    const url = API_URL + '/login'

    if (USE_MOCK_DATA_PAGE_LEVEL || USE_MOCK_DATA) {
        const _data = _loginUserData
        return delay(DELAY).then(() => Promise.resolve(_data))
    }

    return axios.post(url, data)
}