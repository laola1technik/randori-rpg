import Character from "@/Character";

describe('Character', () => {
    it('should initially be alive.', () => {
        const character = new Character();

        expect(character.isAlive()).toBe(true);
    });

    it("should initially have 1000 hp.", () => {
        const character = new Character();

        expect(character.getHealth()).toBe(1000);
    });
});
