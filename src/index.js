const belowTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toReadableNumber(num) {
    if (num < 20) {
        return belowTwenty[num];
    } else if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + belowTwenty[num % 10] : '');
    } else if (num < 1000) {
        return belowTwenty[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + toReadableNumber(num % 100) : '');
    } else {
        return 'Number out of supported range';
    }
}

module.exports = toReadableNumber;

