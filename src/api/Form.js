class Form {

    constructor(data) {
        this.data = data


        for (let fiel in this.data) {
            this[fiel] = this.data[fiel]
        }
        delete this.data
    }

    get(fiel) {
        return this[fiel]
    }

    clear() {
        for (let fiel in this.data) {
            this[fiel] = '';
        }
    }
}

export default Form;