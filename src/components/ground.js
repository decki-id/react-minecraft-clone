import { usePlane } from "@react-three/cannon"
import { useStore } from "../hooks/useStore"
import { groundTexture } from "../images/textures"

export const Ground = () => {
    const
        [ref] = usePlane(() => ({
            rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0]
        })),
        [addCube] = useStore((state) => [state.addCube]),
        click = (e) => {
            e.stopPropagation()
            const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val))
            addCube(x, y, z)
        }

    groundTexture.repeat.set(100, 100)

    return (
        <mesh onClick={click} ref={ref}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )
}