import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home";
import { SharedPhrases } from "./pages/shared-phrases";
import { RouterLayout } from "./common/RouterLayout";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/shared-phrases" element={<SharedPhrases />} />
      </Route>
    </Routes>
  );
}

export default App;
