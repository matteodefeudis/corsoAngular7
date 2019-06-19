import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ElencoProdottoComponent } from './elenco-prodotto/elenco-prodotto.component';
import { FormProdottoComponent } from './form-prodotto/form-prodotto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Route[] = [
  {path:'login', component: LoginComponent},
  {path:'main', component: MainComponent, children:
    [{path:'form-prodotto', component: FormProdottoComponent},
    {path:'elenco-prodotto', component: ElencoProdottoComponent}
    ]
  },
  {path:'**', redirectTo:'login'}
];

@NgModule({
  declarations: [LoginComponent, MainComponent, ElencoProdottoComponent, FormProdottoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
