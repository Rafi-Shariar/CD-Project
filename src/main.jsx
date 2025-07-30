import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from './pages/HomePage.jsx';
import Loading from './components/Loading.jsx';
import FunctionLayouts from './layouts/FunctionLayouts.jsx';
import { CodeInputProvider } from './context/CodeInputContext.jsx';
import RemoveExtraSpaces from './pages/functionPages/RemoveExtraSpaces.jsx';
import RemoveSpaces from './pages/functionPages/RemoveSpaces.jsx';
import KeywordsPage from './pages/functionPages/KeywordsPage.jsx';
import IdentifierPage from './pages/functionPages/IdentifierPage.jsx';
import TokenizationPage from './pages/functionPages/TokenizationPage.jsx';
import CommentsPage from './pages/functionPages/Comments.jsx';
import RemoveCommentsPage from './pages/functionPages/RemoveCommentsPage.jsx';
import Select from './components/Select.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path:'/loading',
    element:<Loading></Loading>
  },
  {
    path:'/operations',
    element:<FunctionLayouts></FunctionLayouts>,
    children:[
      {index:true, element:<Select></Select>},
      { path:'removeextraspace', element:<RemoveExtraSpaces></RemoveExtraSpaces> },
      { path:'removespace', element:<RemoveSpaces></RemoveSpaces> },
      { path:'keywords', element:<KeywordsPage></KeywordsPage> },
      { path:'identifier', element:<IdentifierPage></IdentifierPage> },
      { path:'tokenizing', element:<TokenizationPage></TokenizationPage> },
      { path:'comments', element:<CommentsPage></CommentsPage> },
      { path:'removedcomments', element:<RemoveCommentsPage></RemoveCommentsPage> },
  ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CodeInputProvider>
      <RouterProvider router={router}></RouterProvider>
    </CodeInputProvider>
  </StrictMode>,
)
