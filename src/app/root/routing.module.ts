import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './components/introduction/introduction.component';


const routes: Routes = [
    {
        path: 'home',
        component: IntroductionComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'character-five-star',
        loadChildren: () => import('../character/character.module').then(m => m.CharacterModule)
    },
    {
        path: 'character-four-star',
        loadChildren: () => import('../character/character.module').then(m => m.CharacterModule)
    },
    {
        path: 'sword',
        loadChildren: () => import('../weapon/weapon.module').then(m => m.WeaponModule)
    },
    {
        path: 'claymore',
        loadChildren: () => import('../weapon/weapon.module').then(m => m.WeaponModule)
    },
    {
        path: 'bow',
        loadChildren: () => import('../weapon/weapon.module').then(m => m.WeaponModule)
    },
    {
        path: 'catalyst',
        loadChildren: () => import('../weapon/weapon.module').then(m => m.WeaponModule)
    },
    {
        path: 'polearm',
        loadChildren: () => import('../weapon/weapon.module').then(m => m.WeaponModule)
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule { }
