import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FullscreenDialogComponent } from './dialog/fullscreen-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(FullscreenDialogComponent, {
      panelClass: 'fullscreen'
    });
  }

}
