class Partners {
    constructor (props) {
        this.partnerId = props?.partnerId || null;
        this.partnerName = props?.partnerName || '';

        this.updatePartner = this.updatePartner.bind(this);
        this.deletePartner = this.deletePartner.bind(this);
        this.addPartner = this.addPartner.bind(this);
    }

    static mapAll(rows) {
        return rows.map(row => new Partners(row));
    }

    static mapOne(row) {
        return new Partners(row);
    }


}
