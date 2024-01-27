import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordInputComponent } from './word-input/word-input.component';
import { WordMeaningsComponent } from './word-meanings/word-meanings.component';
import { WordTitleComponent } from './word-meanings/word-title/word-title.component';
import { FormsModule } from '@angular/forms';
import { MeaningsComponent } from './word-meanings/meanings/meanings.component';
import { MeaningComponent } from './word-meanings/meanings/meaning/meaning.component';
import { DefinitionsComponent } from './word-meanings/meanings/meaning/definitions/definitions.component';
import { ErrorComponent } from './word-meanings/error/error.component';
import { SpinnerComponent } from './word-meanings/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WordInputComponent,
    WordMeaningsComponent,
    WordTitleComponent,
    MeaningsComponent,
    MeaningComponent,
    DefinitionsComponent,
    ErrorComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
