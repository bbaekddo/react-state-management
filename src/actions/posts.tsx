import axios from "axios";
import { ActionType } from "../reducers/posts";

export const fetchPosts = (): any => async (dispatch: any) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const data = response.data;
  dispatch({ type: ActionType.FETCH_POSTS, payload: data });
};
