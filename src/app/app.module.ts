import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
    declarations: [
      AppComponent,
      // adicione outros componentes, se houver
    ],
    imports: [
      BrowserModule,
      // adicione outros módulos, se necessário
    ],
    providers: [
      ControleEditoraService,
      ControleLivrosService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  