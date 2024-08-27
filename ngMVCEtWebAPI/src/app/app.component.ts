import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  username ?: string;

  title = 'ngMVCEtWebAPI';

  constructor(public http : HttpClient){}

  async testPublic() : Promise<void>{
    let x = await lastValueFrom(this.http.get("https://localhost:7269/api/Account/PublicTest"));
    console.log(x);
  }

  async testPrivate() : Promise<void>{
    let x = await lastValueFrom(this.http.get("https://localhost:7269/api/Account/PrivateTest"));
    console.log(x);
  }

  async enregistrer() : Promise<void>{
    let x = await lastValueFrom(this.http.post("https://localhost:7269/api/Account/Register", this.username));
    console.log(x);
  }

  async login() : Promise<void>{
    let x = await lastValueFrom(this.http.post("https://localhost:7269/api/Account/Login", this.username));
    console.log(x);
    
  }
}

