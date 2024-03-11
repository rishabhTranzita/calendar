import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {ComponentComponent} from "./component.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ComponentComponent,
  ],
  exports: [ComponentComponent],
})
export class ComponentModule { }
