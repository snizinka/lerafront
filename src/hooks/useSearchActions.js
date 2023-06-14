import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as SearchActionCreators from '../store/actions/search'

export default function useSearchActions () {
    const dispatch = useDispatch()

    return bindActionCreators(SearchActionCreators, dispatch)
}