import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Workshop } from '../../models/workshop.model';
import { WorkshopService } from '../../services/workshop.service';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-workshop-details',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.css'],
  imports: [CommonModule]
})
export class WorkshopDetailsComponent implements OnChanges {
  @Input() workshopId: number | null = null;
  workshop: Workshop | undefined;

  constructor(private workshopService: WorkshopService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['workshopId'] && this.workshopId) {
      this.workshop = this.workshopService.getWorkshopById(this.workshopId);
    }
  }
}
