import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: false,
  
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  @Input() name!: string;
  @Input() link!: string;
  @Input() icon!: string;

}

