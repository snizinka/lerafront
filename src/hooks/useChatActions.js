import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActionCreators from '../store/actions/chat'

export default function useChatActions () {
    const dispatch = useDispatch()

    return bindActionCreators(ChatActionCreators, dispatch)
}