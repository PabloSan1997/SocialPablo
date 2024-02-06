import ReactDOM from "react-dom/client";
import { App } from "./App";
import './styles/tailwind.css';
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>
);