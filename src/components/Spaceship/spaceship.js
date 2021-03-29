

import { ShootBullet } from 'components/Bullets/ShootBullet';
import React, { useEffect, useState } from 'react';


import { Ship, Enemy, EnemyBig, Explosion, ExplosionBig, SpaceshipStyle, Bullet } from "./spaceship.style";



const Spaceship = () => {

    const [LeftArrow, setLeftArrow] = useState(false);
    const [RightArrow, setRightArrow] = useState(false);
    const [offsetLeft, setoffSetLeft] = useState();
    const [offsetTop, setOffSetTop] = useState();

    const getPosition = () => {
        const spaceshipElement = document.getElementById("spaceship");
        const getPositionSpaceship = spaceshipElement.offsetLeft + spaceshipElement.offsetWidth / 2;
        setoffSetLeft(getPositionSpaceship)
    }

    useEffect(() => {
        const shipElement = document.getElementById("spaceship");
        shipElement.style.bottom = "0px";
        const setLeft = shipElement.offsetLeft;
        const setWidth = shipElement.offsetWidth
        shipElement.style.left = `${window.innerWidth / 2 - setLeft - setWidth / 2}px`;
        const offsetLeft = setLeft - setWidth / 2;
        const offsetTop = shipElement.offsetTop;
        setoffSetLeft(offsetLeft);
        setOffSetTop(offsetTop)



    }, []);


    window.addEventListener("keydown", ({ code }) => {
        switch (code) {
            case "Space":
                console.log("spacja");
                ShootBullet()
                break;
            case "ArrowLeft":
                setLeftArrow(true)
                getPosition()
                break;
            case "ArrowRight":
                setRightArrow(true)
                getPosition()
                break;
            default:

        }
    })

    window.addEventListener("keyup", ({ code }) => {
        switch (code) {
            case "ArrowLeft":
                setLeftArrow(false);
                break;
            case "ArrowRight":
                setRightArrow(false)
                break;
            default:
        }
    })
    const whichKey = () => {
        const shipElement = document.getElementById("spaceship");
        const setPosition = shipElement.offsetLeft + shipElement.offsetWidth / 2;
        if (LeftArrow && setPosition > 0) {
            shipElement.style.left = `${parseInt(shipElement.style.left, 10) - 5}px`;
        }
        if (RightArrow && setPosition < window.innerWidth) {
            shipElement.style.left = `${parseInt(shipElement.style.left, 10) + 5}px`;
        }

    }


    requestAnimationFrame(whichKey)

    return (
        <SpaceshipStyle>
            <Ship id="spaceship" />
            <ShootBullet x={offsetLeft} y={offsetTop} />
        </SpaceshipStyle>
    )
}



export default Spaceship;