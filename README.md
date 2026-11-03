# aykhan.dev — портфолио фриланс-разработчика (Angular)

Лабораторная работа №20 «Разработка структуры веб-приложения на Angular с использованием модулей, компонентов и сервисов».
Вариант 1 — «Портфолио фриланс-разработчика».

Выполнил: Рахманкулов А., группа 310101.

## Стек

- Angular 19 (модульная архитектура `@NgModule`, компоненты `@Component`, сервис `@Injectable`)
- TypeScript
- Angular CLI
- Стили компонентов в `*.component.css`, дизайн-токены ЛР №17 в `src/styles.css`

## Запуск проекта

Требуется установленный [Node.js](https://nodejs.org/) (версия 18.19 или новее).

```bash
git clone https://github.com/guncahv/freelance-portfolio-angular.git
cd freelance-portfolio-angular
npm install
npm start
```

После запуска откройте в браузере http://localhost:4200.

Сборка production-версии:

```bash
npm run build
```

Готовая сборка появится в папке `dist/freelance-portfolio-angular/browser`.

## Архитектура

```
src/
├── app/
│   ├── app.module.ts                 # корневой модуль AppModule
│   ├── app.component.*               # корневой компонент (страница)
│   ├── header/                       # HeaderComponent — шапка сайта
│   ├── project-list/                 # ProjectListComponent — список проектов
│   ├── project-card/                 # ProjectCardComponent — карточка проекта
│   ├── services/projects.service.ts  # ProjectsService — mock-данные проектов
│   └── models/project.ts             # интерфейс Project
├── assets/
│   ├── icons/                        # логотип и SVG-иконки из ЛР №17
│   └── images/                       # фото специалиста и обложки проектов
├── index.html
├── main.ts
└── styles.css                        # глобальные стили и дизайн-токены
```

| Сущность | Назначение |
|---|---|
| `AppModule` | Корневой модуль: объявляет все компоненты, подключает `BrowserModule`, запускает `AppComponent` |
| `ProjectsService` | `@Injectable({ providedIn: 'root' })`, метод `getData()` возвращает массив из 4 проектов (`id`, `title`, `description`, `imageUrl`) |
| `ProjectListComponent` | Получает сервис через конструктор, в `ngOnInit` загружает данные, выводит карточки через `*ngFor` |
| `ProjectCardComponent` | Принимает проект через `@Input() project`, отображает его; состояние «избранное» |
| `HeaderComponent` | Логотип, меню с иконками (активный пункт), статус, аватар, кнопка «Связаться» |

## Как создавался проект

```bash
ng new freelance-portfolio-angular --no-standalone --style=css --ssr=false --routing=false
ng generate component header
ng generate component project-card
ng generate component project-list
ng generate service services/projects
ng generate interface models/project
```
