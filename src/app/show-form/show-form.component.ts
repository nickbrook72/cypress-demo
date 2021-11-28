import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FishModel} from '../services/fish.model';
import {FishService} from '../services/fish.service';
import {delay} from 'rxjs';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})
export class ShowFormComponent {

  showForm = false;
  control = new FormControl();
  loading = false;
  form: FormGroup;
  fish: FishModel[] = [];

  constructor(private service: FishService,
              private fb: FormBuilder) {
    this.form = fb.group({
      name: [''],
      fish: ['']
    })
  }

  showModal() {
    //  delay a bit to show off Cypress
    this.loading = true;
    this.service.getFish().pipe(
      delay(1000)
    ).subscribe( (fish) => {
      this.loading = false;
      this.showForm = true;
      this.fish = fish;
    })

  }

  displayFish(fish: FishModel): string {
    return fish.name;
  }

  saveForm() {

  }

}
