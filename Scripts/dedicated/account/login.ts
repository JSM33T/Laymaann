﻿import { acToast, acPostData, acFormHandler, acInit } from '../../global.js';

const userNameInput = document.getElementById('userName') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
acInit([
    () => acFormHandler('login-form', submitLoginForm)
]);

async function submitLoginForm() {
    const username = userNameInput.value;
    const password = passwordInput.value;

    if (username.length <= 2) {
        acToast("error", "Username should be at least 3 characters long.");
    } else if (password.length < 6) {
        acToast("error", "Password should be at least 6 characters long.");
    } else {
        await postToLoginApi(username, password);
    }
}

async function postToLoginApi(username: string, password: string) {
    const apiUrl = '/api/account/login';

    const data: { username: string; password: string } = {
        username,
        password
    };
    submitBtn.innerHTML = "Loading...";

    try {
        const response = await acPostData(apiUrl, data);
        if (response.type === "ok") {
            submitBtn.innerHTML = "Logging in...";
            submitBtn.classList.add('pe-none');
            const lastLink: string | null = localStorage.getItem("curr_link");
            if (lastLink) {
                window.location.href = lastLink;
            }
            else {
                window.location.href = "/";
            }
        }
        else {
            acToast('error', response.data);
        }
        console.log(response.data)
    } catch (error) {
        console.error('Error during login:', error);
        acToast('error', 'Something went wrong');
    } finally {
        submitBtn.innerHTML = "Log In";
        submitBtn.classList.remove('pe-none');
    }
}
