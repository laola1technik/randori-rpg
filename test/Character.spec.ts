import Character, {BASE_DAMAGE} from "@/Character";

describe('Character', () => {

    describe('when created', () => {

        it('should be alive.', () => {
            const character = new Character();

            expect(character.isAlive()).toBe(true);
        });

        it("should have 1000 health.", () => {
            const character = new Character();

            expect(character.getHealth()).toBe(1000);
        });
    });

    describe('when attacking', () => {
        it(`should decrease the health of opponent by ${BASE_DAMAGE}.`, () => {
            const character = new Character();
            const opponent = new Character();

            character.attack(opponent);

            const expectedHealth = 1000 - BASE_DAMAGE;
            expect(opponent.getHealth()).toBe(expectedHealth);
        });
    });
});
