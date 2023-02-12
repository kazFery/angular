import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: 'list', component: ListingComponent },
  //   {
  //     path: 'about',
  //     component: AboutComponent,
  //   },
  //   { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
