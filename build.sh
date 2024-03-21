#!/bin/bash

function checkCommand() {
    command -v $1 >/dev/null 2>&1 || { echo >&2 "$1 is not installed, aborting."; exit 1; }
}

function build() {
    checkCommand "pnpm"
    pnpm build
}

function test() {
    checkCommand "pnpm"
    pnpm test
}

function version() {
    checkCommand "jq"
    echo `cat typescript.json | jq -r .version`
}

function package() {
    checkCommand "pnpm"
    checkCommand "zip"
    rm -rf dist deploy artifacts
    pnpm build
    cp -r ./src/gen ./dist
    mkdir -p deploy
    cp launcher.* deploy
    cp typescript.json deploy
    mkdir -p artifacts
    (export version=$(version) && cd deploy && zip -r ../artifacts/gauge-typescript-$version.zip .)
}

function install() {
    package
    gauge install typescript -f ./artifacts/gauge-typescript-$(version).zip
}

function uninstall() {
    gauge uninstall typescript -v $(version)
}

function forceinstall() {
    uninstall
    install
}

tasks=(build test package install uninstall forceinstall)
if [[ " ${tasks[@]} " =~ " $1 " ]]; then
    $1
    exit 0
fi

echo Options: [build \| test \| package \| install \| uninstall \| forceinstall]