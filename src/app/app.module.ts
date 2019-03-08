import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ComparisonComponent,
    ProductDetailsComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
