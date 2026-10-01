import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [tytul, settytul] = useState('');
  const [autor, setautor] = useState('');
  const [gatunek, setgatunek] = useState('');



  return (
    <> 
      <form>
        <div class="form-group">
          <label for="bookTitle">Tytuł książki</label>
          <input type="text" class="form-control" id="bookTitle" />
          <label for="bookTitle">Autor książki</label>
          <input type="text" class="form-control" id="bookTitle" />
          <label for="bookTitle">Gatunek</label>
          <input type="" class="form-control" id="bookTitle" />
        </div>

        <button type="button" class="btn btn-primary">Dodaj</button>
      </form>
    </>
  )
}

export default App
