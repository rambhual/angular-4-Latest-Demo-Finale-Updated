import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "./customers/customer.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { EventComponent } from "./event/event.component";
import { EventDetailComponent } from "./event/eventDetail/eventDetail.component";
import { ProductComponent } from "./product/product.component";

export const Approutes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
export const AppRoutesRoutes = RouterModule.forChild(Approutes);
