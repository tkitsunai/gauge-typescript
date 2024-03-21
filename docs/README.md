# Gauge TypeScript

[![Actions Status](https://github.com/bugdiver/gauge-ts/workflows/Node%20CI/badge.svg)](https://github.com/BugDiver/gauge-ts/actions)

[![npm version](https://badge.fury.io/js/gauge-ts.svg)](https://badge.fury.io/js/gauge-ts)

This project adds TypeScript [language plugin](https://docs.gauge.org/latest/installation.html#language-runner) for [Gauge](http://gauge.org).

The plugin is authored in [TypeScript](https://en.wikipedia.org/wiki/TypeScript).

## Getting started

Reference: https://tkitsunai.github.io/gauge-typescript

## Deveopement

#### Build from Source

##### Requirements
- [Gauge](https://docs.gauge.org/installing.html#installation) > v1.6.4
- [Node js](https://nodejs.org/en/) > v20.0.0
- [pnpm](https://pnpm.io/) > v8.0.0 (recommend)
- [Npm](https://www.npmjs.com/) > v10.0.0
- [JQ](https://stedolan.github.io/jq/) (for unix)


Running `build.sh`(*nix), or `.\build.ps1`(windwos/powershell) should give the list of all tasks available. Below sections detail some commonly used tasks.

##### Compiling

To compile typescript to commonjs:

````
./build.sh | .\build.ps1 build
````

##### Installing

To install the the typescript plugin use(Note, this will uninstall gauge-typescript before installing the compiled version):

````
./build.sh | .\build.ps1 package
./build.sh | .\build.ps1 forceinstall
````

##### Creating distributable

````
./build.sh | .\build.ps1  package
````

New distribution details need to be updated in the dotnet-install.json file in  [gauge plugin repository](https://github.com/getgauge/gauge-repository) for a new verison update.
