﻿// Обертка (function($){ }) (jQuery) используется для того, чтобы внутри кода плагина можно было использовать знак $,
// и при этом не будет конфликта с другими библиотеками JavaScript.
(function ($) {

    /* Создаем плагин с именем adjust, который будет устанавливать размер и цвет выбранным элементам. */
    $.fn.adjust = function (option) {
        /* Установим значения опций по умолчанию. Они будут использованы, если пользователь при вызове плагина не передаст значений. */
        let setting = { size: "1.4em", color: "red" };
        return $(this).each(function () {
            // Если пользователь передал опции, соединить их с опциями по умолчанию 
            if (option) { $.extend(setting, option); }
            $(this).css("fontSize", setting.size);
            $(this).css("color", setting.color);
        });
    }

})(jQuery)