import './App.css';
import React, {Component} from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
// import PropTypes from 'prop-types'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Route, Router, Routes } from 'react-router-dom'

// import React, { useRef } from 'react'               //both can be used
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    pageSize = 15;
    apiKey = process.env.REACT_APP_NEWS_API // how to use env to hide api

    state = {
        progress: 0
    }
    setProgress = (progress) => {
        this.setState({progress: progress})
    }

    render() {
        return (<div>
            <NavBar/>
            <LoadingBar color='#f11946'
                progress={
                    this.state.progress
                }
                // onLoaderFinished={() => setProgress(100)}
            />
            <News setProgress={
                    this.setProgress
                }
                apiKey={
                    this.apiKey
                }
                pageSize={
                    this.pageSize
                }
                country="us"
                category="general"/> {/* // <Router>
      // <Routes>
      //   <Route path='/' element={<NavBar />} />
      //   <Route path='/' element={<News pageSize={5} country="us" category="general" />} />
      //   <Route path='/business' element={<News pageSize={5} country="us" category="business" />} />
      //   <Route path='/entertainment' element={<News pageSize={5} country="us" category="entertainment" />} />
      //   <Route path='/general' element={<News pageSize={5} country="us" category="general" />} />
      //   <Route path='/health' element={<News pageSize={5} country="us" category="health" />} />
      //   <Route path='/science' element={<News pageSize={5} country="us" category="science" />} />
      //   <Route path='/sports' element={<News pageSize={5} country="us" category="sports" />} />
      //   <Route path='/sci& tech' element={<News pageSize={5} country="us" category="technology" />} />

      //   {/* we can pass keys through props in api also  */}
            {/** if we want to show 5 items per page we can pass this.props.pageSize on the place of numbers*/}
            {/* // </Routes> */}
            {/* // </Router> */} </div>

        )
          }
        }
