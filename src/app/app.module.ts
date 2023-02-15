import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EntriesComponent } from './entries/entries.component';
import { ListingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './button/button.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EntriesComponent,
    ListingComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
