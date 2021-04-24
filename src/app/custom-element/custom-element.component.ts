import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.scss']
})
export class CustomElementComponent implements OnInit {

  userInputArray: Array<any> = [];
  userInput: string;
  showError: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onKeypressEvent(event) {
    console.log(event);
    this.showError = false;
    if (event.target.value && (event.key == ',' || event.key.toLowerCase() == 'enter')) {
      this.userInputArray.push(event.target.value);
      this.userInput = null;
      event.preventDefault();
    } else if (!event.target.value && (event.key == ',' || event.key.toLowerCase() == 'enter')) {
      this.showError = true;
      event.preventDefault();
    }
  }

  deleteTag(index) {
    this.userInputArray.splice(index, 1);
  }

}
