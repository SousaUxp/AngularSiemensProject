import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projects } from 'src/assets/interfaces';
import { apiLink } from 'src/assets/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any 

  constructor(private http: HttpClient) {
  
   }

   getData(){
    return this.http.get<projects[]>(apiLink)
   }

  updateServerData(project: projects) {
    console.log(project)
    this.http.put(`${apiLink}/${project.id}`, project).subscribe(data => this.data = data);
  }

  addNewData(project: projects){
    return this.http.post(`${apiLink}`, project).subscribe(data => this.data = data);
  }

  deleteData(projectId: string){
    this.http.delete(`${apiLink}/${projectId}`).subscribe(data => this.data = data);
  }

}
