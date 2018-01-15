const ravenjsIgnores = require('../index');

describe('Main', () => {
    it('should export errors list', () => {
        expect(ravenjsIgnores.ignoreErrors.length).toBeGreaterThan(0);
    });
    it('should export urls list', () => {
        expect(ravenjsIgnores.ignoreUrls.length).toBeGreaterThan(0);
    });
});