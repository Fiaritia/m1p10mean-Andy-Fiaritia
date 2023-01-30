import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddvoitureComponent } from './voiture/addvoiture.component';
import { DepotvoitureComponent } from './voiture/depotvoiture.component';
import { AddreparationComponent } from './reparation/addreparation.component';
import { FichereparationComponent } from './reparation/fichereparation.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signin',           component: SignupComponent },
    { path: 'signup',           component: SigninComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'addcar',           component: AddvoitureComponent},
    { path: 'cardeposit',       component: DepotvoitureComponent},
    { path: 'addreparation',    component: AddreparationComponent},
    { path: 'fichereparation',  component: FichereparationComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        DragDropModule,
        MatCardModule,
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
        AddreparationComponent,
        FichereparationComponent
    ]
})
export class ExamplesModule { }
