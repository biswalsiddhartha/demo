import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { BaiDetailsComponent } from './bai-details/bai-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  

  {
    path: 'HomePage',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'HomePage', 
    pathMatch: 'full'
  },
  { path: 'BasicDetails',
    component:BasicDetailsComponent

  },
  { path: 'baiDetails',
  component:BaiDetailsComponent

},
{
  path:'Menu',
  component:MenuComponent
},

  { path: 'SalaryDetails',
  component:SalaryDetailsComponent

},
  {
    path:'**',
    component:HomePageComponent

  },

  //ended




 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
