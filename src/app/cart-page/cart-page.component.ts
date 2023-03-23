import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { FoodimageService } from '../foodimage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
  constructor(private cartservice:CartService,
    private router:Router
    ) {
     
    this.setCart();
  }

  ngOnInit(): void {
  }
setCart()
{this.cart=this.cartservice.getCart()}

removeFromcart(cartItem:CartItem)
{this.cartservice.removefromcart(cartItem.food.id);
  this.setCart();
}

changeQuantity(cartItem:CartItem, quantityinstring:string)
{const quantity=parseInt(quantityinstring);
  this.cartservice.changeQuantity(cartItem.food.id, quantity);
  this.setCart();

}
checkout()
{
  alert("Your total bill is "+this.cart.totalprice);
 this.router.navigate(['/payment']);
}
}
