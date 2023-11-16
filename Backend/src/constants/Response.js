class Response {
    constructor(isSuccess, data, message) {
        this.isSuccess = isSuccess;
        this.data = data;
        this.message = message ;
    }
}

module.exports = Response;
