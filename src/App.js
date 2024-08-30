import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść obiad", done: false },
  { id: 3, content: "wyprowadzić psa", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
	<header>
        <h1>Lista zadań</h1>
		</header>
        <section className="section">
            <header className="section__header">
                <h2 className='section__title'>Dodaj nowe zadanie</h2>
            </header>
            <div className="section__body">    
            <form className="form">
            <input className="form__input" placeholder="Co robimy?"/>
                    <button className="form__button">Dodaj zadanie </button>
                    </form>
            </div>
        </section>
        <section className="section">
            <header className="section__header section__header--withButtons">
                <h2>Lista zadań</h2>
                <div className="buttonsArea">
                  <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
                </div>
            </header>
            <div className="section__body section__body--withList">
                <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
            </div>
        </section>
    </main>
  );
}

export default App;
