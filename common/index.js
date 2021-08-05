const commonResponse = ({
    res,
    success = false,
    message = ' ',
    data = null,
}) => {
    res.send({ success, message, data });
};

export default commonResponse;
