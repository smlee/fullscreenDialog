import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { FullscreenDialogComponent } from './dialog/fullscreen-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      checkbox: [false]
    });
  }

  openDialog() {
    this.dialog.open(FullscreenDialogComponent, {
      panelClass: 'fullscreen'
    });
  }

  handleCheckbox(eventValue) {
    console.log(eventValue);
    console.log(this.formGroup.controls.checkbox.value);
    this.formGroup.controls.checkbox.patchValue(eventValue);
    this.formGroup.markAsDirty();
  }

}
