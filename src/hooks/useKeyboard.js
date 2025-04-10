import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
  const keyActionMap = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    ArrowUp: "moveForward",
    ArrowDown: "moveBackward",
    ArrowLeft: "moveLeft",
    ArrowRight: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log"
  }
  return keyActionMap[key]
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  })
  const handleKeyDown = useCallback((e) => {
    if (actionByKey(e.code)) {
      setActions((prev) => { return ({ ...prev, [actionByKey(e.code)]: true }) })
    }
  }, [])
  const handleKeyUp = useCallback((e) => {
    if (actionByKey(e.code)) {
      setActions((prev) => { return ({ ...prev, [actionByKey(e.code)]: false }) })
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("keyup", handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return actions
}