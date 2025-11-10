import React,{StrictMode}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RedditPosts from './Components/Reddit_posts/Redditposts';
import { Provider } from 'react-redux';
import store from './Store';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Navigate} from 'react-router';
import RedditPostModal from './Components/RedditPostModal/RedditPostModal';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/Reddit_client/' element={<App/>}>
    <Route path='/Reddit_client/' element={<Navigate to="/Reddit_client/UXDesign" replace/>}/>
      <Route path='/Reddit_client/:category' element={<RedditPosts/>}/>
      <Route path='/Reddit_client/:category/:post' element={<RedditPostModal/>}/>
  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
