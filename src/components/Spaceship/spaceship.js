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
        switch (key) {
            case "ArrowLeft":
                console.log("lewo")
                break;
            case "ArrowRight":
                console.log("prawo");
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