var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://lenny:lenny@firstckustrer.endt1ni.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://lenny:lenny@firstckustrer.endt1ni.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://lenny:lenny@firstckustrer.endt1ni.mongodb.net/darkroom-test?retryWrites=true&w=majority',

}
module.exports = config;
