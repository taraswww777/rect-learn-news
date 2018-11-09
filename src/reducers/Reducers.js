import {combineReducers} from "redux";
import ReducerNews from "./ReducerNews";


export function mapStateToProps(state) {
	return {
		store: state
	}
}

export default combineReducers({ReducerNews});

