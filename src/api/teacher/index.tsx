import {instance} from '../index';

export const teacherAPI = {
    updateInfo(id: number, payload: any) {
        return instance.put(`lecturer/${id}`, {...payload})
            .then(res => res.data);
    },
    getInfo(id: number) {
        return instance.get(`lecturer/${id}`)
            .then(res => res.data);
    },
    getTeacherCourses(id: number) {
        return instance.get(`lecturer/course/${id}`).then(res => res.data);
    },
    getTeacherTimetable(id: number) {
        return instance.get(`schedule/lecturer/${id}`).then(res => res.data);
    },
    getTeacherUnapprovedTimetable(id: number) {
        return instance.get(`schedule/lecturer/unapp/${id}`).then(res => res.data);
    },
    sentTeacherTimetable(payload: any) {
        return instance.post(`schedule`, {...payload}).then(res => res.data);
    },
};
