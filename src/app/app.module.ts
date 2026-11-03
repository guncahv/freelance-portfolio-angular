import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';

/**
 * Корневой модуль приложения.
 * declarations — компоненты модуля, imports — подключаемые модули,
 * bootstrap — компонент, с которого запускается приложение.
 */
@NgModule({
  declarations: [AppComponent, HeaderComponent, ProjectCardComponent, ProjectListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
