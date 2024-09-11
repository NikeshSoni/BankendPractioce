const { constants } = require('../constants')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                massage: err.massage,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Validation failed",
                massage: err.massage,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "unauthorized",
                massage: err.massage,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDDEN:
            res.json({
                title: "FORBIDDDEN Error",
                massage: err.massage,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                massage: err.massage,
                stackTrace: err.stack
            });
            break;


        default:
            console.log("all was Good");;
            
            break
    }




    // {
    //     "name":"nikesh",
    //     "email":"nikesh@gmail.com",
    //     "phone":"8080008052"
    //   }
}

module.exports = errorHandler