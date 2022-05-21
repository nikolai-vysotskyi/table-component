// import axios from 'axios';

const onAxiosForbidden = async (err, callback) => {
    const status = (err.response || {}).status;

    if (status === 403) {
        return window.location = '/';
    }

    throw err;
};

export default onAxiosForbidden;
