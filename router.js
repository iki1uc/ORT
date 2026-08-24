// ============================================================
// ORT · Router · 6-Logik
// ============================================================

export const ORT = {
    state: {
        route: "home",
        user: null
    },

    routes: {
        home: "./home/index.html",
        use: "./use/index.html",
        user: "./user/index.html"
    },

    navigate(to) {
        if (!this.routes[to]) return;
        this.state.route = to;
        window.location.href = this.routes[to];
    },

    async loadUser() {
        try {
            const data = await fetch("./user/user.json").then(r => r.json());
            this.state.user = data;
        } catch {
            this.state.user = null;
        }
        return this.state.user;
    }
};
