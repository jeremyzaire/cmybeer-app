import { render as rtlRender } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BasketContext } from "../../contexts";

/**
 * Exemple simpliste pour formation.
 * Ne pas reproduire sur un projet réel.
 *
 */
export default function render(component) {
  const queryClient = new QueryClient();

  rtlRender(
    <QueryClientProvider client={queryClient}>
      <BasketContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={component} />
          </Routes>
        </BrowserRouter>
      </BasketContext.Provider>
    </QueryClientProvider>
  );
}
