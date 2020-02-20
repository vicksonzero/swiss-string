import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { EditableWrapperComponent } from './components/editable-wrapper/editable-wrapper.component';
import { MainComponent } from './main/main.component';
import { StepComponent } from './step/step.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonComponent,
    StepComponent,
    EditableWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
