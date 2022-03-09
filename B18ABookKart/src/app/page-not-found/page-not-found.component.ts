import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public urlName!: string; 
  constructor(private router:Router) { }
  ngOnInit() {
this.urlName=this.router.url;
console.log(this.router.url);
   
  }
  
  btnClick (){
    this.router.navigateByUrl('/home');
}

  
}
