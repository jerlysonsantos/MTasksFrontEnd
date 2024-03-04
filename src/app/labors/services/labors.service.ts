import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaborService {
  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {}

  getAll(
    page: number = 0,
    size: number = 10
  ): Observable<{ labors: any[]; size: number }> {
    const response = this.http.get<{ labors: any[]; size: number }>(
      `@api/labor?page=${page}&size=${size}`
    );

    return response;
  }
}
