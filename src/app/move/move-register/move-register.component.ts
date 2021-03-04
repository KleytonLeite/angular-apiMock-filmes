import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';

@Component({
  selector: 'app-move-register',
  templateUrl: './move-register.component.html',
  styleUrls: ['./move-register.component.scss']
})
export class MoveRegisterComponent implements OnInit {

  register: FormGroup;

  constructor(
    public validate: ValidateFieldsService,
    private fb: FormBuilder) { }

  get f() {
    return this.register.controls;
  }

  ngOnInit() {

    this.register = this.fb.group({
     title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
     urlPhotograph: ['', [Validators.minLength(10)]],
     dtLaunch: ['', [Validators.required]],
     description: [''],
     note: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
     urkIMDb: ['', [Validators.minLength(10)]],
     genre: ['',[Validators.required]],

  });

}

onSubmit(): void {
  this.register.markAllAsTouched();
  if (this.register.invalid) {
    return;
  }
alert('funcionando!!!\n\n' + JSON.stringify(this.register.value, null, 4));

}

reloadForm(): void {
this.register.reset();
}

}
