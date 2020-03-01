const chainMaker = {
    array: [],
    getLength() {
        return this.array.length;
    },

    addLink(value) {
        this.array.push(`( ${value} )`);
        return this;
    },

    removeLink(position) {
        if (typeof(position) !== 'number' ||
            parseInt(position) !== position ||
            position <= 0 ||
            position > this.array.length) {
            
            this.array = [];
            throw Error();
        }
        this.array.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },

    finishChain() {
        let chained = this.array.slice(0, this.array.length);
        this.array = [];
        return chained.join('~~');
    }
};

module.exports = chainMaker;