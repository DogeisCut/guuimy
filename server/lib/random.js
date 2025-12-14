// Seed math
exports.random = x => x * Math.random()

exports.randomAngle = () => Math.PI * 2 * Math.random()

exports.randomRange = (min, max) => Math.random() * (max - min) + min

exports.irandom = i => {
    let max = Math.floor(i)
    return Math.floor(Math.random() * (max + 1)) //Inclusive
}

exports.irandomRange = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //Inclusive
}

// does not clump the points in the middle
exports.pointInUnitCircle = () => {
    let angle = exports.randomAngle(),
        distance = Math.sqrt(Math.random());
    return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
    };
}

exports.gauss = (mean=0, stdev=1) => {
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min
    let output = exports.gauss(0, range / clustering)

    while (output < 0) output += range;
    while (output > range) output -= range;
    return output + min
}

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2)
    let d = exports.gauss(radius, radius * clustering)
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    }
}

exports.chance = prob => exports.random(1) < prob

exports.dice = sides => exports.random(sides) < 1

exports.choose = (arr) => arr[exports.irandom(arr.length - 1)]

exports.chooseN = (arr, num) => {
    let result = [],
        extendedArr = [];
    while (extendedArr.length < num) {
        extendedArr.push(...exports.shuffle(arr));
    }
    for (var i = 0; i < num; i++) {
        result.push(extendedArr[i]);
    }
    return result;
}

exports.shuffle = (arr) => {
    arr = arr.slice(); //avoid changing the original array
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

exports.chooseChance = (...arg) => {
    let totalProb = 0
    for (let value of arg)
        totalProb += value

    let answer = exports.random(totalProb)
    for (let i = 0; i < arg.length; i++) {
        if (answer < arg[i]) return i
        answer -= arg[i]
    }
}

exports.randomCyclePools = Object.create(null)

exports.chooseFromRandomCycle = (listKey, array) => {
	if (!(listKey in exports.randomCyclePools) || exports.randomCyclePools[listKey].length === 0) {
		exports.randomCyclePools[listKey] = exports.shuffle(array)
	}
	return exports.randomCyclePools[listKey].pop()
}

exports.nameLists = {
    bots: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "Bob", "i suck at this :(", "swear words", "DogeisCut", "Starmatrix_20", "Waffz_The_Pancake", ":3", "Gogux", "this game sucks", "gomeux", "diep", "arras", "scenexe", "Triangle", "This is the tale of...",
        "lol", "lmao", ":p", "❤❤❤", "zzz", "press W", "not a bot", "o_o", "tank.exe", "just farming", "STOP SPAWN CAMPING", "💥", "💣", "😊", "tank-chan", "OWO whats this?", "0000000", "i am dogeiscut's best", "snowman", "ねこです", "小心",
        "how do i play", "SKIBIDI TOILET", ":D", "trapper main", "Vadisnotu", "Gravityuse", "Unknown", "team?", "spin to team", "D:", "OwO", "UwU", "furry", "play furgals", "pls spawn radiant", "qwerty", "killer", "tgiwjhrsegbnjekrbnghjkrdhnb",
        "9 + 10 = ?", "TANK ONLY", "King", "Protogen Lover", "BSOD", "lag", "im new", "TimmyGamer2006", "spin 2 team", "Bot", "(Bot)", "No im real!!", "GREEN TEAM ON TOP!!", "PURPLE TEAM FTW", "bad game", "among gus", "Kris", "moss", "WetSock",
        "Zlump", "aimgod777", "SirLaggington", "𝒢𝒽𝑜𝓈𝓉", "『𝕍𝕠𝕚𝕕』", "︻╦̵̵͇̿̿̿̿╤──", "dont shoot me", "why me ;-;", "why am i red", "gg", "bruh moment", "wait pls", "what is happening", "ok sure buddy", "bad team", "DONT", "Very Glooby", "IS YOU", "bloons",
        "i eat sand", "FRICK", "???", "Um??", "3754689347", "꧁༒𝓓𝓮𝓪𝓭༒꧂", "⚡ 𝓝𝓮𝓸𝓷 ⚡", "👑 𝓟𝓻𝓸 👑", "frog eater", "how do i shoot", "balanced game", "pentagons ruined gomeux", "drip404", "No0bSlayer99", "xX_ProGamerGod_Xx", "StaticWolf09",
        "tiny", "brain damage", "oof", "im lagging", "Alt + F4", "ctrl + w", "please nerf", "rip server", "Lil Poopdrop™", "我饿了", "delta", "o", "q", "x", "z", "riptide", "🅽🅾 🅽🅰🅼🅴", "【Ｒｅｘ】", "b̾a̾z̾", "foo", "bar", "samantha", "(;", "1273", "256",
        "[REDACTED]", "___________", "Archimedes", "Ribs grow back!", "oooooughhhhh", "?", "haha", "Huh?", "L", "trying", "i will get you", "✨", "✨ω✨", "fiesta!", "sussy", "oh god??", "long time no c", "K.O.", "bart", "HRTZ", "Defender", "AC"],
    a: ["Archimedes", "Akilina", "Anastasios", "Athena", "Alkaios", "Amyntas", "Aniketos", "Artemis", "Anaxagoras", "Apollon"],
    castle: ["Berezhany", "Lutsk", "Dobromyl", "Akkerman", "Palanok", "Zolochiv", "Palanok", "Mangup", "Olseko", "Brody", "Isiaslav", "Kaffa", "Bilhorod"],
    legion: ["Vesta", "Juno", "Orcus", "Janus", "Minerva", "Ceres"]
}

exports.chooseBotName = () => {
	const chosenBotName = exports.chooseFromRandomCycle("bots", exports.nameLists.bots)
	const randomCapitalizationRoll = Math.floor(Math.random() * 1000)

	if (randomCapitalizationRoll < 20) {
		return chosenBotName.split("").map(character => {
			if (Math.random() < 0.5) {
				return character.toUpperCase()
			}
			return character.toLowerCase()
		}).join("")
	}

	if (randomCapitalizationRoll < 170) {
		return chosenBotName.toLowerCase()
	}

	if (randomCapitalizationRoll < 320) {
		return chosenBotName.toUpperCase()
	}

	if (randomCapitalizationRoll < 470) {
		return chosenBotName.split(" ").map(word => {
			if (word.length === 0) {
				return word
			}
			return word[0].toUpperCase() + word.slice(1).toLowerCase()
		}).join(" ")
	}

	return chosenBotName
}

exports.chooseBossName = (code, amount) => code in exports.nameLists ? exports.chooseN(exports.nameLists[code], amount) : []