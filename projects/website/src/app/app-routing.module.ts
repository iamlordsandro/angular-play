import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentTemplateComponent } from './components/templates/content/content-template.component';
import { LandingTemplateComponent } from './components/templates/landing/landing-template.component';
import { SiteTemplateComponent } from './components/templates/site/site-template.component';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { PostPageComponent } from './components/pages/post-page/post-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingTemplateComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'home', component: HomePageComponent }
    ]
  },
  {
    path: '',
    component: ContentTemplateComponent,
    children: [
      { path: 'about', component: AboutPageComponent }
    ]
  },
  {
    path: '',
    component: SiteTemplateComponent,
    children: [
      { path: 'blog', component: BlogPageComponent },
      { path: 'post/:id', component: PostPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: '**', component: NotFoundPageComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
