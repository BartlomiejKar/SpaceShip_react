import React from 'react';
import { Ship, Enemy, EnemyBig, Explosion, ExplosionBig, SpaceshipStyle, Bullet } from "./spaceship.style"


const Spaceship = () => {

    window.addEventListener("keydown", ({ keyCode }) => {
        switch (keyCode) {
            case 37:
                console.log("lewo");
                break;
            case 39:
                console.log("prawo");
                break;
            default:
                console.log("inny");
        }
    })

    return (
        <SpaceshipStyle>
            <Ship></Ship>
            <Enemy></Enemy>
            <EnemyBig></EnemyBig>
            <Explosion></Explosion>
            <ExplosionBig></ExplosionBig>
            <Bullet></Bullet>
        </SpaceshipStyle>
    )
}


export default Spaceship;