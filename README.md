# Babel Plugin for Storybook Addon Pseudo States and Emotion.js

This plugin allows using
[storybook-addon-pseudo-states](https://github.com/Ergosign/storybook-addon-pseudo-states) 
with [emotion](https://emotion.sh/)

## Install

**npm**

```shell
nmp install babel-plugin-storybook-addon-pseudo-states-emotion --save-dev
```
**yarn**

```shell
yarn add babel-plugin-storybook-addon-pseudo-states-emotion --dev
```

## Usage

```json
{
  "plugins": ["storybook-addon-pseudo-states-emotion"]
}
```

## Options

This plugin allows some configuration to support the certain features of
[storybook-addon-pseudo-states](https://github.com/Ergosign/storybook-addon-pseudo-states)

```json
{
  "plugins": [[
    "storybook-addon-pseudo-states-emotion", {
      "prefix": "pseudoclass--"
    }
  ]]
}
```

Copyright © 2021 Dekk. All rights reserved.

