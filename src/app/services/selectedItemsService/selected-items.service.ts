import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemsService {

  constructor() { }
  selectedItems: Array<{name: '', price: 0,number:0}> = []; 
  addSelectedItem(selectedItems){
    this.selectedItems = selectedItems;
  }
  getSelectedItems(){
    return this.selectedItems;
  }
  removeItem(selectedItems){
    this.selectedItems = selectedItems;
  }

}
