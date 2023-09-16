import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import TodosFooter from './components/TodosFooter';

const App: React.FC = () =>  {
  return (
    <div className="App">
      <main className="main">
        <section className="todos">
          <h1 className="todos__title">todos</h1>
          <div className="todos__content">
            <AddTask />
            <Tasks />
            <TodosFooter />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
