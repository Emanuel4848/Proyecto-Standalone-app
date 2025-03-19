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