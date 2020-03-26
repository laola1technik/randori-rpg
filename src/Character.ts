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

    attack(otherCharacter: Character) {
        otherCharacter.receiveDamage(42);
    }

    private receiveDamage(damage: number) {
        this.health = this.health - damage;
    }
}
