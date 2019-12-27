import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';

import { UsersModule } from './users/users.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthTokenHttpInterceptorProvider } from './http-interceptors/auth-token.interceptor';
import { environment } from 'src/environments/environment';
var firebaseConfig = {
  apiKey: "AIzaSyBcJzZt-FLFr6kuQM1B_0NBe6rL3M7S8YE",
  authDomain: "myapplication-4c621.firebaseapp.com",
  databaseURL: "https://myapplication-4c621.firebaseio.com",
  projectId: "myapplication-4c621",
  storageBucket: "myapplication-4c621.appspot.com",
  messagingSenderId: "1082405008314",
  appId: "1:1082405008314:web:25d40975fc9361bd9ba383"
};


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    UsersModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      {path: '',component: InputUserDataFormComponent},
      {path: 'user/:uid',component: DisplayUserDataComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent,
    SignInComponent,    
  ],
  entryComponents: [
    SignInComponent
  ],
  providers: [
    AuthTokenHttpInterceptorProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
