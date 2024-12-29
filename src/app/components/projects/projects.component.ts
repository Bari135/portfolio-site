import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    { name: "Project 1", description: "Description 1", image: "/project1.jpg", link: "https://www.google.com" },
    { name: "Project 2", description: "Description 2", image: "/project2.jpg", link: "https://www.google.com" },
    { name: "Project 3", description: "Description 3", image: "/project3.jpg", link: "https://www.google.com" },
  ]
}
