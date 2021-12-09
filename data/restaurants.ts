import {images} from '../assets/images';

export interface Imenu{
    breakfast:string[],
    lunch:string[],
    dinner:string[],
    drinks:string[],
    desserts:string[],
}

interface Ilocation{
    lat:string,
    lon:string
}

export interface Irestaurant{
    id:number,
    name:string,
    address:string,
    location:Ilocation,
    stars:number,
    type:string,
    image_id:number
}

export function restaurantsData():Irestaurant[]{
    return ([
                {
                id:1,
                name:"The Farmer",
                address:"1020 Twisted Sapplings, Charlotte",
                location:{lat:"",lon:""},
                stars:4,
                type:"Bistro",
                image_id:1,
                },
                {
                id:2,
                name:"Magic Beans",
                address:"4565 Harvest Moon, New York",
                location:{lat:"",lon:""},
                stars:4,
                type:"Bistro",
                image_id:2,
                },
                {
                id:3,
                name:"Elizabeth's",
                address:"4565 Harvest Moon, New York",
                location:{lat:"",lon:""},
                stars:4,
                type:"Bistro",
                image_id:3,
                },
                {
                id:4,
                name:"Lili's Tamales",
                address:"4567 North Pana, Quito",
                location:{lat:"",lon:""},
                stars:3,
                type:"Lounge",
                image_id:4,
                },
            ])
}