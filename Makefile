install: install-deps
		npx simple-git-hooks

run:
		bin/nodejs-package.js 10

install:
		npm ci

test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8

lint:
		npx eslint .

publish:
	npm publish --dry-run
	npm link --force

gendiff:
		node bin/gendiff.js
