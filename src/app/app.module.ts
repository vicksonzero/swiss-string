import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DimBgComponent } from './components/dim-bg/dim-bg.component';
import { EditableWrapperComponent } from './components/editable-wrapper/editable-wrapper.component';
import { LongPressDirective } from './directives/long-press/long-press.directive';
import { MatchHeightDirective } from './directives/match-height.directive';
import { TransitionGroupItemDirective } from './directives/transition-group/transition-group-item.directive';
import { TransitionGroupComponent } from './directives/transition-group/transition-group.component';
import { MainComponent } from './main/main.component';
import { ColumnComponent } from './main/step/column/column.component';
import { StepComponent } from './main/step/step.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ColumnComponent,
    EditableWrapperComponent,
    MainComponent,
    NodeComponent,
    StepComponent,
    TransitionGroupComponent,
    TransitionGroupItemDirective,
    DimBgComponent,
    MatchHeightDirective,
    LongPressDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
