import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class CategoriasService {
  presUrl = "https://www.wallapuff.com/wp-json/wp/v2/categories";
  constructor(private http: Http) {}
  getCategorias() {
    return this.http.get(this.presUrl).map(res => res.json());
  }
}
