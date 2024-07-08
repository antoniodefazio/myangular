import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; 

export class ConditionalInterceptor implements HttpInterceptor {

  private readonly apiUrl = environment.apiUrl; 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // List of URLs to be intercepted
    const urlsToIntercept = [
      this.apiUrl+'/contact'
    ];

    // Check if the request URL matches any of the URLs to be intercepted via array some method
    const shouldIntercept = urlsToIntercept.some(url => req.url.includes(url));

    if (shouldIntercept) {
      // Clone the request to add the new header.
      const authReq = req.clone({
        headers: req.headers.set('Ciao', 'Viao')
      });

      // Pass the cloned request instead of the original request to the next handle, HTTP requests in Angular are immutable
      return next.handle(authReq);
    } else {
      // Pass the original request to the next handle
      return next.handle(req);
    }
  }
}


