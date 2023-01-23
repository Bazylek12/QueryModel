import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, combineLatest, switchMap, map} from 'rxjs';
import { UsersWithAvatarsModel } from '../../models/users-with-avatars.model';
import { OrganizationsService } from '../../services/organizations.service';
import { UsersWithAvatarsService } from '../../services/users-with-avatars.service';
import {TeamModel} from "../../models/team.model";
import {TeamQuery} from "../../queries/team.query";
import {OrganizationQuery} from "../../queries/organization.query";

@Component({
  selector: 'app-query-multi-nested-orgs',
  templateUrl: './query-multi-nested-orgs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryMultiNestedOrgsComponent {
  readonly organisationList$: Observable<OrganizationQuery[]> = combineLatest([
    this._organizationsService.getAllOrganizations(),
    this._usersWithAvatarsService.getUsersWithAvatars(),
  ]).pipe(
    switchMap(([orgs, users]) =>
      this._organizationsService.getTeams(orgs.map(org => org.id)).pipe(
        map((teamMap) =>
          orgs.map(org => ({
            name: org.name,
            teams: this.mapToQuery(teamMap[org.id], users)
          }))
        )
      )
    )
  )

  constructor(private _organizationsService: OrganizationsService, private _usersWithAvatarsService: UsersWithAvatarsService) {
  }

  private mapToQuery(teams: TeamModel[], users: UsersWithAvatarsModel[]) : TeamQuery[] {
    const userMap = users.reduce((a, c) => ({...a, [c.id]: c}), {} as Record<string, UsersWithAvatarsModel> )
    return teams.map(team => ({
      name: team.name,
      members: team.userIds.map((userId) => ({
        avatarUrl: userMap[userId]?.avatar
      }))
  }))
  }
}
