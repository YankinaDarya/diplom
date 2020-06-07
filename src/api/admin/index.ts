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
    getTimetables() {
        return instance.get(`/schedule`).then(res => res.data);
    },
    approveTimetable(id: number) {
        return instance.post(`/schedule/app/${id}`, {}).then(res => res.data);
    },
    rejectTimetable(id: number, comment: string) {
        return instance.post(`/schedule/unapp/${id}`, {comment}).then(res => res.data);
    },
};
