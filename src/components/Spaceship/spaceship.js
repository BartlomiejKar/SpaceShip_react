import { Button } from 'components/Modal/Modal.style';
import React from 'react';
import { Ship, Enemy, EnemyBig, Explosion, ExplosionBig, SpaceshipStyle, Bullet } from "./spaceship.style"


const Spaceship = () => {
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