import {environment} from '@environments/environment'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

import {CustomResponse} from '../models/response'
import {Content} from '../models/content'

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private http: HttpClient) {}

  getContent(key: string): Observable<CustomResponse<Content>> {
    return this.http.get<CustomResponse<Content>>(
      environment.contentServiceURL + '/content/byKey/' + key
    )
  }
}
