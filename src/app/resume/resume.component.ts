import { Language } from './../models/language';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  courses: Array<Course> = [
    {
      name: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais',
      year: '2022-2023',
    },
    {
      name: 'Pós-Graduação em Gestão de Tecnologia da Informação',
      institution: '•	Faculdade Focus',
      year: '2021-2022',
    },
    {
      name: 'MBA em Gestão de Marketing Digital',
      institution: 'Faculdade Dom Bosco',
      year: '2016-2017',
    },
    {
      name: 'Licenciatura em Computação',
      institution: 'Universidade Estadual da Paraíba',
      year: '2007-2012',
    },
  ];
  experiences: Array<Experience> = [
    {
      name: 'Digitador',
      institution: 'Prefeitura Municipal de Boa Ventura',
      year: '2021 - presente',
    },
    {
      name: 'Professor de Informática',
      institution: 'SENAI',
      year: '2012-2012',
    },
    {
      name: 'Estagiário de Professor de Informática',
      institution: 'Universidade Federal de Campina Grande',
      year: '2011-2011',
    },
    {
      name: 'Estagiário em TI',
      institution: 'Ministério Público da Paraíba',
      year: '2010-2011',
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
