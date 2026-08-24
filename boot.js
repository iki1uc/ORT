import { ORT_ROUTER } from "./router.js";
import { ORT_NAV } from "./nav.js";

export async function ORT_BOOT() {

    // User laden (optional)
    await ORT_ROUTER.loadUser();

    // Navigation aktivieren
    ORT_NAV();

    // Startzone
    ORT_ROUTER.go("home");

    return {
        status: "ORT online",
        zones: Object.keys(ORT_ROUTER.zones),
        master: ORT_ROUTER.master
    };
}
