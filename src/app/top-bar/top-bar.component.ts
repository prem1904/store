import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../sign-in/sign-in.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  loggedIn$: Observable<boolean>
  loggedOut$: Observable<boolean>

  constructor(
    private modal: NgbModal,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loggedIn$ = this.afAuth.authState.pipe(
      map(user => !!user)
    )

    this.loggedOut$ = this.loggedIn$.pipe(
      map(loggedIn => !loggedIn)
    )
  }

  signIn() {
    
    this.modal.open(SignInComponent,{backdropClass: 'light-blue-backdrop'})    
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    await this.router.navigateByUrl("/")
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/