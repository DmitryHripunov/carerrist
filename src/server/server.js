import express from 'express';
import ReactDOM from 'react-dom/server';

import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

// app.get('/auth', (req, res) => {
//   axios
//     .post(
//       'https://www.reddit.com/api/v1/access_token',
//       `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:9000/auth`,
//       {
//         auth: {
//           username: process.env.CLIENT_ID,
//           password: 'WdtP8Xgim-btpjaKsgi7smwRdawUHQ',
//         },
//         headers: { 'Content-type': 'application/x-www-form-urlencoded' },
//       }
//     )
//     .then(({ data }) => {
//       res.send(
//         indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
//       );
//     })
//     .catch(console.log);
// });

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});