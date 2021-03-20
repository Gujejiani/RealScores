import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: 'tennis', component: MainComponent },
  { path: 'basketball', component: MainComponent, pathMatch: 'full' },
  { path: 'hockey', component: MainComponent },
  { path: 'handball', component: MainComponent },
  { path: 'volleyball', component: MainComponent },
  // { path: '', redirectTo: '/soccer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
