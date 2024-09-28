import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowPagesBasedOnUserComponent } from '../../components/show-pages-based-on-user/show-pages-based-on-user.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  isNavbarOpen = false;
  isDropdownOpen = false;


  // Define header links
  headerLinks = [
    { label: 'Home', link: '/', isActive: true },
    { label: 'City', subMenu: [
        { label: 'Bangalore', link: '/cities/bangalore' },
        { label: 'Banarash', link: '/cities/banarash' },
        { label: 'Delhi', link: '/cities/delhi' },
        { label: 'Noida', link: '/cities/noida' },
        { label: 'Goa', link: '/cities/goa' }
      ] 
    },
    { label: 'Services', link: '/services' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Contact', link: '/contact' }
  ];

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
