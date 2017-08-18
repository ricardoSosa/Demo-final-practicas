import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TagInputModule } from 'ng2-tag-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';

//Import bootstrao libraries -> 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routes
import { routes } from './app.router';

//Services
import { DatabaseService } from 'app/services/database.service';

//Pipes
import { GeneralFilter } from 'app/pipes/general-filter.pipe';

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
import { SearchBarComponent } from './layout/search-bar/search-bar.component';
import { TableLevelListsComponent } from './content/table-level-lists/table-level-lists.component';
import { TestComponent } from './content/test/test.component';
import { SkillLevelListComponent } from './content/table-level-lists/skill-level-list/skill-level-list.component';
import { SelectionListComponent } from './content/selection-list/selection-list.component';
import { InformationPanelComponent } from './content/information-panel/information-panel.component';
import { DevLevelListComponent } from './content/table-level-lists/dev-level-list/dev-level-list.component';
import { OptionsPanelComponent } from './content/developers/read/options-panel/options-panel.component';
import { DevListComponent } from './content/dev-list/dev-list.component';

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
    GeneralFilter,
    SearchBarComponent,
    TableLevelListsComponent,
    TestComponent,
    SkillLevelListComponent,
    SelectionListComponent,
    InformationPanelComponent,
    DevLevelListComponent,
    OptionsPanelComponent,
    DevListComponent,
  ],
  imports: [
    JsonpModule,
    TagInputModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes,
    Ng2PaginationModule
  ],
  providers: [
    DatabaseService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
