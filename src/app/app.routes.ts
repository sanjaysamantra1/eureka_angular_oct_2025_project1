import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { UserDetails } from './components/user-details/user-details'; // Eager Loading
import { ProductDetails } from './components/product-details/product-details';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { authGuard } from './guards/auth-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: Aboutus },
    {
        path: 'careers',
        component: Careers,
        children: [
            { path: '', component: PermanentJobs },
            { path: 'permanent', component: PermanentJobs },
            { path: 'contract', component: ContractJobs },
        ]
    },
    {
        path: 'contactus',
        component: Contactus,
        canDeactivate: [canExitGuard]
    },
    { path: 'users', component: UserList },
    { path: 'user-details/:id', component: UserDetails },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products').then(x => x.Products) // Lazy
    },
    { path: 'product-details', component: ProductDetails },
    {
        path: 'upload-videos',
        component: UploadVideos,
        canActivate: [authGuard]
    },
    { path: '', component: Home },
    { path: '**', component: Notfound },
];
