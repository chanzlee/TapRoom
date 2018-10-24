import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { HappyHourComponent } from './happy-hour/happy-hour.component';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    HappyHourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
