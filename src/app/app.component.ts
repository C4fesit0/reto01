import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cities : string[] = ['Buenos Aires','Madrir','Amsterdam','Londres']
  name!:string;
  selection!:string;

  title:string= 'Dia 9 del reto';
  url:string = 'www.google.com';

  addNewCity(city:string):void{
    this.cities.push(city);
  }


  onCityClicked(city:string): void{
    this.selection = city;
  }

  onClear():void{
    this.selection="";
  }
}
