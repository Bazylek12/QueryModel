import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPostModel } from '../models/job-post.model';
import {JobTagModel} from "../models/job-tag.model";

@Injectable()
export class JobPostsService {
  constructor(private _httpClient: HttpClient) {
  }

  getJobPosts(): Observable<JobPostModel[]> {
    return this._httpClient.get<JobPostModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }
  getJobTags(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }

}
