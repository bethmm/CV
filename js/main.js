$(document).ready(function ()
    {
        console.log(2134)
    $("h2").on("click", function ()
        {
            console.log("-->", $(this).text())
            $(this).parents("section").find("div.sectionblock").slideToggle();
        });
    });
