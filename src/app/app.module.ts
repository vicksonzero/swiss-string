import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { EditableWrapperComponent } from './components/editable-wrapper/editable-wrapper.component';
import { MainComponent } from './main/main.component';
import { StepComponent } from './step/step.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColumnComponent } from './column/column.component';
import { NodeComponent } from './node/node.component';
import { OperatorWidgetComponent } from './operator-widget/operator-widget.component';
import { TransitionGroupComponent } from './components/transition-group/transition-group.component';
import { TransitionGroupItemDirective } from './components/transition-group/transition-group-item.directive';
import { DimBgComponent } from './components/dim-bg/dim-bg.component';
import { MatchHeightDirective } from './components/match-height.directive';
import { LongPressDirective } from './components/long-press/long-press.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ColumnComponent,
    EditableWrapperComponent,
    MainComponent,
    NodeComponent,
    OperatorWidgetComponent,
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
