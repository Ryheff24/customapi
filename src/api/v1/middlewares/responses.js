import logger from '../../../util/logger';

export default function responsesMiddleware(req, res, next) {
    res.handleError = (err) => {
        if (!err) {
            return res.status(500).send('An unknown error occurred');
        }
        if (err.safe) {
            return res.status(err.code || 500).send(err.getMessage());
        }
        return res.status(err.code || 500).send('An unknown error occurred');
    };
    next();
}
