import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
 
  public l:number=0;
  public b:number=0;
  public result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result =this.l * this.b;
  }
  perimeter(){
    this.result =2*(this.l+this.b);
  }

}
