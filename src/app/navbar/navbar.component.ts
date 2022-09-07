import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isShow:boolean=true
  hide:boolean=false
  isActive!:boolean
  ngOnInit(): void {
  }
  show(){
    this.isShow=false
    this.isActive=true 
    this.hide=true
  }
  close(){
    this.isShow=true
    this.hide=false
    this.isActive=false
  }
}
