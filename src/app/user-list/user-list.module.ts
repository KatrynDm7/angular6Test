import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { GroupComponent } from "../list-types/group/group.component";
import { ListComponent } from '../list-types/list/list.component';
import { CardComponent } from '../list-types/card/card.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { DataGridModule } from 'primeng/datagrid';
import { GroupService } from "../list-types/group/group.service";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FlexLayoutModule,
        MaterialModule,
        UserListRoutingModule,
        TableModule,
        PaginatorModule,
        PanelModule,
        TabViewModule,
        DataGridModule
    ],
    declarations: [
        UserListComponent, GroupComponent, ListComponent, CardComponent
    ],
    providers: [
        GroupService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UserListModule { }