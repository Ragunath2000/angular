import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/department/"
  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseurl + `GetAllDepartments`)
  }
}
