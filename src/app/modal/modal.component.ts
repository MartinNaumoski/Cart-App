import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CartService} from '../services/cart-service/cart.service'
import { Mobile } from 'src/app/interfaces/mobile.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  selectedItems: Mobile[] = [];
  totalCost: number;

  constructor(private cartService: CartService,
              private dialogRef: MatDialogRef<ModalComponent> ) { }

  ngOnInit() {
    this.selectedItems = this.cartService.getSelectedItems();
    this.totalCost = this.cartService.getTotalCost();
  }

  removeItem(item){ 
    this.cartService.removeItem(item);
    this.selectedItems = this.cartService.getSelectedItems();
    this.totalCost = this.cartService.getTotalCost();
  }
  closeModal(){
    this.dialogRef.close();
  }


}
