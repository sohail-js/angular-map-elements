import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lhs = []; rhs = [];
  output;
  ngOnInit() {
    for (let i = 1; i <= 7; i++) {
      this.lhs.push({
        id: i,
        title: "Object " + i,
      })
      this.rhs.push({
        id: i,
        title: "Element " + i
      })
    }
  }
}
