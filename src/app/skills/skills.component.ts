import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
  {
    icon: 'fa-brands fa-html5',
    title: 'HTML5',
    description: 'Semantic & Accessible Markup',
    color: '#E34F26'
  },
  {
    icon: 'fa-brands fa-css3-alt',
    title: 'CSS3',
    description: 'Responsive & Modern Styling',
    color: '#1572B6'
  },
  {
    icon: 'fa-brands fa-bootstrap',
    title: 'Bootstrap',
    description: 'Responsive UI Framework',
    color: '#7952B3'
  },
  {
    icon: 'fa-brands fa-js',
    title: 'JavaScript',
    description: 'Interactive Web Development',
    color: '#F7DF1E'
  },
  {
    icon: 'fa-solid fa-code',
    title: 'TypeScript',
    description: 'Strongly Typed JavaScript',
    color: '#3178C6'
  },
  {
    icon: 'fa-brands fa-angular',
    title: 'Angular',
    description: 'Single Page Applications',
    color: '#DD0031'
  },
  {
    icon: 'fa-solid fa-server',
    title: 'NestJS',
    description: 'REST API Development',
    color: '#E0234E'
  },
  {
    icon: 'fa-solid fa-database',
    title: 'MySQL',
    description: 'Relational Database',
    color: '#00758F'
  }
];

}
