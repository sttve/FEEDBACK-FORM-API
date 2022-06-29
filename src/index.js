import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const app = require('express') ();
const PORT = 8080;

app.use(express.json())


app.listen(
  PORT,
  () => console.log('its alive on http://localhost:${PORT}')
)
app.get('/forms', (req, res) => { 
  res.status(200).send;
});

app.post('/forms', (req, res) => {  
  
  const {name} = req.params;
  const {email} = req.body;
    if (!email) {
      res.status(418).send({ message: "we need a name!" }); 
    }
    
    res.send({
      email: "email with your ${name} and NAME of your ${email}",
    }
    )
});