function privet() {
    var timer1 = new Date();
    var timer_hours1 = timer1.getHours();

    if (timer_hours1 > 18 && timer_hours1 < 24) {
        confirm('good evening');
    }
    else if (timer_hours1 > 6 && timer_hours1 < 12) {
        confirm('good morning');
    }
    else if (timer_hours1 > 12 && timer_hours1 < 18) {
        confirm('good afternoon');
    }
    else if (timer_hours1 >= 0 && timer_hours1 < 6) {
        confirm('good night');
    };
};
privet();
var obj_hours = document.getElementById("timer_content");

function wr_hours() {
    var time = new Date();
    var time_hours = time.getHours();
    var time_min = time.getMinutes();
    var time_sec = time.getSeconds();
    var full_time = 'Сейчас ' + ((time_hours < 10) ? "0" : "") + time_hours;
    full_time += ":";
    full_time += ((time_min < 10) ? "0" : "") + time_min;
    full_time += ":";
    full_time += ((time_sec < 10) ? "0" : "") + time_sec;

    obj_hours.innerHTML = full_time;

};


setInterval("wr_hours();", 1000);
