import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {GlobalStyles} from "./styles/globalStyles.tsx";
import {FontStyles} from "./styles/globalStyles.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles/>
        <FontStyles/>
        <App/>
    </StrictMode>,
)
