import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( { providedIn: 'root' })
export class UserService {

  usersApiUrl: string = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any[]>(this.usersApiUrl);
  }

}