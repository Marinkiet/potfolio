import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  today=Date.now();
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.today = Date.now();
    },60000)
  }
  toggleDarkTheme(){
    document.body.classList.toggle('dark--theme');
  }


}
