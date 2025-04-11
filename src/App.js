import { FPV } from "./components/fpv"
import { Sky } from "@react-three/drei"
import { Cubes } from "./components/cubes"
import { Canvas } from "@react-three/fiber"
import { Ground } from "./components/ground"
import { Player } from "./components/player"
import { Physics } from "@react-three/cannon"

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  )
}

export default App
