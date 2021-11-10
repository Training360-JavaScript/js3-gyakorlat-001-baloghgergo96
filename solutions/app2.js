const HU = {
    date: (date) => new Intl.DateTimeFormat('hu-HU').format(date), 
    curreny: (number) => new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF'}).format(number),
    list: (array) => `${array[0]}, ${array[1]} és ${array[2]}`,
};

export default HU
