import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User} from '../models';
import { UserService, AuthenticationService, TestsService } from '../services';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({ 
    selector: 'app-home',
    templateUrl: 'home.component.html' ,
    styleUrls: ['./home.component.css']
  })

export class HomeComponent implements OnInit, OnDestroy {
    currentUser: boolean;
    Utilisateur:any= [];
    currentUserSubscription: Subscription;
    users: User[] ;
    email : string; 
    password : string ;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private cookieService: CookieService,
        private router: Router
    ) {
       // this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            
      //  });
    }

    ngOnInit() {
        this.loadAllUsers();
      //  this.currentUser = this.authenticationService.currentUser;
     /*this.loadUtilisateurs(1);*/


      
     
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
      // this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

   loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users;
            console.log(this.users);
        });
    }

    gettestsbyiduser(iduser: number) {

        this.router.navigate(['/utilisateur_test', iduser]); 
       //  this.testservice.getTestsBycategorieId(id).subscribe((data: {}) => {
       //  this.Tests=data
      
        //})
        //return this.router.navigate(['/tests'],this.Tests); 
      }
      gettestsbyiduser1(iduser: number) {

        this.router.navigate(['/score', iduser]); 
       //  this.testservice.getTestsBycategorieId(id).subscribe((data: {}) => {
       //  this.Tests=data
      
        //})
        //return this.router.navigate(['/tests'],this.Tests); 
      }

      loadUtilisateurs(id:number) {
        return this.userService.getUsers(id).subscribe((data: {}) => {
          this.Utilisateur = data;
        })
      }
}