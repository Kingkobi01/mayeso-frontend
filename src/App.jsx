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
      <Layout />
    </RouterProvider>
  );
}

export default App;
