class Discount {
    constructor (props) {
        this.id = props?.id || null;
        this.productId = props?.productId || null;
        this.name = props?.name || '';
        this.discountAmount = props?.discountAmount || 0.0;
        this.startDate = props?.startDate || new Date();
        this.endDate = props?.endDate || new Date();

        this.updateDiscount = this.updateDiscount.bind(this);
        this.deleteDiscount = this.deleteDiscount.bind(this);
        this.addDiscount = this.addDiscount.bind(this);
    }

    static mapAll(rows) {
        return rows.map(row => new Discount(row));
    }

    static mapOne(row) {
        return new Discount(row);
    }


}
