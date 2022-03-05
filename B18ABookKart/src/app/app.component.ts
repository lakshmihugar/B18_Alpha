import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B18ABookKart';

  constructor(private data : DataService) { }

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


