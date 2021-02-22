import styled, { keyframes } from "styled-components";
import ship from "images/ship.png";
import missile from "images/missile.png";
import enemy from "images/enemy.png";
import explosion from "images/explosion.png";
import enemyBig from "images/enemy-big.png";
import explosionBig from "images/explosion-big.png"


const dimensions = {
    size: 64,
    bigSize: 128
}

const move8steps = keyframes`
from {
    left: 0px
}
to {
    background-position-x: ${dimensions.size * 8 + "px"};
}
`;
const move5steps = keyframes`
from {
    left: 0px
}
to {
    background-position-x: ${`${dimensions.bigSize * -5}px`};
}
`;
const move17steps = keyframes`
from {
    left: 0px
}
to {
    background-position-x: ${dimensions.size * -17 + "px"};
}
`;
const move16steps = keyframes`
from {
    left: 0px
}
to {
    background-position-x: ${dimensions.bigSize * -16 + "px"};
}
`;

const move34steps = keyframes`
from {
    left: 0px
}
to {
    background-position-x: ${dimensions.bigSize * -34 + "px"};
}
`;


export const SpaceshipStyle = styled.div`
`;
export const Ship = styled.div`
width: 64px;
height: 64px;
background-image: url(${ship});
animation: ${move8steps} 200ms infinite steps(8);
`;
export const Enemy = styled.div`
width: 64px;
height: 64px;
background-image: url(${enemy});
animation: ${move5steps} 200ms infinite steps(5);
`;
export const EnemyBig = styled.div`
width: 128px;
height: 128px;
background-image: url(${enemyBig});
animation: ${move16steps} 200ms infinite steps(8);
`;

export const Explosion = styled.div`
width: 64px;
height: 64px;
background-image: url(${explosion});
animation: ${move17steps} 800ms infinite steps(17);
`;
export const ExplosionBig = styled.div`
width: 128px;
height: 128px;
background-image: url(${explosionBig});
animation: ${move34steps} 800ms infinite steps(34);
`;
export const Bullet = styled.div`
width: 12px;
height: 24px;
background-size: cover;
background-image: url(${missile});
`;