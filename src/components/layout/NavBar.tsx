"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { Search, X, Plus, Minus, Calendar, BookOpen } from "lucide-react";

const NavBar = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const location = useLocation();

  const togglePanel = (panel: string) => {
    if (activePanel === panel) {
      setActivePanel(null);
    } else {
      setActivePanel(panel);
    }
  };

  const toggleAccordion = (accordion: string) => {
    if (activeAccordion === accordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(accordion);
    }
  };

  const navItems = [
    // {
    //   name: "Home",
    //   icon: <Home className="h-6 w-6" />,
    //   href: "/",
    //   panel: null,
    // },
    {
      name: "Meal Plan",
      icon: <Calendar className="h-6 w-6" />,
      href: "/",
      panel: null,
    },
    {
      name: "Recipes",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/recipes",
      panel: null,
    },
    {
      name: "Search",
      icon: <Search className="h-6 w-6" />,
      href: null,
      panel: "search",
    },
  ];

  const categories = [
    {
      name: "Courses",
      subcategories: ["Breakfast", "Lunch", "Dinner", "Dessert"],
    },
    {
      name: "Cuisines",
      subcategories: ["Italian", "Mexican", "Japanese", "Indian"],
    },
    {
      name: "Dietary",
      subcategories: ["Vegetarian", "Vegan", "Gluten-Free", "Keto"],
    },
    {
      name: "Difficulty",
      subcategories: ["Easy", "Medium", "Hard"],
    },
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="flex h-16">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-1 flex-col items-center justify-center ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
                aria-label={item.name}
              >
                {item.icon}
                <span className="mt-1 text-xs">{item.name}</span>
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => item.panel && togglePanel(item.panel)}
                className={`flex flex-1 flex-col items-center justify-center ${
                  activePanel === item.panel
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
                aria-label={item.name}
              >
                {item.icon}
                <span className="mt-1 text-xs">{item.name}</span>
              </button>
            )
          )}
        </div>
      </div>

      <AnimatePresence>
        {activePanel === "search" && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-20 overflow-auto bg-white pb-16 dark:bg-black"
          >
            <div className="sticky top-0 z-10 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-semibold dark:text-white">
                  {activePanel.charAt(0).toUpperCase() + activePanel.slice(1)}
                </h2>
                <button
                  onClick={() => setActivePanel(null)}
                  className="rounded-full p-2 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  aria-label="Close panel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div>
                <div className="mb-6">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search for recipes, ingredients..."
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:placeholder:text-gray-500"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Browse Categories
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => toggleAccordion(category.name)}
                        className="text-left"
                      >
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span className="font-medium dark:text-gray-100">
                            {category.name}
                          </span>
                          {activeAccordion === category.name ? (
                            <Minus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          ) : (
                            <Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          )}
                        </div>

                        <AnimatePresence>
                          {activeAccordion === category.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 py-2 pl-3">
                                {category.subcategories.map((sub) => (
                                  <Link
                                    key={sub}
                                    to={`/recipes/${sub.toLowerCase()}`}
                                    className="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                  >
                                    {sub}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Recent Searches
                  </h3>
                  <div className="space-y-2">
                    <button className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      <Search className="mr-2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span>Chicken breast recipes</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      <Search className="mr-2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span>Quick weeknight meals</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
