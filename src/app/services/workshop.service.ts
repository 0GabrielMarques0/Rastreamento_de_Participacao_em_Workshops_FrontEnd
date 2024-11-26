import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ata } from '../models/ata.model';
import { Workshop } from '../models/workshop.model';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private atas: Ata[] = [
    {
      id: 1,
      workshop: {
        id: 1,
        nome: 'Angular',
        dataRealizacao: new Date('2023-03-15'),
        descricao: 'Introdução ao Angular framework',
        colaboradores: [
          { id: 1, nome: 'João Silva' },
          { id: 2, nome: 'Maria Santos' }
        ]
      },
      colaboradores: [
        { id: 1, nome: 'João Silva' },
        { id: 2, nome: 'Maria Santos' }
      ]
    },
    {
      id: 2,
      workshop: {
        id: 2,
        nome: 'Fundamentos de React ',
        dataRealizacao: new Date('2023-06-20'),
        descricao: 'Conceitos básicos de React',
        colaboradores: [
          { id: 2, nome: 'Maria Santos' },
          { id: 3, nome: 'Pedro Oliveira' }
        ]
      },
      colaboradores: [
        { id: 2, nome: 'Maria Santos' },
        { id: 3, nome: 'Pedro Oliveira' }
      ]
    },
    {
      id: 3,
      workshop: {
        id: 3,
        nome: 'Introdução ao Vue.js',
        dataRealizacao: new Date('2024-08-06'),
        descricao: 'Conceitos básicos Vue.js',
        colaboradores: [
          { id: 4, nome: 'Alexandre Ferreira' },
          { id: 5, nome: 'Katarina Barros' }
        ]
      },
      colaboradores: [
        { id: 4, nome: 'Alexandre Ferreira' },
        { id: 5, nome: 'Katarina Barros' }
      ]
    }
  ];

  private atasSubject = new BehaviorSubject<Ata[]>(this.atas);

  getAtas(): Observable<Ata[]> {
    return this.atasSubject.asObservable();
  }

  getWorkshopById(id: number): Workshop | undefined {
    return this.atas.find(ata => ata.workshop.id === id)?.workshop;
  }

  filterAtas(colaboradorNome: string, workshopNome: string, data: string): void {
    const filteredAtas = this.atas.filter(ata => {
      const colaboradorMatch = colaboradorNome
        ? ata.colaboradores.some(c => c.nome.toLowerCase().includes(colaboradorNome.toLowerCase()))
        : true;

      const workshopMatch = workshopNome
        ? ata.workshop.nome.toLowerCase().includes(workshopNome.toLowerCase())
        : true;

      const dataMatch = data
        ? this.formatDate(new Date(ata.workshop.dataRealizacao)) === data
        : true;

      return colaboradorMatch && workshopMatch && dataMatch;
    });

    this.atasSubject.next(filteredAtas);
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
