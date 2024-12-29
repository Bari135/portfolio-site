import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
      sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - 100 && 
          scrollPosition < sectionTop + sectionHeight - 100) {
        const id = section.id;
        this.navigateToRoute(id);
      }
    });
  }
  private navigateToRoute(sectionId: string) {
   let route = '/';
   switch(sectionId) {
     case 'component1':
       route = 'home';
       break;
     case 'component2':
       route = 'projects';
       break;
     case 'component3':
       route = 'skills';
       break;
     // Add more cases for other sections
   }
  
   
   // Navigate without triggering a scroll
   this.router.navigate([route], { 
     skipLocationChange: false,
     replaceUrl: true
   });
 }
}
