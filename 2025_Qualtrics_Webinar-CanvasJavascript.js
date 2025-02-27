// BEGIN CANVAS COURSE TERM COOKIE //
if (ENV.COURSE_ID != null) {
    // Assume term data is available in ENV (adjust based on actual ENV structure)
    var term = ENV.term || (ENV.course && ENV.course.term) || null;
    if (term && term.name && term.sis_term_id) {
        document.cookie = "canvas_course_term_name=" + encodeURIComponent(term.name) + ";path=/";
        document.cookie = "canvas_course_term_code=" + encodeURIComponent(term.sis_term_id) + ";path=/";
    } else {
        console.warn("Term data not found in ENV for course ID: " + ENV.COURSE_ID);
    }
}
// END CANVAS COURSE TERM COOKIE //

// BEGIN CREATE COOKIE FOR USE IN SITE INTERCEPT

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
// example usage
createCookie("user_role", ENV.current_user_roles, 1);

// END CREATE COOKIE FOR USE IN SITE INTERCEPT

// BEGIN QUALTRICS WEBSITE FEEDBACK SNIPPET

(function () {
    var g = function (e, h, f, g) {
        this.get = function (a) {
            for (var a = a + "=", c = document.cookie.split(";"), b = 0, e = c.length; b < e; b++) {
                for (var d = c[b];
                    " " == d.charAt(0);) d = d.substring(1, d.length);
                if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
            }
            return null
        };
        this.set = function (a, c) {
            var b = "",
                b = new Date;
            b.setTime(b.getTime() + 6048E5);
            b = "; expires=" + b.toGMTString();
            document.cookie = a + "=" + c + b + "; path=/; "
        };
        this.check = function () {
            var a = this.get(f);
            if (a) a = a.split(":");
            else if (100 != e) "v" == h && (e = Math.random() >= e / 100 ? 0 : 100), a = [h, e, 0], this.set(f, a.join(":"));
            else return !0;
            var c = a[1];
            if (100 == c) return !0;
            switch (a[0]) {
                case "v":
                    return !1;
                case "r":
                    return c = a[2] % Math.floor(100 / c), a[2]++, this.set(f, a.join(":")), !c
            }
            return !0
        };
        this.go = function () {
            if (this.check()) {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.src = g + "&t=" + (new Date()).getTime();
                document.body && document.body.appendChild(a)
            }
        };
        this.start = function () {
            var a = this;
            window.addEventListener ? window.addEventListener("load", function () {
                a.go()
            }, !1) : window.attachEvent && window.attachEvent("onload", function () {
                a.go()
            })
        }
    };
    try {
        (new g(100, "r", "QSI_S_ZN_*************", "https://zn*************-[brandID].siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_*************&Q_LOC=" + encodeURIComponent(window.location.href))).start()
    } catch (i) {}
})();

// REPLACE THE THREE INSTANCES OF '*************' ABOVE WITH YOUR INTERCEPT ID (STARTS WITH 'ZN_') FOUND IN YOUR INTERCEPT DEPLOYMENT
// END SITE INTERCEPT