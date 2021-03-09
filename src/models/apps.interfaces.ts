export interface IApps {
    userCode: string,
    name: string,
    user: string
    apps: IApp[]
}

export interface IApp {
    id: string,
    name?: string,
    username: string,
    password: string
}
