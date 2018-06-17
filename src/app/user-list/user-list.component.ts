import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Subscription } from "rxjs/index";
import { isArray } from "rxjs/internal/util/isArray";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[];
    usersCopy: any;
    columns: any;
    listView: string = 'list';
    filteredUsers: any = {};

    getUserSubscription: Subscription;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.getUserSubscription = this.userService.getUsers()
            .subscribe(
                data => {
                    this.users = data;
                    this.usersCopy = data;
                    this.columns = this.excludeId(data);
                },
                error => console.log('Errors', error)
            );
    }

    /**
     * Custom filter
     *
     * @param value
     */
    filter(value: string) {
        this.users = this.usersCopy;
        if (value == '') return;
        this.filteredUsers = this.users.filter((items: any) => {
            for (let i = 0; i <= this.columns.length; i++) {
                if (items[this.columns[i]] != null &&
                    items[this.columns[i]].toLowerCase().indexOf(value.toLowerCase()) != -1) {
                    return items;
                }
            }
        });
        this.users = this.filteredUsers;
        return this.users;
    }

    /**
     * Exclude 'id' field from data
     *
     * @param data
     * @returns {string[]|T[]}
     */
    excludeId = (data: any) => {
        return data != null ? Object.keys(data[0]).filter(item => item != 'id') : data;
    }

    /**
     * Switch listType (group/list/card)
     *
     * @param value
     */
    switchListType(value: string) {
        switch(value) {
            case 'group':
                this.listView = 'group';
                break;
            case 'list':
                this.listView = 'list';
                break;
            case 'card':
                this.listView = 'card';
                break;
        }
    }

    ngOnDestroy() {
        if (this.getUserSubscription != null) {
            this.getUserSubscription.unsubscribe();
        }
    }
}