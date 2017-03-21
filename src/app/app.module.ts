import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReboucasMaskModule } from './reboucasMask/reboucasMask.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReboucasMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
