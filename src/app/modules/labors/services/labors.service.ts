import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILabor } from '../interfaces/labor.interface';

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
  ): Observable<{ labors: ILabor[]; size: number }> {
    const response = this.http.get<{ labors: ILabor[]; size: number }>(
      `@api/labor?page=${page}&size=${size}`
    );

    return response;
  }

  create(labor: ILabor): Observable<ILabor> {
    const response = this.http.post<ILabor>('@api/labor', labor);

    return response;
  }

  update(labor: ILabor): Observable<ILabor> {
    const response = this.http.put<ILabor>(`@api/labor/${labor.id}`, labor);

    return response;
  }

  remove(id: number): Observable<void> {
    const response = this.http.delete<void>(`@api/labor/${id}`);

    return response;
  }
}
