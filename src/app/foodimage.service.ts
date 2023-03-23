import { Injectable } from '@angular/core';
import { Food1 } from './food1';

@Injectable({
  providedIn: 'root'
})
export class FoodimageService {

  constructor() { }
   getFoodbyid(id:number):Food1
   {
return this.getAll().find(food => food.id == id)!
   }
  getAll():Food1[]
  {
    return[
           {
            id:1,
    dishname:'Chicken Burger',
  dishcategory:'Non-veg',
  dishprice:350,
  imageUrl:'/assets/Screenshot (133).png'
           },{
            id:2,
            dishname:'Veg Cheese Pizza',
          dishcategory:'Veg',
          dishprice:450,
          imageUrl:'/assets/Screenshot (134).png'
           },
           {
            id:3,
    dishname:'Masala Dosa',
  dishcategory:'Veg',
  dishprice:250,
  imageUrl:'/assets/Screenshot (135).png'
           },{
            id:4,
    dishname:'Chicken Momos',
  dishcategory:'Non-veg',
  dishprice:175,
  imageUrl:'/assets/Screenshot (136).png'
           },{
            id:5,
    dishname:'Pav Bhaji',
  dishcategory:'Veg',
  dishprice:200,
  imageUrl:'/assets/Screenshot (137).png'
           },{
            id:6,
    dishname:'Vada Pav',
  dishcategory:'Veg',
  dishprice:50,
  imageUrl:'/assets/Screenshot (138).png'
           }
    
    ];
  }
}
