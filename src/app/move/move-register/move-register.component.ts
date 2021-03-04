import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-move-register',
  templateUrl: './move-register.component.html',
  styleUrls: ['./move-register.component.scss']
})
export class MoveRegisterComponent implements OnInit {

  register: FormGroup;

  constructor(private fb: FormBuilder) { }

  get f() {
    return this.register.controls;
  }

  ngOnInit() {

    this.register = this.fb.group({
     titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
     urlFoto: ['', [Validators.minLength(10)]],
     dtLancamento: ['', [Validators.required]],
     descricao: [''],
     note: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
     urkIMDb: ['', [Validators.minLength(10)]],
     genero: ['',[Validators.required]],

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
