import { NearestFilter, RepeatWrapping, TextureLoader } from "three"
import { dirtImg, logImg, grassImg, glassImg, woodImg } from "./images"

const
    dirtTexture = new TextureLoader().load(dirtImg),
    logTexture = new TextureLoader().load(logImg),
    grassTexture = new TextureLoader().load(grassImg),
    glassTexture = new TextureLoader().load(glassImg),
    woodTexture = new TextureLoader().load(woodImg),
    groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export { dirtTexture, logTexture, grassTexture, glassTexture, woodTexture, groundTexture }