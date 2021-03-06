import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../user/user';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`/mock_users.json`);
    }
}