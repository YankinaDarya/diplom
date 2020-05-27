import {instance} from '../index';

export const authAPI = {
    login(login: string, password: string) {
        return instance.post(`user/auth`, {login, password})
            .then(res => res.data);
    },
    getUserInfo() {
        return instance.get(`user/auth`).then(res => res.data);
    },
    logout(id: number) {
        return instance.post(`user/unauth/${id}`)
            .then(res => res.data);
    },
};
