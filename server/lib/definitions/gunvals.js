module.exports = {
// Bases
    bullet: { reload: 10.5, recoil: 1.4, shudder: 0.1, damage: 0.75, speed: 5, spray: 15 },
    drone: { reload: 36, recoil: 0.25, shudder: 0.1, size: 0.8, speed: 1.5, spray: 0.1 },
    trap: { reload: 23, shudder: 0.25, size: 1.2, damage: 0.75, speed: 3.25, resist: 3, spray: 0 },
    swarm: { reload: 23, recoil: 0.25, shudder: 0.05, size: 0.4, damage: 0.75, speed: 4, spray: 5 },
    factory: { reload: 48, shudder: 0.1, size: 0.7, damage: 0.75, speed: 3, spray: 0.1 },

    sniper: { reload: 1.35, shudder: 0.25, damage: 0.8, pen: 1.1, speed: 1.5, maxSpeed: 1.5, density: 1.5, spray: 0.2, resist: 1.15 },
    flank: { recoil: 1.2, health: 1.02, damage: 0.81, pen: 0.9, maxSpeed: 0.85, density: 1.2 },

    heavy: { reload: 1.4, recoil: 2, shudder: 1, health: 1.3, damage: 0.96, pen: 1.05, speed: 0.92, maxSpeed: 0.93, density: 1.10, resist: 1.20 },

    launcher: { reload: 1.5, recoil: 1.5, shudder: 0.1, size: 0.72, health: 1.05, damage: 0.925, speed: 0.9, maxSpeed: 1.2, range: 1.1, resist: 1.5 },

    fast: { speed: 1.2 },
    veryfast: { speed: 2.5 },
    morespeed: { speed: 1.3, maxSpeed: 1.3 },

    blank: { reload: 1, recoil: 1, shudder: 1, size: 1, health: 1, damage: 1, pen: 1, speed: 1, maxSpeed: 1, range: 1, density: 1, spray: 1, resist: 1 },
    weak: { reload: 2, health: 0.6, damage: 0.6, pen: 0.8, speed: 0.5, maxSpeed: 0.7, range: 0.25, density: 0.3 },
    power: { shudder: 0.6, size: 1.2, pen: 1.25, speed: 2, maxSpeed: 1.7, density: 2, spray: 0.5, resist: 1.5 },
    fake: { size: 0.00001, health: 0.0001, speed: 0, maxSpeed: 0, shudder: 0, spray: 0, recoil: 0, range: 0 },
    op: { reload: 0.5, recoil: 1.3, health: 4, damage: 4, pen: 4, speed: 3, maxSpeed: 2, density: 5, spray: 2 },
    healer: { damage: -1, speed: 0.5, maxSpeed: 0.5, recoil: 0.5 },
    lowPower: { shudder: 2, health: 0.5, damage: 0.5, pen: 0.7, spray: 0.5, resist: 0.7 },
    halfrange: { range: 0.5 },
    aura: { reload: 0.001, recoil: 0.001, shudder: 0.001, size: 6, speed: 0.001, maxSpeed: 0.001, spray: 0.001 },
    noSpread: { shudder: 0, spray: 0 },
    
    arenaCloser: { reload: 0.80, recoil: 0.25, health: 1000, damage: 1000, pen: 1000, speed: 2.5, maxSpeed: 1.15, range: 1.8, density: 4, spray: 0.25 },
    destroyerDominator: { reload: 6.5, recoil: 0, size: 0.975, health: 5, damage: 5, pen: 5, speed: 0.575, maxSpeed: 0.475, spray: 0.5 },
    gunnerDominator: { reload: 1.1, recoil: 0, shudder: 1.1, size: 0.5, health: 0.5, damage: 0.5, speed: 1.1, density: 0.9, spray: 1.2, resist: 0.8 },
    trapperDominator: { reload: 1.46, recoil: 0, shudder: 0.25, health: 1.25, damage: 1.45, pen: 1.6, speed: 0.5, maxSpeed: 2, range: 1.1, spray: 0.5 },
    baseProtector: { reload: 0.7, size: 1.5, recoil: 0.000001, health: 100, speed: 2.3, maxSpeed: 1.1, range: 0.5, density: 5, resist: 10 },
}