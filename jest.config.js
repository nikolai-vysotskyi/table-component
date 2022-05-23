module.exports = {
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"^~/(.*)$": "<rootDir>/$1",
	},
	moduleFileExtensions: ["js", "ts", "vue", "json"],
	transform: {
		"^.+\\.js$": "babel-jest",
		"^.+\\.vue$": "@vue/vue3-jest",
		"^.+\\.tsx?$": "ts-jest"
	},
	collectCoverage: true,
	collectCoverageFrom: [
		"<rootDir>/components/**/*.vue",
		"<rootDir>/pages/**/*.vue",
	],
	testEnvironment: "jsdom",
};