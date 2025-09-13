import { Component } from '@angular/core';
import {
  MatDialogModule,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-my-popup',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './my-popup.component.html',
  styleUrl: './my-popup.component.scss'
})
export class MyPopupComponent {

}
