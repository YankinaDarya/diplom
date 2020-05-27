import {instance} from '../index';

export const adminAPI = {
    login(login: string, password: string) {
        return instance.post(`user/auth`, {login, password})
            .then(res => res.data);
    },
    getAdminInfo() {
        return instance.get(`user/auth`).then(res => res.data);
    },
    addUser(login: string, password: string, role: string) {
        return instance.post(`user`, {login, password, role}).then(res => res.data);
    },
};

/*export async function addUser(login: string, password: string, role: string) {
    const data = {login: login, password: password, role: role};
    const response = await fetch('/user', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}*/

/*export async function loginAdmin(login: string, password: string) {
    const data = {login: login, password: password};
    const response = await fetch('/user/auth', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (response.status === 200) {
        getAdminInfo();
    }
    return response.json();
}

export async function getAdminInfo() {
    const response = await fetch('/user/auth', {
        method: 'GET',
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}*/
