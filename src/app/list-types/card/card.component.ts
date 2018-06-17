import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IListType } from "../ilist-type.component";
import { User } from '../../user/user';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponent implements IListType {

    @Input() columns: any;
    @Input() data: User[];

    constructor() {

    }
}