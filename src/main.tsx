import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Slots } from './pages/Slots/Slots'
import { Blackjack } from './pages/Blackjack/Blackjack.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Words } from './pages/Words/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: '/slots',
        element: <Slots />
      },
      {
        path: '/blackjack',
        element: <Blackjack />
      },
      {
        path: '/words',
        element: <Words />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
