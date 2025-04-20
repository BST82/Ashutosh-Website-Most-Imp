import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links = [
    { path: 'about', label: 'About' },
    { path: 'privacy-policy', label: 'Privacy Policy' },
    { path: 'licensing', label: 'Licensing' },
    { path: 'contact', label: 'Contact' }
  ];

  socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/18n5iqPigZ/', 
      iconClass: 'fa-brands fa-facebook' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/meand-mypandit-a6108a351?', 
      iconClass: 'fa-brands fa-linkedin' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/meandmypandit?igsh=MXVvZjJqOGs3djg1MA==', 
      iconClass: 'fa-brands fa-instagram' 
    },
    // { 
    //   name: 'WhatsApp', 
    //   url: 'https://wa.me/yourphonenumber', 
    //   iconClass: 'fa-brands fa-whatsapp' 
    // }
  ];

  // Font Awesome icons


  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}