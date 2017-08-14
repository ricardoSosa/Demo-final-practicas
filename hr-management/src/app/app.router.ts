import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { SearchComponent } from './content/search/search.component';
import { SkillsListComponent } from './content/skills/list/skills-list.component';
import { SkillComponent } from './content/skills/read/skill.component';

import { ListComponent } from './content/developers/list/list.component';
import { ReadComponent } from './content/developers/read/read.component';

import { LoginComponent } from './session/login/login.component';
import { LogoutComponent } from './session/logout/logout.component';

import { TestComponent } from './content/test/test.component';

export const router: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'developers', component: ListComponent },
    { path: 'developers/:id', component: ReadComponent },
    { path: 'skills', component: SkillsListComponent },
    { path: 'skills/:id', component: SkillComponent },
    { path: 'test', component: TestComponent }
    //{ path: 'developers/:id', component: DevelopersComponent },
    //{ path: 'skill/:id', component: SkillsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);