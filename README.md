# @sudo-nymd/cli-styles

A simple library for command line interface (CLI) colors.

## Does the World Need Another CLI Styles Library?

### No.

There are already plenty of ```great``` CLI color libraries out there:

* [chalk]
* [colors]
* [ansi-colors]
* [cli-styles]

```@sudo-nymd/cli-styles``` is purely a "vanity" project to sharpen my "vanilla" JavaScript/TypeScript skills. Feel free to use it if you like. ```@sudo-nymd/cli-styles``` provides a familiar API, plus a few utilities that I needed for a project.

# Usage

## Install

Install ```@sudo-nymd/cli-styles``` using [NPM]:

``` bash
npm install @sudo-nymd/cli-styles
```
## The Basics

``` javascript
const ansiStyles = require('@sudo-nymd/cli-styles');

console.log(
    ansiStyles.red('This text will be RED')
);

console.log(
    ansiStyles.bgYellow('This text will have a YELLOW background')
);
```

Like other libraries, you can chain colors together:

``` javascript
console.log(
    ansiStyles
        .bgYellow
        .blue('This text will be BLUE with a YELLOW background')
);
```

Italics, bold, hidden, reset, etc. are also supported:

``` javascript
console.log(
    ansiStyles
        .bgYellow
        .magenta
        .bold('This text will be BOLD and BLUE with a MAGENTA background')
);
```

## Colors

| Foreground Colors  | Background Colors | Bright Foreground Colors | Bright Background Colors |
| ------- | ----------------- | ------------- | ------------------------ |
| black   | bgBlack           | blackBright   | bgBlackBright            |
| red     | bgRed             | redBright     | bgRedBright              |
| green   | bgGreen           | greenBright   | bgGreenBright            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           |
| blue    | bgBlue            | blueBright    | bgBlueBright             |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |
| gray    |                   |               |                          |
| grey    |                   |               |                          |

<img src="https://github.com/sudo-nymd/cli-styles/blob/master/screenshot1.png?raw=true" width="200"/>

## Style Modifiers

* dim
* **bold**
* hidden
* _italic_
* underline
* inverse
* ~~strikethrough~~
* reset


[ansi-colors]: https://www.npmjs.com/package/ansi-colors
[chalk]: https://www.npmjs.com/package/chalk
[cli-styles]: https://www.npmjs.com/package/cli-styles
[colors]: https://www.npmjs.com/package/colors
[NPM]: https://npmjs.org
