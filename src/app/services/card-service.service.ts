import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../model/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url: string = 'https://637fcdce8efcfcedacf80947.mockapi.io/cards';

  constructor(private httpClient: HttpClient) { }

  save(c: Card): Observable<Card> {
    return this.httpClient.post<Card>(this.getUrl(), c);
  }

  findAll<Card>(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.getUrl());
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.getUrl() + "/" + id);
  }

  getById<Card>(id: any) {
    return this.httpClient.get(this.getUrl() + "/" + id);
  }

  update(id: any, c: Card) {
    return this.httpClient.put(this.getUrl() + "/" + id, c);
  }

  getUrl() {
    return this.url;
  }
}
