import ReactDOM from "react-dom/client";
import { App } from "./App";
import './styles/tailwind.css';
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "./toolkit/store";


const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>
);