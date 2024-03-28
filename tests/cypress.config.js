const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fileServerFolder: '../',
	e2e: {
    setupNodeEvents(on, config) {},
		supportFile: false,
  },
})
