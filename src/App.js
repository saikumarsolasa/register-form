import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerRegistration from "./pages/customer-registration";
import TransferInformation from "./pages/transfer-information";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<CustomerRegistration />}
          />
          <Route path="transfer-information" element={<TransferInformation/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
