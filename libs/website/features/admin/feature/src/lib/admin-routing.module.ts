import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./admin-pages/admin-pages.module').then(
            (module) => module.AdminPagesModule
          ),
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        //canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-home/admin-home.module').then(
            (module) => module.AdminHomeModule
          ),
      },
      {
        path: 'reviews',
        canActivate: [AuthGuard],
        //canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-reviews/admin-reviews.module').then(
            (module) => module.AdminReviewsModule
          ),
      },
      {
        path: 'photo-of-the-week',
        canActivate: [AuthGuard],
        //canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import(
            './admin-photo-of-the-week/admin-photo-of-the-week.module'
          ).then((module) => module.AdminPhotoOfTheWeekModule),
      },
      {
        path: 'events',
        canActivate: [AuthGuard],
        // canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-events/admin-events.module').then(
            (module) => module.AdminEventsModule
          ),
      },
      {
        path: 'destinations',
        canActivate: [AuthGuard],
        // canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-destinations/admin-destinations.module').then(
            (module) => module.AdminDestinationsModule
          ),
      },
      {
        path: 'videos',
        canActivate: [AuthGuard],
        // canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-videos/admin-videos.module').then(
            (module) => module.AdminVideosModule
          ),
      },
      {
        path: 'sitemap',
        canActivate: [AuthGuard],
        // canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-sitemap/admin-sitemap.module').then(
            (module) => module.AdminSitemapModule
          ),
      },
      {
        path: 'settings',
        canActivate: [AuthGuard],
        // canDeactivate: [SaveChangesGuard],
        loadChildren: () =>
          import('./admin-settings/admin-settings.module').then(
            (module) => module.AdminSettingsModule
          ),
      },
      { path: '**', redirectTo: '/admin' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
