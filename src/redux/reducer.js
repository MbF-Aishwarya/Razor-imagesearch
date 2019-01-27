import {GET_PHOTOS} from './action';

const initialState = {photos:[]}; 

const imageReducer = ( state = initialState, action)=> {
	switch(action.type){
		case GET_PHOTOS:
		return {
			...state,
			photos: action.payload
		}
		default:
		return state
	}
}

export default imageReducer;