const commonResponse = ({
    res,
    success = false,
    message = ' ',
    data = null,
    token,
}) => {
    success
        ? res.send({ success, message, data, token })
        : res.send({ success, message, data });
};

export default commonResponse;
