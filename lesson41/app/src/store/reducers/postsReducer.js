import { posts_data } from "../../data/posts";

export const postsReducer = (state = posts_data, action) => {
  if (action.type === "CHANGE_LIKE") {
    const target_post = state.find((el) => el.id === action.payload);
    target_post.like = !target_post.like;
    return [...state];
  } else if (action.type === "REMOVE") {
    return state.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_POST") {
    return [
      ...state,
      {
        id: Date.now(),
        ...action.payload,
      },
    ];
  } else if (action.type === "DELETE_COMMENT") {
    const target = state.find((el) => el.id === action.payload.post_id);
    target.comments = target.comments.filter(
      (el) => el.id !== action.payload.comment_id
    );
    return [...state];
  } else if (action.type === "ADD_NEW_COMMENT") {
    // console.log(action);
    const target = state.find((el) => el.id === action.payload.post_id);
    target.comments.push({
      id: Date.now(),
      comment: action.payload.newComment,
    });
    return [...state]
  }

  return state;
};
