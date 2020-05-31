export type Contacts = {
    email: string | null;
    telephone?: string | null;
    telegram?: string | null;
}

export type TimetableWeek = {
    monday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
    tuesday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
    wednesday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
    thursday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
    friday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
    saturday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
    sunday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
        place: string,
        courseId: number,
    },
}

export type BaseAction = () => { type: string; };
export type Action<T> = (payload: T) => { type: string; payload: T };
