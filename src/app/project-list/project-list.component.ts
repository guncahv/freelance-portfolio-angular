import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from '../services/projects.service';

/**
 * Список проектов.
 * Получает данные из ProjectsService (внедрение зависимостей через конструктор)
 * и выводит для каждого элемента компонент-карточку.
 */
@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  /** Локальное свойство с данными из сервиса */
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getData();
  }

  trackById(_index: number, project: Project): number {
    return project.id;
  }
}
