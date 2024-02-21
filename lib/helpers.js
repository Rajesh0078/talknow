// const base_url = "https://arjunaartistry.com"
const base_url = "http://localhost:3000"
export const server_routes = {
    login: "api/login",
    register: "api/register",
    getusers: base_url + "/api/user",
    searchUser: base_url + "/api/searchuser",
    img_upload: base_url + "/api/img_upload",
    edit_profile: base_url + "/api/edit_profile",
}

export const client_routes = {
    login: "/login",
    register: "/register",
    chat: '/chat',
    profile: '/profile',
    discover: '/discover',
    notification: '/notification',
    edit_profile: '/editprofile'
}

