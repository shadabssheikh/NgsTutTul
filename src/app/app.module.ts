import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NewsKomComponent } from './news-kom/news-kom.component';
import { CartItemKomComponent } from './cart-item-kom/cart-item-kom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListCrudKomComponent } from './list-crud-kom/list-crud-kom.component';
import { ProductsKomComponent } from './products-kom/products-kom.component';
import { CartKomComponent } from './cart-kom/cart-kom.component';
import { HomKomComponent } from './hom-kom/hom-kom.component';
import { ProdDetailKomComponent } from './prod-detail-kom/prod-detail-kom.component';
import { ProdAddKomComponent } from './prod-add-kom/prod-add-kom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const AppNavNryVar: Routes = [
  { path: '', component: HomKomComponent },
  { path: 'prod', component: ProductsKomComponent },
  { path: 'prod/:name', component: ProdDetailKomComponent },
  { path: 'cart', component: CartKomComponent},
  { path: 'listcr', component: ListCrudKomComponent},
  { path: 'add-prod', component: ProdAddKomComponent},

  
];

@NgModule({
  declarations: [
    AppComponent,
    NewsKomComponent,
    CartItemKomComponent,
    ListCrudKomComponent,
    ProductsKomComponent,
    CartKomComponent,
    HomKomComponent,
    ProdDetailKomComponent,
    ProdAddKomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(AppNavNryVar),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
