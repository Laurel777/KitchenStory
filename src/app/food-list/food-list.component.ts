import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Food } from '../food';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods:Food[];
  result:any;
  constructor(private userService:UserService ) { }

  ngOnInit(): void {
    this.getFood();
  }

  private getFood()
  {
    this.userService.getFoodlist().subscribe(data=>{
      this.foods=data;
    });
  }
 private getFoodbyid(id:number)
 {
  this.userService.getfoodbyid(id).subscribe(data=>{
    this.result=data;
    alert("The selected food item is   "+this.result.dishname);
  })
 }

 deletebyid(id:number)
 {
this.userService.deleteFood(id).subscribe(data=>{
  alert("Food item is deleted");
  console.log(data);
});
 }
}
