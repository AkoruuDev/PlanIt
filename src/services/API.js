import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';


function signUp(register) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, register);
    return promise;
}

function doLogin(login) {
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;    
}

function createHabits(newHabit) {
    const promise = axios.post(`${BASE_URL}/habits`, newHabit);
    return promise;
}

function generateHabits() {
    const promise = axios.get(`${BASE_URL}/habits`);
    return promise;
}

function deleteHabits(HABIT_ID) {
    const promise = axios.delete(`${BASE_URL}/habits/${HABIT_ID}`);
    return promise;
}

function getHabits(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

function doneHabit(HABIT_ID) {
    const promise = axios.post(`${BASE_URL}/habits/${HABIT_ID}/check`);
    return promise;
}

function undoneHabit(HABIT_ID) {
    const promise = axios.post(`${BASE_URL}/habits/${HABIT_ID}/uncheck`);
    return promise;
}

function historic() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`);
    return promise;    
}

export { signUp, doLogin, createHabits, generateHabits, deleteHabits, getHabits, doneHabit, undoneHabit, historic };