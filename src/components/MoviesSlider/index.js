import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movies, category} = props
  const title = `${category} Movies`
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div style={{padding: '30px'}}>
      <h1 style={{color: '#ffffff'}}>{title}</h1>
      <Slider {...settings}>
        {movies.map(each => (
          <MovieItem movie={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
