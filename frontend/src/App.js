import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from './context/AuthContext';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <HomePage />
            </AuthProvider>
        </Provider>
    );
}

export default App;
