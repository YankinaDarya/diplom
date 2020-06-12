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
};
