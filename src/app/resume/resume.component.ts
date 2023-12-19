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
      name: 'MBA em Gestão de Marketing Digital',
      institution: 'Faculdade Dom Bosco',
      year: '2016-2017',
    },
    {
      name: 'Pós-Graduação em Gestão de Tecnologia da Informação',
      institution: '•	Faculdade Focus',
      year: '2021-2022',
    },
    {
      name: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais',
      year: '2022-2023',
    }
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
