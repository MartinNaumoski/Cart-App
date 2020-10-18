import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile-service/mobile.service';
import { CartService } from '../services/cart-service/cart.service'
import { isNumber } from 'util';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Mobile } from 'src/app/interfaces/mobile.interface';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mobileData: Mobile[] = [];
  allItemsCount: number;

  constructor(private mobileService: MobileService,
    private cartService: CartService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.mobileData = this.mobileService.getMobileData();
    this.allItemsCount = this.cartService.getTotalNumberOfItems();
  }

  addToCart(mobile: Mobile) {
    let quantity = (<HTMLInputElement>document.getElementById(mobile.name)).value;
    this.cartService.addSelectedItem(mobile, parseInt(quantity));
    this.allItemsCount = this.cartService.getTotalNumberOfItems();
  }

  showCart() {
    this.dialog.open(ModalComponent).afterClosed().subscribe(() => {
        this.allItemsCount = this.cartService.getTotalNumberOfItems();
      });
  }

}
