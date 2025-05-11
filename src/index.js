import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RedditPosts from './Components/Reddit_posts/Reddit_posts';
import { Provider } from 'react-redux';
import store from './Store';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Navigate} from 'react-router';
import RedditPostModal from './Components/RedditPostModal/RedditPostModal';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Navigate to="/Apps" replace/>}/>
    <Route path="/:category" element={<RedditPosts/>}/>
    <Route path='/:category/:post' element={<RedditPostModal/>}/>
  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
