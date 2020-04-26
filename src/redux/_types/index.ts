import {Contacts} from "../../types/types";

export type TeacherStateTye = {
    id: number | null;
    fullName: number | null;
    birthDate: string | null;
    passport: any;
    snils: any;
    department: string | null;
    address: any;
    contacts: Contacts | null;
    courses: Array<string> | null;
    position: string | null;
    rate: string | null;
    scienceDegree: string | null;
    teacherIsAuth: boolean;
};
