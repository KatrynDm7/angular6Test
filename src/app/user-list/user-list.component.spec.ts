import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { UserListComponent } from './user-list.component';
import { GroupComponent } from '../list-types/group/group.component';
import { ListComponent } from '../list-types/list/list.component';
import { CardComponent } from '../list-types/card/card.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { DataGridModule } from 'primeng/datagrid';
import { UserListRoutingModule } from './user-list-routing.module';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          FlexLayoutModule,
          MaterialModule,
          UserListRoutingModule, HttpClientTestingModule,
          TableModule,
          PaginatorModule,
          PanelModule,
          TabViewModule,
          DataGridModule
        ],
        declarations: [UserListComponent, GroupComponent, ListComponent, CardComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
