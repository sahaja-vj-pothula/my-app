import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  public n:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
   
  }
  square(){
    this.result=this.n *this.n
  }
  cube(){
    this.result=this.n *this.n *this.n
  
  }

}
