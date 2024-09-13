

class Blog {
    constructor (props) {
        this.id = props?.id || null;
        this.title = props?.title || '';
        this.blogCategoryId = props?.blogCategoryId || null;  // Blog kategorisi ID
        this.publicDate = props?.publicDate || new Date();    // Yayınlanma tarihi
        this.imgUrl = props?.imgUrl || '';
        this.content = props?.content || '';

        this.updateBlog = this.updateBlog.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.addBlog = this.addBlog.bind(this);
    }

    static mapAll(rows) {
        return rows.map(row => new Blog(row));
    }

    static mapOne(row) {
        return new Blog(row);
    }

    updateBlog(newProps) {
        // Veritabanı güncelleme işlemi için gerekli sorguyu ekleyin
        this.title = newProps?.title || this.title;
        this.blogCategoryId = newProps?.blogCategoryId || this.blogCategoryId;
        this.publicDate = newProps?.publicDate || this.publicDate;
        this.imgUrl = newProps?.imgUrl || this.imgUrl;
        this.content = newProps?.content || this.content;
        // Veritabanına update sorgusu gönderin
    }

    deleteBlog() {
        // Blog'u veritabanından silmek için sorgu ekleyin
    }

    addBlog() {
        // Yeni blog'u veritabanına eklemek için sorgu ekleyin
    }
}
