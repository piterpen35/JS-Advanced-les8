import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AvatarBlockComponent } from './avatar-block/avatar-block.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { EditButtonBlockComponent } from './edit-button-block/edit-button-block.component';
import { SkillBlockComponent } from './skill-block/skill-block.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { ProjectBlockComponent } from './project-block/project-block.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarBlockComponent,
    InfoBlockComponent,
    EditButtonBlockComponent,
    SkillBlockComponent,
    ExperienceBlockComponent,
    ProjectBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
