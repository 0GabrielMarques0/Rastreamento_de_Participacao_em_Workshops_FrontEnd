import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtaListComponent } from "./componentes/ata-list/ata-list.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AtaListComponent]
})
export class AppComponent {
  title = 'workshop-tracker';
}
