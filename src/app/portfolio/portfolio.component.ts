import { Portfolio } from './../models/portfolio';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  portfolios: Array<Portfolio> = [
    {
      screen: '../../assets/images/explorador-orion-mobile.gif',
      name: 'Explorador Orion',
      description:
        'Explorador Orion é uma aplicação responsiva em Angular que consome uma API em Node e visa fornecer acesso a dados da meteorologia de Marte. Foi desenvolvida em uma equipe de 7 pessoas (3 devs front, 2 back e 2 POs) utilizando SCRUM como metodologia ágil. A aplicação possui sistema de login para se obter acesso aos dados meteorológicos, uma newsletter para que o usuário cadastrado possa receber artigos diários relacionados ao assunto e uma comunidade no discord foi agregada ao projeto',
      github: 'https://github.com/luispaulobrito/Orion-Bootcamp',
      page: '',
    },
    {
      screen: '../../assets/images/projeto5-clientes-servicos.png',
      name: 'Projeto Clientes e Serviços Prestados',
      description:
        'Clientes e Serviços Prestados é uma RestFUL API desenvolvida com Spring Boot que consome uma aplicação Angular, construída durante o curso Angular 9 + Spring Boot 2.2: Fullstack Completo e Atualizado, para representar um sistema que realiza as operações de CRUD num banco de dados H2.',
      github:
        'https://github.com/luispaulobrito/Projeto-Clientes-e-Servicos-Prestados',
      page: '',
    },
    {
      screen: '../../assets/images/projeto-agenda-de-contato.png',
      name: 'Agenda de Contatos',
      description:
        'Agenda de Contatos é uma aplicação web e mobile construída durante o curso Angular 9 + Spring Boot 2.2: Fullstack Completo e Atualizado da Udemy para representar um sistema que representa uma agenda virtual.',
      github:
        'https://github.com/luispaulobrito/Fullstack-Angular-e-SpringBoot/tree/main/02%20-%20Projeto%20Agenda',
      page: '',
    },
    {
      screen: '../../assets/images/projeto2-imc.png',
      name: 'Calculadora IMC',
      description:
        'Calculadora IMC é uma aplicação web e mobile construída para apresentar a avaliação do imc de uma pessoa de acordo com os dados fornecidos.',
      github:
        'https://github.com/luispaulobrito/Projetos-Pessoais/tree/main/04%20-%20calculadora-imc',
      page: 'https://calculadoraimclp.netlify.app/',
    },
    {
      screen: '../../assets/images/projeto1-calculadora.png',
      name: 'Calculadora',
      description:
        'Aplicação web e mobile construída para representar uma calculadora online. Nesse projeto foi aprendido: como estruturar um layout utilizando HTML, CSS e JavaScript.',
      github:
        'https://github.com/luispaulobrito/Projetos-Pessoais/tree/main/02%20-%20calculadora-sofisticada-js',
      page: 'https://calculadoralp.netlify.app/',
    },

    {
      screen: '../../assets/images/projeto3-formulario-com-validacao.png',
      name: 'Formulário com Validação',
      description:
        'Form Challenge é uma aplicação web que simula um formulário. Nesse projeto foi utilizado HTML, CSS e JavaScript. No CSS foi utilizado Flex e com o JavaScript foi realizada a validação do formulário.',
      github:
        'https://github.com/luispaulobrito/Curso-Dev-Quest/tree/main/22%20-%20desafio-js-intermediario-3',
      page: 'https://formchallengejs.netlify.app/',
    },
    {
      screen: '../../assets/images/juros-compostos.jpg',
      name: 'Calculadora de Juros Compostos',
      description:
        'Calculadora de Juros Compostos é uma aplicação responsiva construída utilizando Angular e Bootstrap com o objetivo de calcular os juros correspondentes aos valores dados pelo usuário com o passar de anos ou meses.',
      github:
        'https://github.com/luispaulobrito/AngularLoiane/tree/main/exercicio-spa/calculadora-juros-compostos',
      page: 'https://calculadora-juroscompostos.netlify.app/',
    },
    {
      screen: '../../assets/images/projeto-apigithub.gif',
      name: 'Request API Github',
      description:
        'Request API Github é uma aplicação web e mobile construída, acompanhando vídeo aulas do Dev Quest, que faz a requisição de algumas informações de usuários do github (nome, foto, repositórios, eventos etc) após digitar o nome de usuário.',
      github:
        'https://github.com/luispaulobrito/Curso-Dev-Quest/tree/main/25%20-%20projeto-fetch-github-api-main',
      page: 'https://requestapigithub.netlify.app/',
    },
  ];
}
