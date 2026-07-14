import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Tutorial } from './pages/tutorial/tutorial';
// import { React } from './pages/react/react';
import { Contact } from './pages/contact/contact';
import { Competitions } from './pages/competitions/competitions';
import { Application } from './pages/application/application';
import { Achievements } from './pages/achievements/achievements';
import { React } from './pages/react/react';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'tutorial', component:Tutorial},
    {path:'react', component:React},
    {path:'contact',component:Contact},  
    {path:'competitions', component:Competitions},
    {path:'application',component:Application},
    {path:'achievements',component:Achievements},

];
