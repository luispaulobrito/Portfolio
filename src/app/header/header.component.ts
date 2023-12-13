import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  /**
   * Role a página suavemente até a seção especificada pelo ID.
   *
   * @param sectionId O ID da seção para a qual rolar.
   * @returns void
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica a posição de rolagem
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Define a condição para a mudança de cor
    this.scrolled = scrollPosition > 50; // por exemplo, mude a cor após rolar 50 pixels
  }
}
