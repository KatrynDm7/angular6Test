import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user/user.service';
import { GroupComponent } from '../list-types/group/group.component';
import { ListComponent } from '../list-types/list/list.component';
import { CardComponent } from '../list-types/card/card.component';

// Module is lazy loaded, see app-routing.module.ts
const routes: Routes = [
    {
        path: '',
        component: UserListComponent ,
        children: [
            { path: '', redirectTo: '/user-list', pathMatch: 'full' },
            { path: 'user-list', component: UserListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [UserService]
})

export class UserListRoutingModule {}
