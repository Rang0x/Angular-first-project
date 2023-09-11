import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  showN:boolean = false;
  showA:boolean = false;
  showE:boolean = false;
  showP:boolean = false;
  e:any;
  constructor(private title: Title){}
  ngOnInit(): void {
    this.title.setTitle('Contact');
  }
  show(e:any){
    if(e.target.value.length > 0){
      switch(e.target.id)
      {
        case 'name': this.showN = true;
        break;
        case 'age': this.showA = true;
        break;
        case 'email': this.showE = true;
        break;
        case 'password': this.showP = true;
        break;
      }
    }
    else{
      switch(e.target.id)
      {
        case 'name': this.showN = false;
        break;
        case 'age': this.showA = false;
        break;
        case 'email': this.showE = false;
        break;
        case 'password': this.showP = false;
        break;
      }
    }
  }
}
