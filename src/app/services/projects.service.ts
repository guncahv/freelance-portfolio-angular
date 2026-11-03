import { Injectable } from '@angular/core';
import { Project } from '../models/project';

/**
 * Сервис данных проектов.
 * providedIn: 'root' — один экземпляр (синглтон) на всё приложение.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  /** Имитационные (mock) данные */
  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'Маркетплейс handmade-товаров',
      description: 'Каталог, корзина и кабинет мастера. Загрузка страниц стала быстрее на 40 %.',
      imageUrl: 'assets/images/project-marketplace.svg',
      tags: ['React', 'TypeScript', 'Node.js'],
      meta: '2026 · фриланс',
    },
    {
      id: 2,
      title: 'CRM для автосервиса',
      description: 'Запись клиентов, учёт запчастей и уведомления в Telegram для сети из 5 станций.',
      imageUrl: 'assets/images/project-crm.svg',
      tags: ['Vue', 'Laravel', 'MySQL'],
      meta: '2026 · фриланс',
    },
    {
      id: 3,
      title: 'Лендинг финтех-стартапа',
      description: 'Адаптивный лендинг с калькулятором вклада. Конверсия в заявку выросла до 7,8 %.',
      imageUrl: 'assets/images/project-fintech.svg',
      tags: ['Next.js', 'Tailwind', 'Figma'],
      meta: '2025 · фриланс',
    },
    {
      id: 4,
      title: 'Сайт-портфолио фотографа',
      description: 'Галерея работ с фильтрами по жанрам и онлайн-запись на фотосессию.',
      imageUrl: 'assets/images/project-portfolio.svg',
      tags: ['Angular', 'TypeScript', 'Firebase'],
      meta: '2025 · фриланс',
    },
  ];

  /** Возвращает массив проектов */
  getData(): Project[] {
    return this.projects;
  }
}
