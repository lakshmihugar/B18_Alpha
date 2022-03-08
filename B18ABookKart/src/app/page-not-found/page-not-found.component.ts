import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent  {

  constructor(private router:Router) { }
  
  btnClick (){
    this.router.navigateByUrl('/home');
}

 
  
}
