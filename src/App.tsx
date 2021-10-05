import { Provider } from "react-redux";
import Home from "./components/home/Home";
import { store } from "./js/redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
