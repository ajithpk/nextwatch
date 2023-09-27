import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosNote,
  NotFoundVideosHeading,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const noteColor = isDarkTheme ? '#181818' : '#f9f9f9'

      const notFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFindImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Note Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We are sorry, the page you are requested could not be found
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
