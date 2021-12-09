export interface IUser{
    id:number,
    username:string,
    password:string,
    email:string,
    image_id:number,
    liked_id:number[],
}

export function usersData():IUser[]{
    return ([
        {
            id:1,
            username:'Victor1316',
            password:'password',
            email:'victron@gmail.com',
            image_id:1,
            liked_id:[],
        },
        {
            id:2,
            username:'marcelorar',
            password:'password',
            email:'marcelorar@gmail.com',
            image_id:2,
            liked_id:[],
        },
        {
            id:3,
            username:'ely500',
            password:'password',
            email:'ely@gmail.com',
            image_id:3,
            liked_id:[],
        },
    ])
}