import React, { useEffect } from 'react';
import styled from "styled-components";
import { Ship, Enemy, EnemyBig, Explosion, ExplosionBig, SpaceshipStyle, Bullet } from "./spaceship.style"

const Spaceship = () => {

    useEffect(() => {
        const shipElement = document.getElementById("spaceship");
        shipElement.style.bottom = "0px";
        const setLeft = shipElement.offsetLeft;
        const setWidth = shipElement.offsetWidth
        shipElement.style.left = `${window.innerWidth / 2 - setLeft - setWidth / 2}px`;
    }, []);



    window.addEventListener("keydown", ({ key }) => {
        const shipElement = document.getElementById("spaceship")
        switch (key) {
            case "ArrowLeft":
                console.log("lewo");
                console.log(shipElement);
                shipElement.style.left = `${parseInt(shipElement.style.left, 10) - 10}px`
                break;
            case "ArrowRight":
                console.log("prawo");
                shipElement.style.left = `${parseInt(shipElement.style.left, 10) + 10}px`
                break;
            default:
                console.log("inny");
        }
    })

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