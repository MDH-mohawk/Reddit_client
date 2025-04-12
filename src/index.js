import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { filtered } from './App';
import Reddit_posts from './Components/Reddit_posts/Reddit_posts';
import RedditPost from './Components/Reddit_post/Reddit_post';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
