import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./ui/styles/GlobalStyles.style.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./ui/styles/Theme";

import { Provider } from "react-redux";
import store from "./data/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </>

  // </React.StrictMode>,
);
