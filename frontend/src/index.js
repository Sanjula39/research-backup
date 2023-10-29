import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import Dashboard from "views/Dashboard";
import NoMatch from "components/NoMatch";
import Register from "components/Forms/Register";
import Packaging from "components/Packaging/Packaging";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<AdminLayout />}>
            {/* <Route index element={} /> */}
            <Route path="Rubber" element={null}></Route>
            <Route path="Textiles" element={<Dashboard />}>
              <Route path=":country" element={<Dashboard />} />
            </Route>
            <Route path="Jewellery" element={null} />
            <Route path="Flowers" element={null} />
            <Route path="Leather" element={null} />
            <Route path="Toys" element={null} />
            <Route path="Wood" element={null} />
            <Route path="Ceremics" element={null} />
            <Route path="Footware" element={null} />
            <Route path="Register" element={<Register />} />
            <Route path="Packaging" element={<Packaging />} />
          </Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
