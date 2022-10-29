import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  public name: string="";
  public age:number=0;
  public company:string="";
  public package:number=0;


  public employees:any=[
    {name:'sahaja',age:20,company:'tcs',package:8},
    {name:'vijay',age:31,company:'hcl',package:32}
  ]

  constructor() { }

  ngOnInit(): void {
  }
register(){
  if(this.name!="" && this.age!=0 && this.company!="" && this.package!=0){

  
   let employee=
   {
    name:this.name,
    age:this.age,
    company:this.company,
    package:this.package

   }
   this.employees.push(employee);

   this.name="";
   this.age=0;
   this.company="";
   this.package=0;
   alert("Registred Succefully!!!");
  }
  else
  {
    alert("enter:name,age,company,package");
  }

}
delete(i:number){
  this.employees.splice(i,1);
}

}
