export interface TeamQuery {
  readonly name: string;
  readonly members: {
    avatarUrl: string
  }[]
}
