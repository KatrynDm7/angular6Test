import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IListType } from "../ilist-type.component";
import { User } from '../../user/user';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements IListType {

    @Input() columns: any;
    @Input() data: User[];

    constructor() {}
}