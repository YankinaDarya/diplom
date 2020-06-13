import {instance} from "../index";

export const studentAPI = {
    login(login: string, password: string) {
        return instance.post(`user/auth`, {login, password})
            .then(res => res.data);
    },
    getStudentInfo() {
        return instance.get(`user/auth`).then(res => res.data);
    },
    updateInfo(id: number, payload: any) {
        return instance.put(`student/${id}`, {...payload})
            .then(res => res.data);
    },
    getAllInfo(id: number) {
        return instance.get(`student/${id}`)
            .then(res => res.data);
    },
    getStudentTimetable(id: number) {
        return instance.get(`schedule/student/${id}`).then(res => res.data);
    },
    getStudentNotifications(id: number) {
        return instance.get(`notification/${id}`).then(res => res.data);
    },
    getStudentMessages(id: number) {
        return instance.get(`message/${id}`).then(res => res.data);
    },
    readStudentNotification(id: number) {
        return instance.post(`/notification/read/${id}`, {}).then(res => res.data);
    },
    readStudentMessage(id: number) {
        return instance.post(`/message/read/${id}`, {}).then(res => res.data);
    },
    answer(userId: number, message: string, chain_num: number) {
        return instance.post(`message`, {
            user_id: userId,
            message,
            chain_num,
        }).then(res => res.data);
    },
};
