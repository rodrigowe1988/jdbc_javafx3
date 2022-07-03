import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventsComponent } from "./components/events/events.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

const routes: Routes = [
	{path: '', component: FirstComponentComponent},
	{path: 'list', component: ListRenderComponent},
	{path: 'if-render', component: IfRenderComponent},
	{path: 'change-number', component: EmitterComponent},
	{path: 'directives', component: DirectivesComponent},
	{path: 'events', component: EventsComponent},
	{path: 'list/:id', component: ItemDetailComponent}

]

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
