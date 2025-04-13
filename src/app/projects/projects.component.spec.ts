// src/app/projects/projects.component.ts
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;
  @ViewChildren('filterBtn') filterButtons!: QueryList<ElementRef>;

  selectedFilter: string = 'all';

  filterProjects(filter: string): void {
    this.selectedFilter = filter;

    this.projectCards.forEach(card => {
      const category = card.nativeElement.getAttribute('data-category');
      const cardElement = card.nativeElement;

      cardElement.classList.remove('hidden');
      if (filter !== 'all' && category !== filter) {
        cardElement.classList.add('hidden');
      }
    });

    this.filterButtons.forEach(btn => {
      const btnElement = btn.nativeElement;
      btnElement.classList.remove('active');
      if (btnElement.getAttribute('data-filter') === filter) {
        btnElement.classList.add('active');
      }
    });
  }
}