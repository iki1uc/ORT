export const ORT_ROUTER = {

    zones: {
        home: "./home/index.html",
        use: "./use/index.html",
        user: "./user/index.html",

        tmp: "./tmp.a",          // Einstiegspunkt für tmp‑Module
        room: "./ADD.room",      // Räume
        verify: "./verify.html", // Prüfungen
        axiom: "./core.axm"      // Grundlogik

    },

    master: "./MAIN.respo",      // Master‑Layer

    state: {
        zone: "home",
        master: false
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
    }
};
