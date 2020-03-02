module.exports = {
    collectCoverageFrom: [
        "**/*.ts",
        "!**/node_modules/**",
        "!**/*.config.js",
        "!**/coverage/**",
        "!**/vendor/**"
    ],
    moduleNameMapper: {
        "@\/(.*)$": "<rootDir>/src/$1",
    },
    preset: 'ts-jest',
    roots: [
        "<rootDir>"
    ],
    testEnvironment: 'node',
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
};
