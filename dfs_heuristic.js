import * as utils from './utils.js'
import { PriorityQueue } from './pq.js'

function h(child) {
  return (child.x - 2) 
}

export function dfs() {
  let node = new utils.Node([0, 0], null, '')
  let frontier = new PriorityQueue((a, b) => a[1] > b[1])
  let reached = [node]
  frontier.push([node, 0])

  while (frontier.size() > 0) {
    node = frontier.pop()[0]
    console.log(node)
    for (let child of utils.expand(node)) {
      if (utils.isGoal(child.x, child.y)) return child
      if (reached.findIndex(e => e.x === child.x && e.y === child.y) === -1) {
        reached.push(child)
        frontier.push([child, h(child)])
      }
    }

  }
  return 'fail'
}