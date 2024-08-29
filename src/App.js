import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
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
                <h2>Dodaj nowe zadanie</h2>
            </header>
            <div className="section__body">
                <form className="form js-form">
                    <input className="form__input js-input" placeholder="Co robimy?"/>
                    <button className="form__button">Dodaj zadanie </button>
                </form>
            </div>
        </section>
        <section className="section">
            <header className="section__header section__header--withButtons">
                <h2>Lista zadań</h2>
                <div className="js-buttonsContainer buttonsArea"></div>
            </header>
            <div className="section__body section__body--withList">
                <ul className="js-tasks"></ul>
            </div>
        </section>
    </main>
  );
}

export default App;
