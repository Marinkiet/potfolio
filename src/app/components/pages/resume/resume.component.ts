import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  doc:String =  "../../../../assets/THUPI M-RESUME.pdf";

  ngOnInit(): void {
  }

}
