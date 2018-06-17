import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

@Injectable()
export class GroupService {

    departments: any = [];
    groups = new Subject<any>();

    constructor() { }

    /**
     *
     * @param data
     * @param departments
     * @returns {*}
     */
    getDepartments = (data: any, departments: any) => {
        if (departments != null) {
            this.departments = departments;
        }
        let dp = this.returnDepartments(data).filter((department: any) => {
            return this.getUsersByDepartment(data, department);
        });
        return dp;
    }

    /**
     *
     * @param data
     * @returns {any}
     */
    returnDepartments = (data: any) => {
        Object.values(data).filter((item: any) => {
            if (item.department != null && this.departments.indexOf(item.department) == -1) {
                this.departments.push(item.department);
            }
        });
        return this.departments;
    }

    /**
     * // Returns structure [{'departmentName': {'items':[items]}}, {...}]
     *
     * @param data
     * @param department
     * @returns {any}
     */
    getUsersByDepartment(data: any, department: any) {
        var itemsArray: any = [];
        Object.values(data).filter((item: any) => {
            if (item['department'] == department) {
                itemsArray.push(item);
                this.groups[department] = {'items': [itemsArray]};
            } else {
                this.groups[department] = {'items': [itemsArray]};
            }
        });
        if (data.length == 0) {
            this.groups[department]['items'][0] = [];
        }
        this.groups.next(this.groups);
        this.groups.asObservable();
        if (typeof department === "string") {
            return this.groups[department]['items'][0];
        }
    }
}
