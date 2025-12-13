const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray, weaponMirror, makeTurret } = require('../facilitators.js')
const { base, statnames, dfltskl, smshskl } = require('../constants.js')
const { gunGenerators } = require('../gungenerators.js')
require('./generics.js')
const g = require('../gunvals.js')

Class.tank = {
    PARENT: "genericTank",
    SIZE: 16,
    LABEL: "Tank",
    DANGER: 4,
}

tier0: {
    Class.shooter = {
        PARENT: "genericTank",
        LABEL: "Shooter",
        DANGER: 4,
        GUNS: [
            {
                POSITION: {
                    LENGTH: 20,
                    WIDTH: 10,
                    ASPECT: 1,
                    X: 0,
                    Y: 0,
                    ANGLE: 0,
                    DELAY: 0
                },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.bullet]),
                    TYPE: "bullet",
                }
            }
        ],
    }
    Class.commander = {
        PARENT: "genericTank",
        LABEL: "Commander",
        DANGER: 5,
        GUNS: [
            {
                POSITION: {
                    LENGTH: 16,
                    WIDTH: 12,
                    ASPECT: 1.6,
                    X: 0,
                    Y: 0,
                    ANGLE: 0,
                    DELAY: 0
                },
                PROPERTIES: {
                    MAX_CHILDREN: 4,
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.drone]),
                    TYPE: "drone",
                }
            }
        ],
    }
    Class.blocker = {
        PARENT: "genericTank",
        LABEL: "Blocker",
        DANGER: 6,
        GUNS: [
            ...gunGenerators.trapLauncher()
        ],
    }
}

tier1: {
    Class.double = {
        PARENT: "genericTier1Tank",
        LABEL: "Double",
        DANGER: 4,
        GUNS: [
            ...weaponMirror({
                POSITION: {
                    LENGTH: 18,
                    WIDTH: 8,
                    ASPECT: 1,
                    X: 0,
                    Y: -5,
                    ANGLE: 0,
                    DELAY: 0
                },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.bullet]),
                    TYPE: "bullet",
                }
            }, 0.5)
        ],
    }
}

tier2: {
    Class.stack = {
        PARENT: "genericTier2Tank",
        LABEL: "Stack",
        DANGER: 4,
        GUNS: [
           {
                POSITION: {
                    LENGTH: 20,
                    WIDTH: 10,
                    ASPECT: 1,
                    X: 0,
                    Y: 0,
                    ANGLE: 0,
                    DELAY: 0
                },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.bullet]),
                    TYPE: "bullet",
                }
            },
            {
                POSITION: {
                    LENGTH: 15,
                    WIDTH: 10,
                    ASPECT: 1,
                    X: 0,
                    Y: 0,
                    ANGLE: 0,
                    DELAY: 0.5
                },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.bullet]),
                    TYPE: "bullet",
                }
            }
        ],
    }
}

Class.tank.UPGRADES_TIER_0 = ["shooter", "commander", "blocker"]
    Class.shooter.UPGRADES_TIER_1 = ["double"]
        Class.double.UPGRADES_TIER_2 = ["stack"]
    Class.commander.UPGRADES_TIER_1 = []
    