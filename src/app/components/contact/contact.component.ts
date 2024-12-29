import { Component } from '@angular/core';
import { SocialBox } from '../../models/socialbox.model';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  links: SocialBox[] = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/bari-bezner/", icon: "/linkedin.png" },
    { name: "GitHub", link: "https://github.com/bari135", icon: "/github.jpeg" },
    { name: "Email", link: "mailto:baribezner1@gmail.com", icon: "/gmail.png" },
    { name: "cv", link: "https://bari135.github.io/cv-redirect/", icon: "/cv.png" },
  ]
}
