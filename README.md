# @sudo-nymd/cli-colors

A simple library for command line interface (CLI) colors.

## Does the World Need Another Colors Library?

### No.

There are already plenty of ```great``` CLI color libraries out there:

* [chalk]
* [colors]
* [ansi-colors]
* [cli-colors]

```@sudo-nymd/cli-colors``` is purely a "vanity" project to sharpen my "vanilla" JavaScript/TypeScript skills. Feel free to use it if you like. ```@sudo-nymd/cli-colors``` provides a familiar API, plus a few utilities that I needed for a project.

# Usage

## Install

Install ```@sudo-nymd/cli-colors``` using NPM:

``` bash
npm install @sudo-nymd/cli-colors
```
## The Basics

``` javascript
const cliColors = require('@sudo-nymd/cli-colors');

console.log(cliColors.red('This text will be RED'));
console.log(cliColors.bgYellow('This text will have a YELLOW background'));
```

Like other libraries, you can chain colors together:

``` javascript
console.log(cliColors.bgYellow.blue('This text will be BLUE with a YELLOW background'));
```

Italics, bold, hidden, reset, etc. are also supported:

``` javascript
console.log(cliColors.bgYellow.magenta.bold('This text will be BOLD and BLUE with a MAGENTA background'));
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

<img src="https://github.com/sudo-nymd/cli-colors/blob/master/screenshot1.png?raw=true" width="200"/>

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
[cli-colors]: https://www.npmjs.com/package/cli-colors
[colors]: https://www.npmjs.com/package/colors