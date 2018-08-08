import home from './home';

const data = {
    home
};

class API {
    static getData(idData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (data[idData]) {
                    resolve(data[idData]);
                } else {
                    resolve({
                        errorAPI: true,
                        message: 'Data NOT found'
                    });
                }
            }, 3000);
        });
    }
}
export default API;