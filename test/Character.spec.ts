import Character from "@/Character";

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
        it("should decrease the health of opponent by 42.", () => {
            const character = new Character();
            let damage = 42;
            const opponent = new Character();

            character.attack(opponent);

            const expectedHealth = 1000 - damage;
            expect(opponent.getHealth()).toBe(expectedHealth);
        });
    });
});
