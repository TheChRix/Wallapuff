import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
//import { ProductListComponent } from "./product-list/product-list.component";
//import { ProductDetailComponent } from "./product-detail/product-detail.component";
//import { SidebarComponent } from "./sidebar/sidebar.component";
//import { ProductListSidebarComponent } from "./product-list-sidebar/product-list-sidebar.component";
import { PostComponent } from "../post/post.component";

const routes: Routes = [
  { path: "products", component: PostComponent },
  {
    path: "",
    component: PostComponent,
    outlet: "sidebar"
  },
  {
    path: "products",
    component: PostComponent,
    outlet: "sidebar"
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
