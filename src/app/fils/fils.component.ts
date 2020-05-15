import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('Fils component : La color de mon pere est',this.filsProperty);
  }
  sendEvent() {
    this.sendRequestToData.emit(
      ` Teplai balanss le frik :'( `
    );
  }
}
