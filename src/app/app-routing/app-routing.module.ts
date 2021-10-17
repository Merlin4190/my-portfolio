import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MeComponent } from '../components/me/me.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { ReachComponent } from '../components/reach/reach.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'me',
    component: MeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'reach',
    component: ReachComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
