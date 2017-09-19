import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//components
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
	{ path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
}) 

export class AppRoutingModule {

}