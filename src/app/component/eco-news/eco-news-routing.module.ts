import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcoNewsComponent } from './eco-news.component';

const ecoNewsRoutes: Routes = [
 {path: '', component: EcoNewsComponent}
];

@NgModule({
 imports: [RouterModule.forChild(ecoNewsRoutes)],
 exports: [RouterModule]
})

export class EcoNewsRoutingModule {}
