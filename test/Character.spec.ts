import Character, {BASE_DAMAGE, BASE_HEALTH} from "@/Character";


describe('Character', () => {
    let character: Character;
    beforeEach(() => {
        character = new Character();

    });

    describe('when created', () => {

        it('should be alive.', () => {
            expect(character.isAlive()).toBe(true);
        });

        it(`should have ${BASE_HEALTH} health.`, () => {
            expect(character.getHealth()).toBe(BASE_HEALTH);
        });
    });

    describe('when attacking', () => {
        let opponent: Character;

        beforeEach(() => {
            opponent = new Character();
        });

        it(`should decrease the health of opponent by ${BASE_DAMAGE}.`, () => {
            const opponentHealth = opponent.getHealth();

            character.attack(opponent);

            const expectedHealth = opponentHealth - BASE_DAMAGE;
            expect(opponent.getHealth()).toBe(expectedHealth);
        });

        it('should not decrease the health of an opponent below 0.', () => {
            killCharacter(character, opponent);

            expect(opponent.getHealth()).toBe(0);
        });

        it('should kill the opponent.', function () {
            killCharacter(character, opponent);

            expect(opponent.isAlive()).toBe(false);
        });
    });
});

function killCharacter(character, opponent) {
    const opponentHealth = opponent.getHealth();

    const attacksToReduceHealthBelow0 = (opponentHealth / BASE_DAMAGE) + 1;
    for (let i = 0; i < attacksToReduceHealthBelow0; i++) {
        character.attack(opponent);
    }
}
