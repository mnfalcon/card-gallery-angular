import { Routes, RouterModule } from "@angular/router";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {NgModule} from "@angular/core";
import {CrudCardFormComponent} from "./components/crud-card-form/crud-card-form.component";
import {NewCardComponent} from "./components/new-card/new-card.component";

const routes: Routes = [
  { path: '', redirectTo:'cards', pathMatch: 'full'},
  { path: 'cards', children: [
      { path: '', component: GalleryComponent },
      { path: 'new', component: NewCardComponent },
      { path: 'edit/:cardId', component: CrudCardFormComponent }
    ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
