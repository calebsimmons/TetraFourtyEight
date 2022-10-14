namespace Utils {
    export const findingNeighbors2d = (myArray: any[][], i: number, j: number) => {
        const rowLimit = myArray.length - 1;
        const columnLimit = myArray[0].length - 1;
        let neighbors = []
        for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
            for (var y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
                if (x !== i || y !== j) {
                    neighbors.push([myArray[x][y], x, y]);
                }
            }
        }
        return neighbors;
    }
}

export default Utils;