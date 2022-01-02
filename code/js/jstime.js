function UpdateClock(){
    var now = new Date();
    var dname =now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "PAGI";
    if (hou == 0 ){
        hou = 12;
    }
    if (hou > 12){
        hou = hou - 12;
        pe = "MALAM";
    }
    Number.prototype.pad = function(digits) {
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }
        var months = ["Januari",
                      "Febuari",
                      "Maret",
                      "April",
                      "Mei",
                      "Juni",
                      "Juli",
                      "Agustus",
                      "September",
                      "Oktober",
                      "November",
                      "Desember"];
        var week = ["Minggu","Senin","Selasa"
                    ,"Rabu","Kamis","Jumat","Sabtu"];
        var ids = ["namahari","bulan","tanggal","tahun",
                    "jam","menit","detik","periodewaktu"];
        var values = [week[dname],  months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec, pe ];
        for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock() {
    UpdateClock();
    window.setInterval("UpdateClock()",1);
}

//Bahasa Indonesia 
//Jika ingin menggunakannya, gunakan fungsi onload pada js