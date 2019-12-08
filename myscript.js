var document;
$("textarea").tabby();
$(".toggleButton").hover(function () {
    $(this).addClass("hover");
}, function () {
    $(this).removeClass("hover");
});
$(".toggleButton").click(function () {
    $(this).toggleClass('active');
    //            console.log($(this).attr("id"));
    let name = "#" + $(this).attr("id") + "Area";
    if ($(this).hasClass("active")) {

        $(name).css("display", "block");
    } else {
        $(name).css("display", "none");
    }
    sizing();
});

function sizing() {
    var areas = document.querySelectorAll("textarea");
    var nams = []
    for (let i = 0; i < areas.length; i++) {
        nams[i] = areas[i];
    }
    nams.splice(-1, 0, $("iframe"));
    var q = 0;
    nams.forEach(function (e) {
        if ($(e).css("display") == "block") {
            q++;
        }
    });
    nams.forEach(function (x) {
        if ($(x).hasClass("active")) {
            $(x).removeAttr("class");
            $(x).addClass("col-" + 12 / q);
            $(x).addClass("active");
        } else {
            $(x).removeAttr("class");
            $(x).addClass("col-" + 12 / q);
        }
    });

    if (q > 1) {
        //                nams.splice(-1, 1);
        nams.forEach(function (x) {
            $(x).addClass("textArea2");
        });
    }
}

$("iframe").contents().find("html").html($("#htmlArea").val());
$("textarea").on("change keyup paste", update);

function update() {
    $("iframe").contents().find("html").html("<html><head><style rel='stylesheet'>" + $("#cssArea").val() + "</style></head><body>" + $("#htmlArea").val() + "</body></html>");
    document.getElementById("liveArea").contentWindow.eval($("#jsArea").val());
}
