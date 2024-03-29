import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TokenContext } from '../helpers/TokenContext.js';
import Welcome from '../components/Welcome.js';
import Login from '../components/Login.js';
import SignUp from '../components/SignUp.js';
import CreateJob from '../components/CreateJob.js';
import Jobs from '../components/Jobs.js';
import ConversationPreviews from '../components/ConversationPreviews.js';
import NotFound from '../components/NotFound.js';
import Account from '../components/Account.js';

const Router = () => {

    const { token } = useContext(TokenContext);

    const loggedIn = (token && token !== '') ? true : false;

    return(
        <main>
            <Routes>
                <Route path="/" element={loggedIn ? <Navigate to="/jobs"/> : <Welcome />} />
                <Route path="/login" element={loggedIn ? <Navigate to="/jobs"/> : <Login />} />
                <Route path="/signup" element={loggedIn ? <Navigate to="/jobs"/> : <SignUp />} />
                <Route path="/create-job" element={!loggedIn ? <Navigate to="/login"/> : <CreateJob />} />
                <Route path="/jobs" element={!loggedIn ? <Navigate to="/login"/> : <Jobs />} />
                <Route path="/messages" element={!loggedIn ? <Navigate to="/login"/> : <ConversationPreviews/>} />
                <Route path="/account" element={!loggedIn ? <Navigate to="/login"/> : <Account />} />

                {/* default catch all redirect to 404 page */}
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
        </main>
    );
}

export default Router;