import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { VfToolbarComponent } from './components/vf-toolbar/vf-toolbar.component';
import { VfClientListComponent } from './components/vf-client-list/vf-client-list.component';
import { VfClientViewComponent } from './components/vf-client-view/vf-client-view.component';
import { VfClientUpdateComponent } from './components/vf-client-update/vf-client-update.component';

@NgModule({
  declarations: [AppComponent, VfToolbarComponent, VfClientListComponent, VfClientViewComponent, VfClientUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
