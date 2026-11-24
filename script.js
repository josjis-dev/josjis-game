
// =====================================
// JOSJIS CLICKER GAME
// JavaScript
// =====================================

// Default game data
const defaultData = {
    coins: 0,
    clicks: 0,
    best: 0,
    powerLevel: 0,
    autoLevel: 0,
    lastDaily: "",
    streak: 0
};

// LocalStorage key
const STORAGE_KEY = "josjis_clicker_v2";

// Load saved game
let game = loadGame();

// =====================================
// LOAD & SAVE GAME
// =====================================

function loadGame() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved) {
            return {
                ...defaultData,
                ...JSON.parse(saved)
            };
        }
    } catch (error) {
        console.error("Failed to load game:", error);
    }

    return { ...defaultData };
}

function saveGame() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
}

// =====================================
// GAME DISPLAY
// =====================================

function updateDisplay() {
    document.getElementById("coins").textContent =
        Math.floor(game.coins).toLocaleString();

    document.getElementById("perClick").textContent =
        (1 + game.powerLevel).toLocaleString();

    document.getElementById("totalClicks").textContent =
        game.clicks.toLocaleString();

    document.getElementById("bestCoins").textContent =
        Math.floor(game.best).toLocaleString();

    document.getElementById("powerLevel").textContent =
        "Level: " + game.powerLevel;

    document.getElementById("autoLevel").textContent =
        "Level: " + game.autoLevel;

    document.getElementById("streak").textContent =
        "Current Streak: " + game.streak + " days";

    // Power upgrade button
    const powerCost = getPowerCost();

    document.getElementById("powerButton").textContent =
        "Upgrade - " + powerCost.toLocaleString() + " Coins";

    document.getElementById("powerButton").disabled =
        game.coins < powerCost;

    // Auto clicker button
    const autoCost = getAutoCost();

    document.getElementById("autoButton").textContent =
        "Upgrade - " + autoCost.toLocaleString() + " Coins";

    document.getElementById("autoButton").disabled =
        game.coins < autoCost;

    // Daily reward button
    const today = getToday();
    const dailyButton = document.getElementById("dailyButton");

    if (game.lastDaily === today) {
        dailyButton.disabled = true;
        dailyButton.textContent = "Already Claimed";
    } else {
        dailyButton.disabled = false;
        dailyButton.textContent = "Claim Daily Reward";
    }
}

// =====================================
// COST CALCULATIONS
// =====================================

function getPowerCost() {
    return Math.floor(50 * Math.pow(1.7, game.powerLevel));
}

function getAutoCost() {
    return Math.floor(150 * Math.pow(1.8, game.autoLevel));
}

// =====================================
// CLICK CHARACTER
// =====================================

document.getElementById("character").addEventListener("click", function(event) {
    const earned = 1 + game.powerLevel;

    game.coins += earned;
    game.clicks++;

    if (game.coins > game.best) {
        game.best = game.coins;
    }

    showFloatingCoins(event, earned);

    saveGame();
    updateDisplay();

    document.getElementById("clickMessage").textContent =
        "+" + earned + " Coins!";
});

// =====================================
// FLOATING COINS ANIMATION
// =====================================

function showFloatingCoins(event, earned) {
    const area = document.querySelector(".character-area");

    if (!area) return;

    const rect = area.getBoundingClientRect();
    const floating = document.createElement("div");

    floating.className = "floating-coin";
    floating.textContent = "+" + earned;

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (!event.clientX && !event.clientY) {
        const characterRect =
            document.getElementById("character").getBoundingClientRect();

        x = characterRect.left + characterRect.width / 2 - rect.left;
        y = characterRect.top - rect.top + 30;
    }

    floating.style.left = x + "px";
    floating.style.top = y + "px";

    area.appendChild(floating);

    setTimeout(function() {
        floating.remove();
    }, 850);
}

// =====================================
// POWER CLICK UPGRADE
// =====================================

function buyPower() {
    const cost = getPowerCost();

    if (game.coins < cost) return;

    game.coins -= cost;
    game.powerLevel++;

    saveGame();
    updateDisplay();
}

// =====================================
// AUTO CLICKER UPGRADE
// =====================================

function buyAuto() {
    const cost = getAutoCost();

    if (game.coins < cost) return;

    game.coins -= cost;
    game.autoLevel++;

    saveGame();
    updateDisplay();
}

// =====================================
// AUTO CLICKER SYSTEM
// =====================================

setInterval(function() {
    if (game.autoLevel > 0) {
        game.coins += game.autoLevel;

        if (game.coins > game.best) {
            game.best = game.coins;
        }

        saveGame();
        updateDisplay();
    }
}, 1000);

// =====================================
// DAILY REWARDS
// =====================================

function getToday() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

function getYesterday() {
    const date = new Date();

    date.setDate(date.getDate() - 1);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

function claimDaily() {
    const today = getToday();

    if (game.lastDaily === today) return;

    if (game.lastDaily === getYesterday()) {
        game.streak++;
    } else {
        game.streak = 1;
    }

    const reward = 100 + (game.streak - 1) * 50;

    game.coins += reward;
    game.lastDaily = today;

    if (game.coins > game.best) {
        game.best = game.coins;
    }

    document.getElementById("dailyMessage").textContent =
        "You received +" + reward.toLocaleString() + " Coins!";

    saveGame();
    updateDisplay();
}

// =====================================
// CUSTOM RESET POPUP
// =====================================

// Open popup
function openResetModal() {
    document.getElementById("resetModal").hidden = false;
}

// Close popup
function closeResetModal() {
    document.getElementById("resetModal").hidden = true;
}

// Confirm reset
function confirmResetGame() {
    game = { ...defaultData };

    saveGame();
    updateDisplay();

    document.getElementById("clickMessage").textContent = "";
    document.getElementById("dailyMessage").textContent = "";

    closeResetModal();
}

// =====================================
// INITIALIZE GAME
// =====================================

updateDisplay();
