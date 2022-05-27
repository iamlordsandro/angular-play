import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebComponentsModule } from 'web-components';

import { MadeInComponent } from './components/atoms/made-in/made-in.component';
import { WebsiteVersionComponent } from './components/atoms/website-version/website-version.component';

import { ErrorStateComponent } from './components/molecules/error-state/error-state.component';
import { NavigationBarComponent } from './components/molecules/navigation-bar/navigation-bar.component';
import { PostCardComponent } from './components/molecules/post-card/post-card.component';
import { PostsArchiveComponent } from './components/molecules/posts-archive/posts-archive.component';
import { PostsListComponent } from './components/molecules/posts-list/posts-list.component';
import { ProjectCardComponent } from './components/molecules/project-card/project-card.component';

import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { PostPageComponent } from './components/pages/post-page/post-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';

import { ContentTemplateComponent } from './components/templates/content/content-template.component';
import { LandingTemplateComponent } from './components/templates/landing/landing-template.component';
import { SiteTemplateComponent } from './components/templates/site/site-template.component';

import { ErrorInterceptorService } from './services/error-interceptor.service';
import { BlogService } from './services/blog.service';
import { GitHubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteVersionComponent,
    MadeInComponent,
    ContactPageComponent,
    ContentTemplateComponent,
    LandingTemplateComponent,
    SiteTemplateComponent,
    PostPageComponent,
    PostCardComponent,
    ProjectCardComponent,
    PostsArchiveComponent,
    PostsListComponent,
    ErrorStateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebComponentsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    BlogService,
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
