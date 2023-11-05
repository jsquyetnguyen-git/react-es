import CoreConcept from './CoreConcept';
import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data'

function App() {
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
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
          <CoreConcept
            img={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
          />
          <CoreConcept
            img={CORE_CONCEPTS[1].image}
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
          /><CoreConcept
            img={CORE_CONCEPTS[2].image}
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
          />
          <CoreConcept
            img={CORE_CONCEPTS[3].image}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
          />
        </ul>
      </div>

    </div>
  );
}

export default App;
