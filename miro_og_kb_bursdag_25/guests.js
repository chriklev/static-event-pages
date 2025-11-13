// Guest list for Miro og KB's Birthday Party
// Last updated: 2025-11-13

const guests = {
    sauna: [
        "KBKBKB",
        "Miroslav",
        "Linus Elevinus",
        "Bror",
        "Ingeborg Johanne Henningsdotter Riekeles",
        "Lola",
        "Dag-Tore",
        "Daniel",
        "Brage",
        "Emilia Glazebrook",
        "Even Tronstad",
        "Nicholas Nytun",
        "Magnus",
        "Erik Haugen",
        "Amelia Gjerstad",
        "R o b"
    ],
    goingOut: [
        "Maura",
        "August",
        "Ingrid"
    ],
    // Total counts
    get totalSauna() {
        return this.sauna.length;
    },
    get totalGoingOut() {
        return this.goingOut.length;
    },
    get totalGuests() {
        return new Set([...this.sauna, ...this.goingOut]).size;
    }
};
