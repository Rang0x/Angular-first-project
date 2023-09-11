import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  imgShow:boolean = false;
  ourSrc:string = '';

  constructor(private title:Title){}
  ngOnInit(): void{
    this.title.setTitle('Portfolio');
  }
  imgSources: string[] = ['/assets/img/port1.png', '/assets/img/port2.png', '/assets/img/port3.png' ,'/assets/img/port1.png', '/assets/img/port2.png', '/assets/img/port3.png']
  showImg(img:any){
    this.ourSrc = img;
    this.imgShow = !this.imgShow;
  }
  closeImg(){
    this.imgShow = !this.imgShow;
  }
}
