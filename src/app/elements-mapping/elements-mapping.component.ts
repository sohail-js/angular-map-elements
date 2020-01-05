import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'elements-mapping',
  templateUrl: './elements-mapping.component.html',
  styleUrls: ['./elements-mapping.component.scss']
})
export class ElementsMappingComponent {

  title = 'mapper';
  activeItem = -1;
  mousePosition = {
    x: 0,
    y: 0
  }

  @ViewChild("lhs1", { static: false }) divView: ElementRef;
  @ViewChild("mapper", { static: false }) mapperEleRef: ElementRef;

  @Input() lhs;
  @Input() rhs;

  @Output() output = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showArrows = true;
    }, 100);
    console.log(this.divView);
    this.mapperEleRef.nativeElement.onmousemove = (event) => {
      // console.log(event);
      this.mousePosition = {
        x: event.clientX,
        y: event.clientY
      }
    }


    // this.lhs.forEach((item, i) => {
    //   item.mapTo = this.lhs.length - i;
    // })
  }

  changeActiveItem(newItem) {
    console.log("Clicked");

    // Update mapTo of current activeItem
    if (this.activeItem >= 0)
      this.lhs[this.activeItem].mapTo = undefined;

    // update activeItem
    this.activeItem = newItem;

    // Update mapTo of new activeItem
    this.lhs[this.activeItem].mapTo = 0;

    this.output.emit(this.lhs);
  }

  getPosition(id) {

    if (id.startsWith('r') && this.activeItem >= 0 && id.endsWith("0")) {
      // let activeItem = this.lhs.filter(x => x.id == this.activeItem)[0];
      // console.log(activeItem);
      // if (activeItem.mapTo == id) {
      return this.mousePosition;
      // }
    }


    let ele = document.querySelector("#" + id + " .bullet") as HTMLElement;
    // console.log(ele);
    // console.log(ele.childNodes[1].);

    let position = ele.getBoundingClientRect();


    return {
      x: position.left + (position.width / 2),
      y: position.top + (position.height / 2),
    }
  }

  showArrows = false;

  // getLine = (id) => {
  //   let mapTo = this.lhs.filter(x => x.id == id)[0].mapTo;
  //   if (mapTo) {
  //     let source = this.getPosition("lhs-" + id);
  //     let destination = this.getPosition("rhs-" + mapTo);
  //     return this.sanitizer.bypassSecurityTrustHtml(
  //       `
  //     <svg width="100%" height="100%">
  //       <line x1="${source.x}" y1="${source.y}" x2="${destination.x}" y2="${destination.y}" stroke="black" />
  //     </svg>
  //   `)
  //   }
  //   return "";
  // }

}
