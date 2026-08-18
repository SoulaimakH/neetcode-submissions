/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
  shortestPath(n, edges, src) {
    const graph = Array.from({ length: n }, () => [])

    for (const [u, v, w] of edges) {
        graph[u].push([v, w])
    }

    const dist = Array(n).fill(Infinity)
    dist[src] = 0

    const visited = new Set()

    for (let count = 0; count < n; count++) {

        // Find unvisited node with smallest distance
        let u = -1
        let min = Infinity

        for (let i = 0; i < n; i++) {
            if (!visited.has(i) && dist[i] < min) {
                min = dist[i]
                u = i
            }
        }

        if (u === -1) break

        visited.add(u)

        // Relax its neighbors
        for (const [v, weight] of graph[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight
            }
        }
    }

    const result = {}

    for (let i = 0; i < n; i++) {
        result[i] = dist[i] === Infinity ? -1 : dist[i]
    }

    return result
}

    
}
