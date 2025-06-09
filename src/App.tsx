import { ThemeProvider } from "@/components/layout/theme-provider.tsx";
import NavBar from "./components/layout/NavBar.tsx";
import PWABadge from "./PWABadge.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MealPlan from "./pages/MealPlan";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handler = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<MealPlan />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <NavBar />
        <PWABadge />
      </Router>
    </ThemeProvider>
  );
}

export default App;
