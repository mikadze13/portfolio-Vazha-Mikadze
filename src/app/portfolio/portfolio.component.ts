import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  imglink:string='https://zingy-nougat-c8777e.netlify.app/images/mountain1x.png'
  ngOnInit(): void {
  }

}
