import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//@ts-ignore
import 'swiper/css';
//@ts-ignore

import 'swiper/css/navigation';
//@ts-ignore

import 'swiper/css/pagination';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
