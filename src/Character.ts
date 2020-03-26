const BASE_HEALTH = 1000;
const BASE_DAMAGE = 42;

export default class Character {
    private health: number;

    constructor() {
        this.health = BASE_HEALTH;
    }

    isAlive() {
        return this.health > 0;
    }

    getHealth() {
        return this.health;
    }

    attack(otherCharacter: Character) {
        otherCharacter.receiveDamage(BASE_DAMAGE);
    }

    private receiveDamage(damage: number) {
        this.health = this.health - damage;
    }
}

export {
    BASE_HEALTH,
    BASE_DAMAGE,
}
