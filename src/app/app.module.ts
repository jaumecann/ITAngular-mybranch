import { AlumnoService } from 'src/app/services/alumno.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChartsComponent } from './components/global/charts/charts.component';
import { TablesComponent } from './components/global/tables/tables.component';
import { ReactiveFormsModule } from '@angular/forms';

// graficos
import { ChartsModule } from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ResetPasswordRequestComponent } from './components/login-components/reset-password-request/reset-password-request.component';
import { RouterModule } from '@angular/router';
import { NewPasswordResetComponent } from './components/login-components/new-password-reset/new-password-reset.component';

import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { RevisionComponent } from './components/revision/revision.component';
import { StudentSearchComponent } from './components/global/student-search/student-search.component';

import { GenrepieComponent } from './components/stadistics/genrepie/genrepie.component';
import { PeoplepieComponent } from './components/stadistics/peoplepie/peoplepie.component';
import { ClassroomViewComponent } from './components/classroom-view/classroom-view.component';
import { ClassroomComponent } from './components/classroom/classroom.component';


// Services
import { StudentSeatService } from './services/student-seat.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LayoutComponent } from './components/layout/layout.component';
import { StudentPopupComponent } from './components/classroom/student-popup/student-popup.component';
import { StudentPositionComponent } from './components/classroom/student-position/student-position.component';

import { Select2Module } from 'ng2-select2';
import { StudentComponent } from './components/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ChartsComponent,
    TablesComponent,
    ResetPasswordRequestComponent,
    NewPasswordResetComponent,
    StadisticsComponent,
    ClassroomComponent,
    ClassroomViewComponent,
    RevisionComponent,
    GenrepieComponent,
    PeoplepieComponent,
    LayoutComponent,
    StudentPopupComponent,
    StudentPositionComponent,
    StudentSearchComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    APP_ROUTING,
    Select2Module,
    TooltipModule.forRoot()
  ],
  providers: [
    StudentSeatService,
    AlumnoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
