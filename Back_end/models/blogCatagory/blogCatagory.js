class BlogCategory {
    constructor (props) {
        this.id = props?.id || null;
        this.categoryName = props?.categoryName || '';
    }

    static mapAll(rows) {
        return rows.map(row => new BlogCategory(row));
    }

    static mapOne(row) {
        return new BlogCategory(row);
    }
}