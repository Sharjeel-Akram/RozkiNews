import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


// export default class App extends Component {
const App = () => {
  // apiKey = process.env.REACT_APP_NEWS_API;
  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   setState({progress:progress})
  // }

  const apiKey = "2c964cb96985406a9a4b5ef985466c40"
  const [progress, setProgress] = useState(0)

  // render() {
  return (
    <div>
      {/* <Router> */}
      {/* <Router basename="/RozkiNews"> */}
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country='us' category='general' />} />
          {/* <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={6} country='us' category='general' />} /> */}
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country='us' category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country='us' category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country='us' category='entertainment' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country='us' category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country='us' category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country='us' category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country='us' category='technology' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;