import { Component, OnInit } from "@angular/core";
import { PostService } from "../servicios/post.service";

function obtener(valor) {
  var m = valor.match(/src="([^\'\"]+)/g);
  // /(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "");
  m = m[0].toString().replace('src="', "");
  // console.log("Imagen: " + m);
  return m;
}

@Component({
  selector: "app-posts",
  templateUrl: "./post.component.html"
})
export class PostComponent implements OnInit {
  post: any[] = [];
  pagina = 1;

  constructor(private postService: PostService) {
    this.postService.getPost(this.pagina).subscribe(post => {
      for (const id$ in post) {
        const p = post[id$];
        p.id$ = id$;
        post[id$].content.rendered = obtener(post[id$].content.rendered);
        this.post.push(post[id$]);
      }
    });
  }

  onScrollDown() {
    console.log("Pagina: " + this.pagina);
    this.pagina++;

    this.postService.getPost(this.pagina).subscribe(post => {
      for (const id$ in post) {
        const p = post[id$];
        p.id$ = id$;
        post[id$].content.rendered = obtener(post[id$].content.rendered);
        this.post.push(post[id$]);
      }
    });
  }

  ngOnInit() {}
}
