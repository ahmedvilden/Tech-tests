import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { CommonModule } from '@angular/common';  
import { routing }        from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { RegisterEntrepriseComponent } from './register-entreprise/register-entreprise.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { TestsComponent } from './tests/tests.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsService } from './services';
import { HistoriquetestComponent } from './historiquetest/historiquetest.component';
import { ScoreComponent } from './score/score.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailtestComponent } from './detailtest/detailtest.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';



@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule,
      routing,
      RouterModule,
      FormsModule
      
    
  ],
  declarations: [
      AppComponent,
      AlertComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      ConfirmEmailComponent,
      RegisterEntrepriseComponent,
      ProfileComponent,
      CategoriesComponent,
      TestsComponent,
      QuizComponent,
      HistoriquetestComponent,
      ScoreComponent,
      DashboardComponent,
      DetailtestComponent,
      DashboardadminComponent
     
  ],
  providers: [
      { provide: QuestionsService},
     // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

      // provider used to create fake backend
      //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }