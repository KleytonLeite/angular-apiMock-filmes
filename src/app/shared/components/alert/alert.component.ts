import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alert = {
  title: 'Success!',
  description: 'Seu Regitro foi alvo com sucesso!',
  btnSuccess: 'OK!',
  btnCancel:'Cancel',
  corBtnSuccess: 'accent',
  corBtnCancel: 'warn',
  possuirBtnFechar: false,

  } as Alert;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert,
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.corBtnSuccess = this.data.corBtnSuccess || this.alert.corBtnSuccess;
      this.alert.corBtnCancel = this.data.corBtnCancel || this.alert.corBtnCancel;
      this.alert.possuirBtnFechar = this.data.possuirBtnFechar || this.alert.possuirBtnFechar;
    }
  }

}
