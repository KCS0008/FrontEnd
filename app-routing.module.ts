import { CountryComponent } from './country/country.component';
import { ProjectChartComponent } from './project-chart/project-chart.component';
import { QuestionsComponent } from './questions/questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'questions',component:QuestionsComponent},
{path:'project-chart',component:ProjectChartComponent},
{path:'country',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
