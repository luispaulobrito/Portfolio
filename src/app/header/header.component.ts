import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scrolled = false;
  isMenuOpen = false;

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Altera a cor do menu com base na posição de rolagem atualizando a propriedade 'scrolled'
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrolled = scrollPosition > 50;
  }

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
}
