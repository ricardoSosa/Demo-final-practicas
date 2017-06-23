import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TagInputModule } from 'ng2-tag-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Import bootstrao libraries -> 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routes
import { routes } from './app.router';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './content/home/home.component';
import { SearchComponent } from './content/search/search.component';
import { ReportsComponent } from './content/reports/reports.component';
import { ListComponent } from './content/developers/list/list.component';
import { ReadComponent } from './content/developers/read/read.component';
import { SkillsListComponent } from './content/skills/list/skills-list.component';
import { SkillComponent } from './content/skills/read/skill.component';
import { LoginComponent } from './session/login/login.component';
import { LogoutComponent } from './session/logout/logout.component';

//Services
import { DatabaseService } from 'app/services/database.service';

//Pipes
import { GeneralFilter } from 'app/pipes/general-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    SearchComponent,
    ReportsComponent,
    ListComponent,
    ReadComponent,
    LoginComponent,
    LogoutComponent,
    SkillComponent,
    SkillsListComponent,
    GeneralFilter
  ],
  imports: [
    TagInputModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [
    DatabaseService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
