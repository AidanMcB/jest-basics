class Example {
    
    divide(a, b) {
        return a / b;
    }

    async returnsAPromise(){
        let myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise Resolved!');
            }, 300)
        })
        return myPromise;
    }

    async returnsFailedPromise(){
        let myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Whoa there is an error');
            }, 300)
        })
        return myPromise;
    }
}

module.exports = Example;