#!/usr/bin/env node

process.argv.push('--cwd')
process.argv.push(process.cwd()) //当前命令行所在目录,避免执行完命令环境变化了
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..')) //require(载入这个模块),resolve(找到这个模块所对应的路径)也就是lib/index.js(..会找到package.json中的main属性)

require('gulp/bin/gulp')