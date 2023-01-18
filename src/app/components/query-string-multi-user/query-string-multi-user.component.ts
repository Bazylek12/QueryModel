import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import { UserModel } from '../../models/user.model';
import { SingleUsersService } from '../../services/single-users.service';
import {MultiUserModelQuery} from "../../queries/multi-user-model.query";
import {RoleModel} from "../../models/role.model";
import {DepartmentModel} from "../../models/department.model";

@Component({
  selector: 'app-query-string-multi-user',
  templateUrl: './query-string-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringMultiUserComponent {
  readonly usersList$: Observable<MultiUserModelQuery[]> = combineLatest([
    this._singleUsersService.getAllUsers(),
    this._singleUsersService.getAllRoles(),
    this._singleUsersService.getAllDepartments()
  ]).pipe(
    map(([users, roles, departments]) => this._mapUserQuery(users, roles, departments))
  )


  private _mapUserQuery(users: UserModel[], roles: RoleModel[], departments: DepartmentModel[]) : MultiUserModelQuery[] {
    const rolesMap = roles.reduce((acc, curr) => (
      {...acc, [curr.id]: curr}
    ), {}) as Record<number, RoleModel>

    const departmentsMap = departments.reduce((acc, curr) => (
      {...acc, [curr.id]: curr}
    ), {}) as Record<string, DepartmentModel>

    return users.map(user => ({
      email: user.email,
      role: rolesMap[user.roleId]?.role,
      department: departmentsMap[user.departmentId]?.name.toLowerCase()
    }))

  }
  constructor(private _singleUsersService: SingleUsersService) {
  }
}
