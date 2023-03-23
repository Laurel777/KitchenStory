import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Food1 } from '../food1';
import { FoodimageService } from '../foodimage.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food:Food1;
  constructor(private activatedroute:ActivatedRoute,
    private foodimageservice:FoodimageService,
    private cartservice:CartService,
    private router:Router) {
      activatedroute.params.subscribe((params) =>{
        if(params['id'])
        this.food=foodimageservice.getFoodbyid(params['id'])
      })
     }

  ngOnInit(): void {
  }

  addtoCart()
  {
    this.cartservice.addTocart(this.food);
    this.router.navigateByUrl('/cartpage')
  }
}
