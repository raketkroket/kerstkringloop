import React from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import Home from './src/pages/Home.tsx';
    import Volunteer from './src/pages/Volunteer.tsx';
    import About from './src/pages/About.tsx';
    import NotFound from './src/pages/NotFound.tsx';

    const App: React.FC = () => {
      return (
        <Theme appearance="light" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen font-sans selection:bg-red-100 selection:text-red-900">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vrijwilligers" element={<Volunteer />} />
                <Route path="/over-ons" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </main>
          </Router>
        </Theme>
      );
    }

    export default App;