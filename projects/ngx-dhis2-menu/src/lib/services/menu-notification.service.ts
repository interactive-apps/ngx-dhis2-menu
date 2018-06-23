import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuNotificationService {
  constructor(private httpClient: HttpClient) {

  }

  loadNotification(rootUrl: string): Observable<any> {
    return this.httpClient.get(`${rootUrl}api/me/dashboard.json`).pipe(catchError(() => of(null)));
  }
}
