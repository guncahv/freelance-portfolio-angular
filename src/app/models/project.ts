/** Модель проекта портфолио */
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  /** Технологии проекта (отображаются тегами на карточке) */
  tags?: string[];
  /** Подпись: год и формат работы */
  meta?: string;
}
