// ============================================================
// ORT · Router · 6+1 Logik (home/use/user/tmp/room/verify/axiom + MAIN)
// ============================================================

export const ORT_ROUTER = {

    zones: {
        home: "./home/index.html",
        use: "./use/index.html",
        user: "./user/index.html",

        tmp: "./tmp.a",
        room: "./ADD.room",
        verify: "./verify.html",
        axiom: "./core.axm"
    },

    master: "./MAIN.respo",

    state: {
        zone: "home",
        master: false,
        user: null
    },

    go(zone) {
        if (zone === "main") {
            this.state.master = true;
            window.location.href = this.master;
            return;
        }

        if (!this.zones[zone]) return;
        this.state.zone = zone;
        window.location.href = this.zones[zone];
    },

    async loadUser() {
        try {
            const html = await fetch("./user/ID.html").then(r => r.text());
            this.state.user = html;
        } catch {
            this.state.user = null;
        }
        return this.state.user;
    }
};
