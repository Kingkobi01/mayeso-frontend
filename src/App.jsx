import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import { About, CreateQuiz, FAQ, Home, Quiz, Quizes, Scores } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/scores",
        element: <Scores />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/quiz/create",
        element: <CreateQuiz />,
      },
      {
        path: "/quiz",
        element: <Quizes />,
      },
      {
        path: "/quiz/:quizId",
        element: <Quiz />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Layout />
      </SkeletonTheme>
    </RouterProvider>
  );
}

export default App;
