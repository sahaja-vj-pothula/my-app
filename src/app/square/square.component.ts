import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  public a:number=0;
  public result:number=0;


  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result= this.a * this.a;
  }
  perimeter(){
    this.result =4*this.a;
  }

}
