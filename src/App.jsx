import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AddJob from './components/Jobs/AddJob';
import JobListings from "./components/Jobs/JobListings";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobPage from "./components/Jobs/JobPage";
// import EditJobPage from "./components/Jobs/EditJobPage";

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/jobs' element={<JobListings />} />
        <Route path='/jobs/:id' element={<JobPage />} />
        {/* <Route path='/edit-job/:id' element={<EditJobPage />} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
