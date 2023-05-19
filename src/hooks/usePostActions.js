import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostActionCreators from '../store/actions/post'

export default function usePostActions () {
    const dispatch = useDispatch()

    return bindActionCreators(PostActionCreators, dispatch)
}

