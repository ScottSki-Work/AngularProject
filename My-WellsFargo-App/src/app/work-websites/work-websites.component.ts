import { Component, OnInit } from '@angular/core';
import sampleJson from '../../assets/sampleJson.json';

@Component({
  selector: 'app-work-websites',
  templateUrl: './work-websites.component.html',
  styleUrls: ['./work-websites.component.css']
})
export class WorkWebsitesComponent implements OnInit {

  testFile: String;

  constructor() { }

  displayFile(){
    this.testFile = JSON.stringify(sampleJson);
    console.log(sampleJson);
  } 

  ngOnInit() {
  }

}
