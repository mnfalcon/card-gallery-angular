import { Routes, RouterModule } from "@angular/router";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {NgModule} from "@angular/core";
import {CrudCardFormComponent} from "./components/crud-card-form/crud-card-form.component";

const routes: Routes = [
  { path: '', redirectTo:'cards', pathMatch: 'full'},
  { path: 'cards', component: GalleryComponent},
  { path: 'crud', component: CrudCardFormComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
