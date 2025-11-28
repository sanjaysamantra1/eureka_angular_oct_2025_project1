import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: Aboutus },
    { path: 'careers', component: Careers },
    { path: 'contactus', component: Contactus },
    { path: 'users', component: UserList },
    { path: 'user-details/:id', component: UserDetails },
    { path: '', component: Home },
    { path: '**', component: Notfound },
];
