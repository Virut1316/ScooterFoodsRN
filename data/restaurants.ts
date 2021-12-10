import {images} from '../assets/images';

export interface Imenu{
    breakfast:string[],
    lunch:string[],
    dinner:string[],
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
    image_id:number,
    menu:Imenu,
}

export function restaurantsDataParam(match:string):Irestaurant[]{
    let filtered = [];
    let rawData = restaurantsData();
    for(let x of rawData){
        if(x.address.includes(match))
            filtered.push(x)

    }

    return(filtered);
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
                menu:{
                    breakfast:['French Toast','Canadian BreackFast','Morning Burger'],
                    lunch:['Tuna toast','Ramen','Lunch Burger'],
                    dinner:['Parsino','Steak and vegetables','Veggie Meat'],
                }
                },
                {
                id:2,
                name:"Magic Beans",
                address:"4578 Arcane Street, New York",
                location:{lat:"",lon:""},
                stars:4,
                type:"Bistro",
                image_id:2,
                menu:{
                    breakfast:['French Toast','Canadian BreackFast','Morning Burger'],
                    lunch:['Tuna toast','Ramen','Lunch Burger'],
                    dinner:['Parsino','Steak and vegetables','Veggie Meat'],
                }
                },
                {
                id:3,
                name:"Elizabeth's",
                address:"4565 Harvest Moon, New York",
                location:{lat:"",lon:""},
                stars:4,
                type:"Bistro",
                image_id:3,
                menu:{
                    breakfast:['French Toast','Canadian BreackFast','Morning Burger'],
                    lunch:['Tuna toast','Ramen','Lunch Burger'],
                    dinner:['Parsino','Steak and vegetables','Veggie Meat'],
                }
                },
                {
                id:4,
                name:"Lili's Tamales",
                address:"4567 North Pana, Quito",
                location:{lat:"",lon:""},
                stars:3,
                type:"Lounge",
                image_id:4,
                menu:{
                    breakfast:['French Toast','Canadian BreackFast','Morning Burger'],
                    lunch:['Tuna toast','Ramen','Lunch Burger'],
                    dinner:['Parsino','Steak and vegetables','Veggie Meat'],
                }
                },
            ])
}