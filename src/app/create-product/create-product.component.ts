import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public productForm:FormGroup=new FormGroup(
  {
    name: new FormControl(),
    price: new FormControl(),
    expiry: new FormControl(),
    address: new FormGroup({
      HNO: new FormControl(),
      city: new FormControl(),
      pin: new FormControl()
    }
    ),
    comments: new FormArray([]),
    payments: new FormControl(),
    upis: new FormControl(),
    cards: new FormControl()



  }
  )

  get commentsFormArray(){
    return this.productForm.get('comments')as FormArray;
  }
  add(){
    this.commentsFormArray.push(
      new FormGroup({
        message: new FormControl(),
        time: new FormControl()
      })
    )
  }
  delete(a:number){
    this.commentsFormArray.removeAt(a);
  }

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.productForm);
  }

}
