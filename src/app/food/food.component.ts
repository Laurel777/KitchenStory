import { Component, OnInit } from '@angular/core';
import { FoodimageService } from '../foodimage.service';
import { Food1 } from '../food1';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
foods:Food1[]=[];
  constructor(private fc:FoodimageService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.router.params.subscribe(params=>{
if(params.searchItem)
this.foods=this.fc.getAll().filter(food => food.dishname.toLowerCase().includes(params.searchItem.toLowerCase()))
else
this.foods=this.fc.getAll();
   })
 
  }
  
}
