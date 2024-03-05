import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {}

  login(username: string, password: string): Observable<{ message: string }> {
    const response = this.http.post<{ message: string }>('@api-public/auth', {
      username,
      password,
    });

    return response;
  }

  register(
    name: string,
    username: string,
    email: string,
    password: string
  ): Observable<{ message: string }> {
    const response = this.http.post<{ message: string }>(
      '@api-public/auth/register',
      {
        name,
        username,
        email,
        password,
      }
    );

    return response;
  }
}
