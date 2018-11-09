export const LOAD_NEWS_LIST = 'LOAD_NEWS_LIST';
export const LOAD_NEWS_DETAIL = 'LOAD_NEWS_DETAIL';

function ReducerNews(state = {}, action) {
	switch (action.type) {
		case 'LOAD_NEWS_LIST':
			return {
				...state,
				newsList: require('../data')
			};
		case 'LOAD_NEWS_DETAIL':
			return {
				...state,
				newsDetail: action.payload
			};
	}
	return state;
}

export default ReducerNews;