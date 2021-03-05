import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;


  constructor(
    public validate: ValidateFieldsService,
  ) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

  ngOnInit(): void {
  }

}
