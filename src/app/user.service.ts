import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { User } from './user';
import { Food } from './food';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ApiURL="http://localhost:8088/api/vi/";
  constructor(private httpClient: HttpClient) { }
 
  getUserList():Observable<User[]>{
return this.httpClient.get<User[]>(`${this.ApiURL+'Users'}`);
  }

  adduser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.ApiURL+'addUser'}`,user);
  }
  updateuser(user:User):Observable<User>{
return this.httpClient.put<User>(`${this.ApiURL+'update'}`,user)
  }
  

  checkname(name:String):Observable<Object>
  {
return this.httpClient.get<Object>(`${this.ApiURL}`+'Usern'+`/${name}`);
  }

  getFoodlist():Observable<Food[]>{
    return this.httpClient.get<Food[]>(`${this.ApiURL+'Food'}`);
  }

  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.ApiURL}`+'delete'+`/${id}`);
  }
  
  getuserbyid(id:number):Observable<User>
  {
return this.httpClient.get<User>(`${this.ApiURL}`+'User'+`/${id}`);
  }

  getfoodbyid(id:number):Observable<Food>
  {
return this.httpClient.get<Food>(`${this.ApiURL}`+'Food'+`/${id}`);
  }

  deleteFood(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.ApiURL}`+'deleted'+`/${id}`);
  }
}
