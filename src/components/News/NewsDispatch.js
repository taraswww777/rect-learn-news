import {LOAD_NEWS_LIST} from "../../reducers/ReducerNews";

export default function NewsDispatch(dispatch) {
	return {
		onLoadNewsList: () => {
			setTimeout(() => {
				return dispatch({type: LOAD_NEWS_LIST});
			}, 1000);
		}
	};
}
