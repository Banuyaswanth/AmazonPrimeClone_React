import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie

  return (
    <div>
      <Popup
        modal
        lockScroll
        trigger={
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
        position="center center"
      >
        {close => (
          <div className="modal">
            <button
              data-testid="closeButton"
              className="close-btn"
              onClick={close}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} height="300px" width="576px" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
