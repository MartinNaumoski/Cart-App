import { Injectable } from '@angular/core';
import { Mobile } from 'src/app/interfaces/mobile.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  selectedItems: Mobile[];  
  
  constructor() { 
    const localStorageSelectedItems = localStorage.getItem('selectedItems');
    this.selectedItems = localStorageSelectedItems ? JSON.parse(localStorageSelectedItems) : [];
  }

  addSelectedItem(item: Mobile, quantity: number ) { 
    let index = this.selectedItems.findIndex(it => it.id == item.id);
    index != -1 ?  this.selectedItems[index].quantity += quantity : this.selectedItems.push({...item, quantity});
    this.refreshLocalStorage();
  }

  getSelectedItems(): Mobile[] { 
    return this.selectedItems;
  }

  removeItem(item: Mobile) {
    this.selectedItems = this.selectedItems.filter(it => it.id !== item.id);
    this.refreshLocalStorage();
  }

  getTotalCost(): number {
    const allItemsPrice: number[] = this.selectedItems.map(it => it.quantity * it.price);
    return this.selectedItems.length > 0 ? allItemsPrice.reduce((acc, price) => acc += price) : 0;
  }

  getTotalNumberOfItems(): number {
    const allItemsQuantity: number[] = this.selectedItems.map(it => it.quantity);
    return this.selectedItems.length > 0 ? allItemsQuantity.reduce((acc, quantity) => acc += quantity) : 0;
  }

  private refreshLocalStorage() {
    localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
  }

}
