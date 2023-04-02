var domain;

if (process.env.NODE_ENV === 'production') {
    var domain = 'https://pizza-resturant.vercel.app/'
} else {
    domain= 'http://localhost:3000/'
}

export default domain