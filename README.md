# Gauge for TypeScript

![GHA](https://github.com/tkitsunai/gauge-typescript/actions/workflows/nodejs.yml/badge.svg)
[![NPM](https://img.shields.io/npm/v/gauge-typescript.svg?style=flat-square)](https://www.npmjs.com/package/gauge-typescript)

This project adds TypeScript [language plugin](https://docs.gauge.org/latest/installation.html#language-runner) for [Gauge](http://gauge.org).

The plugin is authored in [TypeScript](https://en.wikipedia.org/wiki/TypeScript).

> [!NOTE]
> This project was forked from gauge-ts to continuously maintain gauge-typescript. Therefore, to update to a new version of gauge-typescript, you will need to install it from the source code. If you need further support, please feel free to contact us.

## Getting started

API Reference: https://tkitsunai.github.io/gauge-typescript

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

To install the the typescript plugin use(Note, this will uninstall gauge-ts before installing the compiled version):

````
./build.sh | .\build.ps1 package
./build.sh | .\build.ps1 forceinstall
````

##### Creating distributable

````
./build.sh | .\build.ps1  package
````
