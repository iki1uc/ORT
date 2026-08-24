// ============================================================
// ORT · Router · 6+1 Logik (home/use/user/tmp/room/verify/axiom + MAIN)
// ============================================================

export const ORT_ROUTER = {

    // 6 Zonen + MAIN.respo als Master
    zones: {
        home: "./home/index.html",
        use: "./use/index.html",
        user: "./user/index.html",

        tmp: "./tmp.a",          // Einstiegspunkt für alle tmp.* Dateien
        room: "./ADD.room",      // Räume / Szenen
        verify: "./verify.html", // Prüfungen
        axiom: "./core.axm"      // Grundlogik
    },

    master: "./MAIN.respo",      // Master-Layer

    state: {
        zone: "home",
        master: false,
        user: null
    },

    // Navigation
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

    // User laden (leicht, tmp-fähig)
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
