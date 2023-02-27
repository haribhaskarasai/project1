import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent implements OnInit {
  animal: string="";
  name: string="";

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result=> {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
