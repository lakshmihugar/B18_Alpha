import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  enum=1000;
  

  constructor(private snackBar: MatSnackBar) { }

  itemAddedWish() {
    this.snackBar.open('Item added to wishlist', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds*this.enum

    })
  }

  itemRemovedWish() {
    this.snackBar.open('Item removed from wishlist', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }

  wishClear() {
    this.snackBar.open('Wishlist cleared!!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds *this.enum
    })
  }


  itemAddedCart() {
    this.snackBar.open('Item added to cart', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }

  itemIncCart() {
    this.snackBar.open('One item added to Cart', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }

  itemDecCart() {
    this.snackBar.open('One item removed from Cart', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }


  productDeleted() {
    this.snackBar.open('Product removed from Cart', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }

  cartClear() {
    this.snackBar.open('Cart Cleared!!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }

  orderPlace() {
    this.snackBar.open('Order Placed Succussfully', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * this.enum
    })
  }
}

