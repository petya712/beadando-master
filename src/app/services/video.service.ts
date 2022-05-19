import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private apiUrl='http://localhost:4200/api/videos';

  async loadVideos() {
    return this.http.get<Video[]>(this.apiUrl).toPromise();
  }

  async filterVideos(search: string) {
    return this.http.get<Video[]>(this.apiUrl, {
      params: { search }
    }).toPromise();
  }

  async addVideo(video: Video) {
    return this.http.post<Video>(this.apiUrl, video).toPromise();
  }

  async getVideoById(id: string) {
    return this.http.get<Video>(this.apiUrl + id).toPromise();
  }

}
