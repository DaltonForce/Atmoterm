import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderHeightDirective } from './_directives/header-height.directive';
import { FooterHeightDirective } from './_directives/footer-height.directive';
import { CardComponent } from './card/card.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByCategoryPipe } from './_pipes/filter-by-category.pipe';
import { DarkerColorDirective } from './_directives/darker-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PanelComponent,
    HeaderHeightDirective,
    FooterHeightDirective,
    CardComponent,
    MoreInfoComponent,
    ModalComponent,
    FilterByCategoryPipe,
    DarkerColorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'moreInfo', component: MoreInfoComponent},
      {path: '', component: HomeComponent}
    ]),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
