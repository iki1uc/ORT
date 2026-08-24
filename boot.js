// ============================================================
// ORT · SERVICE BOOT · HOME / USE / USER
// ============================================================

export const ORT = {
    status: "offline",
    routes: {},
    user: null,

    async boot() {

        // 1 — ROUTES laden
        this.routes.home = await import("./home/index.js").catch(() => null);
        this.routes.use  = await import("./use/index.js").catch(() => null);
        this.routes.user = await import("./user/index.js").catch(() => null);

        // 2 — USER laden (falls vorhanden)
        if (this.routes.user?.loadUser) {
            this.user = await this.routes.user.loadUser();
        }

        // 3 — Status setzen
        this.status = "online";

        return {
            status: this.status,
            routes: Object.keys(this.routes),
            user: this.user
        };
    }
};
