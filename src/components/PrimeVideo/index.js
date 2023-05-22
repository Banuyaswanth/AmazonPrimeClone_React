import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="prime-video">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <MoviesSlider key="Action" movies={actionMovies} category="Action" />
      <MoviesSlider key="Comedy" movies={comedyMovies} category="Comedy" />
    </div>
  )
}

export default PrimeVideo
