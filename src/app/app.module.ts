import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { YearModule } from './year/year.module';
import { NavModule } from './nav/nav.module';
import { YearComponent } from './year/year.component';

const ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'year/:year', component: YearComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    YearModule,
    NavModule,
    RouterModule.forRoot(ROUTES),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
