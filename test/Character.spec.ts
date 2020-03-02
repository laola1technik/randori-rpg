class Character {

    isAlive() {
        return true;
    }
}

describe('Character', () => {
    it('should initially be alive.', () => {
        const character = new Character();

        expect(character.isAlive()).toBe(true);
    });
});
