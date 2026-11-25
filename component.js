
/* =====================================
   JOSJIS CLICKER
   UI COMPONENTS + NAVIGATION
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

    // ACHIEVEMENTS
    achievements() {
        return `
            <div class="panel achievements">

                <h2>🏆 Achievements</h2>

                <p class="achievement-description">
                    Complete challenges and unlock achievements!
                </p>

                <div class="achievement-list">

                    <div class="achievement-item" id="achievementFirstClick">
                        <div class="achievement-icon">👆</div>

                        <div class="achievement-info">
                            <div class="achievement-name">
                                First Click
                            </div>

                            <div class="achievement-desc">
                                Make your first click.
                            </div>

                            <div class="achievement-status" id="firstClickStatus">
                                Not unlocked
                            </div>
                        </div>
                    </div>

                    <div class="achievement-item" id="achievementCoinCollector">
                        <div class="achievement-icon">🪙</div>

                        <div class="achievement-info">
                            <div class="achievement-name">
                                Coin Collector
                            </div>

                            <div class="achievement-desc">
                                Collect 1,000 coins.
                            </div>

                            <div class="achievement-status" id="coinCollectorStatus">
                                Not unlocked
                            </div>
                        </div>
                    </div>

                    <div class="achievement-item" id="achievementClickMaster">
                        <div class="achievement-icon">🔥</div>

                        <div class="achievement-info">
                            <div class="achievement-name">
                                Click Master
                            </div>

                            <div class="achievement-desc">
                                Reach 1,000 total clicks.
                            </div>

                            <div class="achievement-status" id="clickMasterStatus">
                                Not unlocked
                            </div>
                        </div>
                    </div>

                    <div class="achievement-item" id="achievementUpgradeMaster">
                        <div class="achievement-icon">⚡</div>

                        <div class="achievement-info">
                            <div class="achievement-name">
                                Upgrade Master
                            </div>

                            <div class="achievement-desc">
                                Reach level 10 in any upgrade.
                            </div>

                            <div class="achievement-status" id="upgradeMasterStatus">
                                Not unlocked
                            </div>
                        </div>
                    </div>

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

    // PROFILE
    profile() {
        return `
            <div class="panel">

                <h2>👤 Player Profile</h2>

                <div class="profile-info">
                    <div class="reward-icon">🐶</div>

                    <h3>JosJis Player</h3>

                    <p>
                        Welcome to the JosJis Clicker community!
                    </p>
                </div>

                <div class="profile-note">
                    <div class="small-title">GAME INFORMATION</div>

                    <p>
                        JosJis Clicker is a casual virtual coin
                        collection game.
                    </p>

                    <p>
                        Game coins have no monetary value and
                        cannot be exchanged for JJS tokens.
                    </p>
                </div>

                <button
                    class="reset-button"
                    onclick="openResetModal()"
                >
                    RESET GAME
                </button>

            </div>
        `;
    },

    // BOTTOM NAVIGATION
    navigation() {
        return `
            <nav class="bottom-nav" id="bottomNav">

                <button
                    class="nav-button active"
                    data-page="home"
                    onclick="showPage('home')"
                >
                    <span class="nav-icon">🏠</span>
                    <span>Home</span>
                </button>

                <button
                    class="nav-button"
                    data-page="missions"
                    onclick="showPage('missions')"
                >
                    <span class="nav-icon">🎯</span>
                    <span>Missions</span>
                </button>

                <button
                    class="nav-button"
                    data-page="awards"
                    onclick="showPage('awards')"
                >
                    <span class="nav-icon">🏆</span>
                    <span>Awards</span>
                </button>

                <button
                    class="nav-button"
                    data-page="shop"
                    onclick="showPage('shop')"
                >
                    <span class="nav-icon">🛒</span>
                    <span>Shop</span>
                </button>

                <button
                    class="nav-button"
                    data-page="profile"
                    onclick="showPage('profile')"
                >
                    <span class="nav-icon">👤</span>
                    <span>Profile</span>
                </button>

            </nav>
        `;
    },

    // CUSTOM RESET MODAL
    resetModal() {
        return `
            <div class="reset-modal" id="resetModal" hidden>

                <div class="reset-dialog">

                    <div class="reset-icon">⚠️</div>

                    <h2>Reset Game?</h2>

                    <p>
                        Are you sure you want to reset your game?
                        All progress will be permanently lost!
                    </p>

                    <div class="reset-actions">

                        <button
                            class="cancel-button"
                            onclick="closeResetModal()"
                        >
                            CANCEL
                        </button>

                        <button
                            class="confirm-button"
                            onclick="confirmResetGame()"
                        >
                            RESET
                        </button>

                    </div>

                </div>

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

                <!-- HOME PAGE -->
                <section class="game-page active" id="page-home">

                    ${this.score()}
                    ${this.character()}

                </section>

                <!-- MISSIONS PAGE -->
                <section class="game-page" id="page-missions" hidden>

                    ${this.dailyRewards()}

                </section>

                <!-- AWARDS PAGE -->
                <section class="game-page" id="page-awards" hidden>

                    ${this.achievements()}

                </section>

                <!-- SHOP PAGE -->
                <section class="game-page" id="page-shop" hidden>

                    ${this.upgradeShop()}

                </section>

                <!-- PROFILE PAGE -->
                <section class="game-page" id="page-profile" hidden>

                    ${this.profile()}

                </section>

                ${this.footer()}

            </div>

            ${this.navigation()}

            ${this.resetModal()}

        `;
    }
};

// Make components accessible globally
window.JosJisComponents = JosJisComponents;

// Render game interface
JosJisComponents.render();
