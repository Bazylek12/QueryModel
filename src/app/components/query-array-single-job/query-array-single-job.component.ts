import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {JobPostModel} from '../../models/job-post.model';
import {JobPostsService} from '../../services/job-posts.service';
import {QueryJobsModelQuery} from "../../queries/query-jobs-model.query";
import {JobTagModel} from "../../models/job-tag.model";

@Component({
  selector: 'app-query-array-single-job',
  templateUrl: './query-array-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryArraySingleJobComponent {
  readonly jobsList$: Observable<QueryJobsModelQuery[]> = combineLatest([
    this._jobPostsService.getJobPosts(),
    this._jobPostsService.getJobTags(),
  ]).pipe(
    map(([posts, tags]) => this._mapJobQuery(posts, tags))
  )


  private _mapJobQuery(jobPosts: JobPostModel[], jobTags: JobTagModel[]): QueryJobsModelQuery[] {
    const jobsTagMap = jobTags.reduce((acc, curr) => (
      {...acc, [curr.id]: curr}
    ), {}) as Record<string, JobTagModel>
    return jobPosts.map(jobPost => ({
        title: jobPost.title,
        jobTags: jobPost.jobTagIds.map(id => jobsTagMap[id]?.name) ?? '',
      }),
    )

  }

  constructor(private _jobPostsService: JobPostsService) {

  }
}
