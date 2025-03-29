export interface userDTO {
    name: string;
    lastname?: string;
    age: number | null;
    email?:string;
    password?: string;
    confirmPassword?: string;
    languages?: Language[]
}

export interface Language{
    name: string;
    code: string;
}

export interface User {
    id: number;
    username: string;
    names: string;
    lastnames: string;
    age: number;
    gender: string;
    password: string;
    email: string;
}