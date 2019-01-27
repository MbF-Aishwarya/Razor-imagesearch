import React from "react";
import {getPhotos, searchPhotos} from './redux/action'; 
import {APP_ID} from './redux/token';
import {connect} from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

class InputComponent extends React.Component {
  componentDidMount = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${APP_ID}`)
    .then(response => response.json())
    .then(json => {
      this.props.getPhotosProp(json)
    })
  }
  handleSubmit(event){
    event.preventDefault();
    const typedValue = this.text.value;
    this.props.searchProp(typedValue);
      }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          className="input"
          placeholder="Search Marketing Designs"
          ref={element => this.text = element}
        />
        <button><i className="fa fa-search" /></button>
        </form>
          <div className="topPadding">
            {this.props.photos.map(photo => 
              <div className="imageInline"><img src={photo.urls.small} alt="pics" /></div>
              )}
            </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    photos:state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPhotosProp:(photoParameter) => dispatch(getPhotos(photoParameter)),
    searchProp:(searchItem) => dispatch(searchPhotos(searchItem))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
