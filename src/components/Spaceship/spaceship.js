import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Ship, Enemy, EnemyBig, Explosion, ExplosionBig, SpaceshipStyle, Bullet } from "./spaceship.style"

const Spaceship = () => {
    const [LeftArrow, setLeftArrow] = useState(false);
    const [RightArrow, setRightArrow] = useState(false);
    useEffect(() => {
        const shipElement = document.getElementById("spaceship");
        shipElement.style.bottom = "0px";
        const setLeft = shipElement.offsetLeft;
        const setWidth = shipElement.offsetWidth
        shipElement.style.left = `${window.innerWidth / 2 - setLeft - setWidth / 2}px`;
    }, []);



    window.addEventListener("keydown", ({ key }) => {
        // const shipElement = document.getElementById("spaceship")
        switch (key) {
            case "ArrowLeft":
                setLeftArrow(true)
                // shipElement.style.left = `${parseInt(shipElement.style.left, 10) - 10}px`
                break;
            case "ArrowRight":
                setRightArrow(true)
                // shipElement.style.left = `${parseInt(shipElement.style.left, 10) + 10}px`
                break;
            default:
                console.log("inny");
        }
    })

    window.addEventListener("keyup", ({ key }) => {
        switch (key) {
            case "ArrowLeft":
                setLeftArrow(false);
                break;
            case "ArrowRight":
                setRightArrow(false)
                break;
            default:
                console.log("inny")
        }
    })
    const whichKey = () => {
        const shipElement = document.getElementById("spaceship");
        if (LeftArrow) {
            shipElement.style.left = `${parseInt(shipElement.style.left, 10) - 5}px`
        }
        if (RightArrow) {
            shipElement.style.left = `${parseInt(shipElement.style.left, 10) + 5}px`
        }
    }

    requestAnimationFrame(whichKey)

    return (
        <SpaceshipStyle>
            <Ship id="spaceship" />
            {/* <Ship id="shipElement"></Ship> */}
            {/* <Enemy></Enemy>
            <EnemyBig></EnemyBig>
            <Explosion></Explosion>
            <ExplosionBig></ExplosionBig>
            <Bullet></Bullet> */}
        </SpaceshipStyle>
    )
}



export default Spaceship;