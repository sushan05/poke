import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface CountryData {
    name: string;
}

@Injectable()
export class NewInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler){
      if(req.method === 'POST') {
        return next.handle(req);
      }

      const countryParams = new HttpParams().append('fields', 'name;capital;currencies')
      const clone = req.clone({ params: countryParams });

      return next.handle(clone)
      .pipe(
          retry(2),
          catchError(this.handleError)
      );
    }

  handleError(er: HttpErrorResponse) {
    let errorString: string;

    if(er.status === 404) {
      errorString = 'Api Url is incorrect';
    }

    return throwError(errorString);
  }

}