import Utils from "../../utils";

export default class GameBoardController {
    public cells: (Block | undefined)[][] = [];
    public rows: number;
    public columns: number;



    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;

        this.cells = Array.from(Array(rows), () => new Array(columns));
    }

    public dropBlockIntoColumn(column: number, block: Block): void {
        //find index of empty cell in column;
        let indexOfEmptyRow: number | null = null;
        this.cells.forEach((row, i) => {
            if (!row[column]) {
                indexOfEmptyRow = i;
            }
        });
        if (indexOfEmptyRow) {
            this.cells[indexOfEmptyRow][column] = block;
        }
        //this.mergeBlocks(column);
    }

    public setCells(inputCells: (Block | undefined)[][]) {
        this.cells = inputCells;
    }

    public mergeBlocks(lastColumnDropped: number): void {
        for (let i = 0; i < this.rows; i++) {
            let checkedCell = this.cells[i][lastColumnDropped];

            if (checkedCell) {
                let neighbors = Utils.findingNeighbors2d(this.cells, i, lastColumnDropped)
                    .filter(x => {
                        if (x[0] && x[0].value === checkedCell.value) {
                            return true;
                        } else {
                            return false;
                        }
                    });

                let newBlock = neighbors.length > 0 ? new Block(Math.pow(2, neighbors.length + 1)) : null;


                if (newBlock) {

                    this.cells[i][lastColumnDropped] = undefined;
                    while (neighbors.length > 0) {
                        let toRemove = neighbors.pop();
                        this.cells[toRemove[1]][toRemove[2]] = undefined;
                    }

                    this.dropBlockIntoColumn(lastColumnDropped, newBlock);
                }
            }

        }
    }

}


export class Block {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}
