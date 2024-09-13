class Products {
    constructor (props) {
        this.productId = props?.productId || null;
        this.productName = props?.productName || '';
        this.productPrice = props?.productPrice || 0.0;
        this.productQuantity = props?.productQuantity || 0;
        this.productCategory = props?.productCategory || null;  // Kategori ID
        this.productDescription = props?.productDescription || '';
        this.productImages = props?.productImages || [];
        this.productCreatedDate = props?.productCreatedDate || new Date();
        this.productUpdatedDate = new Date();

        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.updateProductQuantity = this.updateProductQuantity.bind(this);
    }

    static mapAll(rows) {
        return rows.map(row => new Products(row));
    }

    static mapOne(row) {
        return new Products(row);
    }

    updateProduct(newProps) {
        // Veritabanı güncelleme işlemi için gerekli sorguyu ekleyin
        this.productName = newProps?.productName || this.productName;
        this.productPrice = newProps?.productPrice || this.productPrice;
        this.productQuantity = newProps?.productQuantity || this.productQuantity;
        this.productCategory = newProps?.productCategory || this.productCategory;  // Kategori ID
        this.productDescription = newProps?.productDescription || this.productDescription;
        this.productImages = newProps?.productImages || this.productImages;
        this.productUpdatedDate = new Date();
        // Veritabanına update sorgusu gönderin
    }

    deleteProduct() {
        // Ürünü veritabanından silmek için gerekli sorguyu ekleyin
    }

    addProduct() {
        // Yeni ürünü veritabanına eklemek için gerekli sorguyu ekleyin
    }

    updateProductQuantity(quantity) {
        if (quantity >= 0) {
            this.productQuantity = quantity;
            this.productUpdatedDate = new Date();
            // Veritabanına update sorgusu gönderin
        }
    }
}
