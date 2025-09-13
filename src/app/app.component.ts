import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./headerAndfooter/header/header.component";
import { FooterComponent } from "./headerAndfooter/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meAndMyPandit';
}



// import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { MatDialog } from '@angular/material/dialog';
// import { MyPopupComponent } from './my-popup/my-popup.component';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './headerAndfooter/header/header.component';
// import { FooterComponent } from './headerAndfooter/footer/footer.component';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     RouterLink,
//     CommonModule,
//     HeaderComponent,
//     FooterComponent,
//     MyPopupComponent,
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
//   encapsulation: ViewEncapsulation.None 
// })
// export class AppComponent implements OnInit {
//   title = 'meAndMyPandit';
//   showMainContent = false;

//   constructor(
//     private dialog: MatDialog,
//     @Inject(PLATFORM_ID) private platformId: Object // <-- Inject platform
//   ) {}

//   ngOnInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       // Run only in the browser
//     const dialogRef = this.dialog.open(MyPopupComponent, {
//   width: '100vw',
//   height: '100vh',
//   panelClass: 'full-screen-dialog', // custom class for full screen styling
//   disableClose: true
// });



//       setTimeout(() => {
//         dialogRef.close();
//         this.showMainContent = true;
//       }, 3000);
//     }
//   }
// }
