MOCHA = ./node_modules/.bin/mocha

test:
	@NODE_ENV=test $(MOCHA) \
		-R spec

.PHONY: test