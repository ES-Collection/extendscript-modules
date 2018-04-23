# Testing

All modules are tested in ExtendScript. We run our tests with [tap-es](https://github.com/ExtendScript/tap-es). Please check the `results_log.md` file inside the `test` folder of each module. If you can't see your version/app we would for you to run the test using your platform and app version. See [Running Tests](#running-tests) below.


# Running Tests

You can simply run a test to your target with the `npm run` command. To test a package in both target-1 and target-2 run:

    npm run test target-1 target-2

This will create a rapport called `results.md` inside the test folder, which will look similarly to the rapport below.

```markdown
# Tests

- ✔ Platform target-1: scriptName [pass: 1, fail: 0] 
- ✔ Platform target-2: scriptName [pass: 1, fail: 0]


# Summary	

- planned: 2	
- assertions: 2	
- pass: 2	
- fail: 0	

```

Copy the two lines under Tests and **add** them to the `results_log.md` under the package major version (first digit in 1.3.2):

```markdown
> Version 1

- ✔ Darwin target-0: scriptName [pass: 1, fail: 0] 
- ✔ Platform target-1: scriptName [pass: 1, fail: 0] 
- ✔ Platform target-2: scriptName [pass: 1, fail: 0]

```

Thanks!

> The `results.md` file is automatically excluded from Git