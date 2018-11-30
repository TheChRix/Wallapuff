import { Component, OnInit } from "@angular/core";
import { CategoriasService } from "../servicios/categorias.service";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html"
})
export class CategoriaComponent implements OnInit {
  caregoria: any[] = []; /*
  constructor(private categoriasService: CategoriasService) {
    this.categoriasService.getCategorias().subscribe(caregoria => {
      for (const id$ in caregoria) {
        const p = caregoria[id$];
        p.id$ = id$;
        this.caregoria.push(caregoria[id$]);
      }
    });
  }*/

  ngOnInit() {}
}
