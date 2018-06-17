import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IListType } from "../ilist-type.component";
import { User } from '../../user/user';
import { Observable, Subject } from 'rxjs';
import { GroupService }from './group.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html'
})
export class GroupComponent implements IListType, OnInit {

    @Input() columns: any;
    @Input() data: User[];
    departments: Observable<any>;

    constructor(private groupService: GroupService) {}

    ngOnInit() {
        this.departments = this.groupService.getDepartments(this.data, this.departments);
    }

    getUsersByDepartment(department: any) {
        return this.groupService.getUsersByDepartment(this.data, department);
    }

}