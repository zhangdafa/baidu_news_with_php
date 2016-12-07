$(document).ready(function() {
		//宽度设置
        var deviceWidth = $("body").width();
        $("nav li").each(function(index, value) {
            if ($(this).find("a").html().split("").length > 2) {
                $(this).width(deviceWidth / 3);
            } else {
                $(this).width(deviceWidth / 6);
            }
        });
    });