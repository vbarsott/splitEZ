import './styles/css/styles.css';
import api from './api/groups';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Expenses from './components/Expenses';
import Header from './components/Header';
import Home from './components/Home';
import Groups from './components/Groups';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Result from './components/Result';

import { useLocalStorage } from './components/useLocalStorage';

function App() {
  const [groups, setGroups] = useLocalStorage('groups', '');

  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <div className='appWrapper'>
        <div className='container my-3'>
          <div className='border border-primary rounded-3'>
            <header>
              <Header />
            </header>

            <nav>
              <MainNav />
            </nav>

            <main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route
                  path='/groups'
                  element={<Groups groups={groups} setGroups={setGroups} />}
                />
                <Route
                  path='/expenses'
                  element={
                    <Expenses
                      groups={groups}
                      expenses={expenses}
                      setExpenses={setExpenses}
                    />
                  }
                />
                <Route
                  path='/result'
                  element={<Result groups={groups} expenses={expenses} />}
                />
              </Routes>
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
