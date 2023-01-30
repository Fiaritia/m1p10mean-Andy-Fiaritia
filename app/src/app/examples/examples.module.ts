import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddvoitureComponent } from './voiture/addvoiture.component';
import { DepotvoitureComponent } from './voiture/depotvoiture.component';
import { AddreparationComponent } from './reparation/addreparation.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signin',           component: SignupComponent },
    { path: 'signup',           component: SigninComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'addcar',           component: AddvoitureComponent},
    { path: 'cardeposit',       component: DepotvoitureComponent},
    { path: 'addreparation',    component: AddreparationComponent}
];

@NgModule({
    imports: [
    CommonModule,
        FormsModule,
        NgbModule,
        RouterModule.forRoot(routes,{
            useHash: true
          })
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        SigninComponent,
        ProfileComponent,
        AddvoitureComponent,
        DepotvoitureComponent,
        AddreparationComponent
    ]
})
export class ExamplesModule { }
