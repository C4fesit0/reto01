import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent {

  @Input() label!:string;
  @Input() className:string ='btn-primary';

  @Output() newItemAdded =  new EventEmitter<string>();

  onAddNewItem(item:string):void{
    console.log('Item ->',item);
    this.newItemAdded.emit(item);
  }



}
