import { PostActionTypes } from "../../types/posts"

const initialState = {
    communityDetails: {},
    postsList: [],
    status: '',
    loading: false,
    error: null
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case PostActionTypes.CREATE_POST:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: 'Processing',
                loading: true,
                error: null
            }

        case PostActionTypes.CREATE_POST_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: [action.payload.newPost, ...state.postsList],
                status: action.payload.status,
                loading: false,
                error: null
            }

        case PostActionTypes.CREATE_POST_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }




        case PostActionTypes.CREATE_COMMUNITY_POST:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: 'Processing',
                loading: true,
                error: null
            }

        case PostActionTypes.CREATE_COMMUNITY_POST_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: [action.payload.newPost, ...state.postsList],
                status: action.payload.status,
                loading: false,
                error: null
            }

        case PostActionTypes.CREATE_COMMUNITY_POST_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }




        case PostActionTypes.CREATE_COMMUNITY:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: 'Processing',
                loading: true,
                error: null
            }

        case PostActionTypes.CREATE_COMMUNITY_SUCCESS:
            return {
                communityDetails: action.payload, // 2
                postsList: state.postsList,
                status: 'Created',
                loading: false,
                error: null
            }

        case PostActionTypes.CREATE_COMMUNITY_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }




        case PostActionTypes.SEARCH_FOR_COMMUNITIES:
            return {
                communityDetails: [],
                postsList: [],
                status: 'Processing',
                loading: true,
                error: null
            }

        case PostActionTypes.SEARCH_FOR_COMMUNITIES_SUCCESS:
            return {
                communityDetails: action.payload, // [communities]
                postsList: [],
                status: 'Found',
                loading: false,
                error: null
            }

        case PostActionTypes.SEARCH_FOR_COMMUNITIES_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }





        case PostActionTypes.FOLLOW_COMMUNITY:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: 'Processing',
                loading: true,
                error: null
            }

        case PostActionTypes.FOLLOW_COMMUNITY_SUCCESS:
            return {
                communityDetails: { ...state.communityDetails, isFollowing: action.payload },
                postsList: state.postsList,
                status: 'Succeeded',
                loading: false,
                error: null
            }

        case PostActionTypes.FOLLOW_COMMUNITY_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }




        case PostActionTypes.LOAD_POSTS:
            return {
                communityDetails: state.communityDetails,
                postsList: [],
                status: 'Loading posts ....',
                loading: true,
                error: null
            }

        case PostActionTypes.LOAD_POSTS_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: action.payload,
                status: 'All posts are loaded',
                loading: false,
                error: null
            }

        case PostActionTypes.LOAD_POSTS_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: [],
                status: 'An error occured',
                loading: false,
                error: null
            }





        case PostActionTypes.LOAD_COMMUNITY_POSTS:
            return {
                communityDetails: state.communityDetails,
                postsList: [],
                status: 'Loading posts ....',
                loading: true,
                error: null
            }

        case PostActionTypes.LOAD_COMMUNITY_POSTS_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: action.payload,
                status: 'All posts are loaded',
                loading: false,
                error: null
            }

        case PostActionTypes.LOAD_COMMUNITY_POSTS_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: [],
                status: 'An error occured',
                loading: false,
                error: null
            }





        case PostActionTypes.LOAD_COMMUNITY:
            return {
                communityDetails: {},
                postsList: [],
                status: 'Loading posts ....',
                loading: true,
                error: null
            }

        case PostActionTypes.LOAD_COMMUNITY_SUCCESS:
            return {
                communityDetails: action.payload,
                postsList: state.postsList,
                status: 'All posts are loaded',
                loading: false,
                error: null
            }

        case PostActionTypes.LOAD_COMMUNITY_ERROR:
            return {
                communityDetails: {},
                postsList: [],
                status: 'An error occured',
                loading: false,
                error: null
            }





        case PostActionTypes.LIKE_POST:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: '',
                loading: true,
                error: null
            }

        case PostActionTypes.LIKE_POST_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList.map(post => {
                    if (post.post_id !== action.payload.post) {
                        return { ...post }
                    } else {
                        return {
                            ...post,
                            likes: action.payload.status === 'Liked' ? post.likes + 1 : post.likes - 1,
                            didUserLiked: action.payload.status === 'Liked' ? true : false
                        }
                    }
                }),
                status: '',
                loading: false,
                error: null
            }

        case PostActionTypes.LIKE_POST_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: 'An error occured',
                loading: false,
                error: null
            }


        case PostActionTypes.LOAD_EDIT_POST:
            return {
                communityDetails: state.communityDetails,
                postsList: {},
                status: 'Loading ...',
                loading: true,
                error: null
            }

        case PostActionTypes.LOAD_EDIT_POST_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: action.payload,
                status: 'Finished',
                loading: false,
                error: null
            }

        case PostActionTypes.LOAD_EDIT_POST_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }

        case PostActionTypes.EDIT_POST:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: 'Loading ...',
                loading: true,
                error: null
            }

        case PostActionTypes.EDIT_POST_SUCCESS:
            return {
                communityDetails: state.communityDetails,
                postsList: action.payload,
                status: 'Finished',
                loading: false,
                error: null
            }

        case PostActionTypes.EDIT_POST_ERROR:
            return {
                communityDetails: state.communityDetails,
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }


        default:
            return state
    }
}
