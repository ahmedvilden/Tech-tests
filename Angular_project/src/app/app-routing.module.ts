import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProfileComponent } from './profile';
import { ConfirmEmailComponent } from './confirm-email';
import { AuthGuard } from './guards';
import { RegisterEntrepriseComponent } from './register-entreprise/register-entreprise.component';
import { CategoriesComponent } from './categories/categories.component';
import { TestsComponent } from './tests/tests.component';
import { QuizComponent } from './quiz/quiz.component';
import { HistoriquetestComponent } from './historiquetest/historiquetest.component';
import { ScoreComponent } from './score/score.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailtestComponent } from './detailtest/detailtest.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'categorie', component: CategoriesComponent },
    { path: 'categorie/:id', component: TestsComponent },
    { path: 'registerentreprise', component: RegisterEntrepriseComponent },
    { path: 'quiz/:id', component: QuizComponent },
    { path: 'utilisateur_test/:id', component: HistoriquetestComponent },
    { path: 'score/:id', component: ScoreComponent },
    { path: 'dashboard/:id', component: DashboardComponent },
    { path: 'test/:id', component: DetailtestComponent },
    { path: 'dashboardadmin', component: DashboardadminComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);