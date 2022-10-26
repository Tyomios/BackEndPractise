var currentDate = new Date();

module.exports.date = currentDate;

module.exports.getMessage = function(name) {
    var hour = currentDate.getHours;
    if (hour as unknown as number > 16)
        return "Добрый вечер" + name;

    else if (hour as unknown as number > 10)
        return "Добрый день" + name;

    else 
        return "Доброе утро" + name;
}