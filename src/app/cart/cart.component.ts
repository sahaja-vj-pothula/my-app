import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public name:string="";
  public price:number=0;
  public quantity:number=0;

  public products:any=[
    {name:'realmephone',price:16000,quantity:1},
    {name:'iphone',price:350000,quantity:2}
  ]


  constructor() { }

  ngOnInit(): void {
  }
addToCart(){
  if(this.name!=""&&this.price!=0&&this.quantity!=0){

    let product={
      name:this.name,
      price:this.price,
      quantity:this.quantity
    }
    this.products.push(product);
    this.name="";
    this.price=0;
    this.quantity=0;

    alert("added succefully!!!")
  }
  else{
    alert("coundn't add to the cart")
  }
}
delete(i:number){
  this.products.splice(i,1);  

}
}
