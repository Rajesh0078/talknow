import { server_routes } from "./helpers"
import CryptoJS from 'crypto-js';

export const loginAction = async (formdata) => {
    const res = await fetch(server_routes.login, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
    })
    const data = await res.json()
    if (!data.success) {
        return data
    }
    const secret = CryptoJS.AES.encrypt(JSON.stringify(data.user), "myKey8080").toString()
    if (secret) {
        return secret
    }
}


export const decryptData = (string) => {
    if (string) {
        const bytes = CryptoJS.AES.decrypt(string?.value, "myKey8080")
        const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return user
    }
}


export const allUsers = async () => {
    const res = await fetch(server_routes.getusers)
    const data = await res.json()
    return data
}

export const searchUser = async (id) => {
    const res = await fetch(server_routes.searchUser + '?id=' + id)
    const data = await res.json()
    return data
}

export const imgUpload = async (img) => {
    try {
        const response = await fetch(server_routes.img_upload, {
            method: 'POST',
            body: img,
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
        } else {
            console.error('Image upload failed.');
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}