import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

title = 'Success!';
description = 'Seu Regitro foi alvo com sucesso!';
btnSuccess = 'OK!';
btnCancel ='Cancel';
corBtn = 'primary';
possuirBtnFechar = false;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.title = this.data.title || this.title;
      this.description = this.data.description || this.description;
      this.btnSuccess = this.data.btnSuccess || this.btnSuccess;
      this.btnCancel = this.data.btnCancel || this.btnCancel;
      this.corBtn = this.data,this.corBtn || this.corBtn;
      this.possuirBtnFechar = this.data.possuirBtnFechar || this.possuirBtnFechar;
    }
  }

}
