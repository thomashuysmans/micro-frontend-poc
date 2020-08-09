import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HelloWorldComponent implements OnInit {


  @Input() name: string;

  @Output() MessageEvent: EventEmitter<string> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }


  onClick() : void {
    this.MessageEvent.emit("This is a messsage from the Angular component");
  }

}
