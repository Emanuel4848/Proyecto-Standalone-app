export interface userDTO {
    username?: string;
    name: string;
    lastname?: string;
    age: number | null;
    email?:string;
    gender?: string;
    password?: string;
    confirmPassword?: string;
    languages?: Language[]
}

export interface Language{
    name: string;
    code: string;
}

export interface User {
    id?: number;
    username: string;
    names: string;
    lastnames: string;
    age: number;
    gender: string;
    password: string;
    email: string;

}


export interface Login{
    username: string;
    password: string;
}