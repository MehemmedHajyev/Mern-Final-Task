class User {
    constructor (props) {
        this.name = props.name;
        this.age = props.age;
        this.email = props.email;
    }

    static mapAll(rows) {
        return rows.map(row => new User(row));
    }


    static mapOne(row) {
        return new User(row);
    }
}

module.exports = User