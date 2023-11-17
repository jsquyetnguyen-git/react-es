import CoreConcept from './CoreConcept';
import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data'

function App() {
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Es</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>

      <div id="core-concepts">
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </div>

    </div>
  );
}

export default App;
