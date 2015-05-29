$(document).ready(function () {

    //provide data
    var data =
        [
            {
                "Fullname": "ali",
                "Comment": "what is templating ?",
                "Date": "20 May 2015"
            },
            {
                "Fullname": "mohammadreza",
                "Comment": "great article !!!",
                "Date": "21 May 2015"
            },
            {
                "Fullname": "hasan",
                "Comment": "useful article .",
                "Date": "22 May 2015"
            }
        ];

    //provide string of the template
    var cmTemplateStr = $("#comment-template").html();
    //cmTemplateStr = 
    //
    //<% _.each(items,function(item) { %>
    //<div class="media">
    //    <div class="media-body">
    //        <p class="media-heading">
    //            <b><%= item.Fullname %></b><small> (<%= item.Date %>)</small>
    //        </p>
    //        <%= item.Comment %>
    //    </div>
    //</div>
    //<% });%>

    //provide template of underscore 
    var cmTemplate = _.template(cmTemplateStr);

    //inserting data into the template
    var result = cmTemplate({ items: data });

    //place provided data into a html dom
    $("#DataPlaceHolder").html(result);

});