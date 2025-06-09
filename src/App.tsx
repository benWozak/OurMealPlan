import { ThemeProvider } from "@/components/layout/theme-provider.tsx";
import NavBar from "./components/layout/NavBar.tsx";
import PWABadge from "./PWABadge.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";
import MealPlan from "./pages/MealPlan";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const handler = (e: MouseEvent) => e.preventDefault();
  //   document.addEventListener("contextmenu", handler);
  //   return () => document.removeEventListener("contextmenu", handler);
  // }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <header>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <SignedIn>
        <Router>
          <Routes>
            <Route path="/" element={<MealPlan />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <NavBar />
          <PWABadge />
        </Router>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className="text-2xl font-bold mb-2">Sign In</h1>
          <SignInButton>
            <button className="bg-primary text-primary-foreground px-8 py-2 rounded hover:cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <h1 className="text-2xl font-bold my-2">Or</h1>
          <SignUpButton>
            <button className="border-2 border-primary border-solid text-primary px-8 py-2 rounded hover:cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>
    </ThemeProvider>
  );
}

export default App;
