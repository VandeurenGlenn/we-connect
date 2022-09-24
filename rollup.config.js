import { readFile } from "fs"
import { promisify } from "util";
import { basename } from 'path'
import { execSync } from "child_process";
import resolve from '@rollup/plugin-node-resolve'
try {
  execSync('rm -rf www/*.js')
  execSync('rm -rf www/**/*.js')
  execSync('rm -rf www/assets/*.html')
} catch {}

const read = promisify(readFile)

export default [{
  input: 'src/shell.js',
  output: {
    format: 'module',
    dir: './www'
  },
  plugins: [
    function resolveHtml() {
      return {
        name: 'resolve-html',
        async resolveId(id, importer) {
          if (id.includes('.html')) {
            return this.resolve(id, importer, {skipSelf: true})
          }
          return null
        },
        async load(id) {
          if (id.endsWith('.html')) {
            let string = 'export default html'
            string += '`'
            string += (await read(id)).toString()
            string += '`;'
            return string
          }
          return null
          
        }
      }
      
    }(),
    resolve()
  ]
}]