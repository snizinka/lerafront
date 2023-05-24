export const PostActionTypes = {
    CREATE_POST: 'CREATE_POST',
    CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
    CREATE_POST_ERROR: 'FETCH_USERS_ERROR',

    LOAD_POSTS: 'LOAD_POSTS',
    LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
    LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',

    LIKE_POST: 'LIKE_POST',
    LIKE_POST_SUCCESS: 'LIKE_POST_SUCCESS',
    LIKE_POST_ERROR: 'LIKE_POST_ERROR',
}

const CreatePostAction = {
    type: PostActionTypes.CREATE_POST
}

const CreatePostSuccessAction = {
    type: PostActionTypes.CREATE_POST_SUCCESS,
    payload: []
}

const CreatePostErrorAction = {
    type: PostActionTypes.CREATE_POST_ERROR,
    payload: []
}


const LoadPostAction = {
    type: PostActionTypes.CREATE_POST
}

const LoadPostSuccessAction = {
    type: PostActionTypes.CREATE_POST_SUCCESS,
    payload: []
}

const LoadPostErrorAction = {
    type: PostActionTypes.CREATE_POST_ERROR,
    payload: []
}

const LikePostAction = {
    type: PostActionTypes.LIKE_POST
}

const LikePostSuccessAction = {
    type: PostActionTypes.LIKE_POST_SUCCESS,
    payload: []
}

const LikePostErrorAction = {
    type: PostActionTypes.LIKE_POST_ERROR,
    payload: []
}

export const PostsAction = CreatePostAction | CreatePostSuccessAction | CreatePostErrorAction
| LoadPostAction | LoadPostSuccessAction | LoadPostErrorAction
| LikePostAction | LikePostSuccessAction | LikePostErrorAction