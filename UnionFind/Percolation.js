const UnionFind = require('./UnionFind.js');

class Percolation extends UnionFind {

    // creates n-by-n grid, with all sites initially blocked
    constructor(n){
        super(n*n);
        this.countOfOpenSites = 0;
        this.grid = [];
        
        let count = 0;
        for(let i = 0; i < n; i++) {
            const row = [];
            for(let j = 0; j < n; j++) {
                row.push({ id: count++, isOpen: false });
            }
            this.grid.push(row);
        }
    }

    // opens the site (row, col) if it is not open already
    open(row, col) {
        if(!this.#isValid(row, col)) return new Error('Please provide valid values for row and column.');
        const cell = this.grid[row][col];

        if(!cell.isOpen) {
            const upCell     = this.grid[row - 1]?.[col];
            const bottomCell = this.grid[row + 1]?.[col];
            const leftCell   = this.grid[row][col - 1]?.[col];
            const rightCell  = this.grid[row][col + 1]?.[col];


            if(upCell?.isOpen)     this.union(upCell.id, cell.id);
            if(bottomCell?.isOpen) this.union(bottomCell.id, cell.id);
            if(leftCell?.isOpen)   this.union(leftCell.id, cell.id);
            if(rightCell?.isOpen)  this.union(rightCell.id, cell.id);
            
            cell.isOpen = true;
            this.countOfOpenSites++;
        }
        return this.grid;
    }

    // is the site (row, col) open?
    isOpen(row, col){
        if(!this.#isValid(row, col)) return new Error('Please provide valid values for row and column.');
        
        return this.grid[row][col].isOpen;
    }

    // is the site (row, col) full?
    isFull(row, col){
        const topRow = this.grid[0];
        const targetCell = this.grid[row][col];
        const targetCellRoot = this.find(targetCell.id);
        return topRow.some(cell => this.connected(cell.id, targetCellRoot));

    }

    // returns the number of open sites
    numberOfOpenSites() {
        return this.countOfOpenSites;
    }

    // does the system percolate?
    percolates() {
        const topRow = this.grid[0];
        const bottomRow = this.grid[this.grid.length - 1];

        const topRowRoots = new Set();

        topRow.forEach(topCell => {
            const topCellRoot = this.find(topCell.id);
            topRowRoots.add(topCellRoot);
        });

        return bottomRow.some(bottomCell => topRowRoots.has(bottomCell.id));
    }

    #isValid(row, col) {
        return Number.isInteger(row) && Number.isInteger(col) && row >= 0 && row < this.grid.length && col >= 0 && col < this.grid.length;
    }
}