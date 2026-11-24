
/* =====================================
   JOSJIS CLICKER
   UI COMPONENTS
===================================== */

const JosJisComponents = {

    // HEADER
    header() {
        return `
            <header>
                <img
                    class="logo"
                    src="assets/images/josjis-logo-circle.png"
                    alt="JosJis Logo"
                    onerror="this.style.display='none'"
                >
                <h1>JosJis Clicker</h1>
                <p>Click • Collect • Upgrade • Have Fun!</p>
            </header>
        `;
    },

    // SCORE PANEL
    score() {
        return `
            <div class="panel">

                <div class="score-box">
                    <div class="small-title">YOUR COINS</div>
                    <div class="coins" id="coins">0</div>
                    <div class="small-title">JOSJIS GAME COINS</div>
                </div>

                <div class="stats">

                    <div>
                        <div class="small-title">PER CLICK</div>
                        <div class="stat-value" id="perClick">1</div>
                    </div>

                    <div>
                        <div class="small-title">TOTAL CLICKS</div>
                        <div class="stat-value" id="totalClicks">0</div>
                    </div>

                    <div>
                        <div class="small-title">BEST COINS</div>
                        <div class="stat-value" id="bestCoins">0</div>
                    </div>

                </div>

            </div>
        `;
    },

    // CLICK CHARACTER
    character() {
        return `
            <div class="panel character-area">

                <div class="small-title">
                    TAP TO COLLECT COINS
                </div>

                <div class="character" id="character">
                    <img
                        src="assets/images/josjis-logo-circle.png"
                        alt="JosJis"
                        onerror="this.outerHTML='<span>🐶</span>'"
                    >
                </div>

                <div class="click-text">
                    TAP JOSJIS TO EARN COINS!
                </div>

                <div class="message" id="clickMessage"></div>

            </div>
        `;
    },

    // UPGRADE SHOP
    upgradeShop() {
        return `
            <div class="panel">

                <h2>🛒 Upgrade Shop</h2>

                <div class="item">

                    <div class="item-info">
                        <div class="item-name">
                            ⚡ Power Click
                        </div>

                        <div class="item-desc">
                            Increase coins earned per click.
                        </div>

                        <div class="item-level" id="powerLevel">
                            Level: 0
                        </div>
                    </div>

                    <button
                        id="powerButton"
                        onclick="buyPower()"
                    >
                        Buy 50
                    </button>

                </div>

                <div class="item">

                    <div class="item-info">
                        <div class="item-name">
                            🤖 Auto Clicker
                        </div>

                        <div class="item-desc">
                            Automatically collect coins every second.
                        </div>

                        <div class="item-level" id="autoLevel">
                            Level: 0
                        </div>
                    </div>

                    <button
                        id="autoButton"
                        onclick="buyAuto()"
                    >
                        Buy 150
                    </button>

                </div>

            </div>
        `;
    },

    // DAILY REWARDS
    dailyRewards() {
        return `
            <div class="panel reward">

                <h2>🎁 Daily Rewards</h2>

                <div class="reward-icon">🎁</div>

                <p>
                    Come back every day and collect your daily coins!
                    Consecutive visits increase your reward.
                </p>

                <div class="small-title" id="streak">
                    Current Streak: 0 days
                </div>

                <button
                    id="dailyButton"
                    onclick="claimDaily()"
                >
                    CLAIM DAILY REWARD
                </button>

                <div class="message" id="dailyMessage"></div>

            </div>
        `;
    },

    // RESET BUTTON
    reset() {
        return `
            <div class="panel">

                <button
                    style="width:100%;background:#444;color:white;"
                    onclick="resetGame()"
                >
                    RESET GAME
                </button>

            </div>
        `;
    },

    // FOOTER
    footer() {
        return `
            <footer>
                JosJis Clicker Game<br>
                © 2026 JosJis. All Rights Reserved.
            </footer>
        `;
    },

    // RENDER ALL COMPONENTS
    render() {
        const container = document.getElementById("app");

        if (!container) {
            console.error("JosJis: #app container not found!");
            return;
        }

        container.innerHTML = `
            <div class="container">

                ${this.header()}
                ${this.score()}
                ${this.character()}
                ${this.upgradeShop()}
                ${this.dailyRewards()}
                ${this.reset()}
                ${this.footer()}

            </div>
        `;
    }
};

// Make components accessible globally
window.JosJisComponents = JosJisComponents;

// Render game interface
JosJisComponents.render();
