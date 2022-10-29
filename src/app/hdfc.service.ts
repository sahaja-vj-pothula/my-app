import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class HdfcService {
  public balance:number=0;

  constructor() { }
  deposite(amount:number){
    this.balance=this.balance+amount;

  }
  withdraw(amount:number){
    this.balance=this.balance-amount;

  }
  getbalance(){
    return this.balance;

  }
}
