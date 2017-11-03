const debug = require('debug')('absolute-imports')
const commander = require('commander')
const path = require('path')
const shelljs = require('shelljs')

commander
  .option('-p, --project <name>', 'The name of the project')
  .option('-P, --prefix <prefix>', 'The prefix to prepend to the name')
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

const projectName = commander.project
const projectPrefix = commander.prefix ? `${commander.prefix}-` : ''

const projectPath = process.cwd()
if (!isDirectory(projectPath)) {
  throw new Error(`No project found at ${projectPath}`)
}

debug('setting up symlinks for project %o to %o', projectName, projectPath)

symlink({
  from : projectPath,
  to   : path.join(projectPath, `node_modules/${projectPrefix}${projectName}`)
})

debug('symlinks set up for %o', projectName)
