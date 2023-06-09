import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { store } from './stores/index'
import { Provider } from 'react-redux';
import MainLayout from './components/layout/MainLayout';
import Home from './routes/Home';
import About from './routes/About';
import Movies from './routes/Movie/Movies';
import Music from './routes/Music/Music';
import Contact from './routes/Contact';
import MoviesDetails from './routes/Movie/MoviesDetails'
import useLocales from './hooks/useLocales';
import { useState } from 'react';
import LanguageContext from './context/LanguageContext';
import MusicDetails from './routes/Music/MusicDetails';
import PhotoGalleryLobby from './routes/PhotoGallery/PhotoGalleryLobby';
import PhotoGalleryIndividualCategory from './routes/PhotoGallery/PhotoGalleryIndividualCategory';


function App() {
  const theme = createTheme(); //TOOD: change this
  const { allLang, enUS } = useLocales();

  const [langMode, setLangMode] = useState(
    allLang.find((element) => element.value === localStorage.getItem('i18nextLng'))?.systemLang || enUS
  );

  return (
    <Provider store={store}>
      <LanguageContext.Provider value={{ langMode, setLangMode }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="movies" element={<Movies />} />
              <Route path="music" element={<Music />} />
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="moviesdetails" element={<MoviesDetails />} />
              <Route path="musicdetails" element={<MusicDetails />} />
              <Route path="photo-gallery-lobby" element={<PhotoGalleryLobby />} />
              <Route path="photo-gallery-individual-category" element={<PhotoGalleryIndividualCategory />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </LanguageContext.Provider>
    </Provider>
  );
}

export default App;
