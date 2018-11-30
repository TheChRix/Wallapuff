import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PostComponent } from "../post/post.component";
import { PostService } from "../servicios/post.service";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { routingModule } from "./routing.module";

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, HttpModule, InfiniteScrollModule, routingModule],
  providers: [PostService],
  bootstrap: [AppComponent, PostComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
