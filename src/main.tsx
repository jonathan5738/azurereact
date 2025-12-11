import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Homepage from "./components/Homepage";
import ProductPage from "./components/ProductPage";

const element = document.getElementById("root")!;

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/homepage",
                Component: Homepage
            }, 
            {
                path: "/products",
                Component: ProductPage
            }
        ]
    }
])

createRoot(element).render(
    <RouterProvider router={router}>
    </RouterProvider>
)