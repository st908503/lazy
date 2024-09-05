import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const Home = React.lazy(() => import('./Home'))
  const Contact = React.lazy(() => import('./Contact'))
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>..Loading</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
