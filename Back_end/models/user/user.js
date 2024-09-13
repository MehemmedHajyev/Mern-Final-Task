class User {
    constructor (props) {
        this.id = props.id;
        this.username = props.username;
        this.password = props.password;
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