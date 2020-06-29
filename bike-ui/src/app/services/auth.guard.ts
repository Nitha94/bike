import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';




@Injectable()
export class AuthGuard implements CanActivate{

    private isAuthenticatedFlag : boolean;

    constructor(private authService: AuthService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        if(this.authService.isAuthenticated()){
            this.isAuthenticatedFlag = true;
            return true;
        }
        else{
            //this.callLogin();
            //return false;
            this.authService.login();
        }
    }

    callLogin(){
        return this.authService.login();
    }

}