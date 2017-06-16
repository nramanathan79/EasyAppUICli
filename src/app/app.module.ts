import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ColumnFilterComponent } from './column-filter/column-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DataTableComponent,
    ColumnFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
