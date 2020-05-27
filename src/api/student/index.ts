import {instance} from "../index";

export const studentAPI = {
    login(login: string, password: string) {
        return instance.post(`user/auth`, {login, password})
            .then(res => res.data);
    },
    getStudentInfo() {
        return instance.get(`user/auth`).then(res => res.data);
    },
};

/*export async function loginStudent(login: string, password: string) {
    const data = {login: login, password: password};
    const response = await fetch('/user/auth', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (response.status === 200) {
        getStudentInfo();
    }
    return response.json();
}

export async function getStudentInfo() {
    const response = await fetch('/user/auth', {
        method: 'GET',
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}*/
