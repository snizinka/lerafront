import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UsersActionCreators from '../store/actions/users'

export default function useUserActions () {
    const dispatch = useDispatch()

    return bindActionCreators(UsersActionCreators, dispatch)
}

