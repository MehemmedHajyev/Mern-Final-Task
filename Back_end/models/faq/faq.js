class FAQ {
    constructor (row) {
        this.id = row.id;
        this.question = row.question;
        this.answer = row.answer;
    };

    static mapOne(row) {
        return new FAQ(row);
    }

    static mapAll(rows) {
        return rows.map(row => new FAQ(row));
    }
};

module.exports = FAQ;