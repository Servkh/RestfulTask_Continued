import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  constructor(private _httpService: HttpService) {} 
  ngOnInit(){
    let tempObservable = this._httpService.getTasks();
      tempObservable.subscribe((data:any)=>{
        console.log("Got our tasks", data);
        this.tasks = data;
      })
  }
}
