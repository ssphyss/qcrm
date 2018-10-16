import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import routerConfig from './router';
import './index.css';
// import './sass/all.scss';


// 1. Initialize
// const app = dva();
// h5 history mode
const app = dva({
    history: createHistory()
});
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/auth').default);

// 4. Router
app.router(routerConfig);
// app.router(require('./router').default);
// app.router(require('./../config/router.config').default);

// 5. Start
app.start('#root');
