import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./Layout/MainLayout"
import HomePage from "./Pages/HomePage";
import AddJob from './components/Jobs/AddJob';
import JobListings from "./components/Jobs/JobListings";
import NotFoundPage from "./Pages/NotFoundPage";

const queryClient = new QueryClient(); 

// const App = () => {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element = {<MainLayout />} >
//         <Route index element = {<HomePage/>} />
//         <Route path='/add-job' element = {<AddJob/>} />
//         <Route path='/jobs' element = {<JobListings/>} />
//         <Route path='*' element = {<NotFoundPage/>} />
//       </Route>
//     )
//   );
//   return <RouterProvider router={router} />;
// }

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<MainLayout />} >
        <Route index element = {<HomePage/>} />
        <Route path='/add-job' element = {<AddJob/>} />
        <Route path='/jobs' element = {<JobListings/>} />
        <Route path='*' element = {<NotFoundPage/>} />
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}


export default App