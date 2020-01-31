import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acronym-list',
  templateUrl: './acronym-list.component.html',
  styleUrls: ['./acronym-list.component.css']
})
export class AcronymListComponent implements OnInit {

  Acronyms: String[] = [];
  AcronymsIndex: number = 1;
  AcronymLatest: string = '';
  testString: string = 'Testing here.';

  constructor() { }

  test(testing: string) : void{
    this.testString = "Test Successful!";
  }

  add(acronym: string) : void {
    this.Acronyms[0] = "Initialization Test";
    this.AcronymLatest = acronym;
    this.Acronyms[this.AcronymsIndex] = acronym;
    this.AcronymsIndex += 1;
  }

  ngOnInit() {
  }

}
