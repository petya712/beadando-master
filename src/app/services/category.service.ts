import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl='http://localhost:4200/api/categories';

  constructor(private http: HttpClient) { }

  //getAll() {
    //return this.http.get<Category[]>('/api/categories').toPromise();
  //}
  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }

  createCateg(category: Category) {
    return this.http.post<Category>('/api/categories', category).toPromise();
  }
  


  deleteCateg(id: number) {
    return this.http.delete('/api/categories/' + id).toPromise();
  }
}
