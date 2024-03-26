/*
Состояние запроса readyState представляет собой число:
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
            xmlHttp.open("GET", "http://localhost:8080/AJAX/GET-request.php?" + params, true);
            // Событие readystatechange возникает каждый раз, когда изменяется значение свойства readyState. 
            xmlHttp.onreadystatechange = handleRequestStateChange;
            xmlHttp.send();
        }
        catch (e) {
            console.log("Нет подключения к серверу:\n" + e.toString());
        }
    }
}


function handleRequestStateChange() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            try {
                // responseXML: возвращает ответ от сервера в формате xml
                let xmlResponse = xmlHttp.responseXML;
                if (!xmlResponse || !xmlResponse.documentElement)
                    throw ("Неверная XML-структура:\n" + xmlHttp.responseText);

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