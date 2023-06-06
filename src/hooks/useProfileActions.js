import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProfileActionCreators from '../store/actions/profile'

export default function useProfileActions () {
    const dispatch = useDispatch()

    return bindActionCreators(ProfileActionCreators, dispatch)
}