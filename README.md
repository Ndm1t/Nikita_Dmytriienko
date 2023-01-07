# Selenium

 - [x] JavaScript
 - [x] [Jasmine](https://jasmine.github.io/) instruction scenarios `spec/loginSpec.ts`
 - [x] OOP principles (see `loginClass.js`)
 - [x] Run test via `npm test`

### Instruction
Firstly: run npm i to upload all needed packages

Then: There are two options

- Run each test scenario manually
	```sh
	$ node ./node_modules/jasmine/bin/jasmine.js --config=./support/jasmine.json
	$ start http://localhost:8888?spec=<SPEC>
	```
- Run predefined scenarios all at once using
	```sh
	$ npm test
	```
	
