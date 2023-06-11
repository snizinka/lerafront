export const PostActionTypes = {
    CREATE_POST: 'CREATE_POST',
    CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
    CREATE_POST_ERROR: 'FETCH_USERS_ERROR',

    CREATE_COMMUNITY_POST: 'CREATE_COMMUNITY_POST',
    CREATE_COMMUNITY_POST_SUCCESS: 'CREATE_COMMUNITY_POST_SUCCESS',
    CREATE_COMMUNITY_POST_ERROR: 'CREATE_COMMUNITY_POST_ERROR',

    CREATE_COMMUNITY: 'CREATE_COMMUNITY',
    CREATE_COMMUNITY_SUCCESS: 'CREATE_COMMUNITY_SUCCESS',
    CREATE_COMMUNITY_ERROR: 'CREATE_COMMUNITY_ERROR',

    LOAD_EDIT_POST: 'LOAD_EDIT_POST',
    LOAD_EDIT_POST_SUCCESS: 'LOAD_EDIT_POST_SUCCESS',
    LOAD_EDIT_POST_ERROR: 'LOAD_EDIT_POST_ERROR',

    EDIT_POST: 'EDIT_POST',
    EDIT_POST_SUCCESS: 'EDIT_POST_SUCCESS',
    EDIT_POST_ERROR: 'EDIT_POST_ERROR',

    LOAD_POSTS: 'LOAD_POSTS',
    LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
    LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',

    LOAD_COMMUNITY_POSTS: 'LOAD_COMMUNITY_POSTS',
    LOAD_COMMUNITY_POSTS_SUCCESS: 'LOAD_COMMUNITY_POSTS_SUCCESS',
    LOAD_COMMUNITY_POSTS_ERROR: 'LOAD_COMMUNITY_POSTS_ERROR',

    LOAD_COMMUNITY: 'LOAD_COMMUNITY',
    LOAD_COMMUNITY_SUCCESS: 'LOAD_COMMUNITY_SUCCESS',
    LOAD_COMMUNITY_ERROR: 'LOAD_COMMUNITY_ERROR',

    LIKE_POST: 'LIKE_POST',
    LIKE_POST_SUCCESS: 'LIKE_POST_SUCCESS',
    LIKE_POST_ERROR: 'LIKE_POST_ERROR',

    SEARCH_FOR_COMMUNITIES: 'SEARCH_FOR_COMMUNITIES',
    SEARCH_FOR_COMMUNITIES_SUCCESS: 'SEARCH_FOR_COMMUNITIES_SUCCESS',
    SEARCH_FOR_COMMUNITIES_ERROR: 'SEARCH_FOR_COMMUNITIES_ERROR',

    FOLLOW_COMMUNITY: 'FOLLOW_COMMUNITY',
    FOLLOW_COMMUNITY_SUCCESS: 'FOLLOW_COMMUNITY_SUCCESS',
    FOLLOW_COMMUNITY_ERROR: 'FOLLOW_COMMUNITY_ERROR',

    REPORT_ON_POST: 'REPORT_ON_POST',
    REPORT_ON_POST_SUCCESS: 'REPORT_ON_POST_SUCCESS',
    REPORT_ON_POST_ERROR: 'REPORT_ON_POST_ERROR',
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

const CreateCommunityPostAction = {
    type: PostActionTypes.CREATE_COMMUNITY_POST
}

const CreateCommunitySuccessAction = {
    type: PostActionTypes.CREATE_COMMUNITY_POST_SUCCESS,
    payload: []
}

const CreateCommunityErrorAction = {
    type: PostActionTypes.CREATE_COMMUNITY_POST_ERROR,
    payload: []
}


const LoadEditPostAction = {
    type: PostActionTypes.LOAD_EDIT_POST
}

const LoadEditPostSuccessAction = {
    type: PostActionTypes.LOAD_EDIT_POST_SUCCESS,
    payload: {}
}

const LoadEditPostErrorAction = {
    type: PostActionTypes.LOAD_EDIT_POST_ERROR,
    payload: {}
}

const EditPostAction = {
    type: PostActionTypes.EDIT_POST
}

const EditPostSuccessAction = {
    type: PostActionTypes.EDIT_POST_SUCCESS,
    payload: {}
}

const EditPostErrorAction = {
    type: PostActionTypes.EDIT_POST_ERROR,
    payload: {}
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



const LoadCommunityPostAction = {
    type: PostActionTypes.LOAD_COMMUNITY_POSTS
}

const LoadCommunityPostSuccessAction = {
    type: PostActionTypes.LOAD_COMMUNITY_POSTS_SUCCESS,
    payload: []
}

const LoadCommunityPostErrorAction = {
    type: PostActionTypes.LOAD_COMMUNITY_POSTS_ERROR,
    payload: []
}



const LoadCommunityAction = {
    type: PostActionTypes.LOAD_COMMUNITY
}

const LoadCommunitySuccessAction = {
    type: PostActionTypes.LOAD_COMMUNITY_SUCCESS,
    payload: []
}

const LoadCommunityErrorAction = {
    type: PostActionTypes.LOAD_COMMUNITY_ERROR,
    payload: []
}



const CreateCommunityAction = {
    type: PostActionTypes.CREATE_COMMUNITY
}

const CreateCommunitSuccessAction = {
    type: PostActionTypes.CREATE_COMMUNITY_SUCCESS,
    payload: []
}

const CreateCommunitErrorAction = {
    type: PostActionTypes.CREATE_COMMUNITY_ERROR,
    payload: []
}



const SearchForCommunityAction = {
    type: PostActionTypes.SEARCH_FOR_COMMUNITIES
}

const SearchForCommunitSuccessAction = {
    type: PostActionTypes.SEARCH_FOR_COMMUNITIES_SUCCESS,
    payload: []
}

const SearchForCommunitErrorAction = {
    type: PostActionTypes.SEARCH_FOR_COMMUNITIES_ERROR,
    payload: []
}



const FollowCommunityAction = {
    type: PostActionTypes.FOLLOW_COMMUNITY
}

const FollowCommunitSuccessAction = {
    type: PostActionTypes.FOLLOW_COMMUNITY_SUCCESS,
    payload: []
}

const FollowCommunitErrorAction = {
    type: PostActionTypes.FOLLOW_COMMUNITY_ERROR,
    payload: []
}



const ReportAction = {
    type: PostActionTypes.REPORT_ON_POST
}

const ReportSuccessAction = {
    type: PostActionTypes.REPORT_ON_POST_SUCCESS,
    payload: []
}

const ReportErrorAction = {
    type: PostActionTypes.REPORT_ON_POST_ERROR,
    payload: []
}


export const PostsAction = CreatePostAction | CreatePostSuccessAction | CreatePostErrorAction
    | LoadPostAction | LoadPostSuccessAction | LoadPostErrorAction
    | LikePostAction | LikePostSuccessAction | LikePostErrorAction
    | LoadEditPostAction | LoadEditPostSuccessAction | LoadEditPostErrorAction
    | EditPostAction | EditPostSuccessAction | EditPostErrorAction
    | CreateCommunityPostAction | CreateCommunitySuccessAction | CreateCommunityErrorAction
    | LoadCommunityPostAction | LoadCommunityPostSuccessAction | LoadCommunityPostErrorAction
    | LoadCommunityAction | LoadCommunitySuccessAction | LoadCommunityErrorAction
    | CreateCommunityAction | CreateCommunitSuccessAction | CreateCommunitErrorAction
    | SearchForCommunityAction | SearchForCommunitSuccessAction | SearchForCommunitErrorAction
    | FollowCommunityAction | FollowCommunitSuccessAction | FollowCommunitErrorAction
    | ReportAction | ReportSuccessAction | ReportErrorAction