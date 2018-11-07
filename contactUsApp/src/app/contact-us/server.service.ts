import { Injectable} from '@angular/core';
import {Http} from '@angular/http';

// using Firebase realtime db API service to save data and getting confirmation of data posting.
@Injectable()
export class ServerService {
  constructor (private http: Http) {}
  storeContactUsData(servers: any[]) {
    // Adding headers
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://httptesting-f2f61.firebaseio.com/data',
      servers,
      {headers: headers } );

  }
}
