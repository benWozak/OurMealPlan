import { ThemeProvider } from "@/components/layout/theme-provider.tsx";
import NavBar from "./components/layout/NavBar.tsx";
import PWABadge from "./PWABadge.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import MealPlan from "./pages/MealPlan";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-plan" element={<MealPlan />} />
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
