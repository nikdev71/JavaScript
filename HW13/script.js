$(document).ready(function() {
    let users=[]; 
    let userId;

    $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){
        for(let i=0;i<data.length;i++){
            $('#users').append(`<li data-id="${data[i].id}">${data[i].name}</li>`)
            users.push(data[i])
        }
    })

    $(document).on('click','li', function(){
        $('li').css('font-weight','400')
        $('#userposts').css('display','none');
        $('#result').css('display','block');
        $(this).css('font-weight','600')
        userId = $(this).data('id');
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users/${userId}`,
            method: 'GET',
            success: function (data){
                let tableRow = '';
                
                for (let key in data) {
                    if(key=="id" || key =='company' || key== 'address') continue
                    if (data.hasOwnProperty(key)) {
                        tableRow += `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
                    }
                }
                
                $('#info').html(tableRow);
            },
            error: function(jqXHR, statusText, error) {
                alert(jqXHR.status + '\n' + statusText + '\n' + error);
            }
        })
    })
    $('#posts').click(function(){
        if(userId === null ) return;
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
            method: 'GET',
            success: function (data){
                let tableRow = '';
                for (let i = 0; i < data.length; i++) {
                    tableRow += `<div class="post">
                                    <h3>${data[i]['title']}</h3>
                                    <p>${data[i]['body']}</p>
                                 </div>`;
                }
                $('#userposts').css('display','block');
                $('#userposts').html(tableRow);
            },
            error: function(jqXHR, statusText, error) {
                alert(jqXHR.status + '\n' + statusText + '\n' + error);
            }
        })
    })
})