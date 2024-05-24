import { createBrowserRouter } from "react-router-dom";

/* Public router */
import PublicLayout from "./app/pages/Layout";
import SignIn from "./app/pages/SignIn";

/* Private Router */
import RootLayout from "./app/pages/private/Layout";

export const Routers = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/login",
                element: <SignIn />
            }
        ]
    },
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <div>Hello word</div>
            }
        ]
    }
]);