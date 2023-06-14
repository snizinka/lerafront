import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as NotificationsActionCreators from '../store/actions/notification'

export default function useNotificationsActions () {
    const dispatch = useDispatch()

    return bindActionCreators(NotificationsActionCreators, dispatch)
}