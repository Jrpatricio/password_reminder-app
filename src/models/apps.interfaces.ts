export interface IApps {
    userCode: string,
    name: string,
    user: string
    apps: IApp[]
}

export interface IApp {
    id: string,
    appName?: string,
    username: string,
    password: string
}
