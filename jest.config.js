

module.exports = {

    testEnvironment: "node",
    roots: ["src"],
    testMatch: ["**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>/__mocks__/setupTests.js"],
};
