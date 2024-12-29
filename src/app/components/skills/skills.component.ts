import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: false,
  
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'Javascript', icon: '/icons/js.png' },
    { name: 'C++', icon: '/icons/cpp.png' },
    { name: 'Angular', icon: '/icons/angular.png' },
    { name: 'REST APIs', icon: '/icons/rest.png' },
    { name: 'Express.js', icon: '/icons/express.png' },
    { name: 'ASP.NET', icon: '/icons/asp.net.png' },
    { name: 'MongoDB', icon: '/icons/mongoDB.png' },
    { name: 'Apache Kafka', icon: '/icons/kafka.png' },
    { name: 'Docker', icon: '/icons/Docker.png' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'GitHub', icon: '/icons/github.jpeg' },
    { name: 'TensorFlow', icon: '/icons/TensorFlow.png' },
    { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'Linux', icon: '/icons/linux.jpeg' },
    { name: 'Containerization', icon: '/icons/Containerization.jpeg' },
    { name: 'Agile', icon: '/icons/agile.png' },
  
  ];
 
}
