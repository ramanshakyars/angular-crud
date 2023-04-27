import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient) { }
baseUrl = 'http://localhost:8080/'

public loadData(){
 return  this.http.get(`${this.baseUrl}User`);

}
public postData(user:any){
  return this.http.post(`${this.baseUrl}create-user`,user)
}
public deleteUserData(id: number){
  return this.http.delete(`${this.baseUrl}delete-user/${id}`)
  // return this.http.delete(`${this.baseUrl}delete-user/${id}`)
}

public updateData(user:any){
  return this.http.put(`${this.baseUrl}update-user`,user)

}



}
