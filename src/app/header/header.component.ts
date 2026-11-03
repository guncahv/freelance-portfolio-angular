import { Component, EventEmitter, Output } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

/**
 * Шапка сайта (Header Navigation из ЛР №17):
 * логотип, меню с иконками, статус занятости, аватар и кнопка «Связаться».
 */
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /** Событие для родителя: нажата кнопка «Связаться» */
  @Output() contactClick = new EventEmitter<void>();

  readonly navItems: NavItem[] = [
    { id: 'home', label: 'Главная', icon: 'assets/icons/icon-home.svg' },
    { id: 'projects', label: 'Проекты', icon: 'assets/icons/icon-projects.svg' },
    { id: 'about', label: 'Обо мне', icon: 'assets/icons/icon-about.svg' },
    { id: 'contact', label: 'Контакты', icon: 'assets/icons/icon-contact.svg' },
  ];

  /** Активный пункт меню */
  activeId = 'home';

  select(item: NavItem): void {
    this.activeId = item.id;
  }
}
