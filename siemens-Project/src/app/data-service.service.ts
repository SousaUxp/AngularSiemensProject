import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projects } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any 

  constructor(private http: HttpClient) {
  
   }

   getData(){
    return this.http.get<projects[]>('/api/projects')
   }

  updateServerData(project: projects) {
    console.log(project)
    this.http.put(`/api/projects/${project.id}`, project).subscribe(data => this.data = data);
  }

  addNewData(project: projects){
    return this.http.post(`/api/projects/`, project).subscribe(data => this.data = data);
  }

  deleteData(projectId: string){
    this.http.delete(`/api/projects/${projectId}`).subscribe(data => this.data = data);
  }

}
