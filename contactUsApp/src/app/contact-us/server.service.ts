import { Injectable} from '@angular/core';
import {Http} from '@angular/http';

// using Firebase realtime db API service to save data and getting confirmation of data posting.
@Injectable()
export class ServerService {
  constructor (private http: Http) {}
  storeContactUsData(servers: any[]) {

    // Connecting to Firebase test API server --
    return this.http.post('https://httptesting-f2f61.firebaseio.com/data.json',
      servers);
  }
}
