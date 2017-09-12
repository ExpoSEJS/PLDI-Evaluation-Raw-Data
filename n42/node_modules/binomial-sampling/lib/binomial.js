function bernouli(p) {
    if (Math.random() <= p) {
        return 1;
    } else {
        return 0;
    }
}

function binomial(n, p) {
    var x = 0;
    for (var i = 0; i < n; i++) {
        x += bernouli(p);
    }
    return x;
}

module.exports = binomial;