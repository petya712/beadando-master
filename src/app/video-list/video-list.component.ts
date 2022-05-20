import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[] = [];

  searchFor: string;

  constructor(private videoService: VideoService) { }

  //async ngOnInit() {
    //this.videos = await this.videoService.loadVideos();
  //}

  ngOnInit() {
    this.videoService.loadVideos().subscribe((videos)=>this.videos = videos);
  }

  async searchVideo() {
    this.videos = await this.videoService.searchForVideos(this.searchFor);
  }

}
