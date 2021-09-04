import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/api-response';
import { BootstrapStatic } from '../models/bootstrap-static';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBootstrapStaticList():Observable<APIResponse<Player>>{
    return this.http
      .get<APIResponse<Player>>(`${env.BASE_URL}/bootstrap-static/`)
  }

}
