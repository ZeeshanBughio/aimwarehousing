import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  constructor(
    public router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  changeClassForActiveDeactive(){
    this.isActive = !this.isActive;
    if(this.isActive){
      this.document.body.classList.add('menu-active');
    } else{
      this.document.body.classList.remove('menu-active');
    }
  }

}
