import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Código Limpo: Habilidades Práticas do Agile Software', resumo: 'Tenha boas práticas para escrever um código limpo e eficiente', autores: ['Robert C. Martin'] },
    { codigo: 2, codEditora: 2, titulo: 'Você Não Sabe JS', resumo: ' Uma série que explora em profundidade o JavaScript, desde os fundamentos até tópicos avançados.', autores: ['Kyle Simpson'] },
    { codigo: 3, codEditora: 3, titulo: 'Como Programar', resumo: 'Um guia completo para aprender Java, com exercícios e exemplos práticos.', autores: ['Paul Deitel', 'Harvey Deitel'] },

  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}