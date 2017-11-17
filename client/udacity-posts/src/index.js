import React from 'react';
import ReactDOM from 'react-dom';
import { v4 } from 'uuid';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { reducer as form } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Layout from './components/main/Layout';
import CategoriesContainer from './containers/Categories/CategoriesContainer';
import category from './reducers/category';
import post from './reducers/post';

const setTokenOnClient = () => {
    const token = localStorage.getItem('token-udacity-post');
    if(!token){
        localStorage.setItem('token-udacity-post', `bearer token-${v4()}`);
    }
}

setTokenOnClient();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        form,
        category,
        post
    }),  
    {},
    composeEnhancers(
        applyMiddleware(logger),
        applyMiddleware(thunk)
    )  
)

ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
            <BrowserRouter>
                <Layout path="/" component={Layout}>
                    <Switch>
                    <Route exact path='/' component={CategoriesContainer} />
                    <Route exaxt path='/category/:id' component={(props) => (<div>{console.log(props)}</div>)} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('root')
);


registerServiceWorker();
