import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  public accounts:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public id :string="";


  constructor( private _bankService:BankService,private router:Router) {
    this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
        this._bankService.getAccount(this.id ).subscribe(
          (data:any)=>{
            this.id=data.id;
          }
        )

      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

   }
  
   
  ngOnInit(): void {
  }
  filter(){
    this._bankService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }
  pagenation(page:number){
    this._bankService.getPagedAccounts(page).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }
  sort(){
    this._bankService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }
  create(data:any){
    this._bankService.createAccount(data).subscribe(
      (data:any)=>{
        this.accounts=data;
 
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  update(id:string, data:any){
    this._bankService.updateAccount(id, data).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("internal server error");
      }

    )

  }
  delete(id:string){
    this._bankService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted succefully");
        location.reload();

      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }
  view(id:string){
    this.router.navigateByUrl('/dashboard/bank-details/'+id);
  }


}
