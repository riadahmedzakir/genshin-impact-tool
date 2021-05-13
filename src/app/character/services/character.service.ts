import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  public getCharacterData(name: string): Observable<any> {
    return this.http.get(`./assets/character-data/${name}.json`);
  }
}
