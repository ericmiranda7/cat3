import * as utils from './utils.js'

export function bfs() {
  let node = new utils.Node([0, 0], null, '')
  let frontier = [node]
  let reached = [node]

  while (frontier.length > 0) {
    node = frontier.shift()
    console.log(node)
    for (let child of utils.expand(node)) {
      if (utils.isGoal(child.x, child.y)) return child
      if (reached.findIndex(e => e.x === child.x && e.y === child.y) === -1) {
        reached.push(child)
        frontier.push(child)
      }
    }

  }
  return 'fail'
}