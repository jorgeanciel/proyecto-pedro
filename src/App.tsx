import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/home.container";
import CompanyContainer from "./containers/company.container";
import CategoryContainer from "./containers/category.container";
import CustomerContainer from "./containers/customer.container";
import PaymentMethodContainer from "./containers/payment-method.container";
import MeasurementContainer from "./containers/mesurement.container";
import PaymentTypeContainer from "./containers/payment-type.container";
import SubCategoryContainer from "./containers/subcategory.container";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AuthValidate />}>
          <Route path="/" element={<LogInContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/register" element={<SignInUserContainer />} />
          <Route path="/test" element={<div>test</div>} />
        </Route> */}
        {/* <Route path="/user" element={<SignInUserContainer />} /> */}

        <Route path="/" element={<HomeContainer />} />
        <Route path="/category" element={<CategoryContainer />} />
        <Route path="/subcategory" element={<SubCategoryContainer />} />
        <Route path="/company" element={<CompanyContainer />} />
        <Route path="/customer" element={<CustomerContainer />} />
        <Route path="/payment-method" element={<PaymentMethodContainer />} />
        <Route path="/payment-type" element={<PaymentTypeContainer />} />
        <Route path="/mesurement" element={<MeasurementContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
