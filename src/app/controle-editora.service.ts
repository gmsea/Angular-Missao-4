import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    {codEditora: 1, nome: 'Prentice Hall'},
    {codEditora: 2, nome: 'O Reilly Media'},
    {codEditora: 3, nome: 'Pearson'},
    {codEditora: 4, nome: 'Manning Publications'},
    {codEditora: 5, nome: 'Packt Publishing'},
    {codEditora: 6, nome: 'Wiley'},
    {codEditora: 7, nome: 'Apress'},
    {codEditora: 8, nome: 'No Starch Press'},
    {codEditora: 9, nome: 'Addison-Wesley'},
    {codEditora: 10, nome: 'McGraw-Hill Education'},
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditoras(codEditora: number): string | undefined {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }

  constructor() { }
}
