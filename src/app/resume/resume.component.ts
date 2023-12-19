import { Language } from './../models/language';
import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  courses: Array<Course> = [
    {
      name: 'Licenciatura em Computação',
      institution: 'Universidade Estadual da Paraíba',
      year: '2007-2012',
    },
    {
      name: 'Licenciatura em Computação',
      institution: 'Universidade Estadual da Paraíba',
      year: '2007-2012',
    },
    {
      name: 'Licenciatura em Computação',
      institution: 'Universidade Estadual da Paraíba',
      year: '2007-2012',
    },
  ];
  languages: Array<Language> = [
    {
      flag: '../../assets/images/estados-unidos.png',
      name: 'Inglês',
      level: 'Avançado',
    },
    {
      flag: '../../assets/images/espanha.png',
      name: 'Espanhol',
      level: 'Intermediário',
    },
    {
      flag: '../../assets/images/brasil.png',
      name: 'Português',
      level: 'Nativo',
    },
  ];
}
