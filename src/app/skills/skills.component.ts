import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  firstColumnTechnologies: string[] = ['Angular', 'TypeScript','JavaScript','HTML', 'CSS'];
  secondColumnTechnologies: string[] = ['Java', 'SpringBoot', 'PostgreSQL', 'MySQL'];
  thirdColumnTechnologies: string[] = ['Git', 'Github', 'Docker', 'Scrum'];
 
}
