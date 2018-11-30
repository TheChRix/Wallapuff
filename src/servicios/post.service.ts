import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class PostService {
  presUrl = "https://www.wallapuff.com/wp-json/wp/v2/posts?per_page=12&page=";
  constructor(private http: Http) {}
  getPost(pagina: number) {
    this.presUrl =
      "https://www.wallapuff.com/wp-json/wp/v2/posts?per_page=12&page=";
    this.presUrl = this.presUrl + pagina;
    return this.http.get(this.presUrl).map(res => res.json());
  }
}
