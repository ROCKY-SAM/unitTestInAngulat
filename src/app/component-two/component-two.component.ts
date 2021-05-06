import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  value = 0;
message: string;

increment() {
  if (this.value < 15) {
    this.value += 1;
    this.message = '';
  } else {
    this.message = 'Maximum reached!';
  }
}
decrement() {
  if (this.value > 0) {
    this.value -= 1;
    this.message = '';
  } else {
    this.message = 'Minimum reached!';
  }
}

  ngOnInit(): void {
  }



}
