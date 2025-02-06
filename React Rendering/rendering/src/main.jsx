import {createRoot} from 'react-dom/client'
import './index.css'
import Test from './Test.jsx'
import Test1 from "./Test1.jsx";


createRoot(document.getElementById('root')).render(
    <div>
        <Test/>
        <Test1/>
    </div>
)



