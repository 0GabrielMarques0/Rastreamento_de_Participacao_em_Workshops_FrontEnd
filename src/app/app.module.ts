import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule, DatePipe } from '@angular/common';
import { AtaListComponent } from './componentes/ata-list/ata-list.component';
import { WorkshopDetailsComponent } from './componentes/workshop-details/workshop-details.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    AtaListComponent,
    WorkshopDetailsComponent,
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
