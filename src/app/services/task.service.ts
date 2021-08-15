import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Task} from '../Task'
//import {TASKS} from '../mock-taks'
import {HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiURL ='http://localhost:5001/tasks'
  constructor(private http:HttpClient) { }
 
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL)
    
    /*const tasks = of( TASKS);
    return tasks*/
  }
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
   updateTaskReminder(task:Task):Observable<Task>{
     console.log(`${this.apiURL}/${task.id}`)
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiURL, task,httpOptions)
  }
}
