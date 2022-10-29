import { Component, OnInit } from '@angular/core';
import { VehilcesService } from '../vehilces.service';

@Component({
  selector: 'app-vehilces',
  templateUrl: './vehilces.component.html',
  styleUrls: ['./vehilces.component.css']
})
export class VehilcesComponent implements OnInit {
  // public column: string="";
  // public order: string="";
  public vehilces:any=[];
  public fil:string="";

  constructor(private _vehilcesService:VehilcesService) {
    this._vehilcesService.getVehilce().subscribe(
      (data:any)=>{
        this.vehilces=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }

    )
   }

  ngOnInit(): void {
  }
  page(pno:number){
    this._vehilcesService.getPageAccounts(pno).subscribe(
      (data:any)=>{
        this.vehilces=data;

      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  filter(){
    this._vehilcesService.getFiltedAccounts(this.fil).subscribe(
      (data:any)=>{
        this.vehilces=data;

      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  sort(column:string,order:string){
    this._vehilcesService.getSortAccounts( column,order).subscribe(
      (data:any)=>{
        
      }
    )
  }




}
