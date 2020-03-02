import Weapon from "@/Weapon";

export default class Character {
    private readonly health: number;

    constructor() {
        this.health = 1000;
    }

    isAlive() {
        return this.health > 0;
    }

    getHealth() {
        return this.health;
    }

    equip(weapon: Weapon) {
    }

    attack(otherCharacter: Character) {
    }
}
