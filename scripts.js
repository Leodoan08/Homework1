$(function() {
    /* This method help GET ID button and print out id and name from the HW1.js, also it can print out the produc.screen_at too.
       i do get #get-id get from index.html to fill in there. 
       when i click this function it will go the the url. then success function will get the response.
       reponse product(file). using foreach (forEach() is an array)
       then get the id, name, and produc.screen from the HW1.js to print out. 
    */ 
    $('#get-id').on('click', function() {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + product.id + '</td>\
                            <td class="name">' + product.name + '</td>\
                            <td><input type="text" class="name" value="' + product.screen + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });
    /* This method help get-text button and print out text and time from the HW1.js
       i do get #get-id get from index.html to fill in there. 
       when i click this function it will go the the url. then success function will get the response.
       reponse product(file). using foreach (forEach() is an array)
       then get the Text & Create_atfrom the HW1.js to print out. 
    */ 
    $('#get-text').on('click', function() {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="name">' + product.Text + '</td>\
                            <td class="time">' + product.Create_at + '</td>\
                        </tr>\
                    ');
                });
            }
        });
    });
     
    
    // Search ID
    /* 
    */ 
    $('#create-form').on('submit', function(event) {
        event.preventDefault();

        var createInput = $('#create-input');

        $.ajax({
            url: '/products',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: createInput.val() }),
            success: function(response) {
                console.log(response);
                createInput.val('');
                $('#get-id').click();
            }
        });
    });

    // UPDATE/PUT
    /* This method is call update screen. We need a new name so update new name.
     first clear some id and newname 
     also use ajax to go url and application
     use success function to get response. then print it out.
     when i use this the $get-id button is still in the screen
    */ 
    $('table').on('click', '.put-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newName = rowEl.find('.name').val();

        $.ajax({
            url: '/products/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ newName: newName }),
            success: function(response) {
                console.log(response);
                $('#get-id').click();
            }
        });
    });

    // DELETE
    /* This method is call delete screen. We need id and name
     first clear some id 
     but this one using method delete so it will delete the line we click
     also use ajax to go url and application
     use success function to get response. then print it out.
     when i use this the $get-id button still have but the id and name on that line will delete
    */ 
    $('table').on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();

        $.ajax({
            url: '/products/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#get-id').click();
            }
        });
    });
});