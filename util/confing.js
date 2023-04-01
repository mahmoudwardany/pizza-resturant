var domain;

if (process.env.NODE_ENV === 'production') {
    var domain = 'https://pizzaina.onrender.com'
} else {
    domain= 'http://localhost:3000/'
}

export default domain