
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;
  @ViewChildren('filterBtn') filterButtons!: QueryList<ElementRef>;

  selectedFilter: string = 'all';

  filterProjects(filter: string): void {
    this.selectedFilter = filter;

    // Filtrer les cartes de projet
    this.projectCards.forEach(card => {
      const category = card.nativeElement.getAttribute('data-category');
      const cardElement = card.nativeElement;

      // Réinitialiser la classe
      cardElement.classList.remove('hidden');

      // Masquer si le filtre ne correspond pas
      if (filter !== 'all' && category !== filter) {
        cardElement.classList.add('hidden');
      }
    });

    // Mettre à jour l'état actif des boutons
    this.filterButtons.forEach(btn => {
      const btnElement = btn.nativeElement;
      btnElement.classList.remove('active');
      if (btnElement.getAttribute('data-filter') === filter) {
        btnElement.classList.add('active');
      }
    });
  }
}