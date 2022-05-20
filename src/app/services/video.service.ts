import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private apiUrl='http://localhost:4200/api/videos';

  //async loadVideos() {
    //return this.http.get<Video[]>(this.apiUrl).toPromise();
  //}

  loadVideos(): Observable<Video[]>{
    return this.http.get<Video[]>(this.apiUrl);
  }

  async searchForVideos(search: string) {
    return this.http.get<Video[]>(this.apiUrl, {
      params: { search }
    }).toPromise();
  }

  //async addVideo(video: Video) {
    //return this.http.post<Video>(this.apiUrl, video).toPromise();
  //}
  addVideo(video:Video):Observable<Video>{
    return this.http.post<Video>(this.apiUrl,video);
  }


  //async getVideoById(id: string) {
    //return this.http.get<Video>(this.apiUrl + id).toPromise();
  //}
  getVideoById(id: string): Observable<Video>{
    return this.http.get<Video>(this.apiUrl);
  }

}
