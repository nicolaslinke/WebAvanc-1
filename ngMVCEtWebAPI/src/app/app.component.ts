import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngMVCEtWebAPI';

  constructor(public http : HttpClient){}

  async testPublic() : Promise<void>{
    console.log("working");
    let x = await lastValueFrom(this.http.get("https://localhost:7269/api/Account/PublicTest"));
    console.log(x);
  }
}

