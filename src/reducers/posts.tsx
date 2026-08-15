export enum ActionType {
  FETCH_POSTS = "FETCH_POSTS",
  DELETE_POST = "DELETE_POST",
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const posts = (
  state: Post[] = [],
  action: { type: ActionType; payload: Post[] | Post },
) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return [...state, ...(action.payload as Post[])];
    case ActionType.DELETE_POST:
      return state.filter((post) => post.id !== (action.payload as Post).id);
    default:
      return state;
  }
};

export default posts;
