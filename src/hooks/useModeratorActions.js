import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ModeratorActionCreators from '../store/actions/moderator'

export default function useModeratorActions () {
    const dispatch = useDispatch()

    return bindActionCreators(ModeratorActionCreators, dispatch)
}