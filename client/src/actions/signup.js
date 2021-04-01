import { baseUrl } from '../config';

export const TOKEN_KEY = 'context/authentication/token';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const removeToken = () => ({
    type: REMOVE_TOKEN,
});

export const setToken = token => ({
    type: SET_TOKEN,
    token,
});

export const loadToken = () => async dispatch => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
};

export const createUser = (username, email, password) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/user`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
        const { token } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
    }
};