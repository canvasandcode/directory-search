import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'} />, document.getElementById('root'));

serviceWorker.unregister();
