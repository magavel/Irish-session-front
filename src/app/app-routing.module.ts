import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TunesComponent} from "./components/tunes/tunes.component";
import {SetsComponent} from "./components/sets/sets.component";
import {SetComponent} from "./components/set/set.component";
import {TuneComponent} from "./components/tune/tune.component";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ToolboxComponent} from "./components/toolbox/toolbox.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sets', component:SetsComponent},
  {path:'sets/:id', component:SetComponent},
  {path:'tunes', component:TunesComponent},
  {path:'tunes/:id', component:TuneComponent},
  {path:'contact', component:ContactComponent},
  {path:'toolbox', component:ToolboxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
