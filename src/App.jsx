import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";

import CountryList from "./features/countries/CountryList";
import CityList from "./features/cities/CityList";
import CityDetails from "./features/cities/CityDetails";
import AddCityForm from "./features/cities/AddCityForm";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import LoaderFullPage from "./ui/LoaderFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <Suspense fallback={<LoaderFullPage />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route
                    index
                    element={
                      <p>
                        Hmm! Nothing to show. Try clicking one of the options.
                        Maybe they know something.
                      </p>
                    }
                  />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<CityDetails />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<AddCityForm />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
