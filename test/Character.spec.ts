import Character, {BASE_DAMAGE, BASE_HEALTH} from "@/Character";

describe('Character', () => {

    describe('when created', () => {

        it('should be alive.', () => {
            const character = new Character();

            expect(character.isAlive()).toBe(true);
        });

        it(`should have ${BASE_HEALTH} health.`, () => {
            const character = new Character();

            expect(character.getHealth()).toBe(BASE_HEALTH);
        });
    });

    describe('when attacking', () => {
        it(`should decrease the health of opponent by ${BASE_DAMAGE}.`, () => {
            const character = new Character();
            const opponent = new Character();
            const opponentHealth = opponent.getHealth();

            character.attack(opponent);

            const expectedHealth = opponentHealth - BASE_DAMAGE;
            expect(opponent.getHealth()).toBe(expectedHealth);
        });

        it('should not decrease the health of an opponent below 0.', () => {
            const character = new Character();
            const opponent = new Character();
            const opponentHealth = opponent.getHealth();

            const attacksToReduceHealthBelow0 = (opponentHealth / BASE_DAMAGE) + 1;
            for (let i = 0; i < attacksToReduceHealthBelow0; i++) {
                character.attack(opponent);
            }

            expect(opponent.getHealth()).toBe(0);
        });

    });
});
