import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  // الافضل اعمل سيرفيس للمشريع دي واعمل انترفيس واعرضهم ب ابي اي

  projects = [
  {
    image: 'assets/images/projects1.png',
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with Angular & Bootstrap.',
    technologies: ['Angular', 'Bootstrap', 'TypeScript']
  },
  {
    image: 'assets/images/projects2.png',
    title: 'E-Commerce',
    description: 'Responsive online shopping website.',
    technologies: ['Angular', 'CSS', 'Firebase']
  },
  {
    image: 'assets/images/projects3.png',
    title: 'Dashboard',
    description: 'Admin dashboard with charts and tables.',
    technologies: ['Angular', 'Bootstrap', 'Chart.js']
  },
  {
    image: 'assets/images/projects4.png',
    title: 'ToDo App',
    description: 'Task management application.',
    technologies: ['Angular', 'TypeScript']
  },
  {
    image: 'assets/images/projects5.png',
    title: 'Weather App',
    description: 'Weather forecast using API.',
    technologies: ['Angular', 'API']
  },
  {
    image: 'assets/images/projects6.png',
    title: 'Movie App',
    description: 'Movie search application using REST API.',
    technologies: ['Angular', 'Bootstrap']
  }
];

}
