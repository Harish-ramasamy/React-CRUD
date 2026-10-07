import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Calculate from './practice.jsx';
import BoardFn from './Tic-Tac-Toe.jsx';
import FormFn from './CRUD.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Calculate /> */}
    {/* <BoardFn /> */}
    <FormFn />
  </StrictMode>,
)
