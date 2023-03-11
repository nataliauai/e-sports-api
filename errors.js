
class AppError extends Error {
    constructor(message, statusCode = 400){
        super()
        this.message = { message }
        this.statusCode = statusCode
    }
}

const errorHandler = (error, req, res, next) => {

    if(error instanceof AppError){
        console.log(error.message)
        console.log(error.status)
        return res.status(error.statusCode).json ( error.message)
    }

    // console.log(error)

    return res.status(404).json({
        message: 'Internal server error'
    })

}

export { AppError, errorHandler }
