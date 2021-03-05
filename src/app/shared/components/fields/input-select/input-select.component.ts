import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() options: Array<string>;



  constructor(
    public validate: ValidateFieldsService,
  ) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

  ngOnInit(): void {
  }

}
