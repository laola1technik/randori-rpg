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

    describe('when damaged', () => {
        it("should decrease the health by 42.", () => {
            const character = new Character();
            let damage = 42;
            const otherCharacter = new Character();

            character.attack(otherCharacter);

            const expectedHealth = 1000 - damage;
            expect(otherCharacter.getHealth()).toBe(expectedHealth);
        });
    });
});
