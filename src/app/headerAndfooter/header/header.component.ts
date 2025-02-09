import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '../../features/features/features.module';

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
  activeLink: string | null = null;

  headerLinks = [
    { label: 'Home', link: '/' },
    {
      label: 'City',
      subMenu: [
        { label: 'Bangalore', link: '/cities/bangalore' },
        { label: 'Banarash', link: '/cities/banarash' },
        { label: 'Delhi', link: '/cities/delhi' },
        { label: 'Noida', link: '/cities/noida' },
        { label: 'Goa', link: '/cities/goa' },
        { label: 'Lucknow', link: '/cities/lucknow' },
        { label: 'Ahmedabad', link: '/cities/ahmedabad' },
        { label: 'Pune', link: '/cities/pune' },
        { label: 'Mumbai', link: '/cities/mumbai' },
        { label: 'Hydrabad', link: '/cities/hydrabad' },
      ]
    },
    { label: 'Services', link: '/services' },
    // { label: 'Book-Pandit', link: '/book-pandit' },
    { label: 'Blog', link: '/blog' },
    { label: 'E-Puja', link: '/e-puja' },
    { label: 'Contact', link: '/contact' },
    { label: 'Special Dates', link: '/special-dates' }
  ];

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.toggleDropdown(); // Close dropdown after selecting a submenu item
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownButton = document.querySelector('.dropdown-button');

    // Check if the clicked element is outside the dropdown and button
    if (dropdownMenu && !dropdownMenu.contains(clickedElement) && !dropdownButton?.contains(clickedElement)) {
      this.isDropdownOpen = false;
    }
  }
}

