import PropTypes from "prop-types";

// Functional component
export const FirstApp = ( {
  title,
  subtitle = 'La tierra explota!'
} ) => {

  return (
    <>
    <h1>{ title }</h1>
    <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo'
}