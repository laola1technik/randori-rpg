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
});
