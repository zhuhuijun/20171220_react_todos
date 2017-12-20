import React from 'react';
import  {render} from 'react-dom';
import App from './components/App';
import store from './store';
import {Provider} from 'react-redux';
//负责向子组件提供上下文对象
render(<Provider store={store}>
    <App/>
</Provider>, document.querySelector("#root"));