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
    },
    tuesday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
    },
    wednesday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
    },
    thursday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
    },
    friday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
    },
    saturday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
    },
    sunday: {
        name: string,
        isLecture: boolean,
        isSeminar: boolean,
    },
}

export type BaseAction = () => { type: string; };
export type Action<T> = (payload: T) => { type: string; payload: T };
