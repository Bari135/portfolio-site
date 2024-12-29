import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: false,
  
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent{
  @Input() name: string = '';
  @Input() icon: string = '';
}

