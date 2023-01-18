import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {SingleUsersService} from '../../services/single-users.service';
import {QuerySingleUserModelQuery} from "../../queries/query-single-user-model.query";
import {RoleModel} from "../../models/role.model";

@Component({
  selector: 'app-query-string-single-user',
  templateUrl: './query-string-single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringSingleUserComponent {
  readonly usersList$: Observable<QuerySingleUserModelQuery[]> = combineLatest([
    this._singleUsersService.getAllUsers(),
    this._singleUsersService.getAllRoles(),
  ]).pipe(
    map(([users, roles]) => this._mapUserQuery(roles, users))
  )

  private _mapUserQuery(roles: RoleModel[], users: UserModel[]): QuerySingleUserModelQuery[] {
    const rolesTagMap = roles.reduce((acc, curr) => (
      {...acc, [curr.id]: curr}
    ), {}) as Record<number, RoleModel>
    return users.map(user => ({
        email: user.email,
        role: rolesTagMap[user.roleId]?.role
      }),
    )

  }
  constructor(private _singleUsersService: SingleUsersService) {
  }
}
