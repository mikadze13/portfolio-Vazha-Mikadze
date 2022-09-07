import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersService { 
  baseUrl=environment.baseUrl;
  constructor(private httpClient:HttpClient) {} 
  
  addInfo(newPersonInfo:any){
    this.httpClient.post(`${this.baseUrl}auth.json`,{contacts:newPersonInfo})
    .subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
 
}
