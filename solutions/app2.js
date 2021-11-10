const HU = {
    date(date) {date => new Intl.DateTimeFormat('hu-HU').format(date)}, 
    currency(number) {number => new Intl.NumberFormat('hu-HU', {style: 'currency', currency : 'Ft'})},
    list(array) {array => [array[0], array[1], array[2]]},
};

export default HU
