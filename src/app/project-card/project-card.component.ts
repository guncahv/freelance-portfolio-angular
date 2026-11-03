import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

/**
 * Карточка одного проекта.
 * Данные приходят от родителя (ProjectListComponent) через привязку свойства [project].
 */
@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  /** Проект для отображения */
  @Input({ required: true }) project!: Project;

  /** Состояние Favorite: Off / On */
  isFavorite = false;

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
