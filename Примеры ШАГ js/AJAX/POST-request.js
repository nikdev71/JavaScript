/*
Состояние запроса readyState представл¤ет собой число:
1: метод open() был вызван, но запрос еще не был отправлен методом send()
2: запрос был отправлен, заголовки и статус ответа получены и готовы к использованию
3: идет обмен данными (часть данных уже получена)
4: выполнение запроса полностью завершено (даже если получен код ошибки, например, 404)
*/

let xmlHttp = new XMLHttpRequest(); // глобальный объект

function loadHandler() {
    if (xmlHttp) {
        try {
            let firstNumber = document.getElementById("firstNumber").value;
            let secondNumber = document.getElementById("secondNumber").value;
            let params = "firstNumber=" + firstNumber + "&secondNumber=" + secondNumber;
            xmlHttp.open("POST", "http://localhost:8080/AJAX/POST-request.php", true);
            //  Каждая пара ключ-значение отделяется символом &, ключ отделен от значения символом =  
            // В ключах и значениях пробелы заменяются на знак +, и затем, используя URL-кодирование, 
            // заменяются все не буквенно-цифровые символы
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // Событие readystatechange возникает каждый раз, когда измен¤етс¤ значение свойства readyState. 
            xmlHttp.onreadystatechange = handleRequestStateChange;
            xmlHttp.send(params);
        }
        catch (e) {
            console.log("Нет подключения к серверу:\n" + e.toString());
        }
    }
}


function handleRequestStateChange() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            try {
                // responseXML: возвращает ответ от сервера в формате xml
                let xmlResponse = xmlHttp.responseXML;
                if (!xmlResponse || !xmlResponse.documentElement)
                    throw "Invalid XML structure:\n" + xmlHttp.responseText;

                let xmlRoot = xmlResponse.documentElement;
                let data = xmlRoot.firstChild.data;
                document.getElementById("myDivElement").innerHTML = "Сервер ответил: " + data;
            }
            catch (e) {
                document.getElementById("myDivElement").innerHTML = "Ошибка чтения ответа: " + e.toString();
            }
        }
        else {
            document.getElementById("myDivElement").innerHTML = "Проблемы с получением данных: " + xmlHttp.statusText;
        }
    }
}