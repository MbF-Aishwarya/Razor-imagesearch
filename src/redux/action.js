import {APP_ID} from './token';
export const GET_PHOTOS = "GET_PHOTOS";

const callPhotos = (type) => {
	return function (payload){
		return{
			type,
		    payload
		}
	}
}

export const getPhotos = callPhotos(GET_PHOTOS);

export const searchPhotos = (query) => {
	return (dispatch,getState) => {
		fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${APP_ID}`)
		.then(response => response.json())
		.then(json => {
			dispatch(getPhotos(json.results))
		})
	}
}