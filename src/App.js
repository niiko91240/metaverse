import './App.css';
import "aframe";
import universe from  "./stormtrooper.glb";
import stars from "./stars.webp"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function App() {
  const loader = new GLTFLoader();
  loader.load(universe, (d) => {
    const entity = document.getElementById("universe");
    entity.object3D.add(d.scene);
  })

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={stars} alt="" />
      </a-assets>
      <a-entity id="universe" position="0 0 0" scale="15 15 15"  ></a-entity>
      <a-light type="ambient" color="#445451"></a-light>
      <a-light type="directional" intensity="0.5" position="2 4 5"></a-light>
      <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0"></a-sky>
    </a-scene>
  );
}

export default App;