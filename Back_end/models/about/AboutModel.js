class About {
    constructor (props) {
        this.id = props.id,
            this.description = props.description,
            this.section_top_title = props.section_top_description,
            this.section_top_description = props.section_top_description,
            this.section_top_description1 = props.section_top_description1,
            this.section_top_description2 = props.section_top_description2,
            this.section_middle_title = props.section_middle_title,
            this.section_middle_sub_title1 = props.section_middle_sub_title1
            this.section_middle_sub_description1 = props.section_middle_sub_description1,
            this.section_middle_sub_image1 = props.section_middle_sub_image1,
            this.section_middle_sub_title2 = props.section_middle_sub_title2,
            this.section_middle_sub_description2 = props.section_middle_sub_description2
            this.section_middle_sub_image2 = props.section_middle_sub_image2,
            this.section_footer_title = props.section_footer_title,
            this.section_footer_description = props.section_footer_description


    }


    static mapOne(row) {
        return new About(row);
    }

    static mapAll(rows) {
        return rows.map(row => new About(row));
    }
}