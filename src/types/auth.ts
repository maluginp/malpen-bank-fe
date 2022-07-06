export interface ISignInQuery {
    email: string,
    password: string,
}

export interface ISignUpQuery {
    email: string,
    password: string,
}

export interface ISignUpResponse {
    id: number,
    token: string,
}

export interface ISignInResponse {
    id: number,
    token: string,
}