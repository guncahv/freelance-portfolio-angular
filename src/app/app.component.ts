import { Component } from '@angular/core';

/** Корневой компонент: собирает страницу из шапки, первого экрана и списка проектов */
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aykhan.dev';

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
