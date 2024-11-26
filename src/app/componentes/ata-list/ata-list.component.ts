import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../../services/workshop.service';
import { Ata } from '../../models/ata.model';
import { Observable } from 'rxjs';
import { WorkshopDetailsComponent } from "../workshop-details/workshop-details.component";
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-ata-list',
  templateUrl: './ata-list.component.html',
  styleUrls: ['./ata-list.component.css'],
  imports: [CommonModule, FormsModule, WorkshopDetailsComponent]
})
export class AtaListComponent implements OnInit {
  atas$: Observable<Ata[]>;
  colaboradorFilter = '';
  workshopFilter = '';
  dataFilter = '';
  selectedWorkshop: number | null = null;

  constructor(private workshopService: WorkshopService) {
    this.atas$ = this.workshopService.getAtas();
  }

  ngOnInit(): void {}

  applyFilters(): void {
    const formattedDate = this.dataFilter ? this.formatDate(new Date(this.dataFilter)) : '';
    this.workshopService.filterAtas(this.colaboradorFilter, this.workshopFilter, formattedDate);
  }
  private formatDate(date: Date): string {
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const day = adjustedDate.getDate().toString().padStart(2, '0');
    const month = (adjustedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = adjustedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  selectWorkshop(workshopId: number): void {
    this.selectedWorkshop = workshopId;
  }

  clearFilters(): void {
    this.colaboradorFilter = '';
    this.workshopFilter = '';
    this.dataFilter = '';
    this.applyFilters();
  }
}
