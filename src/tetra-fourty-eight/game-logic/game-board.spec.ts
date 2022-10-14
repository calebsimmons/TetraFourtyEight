import GameBoardController, { Block } from './game-board-controller';

const createEmptyCells = (): (Block | undefined)[][] => Array.from(Array(5), () => new Array(6));

describe('GameBoardController', () => {
    it('constructs as a GameBoardController', () => {
        const gbc = new GameBoardController(6, 5);
        expect(gbc).toBeInstanceOf(GameBoardController);
    });

    it('has cells N x M', () => {
        const gbc = new GameBoardController(5, 6);
        expect(gbc.cells.length).toBe(5);
        expect(gbc.cells[0].length).toBe(6);
    });

    it('can drop block into a column', () => {
        const gbc = new GameBoardController(5, 6);
        const expectedCells = createEmptyCells();
        const block = new Block(2);
        expectedCells[4][2] = block;
        gbc.dropBlockIntoColumn(2, block);
        expect(gbc.cells).toEqual(expectedCells)
    });

    it('drops block on top of non empty cells', () => {
        const gbc = new GameBoardController(5, 6);
        const expectedCells = createEmptyCells();
        const block1 = new Block(2);
        const block2 = new Block(4);
        expectedCells[4][2] = block1;
        expectedCells[3][2] = block2;
        gbc.dropBlockIntoColumn(2, block1);
        gbc.dropBlockIntoColumn(2, block2);
        expect(gbc.cells).toEqual(expectedCells)
    });



    it('merges blocks with same value on same row', () => {
        const gbc = new GameBoardController(5, 6);

        const inputCells = createEmptyCells();
        const block1 = new Block(2);
        const block2 = new Block(2);
        inputCells[4][2] = block1;
        inputCells[4][3] = block2;

        gbc.setCells(inputCells);

        gbc.mergeBlocks(3);

        const expectedCells = createEmptyCells();
        const mergedBlock = new Block(4);
        expectedCells[4][3] = mergedBlock;


        expect(gbc.cells).toEqual(expectedCells);
    });

    it('merges blocks with the same value on same column', () => {
        const gbc = new GameBoardController(5, 6);

        const inputCells = createEmptyCells();
        const block1 = new Block(2);
        const block2 = new Block(2);
        inputCells[3][3] = block1;
        inputCells[4][3] = block2;

        gbc.setCells(inputCells);

        gbc.mergeBlocks(3);

        const expectedCells = createEmptyCells();
        const mergedBlock = new Block(4);
        expectedCells[4][3] = mergedBlock;


        expect(gbc.cells).toEqual(expectedCells);
    });

    it('merges an L shape of matching blocks', () => {
        const gbc = new GameBoardController(5, 6);

        const inputCells = createEmptyCells();
        const block1 = new Block(2);
        const block2 = new Block(2);
        const block3 = new Block(2);
        inputCells[3][3] = block1;
        inputCells[4][3] = block2;
        inputCells[4][4] = block3;

        gbc.setCells(inputCells);

        gbc.mergeBlocks(3);

        const expectedCells = createEmptyCells();
        const mergedBlock = new Block(8);
        expectedCells[4][3] = mergedBlock;


        expect(gbc.cells).toEqual(expectedCells);
    });

    it('avoids merging non matches', () => {
        const gbc = new GameBoardController(5, 6);

        const inputCells = createEmptyCells();
        const block1 = new Block(2);
        const block2 = new Block(2);
        const block3 = new Block(2);
        const block4 = new Block(64);
        inputCells[3][3] = block1;
        inputCells[4][3] = block2;
        inputCells[4][4] = block3;
        inputCells[4][2] = block4;

        gbc.setCells(inputCells);

        gbc.mergeBlocks(3);

        const expectedCells = createEmptyCells();
        const mergedBlock = new Block(8);
        expectedCells[4][3] = mergedBlock;
        expectedCells[4][2] = block4;


        expect(gbc.cells).toEqual(expectedCells);
    });
});

describe('Block', () => {
    it('constructs as block with a value', () => {
        const block = new Block(2);
        expect(block).toBeInstanceOf(Block);
        expect(block.value).toBe(2);
    });

});