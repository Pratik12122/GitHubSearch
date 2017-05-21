import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';
@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
    user : any;
    repos : any[];
    username : String;
    constructor(private _githubService : GitHubService){
        this.user=false;
    }

    searchUser(){
        console.log (this.username);
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user =>{
            this.user = user;
            console.log(user);
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
 }