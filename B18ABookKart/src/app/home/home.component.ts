import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  constructor(private data : DataService) { }
  ngOnInit(): void {
   
  }

  wishList(){
    this.data.itemAddedWish();
  }

  cartitem(){
    this.data.itemAddedCart();
  }

  removed(){
    this.data.itemRemovedWish();
  }

  clearWish(){
    this.data.wishClear();
  }

  increasecartItem(){
    this.data.itemIncCart();
  }

  decCartItem(){
    this.data.itemDecCart();
  }

  cartItemdelete(){
    this.data.productDeleted();
  }

  clearCart(){
    this.data.cartClear();
  }

  placeOrder(){
    this.data.orderPlace();
  }
}


