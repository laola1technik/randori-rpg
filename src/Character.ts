import Weapon from "@/Weapon";

export default class Character {
    private health: number;

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
        otherCharacter.reduceHealth(42);
    }

    private reduceHealth(healthPoints: number) {
        this.health = this.health - healthPoints;
    }
}
