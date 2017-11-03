const debug = require('debug')('absolute-imports')
const commander = require('commander')
const path = require('path')
const shelljs = require('shelljs')

commander
  .option('-n, --name <name>', 'The name of the project')
  .parse(process.argv)



///////////
// UTILS //
///////////

const isDirectory = path => shelljs.test('-d', path)

const symlink = (options) => {
  const { stderr, stdout } = shelljs.ln('-sf', options.from, options.to)
  const output = (stderr || stdout).trim()
  if (stderr) {
    throw new Error(output)
  }
  return output
}



//////////
// MAIN //
//////////

const projectName = commander.name
const projectPath = process.cwd()
if (!isDirectory(projectPath)) {
  throw new Error(`No project found at ${projectPath}`)
}

debug('setting up symlinks for project %o to %o', projectName, projectPath)

symlink({
  from : projectPath,
  to   : path.join(projectPath, `node_modules/${projectName}`)
})

debug('symlinks set up for %o', projectName)
