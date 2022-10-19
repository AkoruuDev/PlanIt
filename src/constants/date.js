const dateToday = new Date();

function dd() {
    return dateToday.getDate();
}

function mm() {
    return dateToday.getMonth() + 1;
}

function week() {
    const week = dateToday.getDay() + 1;
    
    switch(week) {
        case 1:
            return("Domingo");
        case 2:
            return("Segunda");
        case 3:
            return("Terça");
        case 4:
            return("Quarta");
        case 5:
            return("Quinta");
        case 6:
            return("Sexta");
        case 7:
            return("Sabado");
        default:
            return("Deu ruim");
    }
}

export { week, dd, mm };