import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  control = new FormControl();

  showModal() {
    //  delay a bit to show off Cypress
    setTimeout(() => {
      this.showForm = true
    }, 1000);
  }
}
