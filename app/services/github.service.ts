import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GitHubService{
    private username:String;
    private client_id = 'eaeab576d8eb01f0f0cc';
    private client_secret = '9ff9b15d68a02563f76f2c2b50309765eaa0278c';

    constructor(private _http: Http){
        //console.log('Github Service is up and running');      
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'
                              +this.username 
                              +'?client_id='+this.client_id
                              +'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'
                              +this.username
                              +'/repos?client_id='+this.client_id
                              +'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:String){
        this.username = username;
    }

}