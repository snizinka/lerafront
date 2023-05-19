export const PostActionTypes = {
    CREATE_POST: 'CREATE_POST',
    CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
    CREATE_POST_ERROR: 'FETCH_USERS_ERROR',
}

const CreatePostAction = {
    type: PostActionTypes.CREATE_POST
}

const CreatePostSuccessAction = {
    type: PostActionTypes.CREATE_POST_SUCCESS,
    payload: []
};

const CreatePostErrorAction = {
    type: PostActionTypes.CREATE_POST_ERROR,
    payload: []
}

export const PostsAction = CreatePostAction | CreatePostSuccessAction | CreatePostErrorAction
