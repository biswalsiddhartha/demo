import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {}

  
cars=['bmw','merc','audi'];//array of cars
 arrayLength=0;
 storage="";
 Demo(){
this.arrayLength=this.cars.length;
document.getElementById('length').innerHTML=this.arrayLength.toString();

}

 Add(){
  alert("add is clicked")

  // if(<HTMLInputElement>document.getElementById('car')).value==''||document.getElementById('car').value==null){
   
  //  alert('sorry cant be addded');
  // }
  // else{
  //   cars[arrayLength]=document.getElementById('car').value;
  // }



}


 Display(){
   alert("display is clicked");
  document.getElementById('result').innerHTML="";
for(var i=0;i<this.cars.length;++i){
this.storage=this.storage+this.cars[i]+"<br>"
}
document.getElementById('result').innerHTML=this.storage;
}
}
