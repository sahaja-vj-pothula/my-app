import { Component, OnInit } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
  public mails:any=[];

  constructor(private _mailsServices:MailsService) { 
    this._mailsServices.getmail().subscribe(
      (data:any)=>{
        this.mails=data;

      },
      (err:any)=>{
        alert("internal server error")
      }
      
    )

  }

  ngOnInit(): void {
  }

}
