class BlogComment {
    constructor (props) {
        this.id = props?.id || null;
        this.blogId = props?.blogId || null;  // Blog kimliği (hangi bloga yapıldığı)
        this.name = props?.name || '';
        this.email = props?.email || '';
        this.message = props?.message || '';
        this.commentDate = props?.commentDate || new Date();  // Yorum tarihi

        this.updateComment = this.updateComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    static mapAll(rows) {
        return rows.map(row => new BlogComment(row));
    }

    static mapOne(row) {
        return new BlogComment(row);
    }

}
