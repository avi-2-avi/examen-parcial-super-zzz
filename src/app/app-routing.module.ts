import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VfClientListComponent } from './components/vf-client-list/vf-client-list.component';
import { VfClientUpdateComponent } from './components/vf-client-update/vf-client-update.component';
import { VfClientViewComponent } from './components/vf-client-view/vf-client-view.component';

const routes: Routes = [
  { path: 'vfClient', component: VfClientListComponent },
  { path: 'vfClient/vfView/:id', component: VfClientViewComponent },
  { path: 'vfClient/vfUpdate/:id', component: VfClientUpdateComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
