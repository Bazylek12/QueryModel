import {TeamQuery} from "./team.query";

export interface OrganizationQuery {
  readonly name: string,
  readonly teams: TeamQuery[],
}
