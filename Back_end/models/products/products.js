class Products {
    constructor (props) {
        this.productId = props?.productId || null;
        this.productName = props?.productName || '';
        this.productPrice = props?.productPrice || 0.0;
        this.productQuantity = props?.productQuantity || 0;
        this.productCategory = props?.productCategory || 'Uncategorized';
        this.productDescription = props?.productDescription || '';
        this.productImage = props?.productImage || '';
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
        // Məhsul məlumatlarını yeniləmək üçün buraya verilənlər bazası əməliyyatını əlavə edin
        this.productName = newProps?.productName || this.productName;
        this.productPrice = newProps?.productPrice || this.productPrice;
        this.productQuantity = newProps?.productQuantity || this.productQuantity;
        this.productCategory = newProps?.productCategory || this.productCategory;
        this.productDescription = newProps?.productDescription || this.productDescription;
        this.productImage = newProps?.productImage || this.productImage;
        this.productUpdatedDate = new Date();
        // Verilənlər bazasına update sorğusu göndərin
    }

    deleteProduct() {
        // Məhsulu verilənlər bazasından silmək üçün buraya verilənlər bazası əməliyyatını əlavə edin
    }

    addProduct() {
        // Yeni məhsulu verilənlər bazasına əlavə etmək üçün buraya verilənlər bazası əməliyyatını əlavə edin
    }

    updateProductQuantity(quantity) {
        if (quantity >= 0) {
            this.productQuantity = quantity;
            this.productUpdatedDate = new Date();
            // Verilənlər bazasına update sorğusu göndərin
        }
    }
}
