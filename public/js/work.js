(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/work"],{

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./resources/js/work/flatpickr.min.js":
/*!********************************************!*\
  !*** ./resources/js/work/flatpickr.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*! flatpickr v2.6.3, @license MIT */
function Flatpickr(e, t) {
  function n(e) {
    return e.bind(he);
  }

  function a(e) {
    he.config.noCalendar && !he.selectedDates.length && (he.selectedDates = [he.now]), pe(e), he.selectedDates.length && (!he.minDateHasTime || "input" !== e.type || e.target.value.length >= 2 ? (i(), oe()) : setTimeout(function () {
      i(), oe();
    }, 1e3));
  }

  function i() {
    if (he.config.enableTime) {
      var e = (parseInt(he.hourElement.value, 10) || 0) % (he.amPM ? 12 : 24),
          t = (parseInt(he.minuteElement.value, 10) || 0) % 60,
          n = he.config.enableSeconds ? (parseInt(he.secondElement.value, 10) || 0) % 60 : 0;
      void 0 !== he.amPM && (e = e % 12 + 12 * ("PM" === he.amPM.textContent)), he.minDateHasTime && 0 === ge(he.latestSelectedDateObj, he.config.minDate) && (e = Math.max(e, he.config.minDate.getHours())) === he.config.minDate.getHours() && (t = Math.max(t, he.config.minDate.getMinutes())), he.maxDateHasTime && 0 === ge(he.latestSelectedDateObj, he.config.maxDate) && (e = Math.min(e, he.config.maxDate.getHours())) === he.config.maxDate.getHours() && (t = Math.min(t, he.config.maxDate.getMinutes())), o(e, t, n);
    }
  }

  function r(e) {
    var t = e || he.latestSelectedDateObj;
    t && o(t.getHours(), t.getMinutes(), t.getSeconds());
  }

  function o(e, t, n) {
    he.selectedDates.length && he.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), he.config.enableTime && !he.isMobile && (he.hourElement.value = he.pad(he.config.time_24hr ? e : (12 + e) % 12 + 12 * (e % 12 == 0)), he.minuteElement.value = he.pad(t), he.config.time_24hr || (he.amPM.textContent = e >= 12 ? "PM" : "AM"), !0 === he.config.enableSeconds && (he.secondElement.value = he.pad(n)));
  }

  function l(e) {
    var t = e.target.value;
    e.delta && (t = (parseInt(t) + e.delta).toString()), 4 !== t.length && "Enter" !== e.key || (he.currentYearElement.blur(), /[^\d]/.test(t) || O(t));
  }

  function c(e, t, n) {
    return t instanceof Array ? t.forEach(function (t) {
      return c(e, t, n);
    }) : e instanceof Array ? e.forEach(function (e) {
      return c(e, t, n);
    }) : (e.addEventListener(t, n), void he._handlers.push({
      element: e,
      event: t,
      handler: n
    }));
  }

  function s(e) {
    return function (t) {
      return 1 === t.which && e(t);
    };
  }

  function d() {
    if (he._handlers = [], he._animationLoop = [], he.config.wrap && ["open", "close", "toggle", "clear"].forEach(function (e) {
      Array.prototype.forEach.call(he.element.querySelectorAll("[data-" + e + "]"), function (t) {
        return c(t, "mousedown", s(he[e]));
      });
    }), he.isMobile) return X();

    if (he.debouncedResize = me(j, 50), he.triggerChange = function () {
      te("Change");
    }, he.debouncedChange = me(he.triggerChange, 300), "range" === he.config.mode && he.daysContainer && c(he.daysContainer, "mouseover", function (e) {
      return P(e.target);
    }), c(window.document.body, "keydown", L), he.config["static"] || c(he._input, "keydown", L), he.config.inline || he.config["static"] || c(window, "resize", he.debouncedResize), void 0 !== window.ontouchstart && c(window.document, "touchstart", I), c(window.document, "mousedown", s(I)), c(he._input, "blur", I), !0 === he.config.clickOpens && c(he._input, "focus", he.open), he.config.noCalendar || (he.monthNav.addEventListener("wheel", function (e) {
      return e.preventDefault();
    }), c(he.monthNav, "wheel", me(ce, 10)), c(he.monthNav, "mousedown", s(se)), c(he.monthNav, ["keyup", "increment"], l), c(he.daysContainer, "mousedown", s(U)), he.config.animate && (c(he.daysContainer, ["webkitAnimationEnd", "animationend"], f), c(he.monthNav, ["webkitAnimationEnd", "animationend"], m))), he.config.enableTime) {
      var e = function e(_e) {
        return _e.target.select();
      };

      c(he.timeContainer, ["wheel", "input", "increment"], a), c(he.timeContainer, "mousedown", s(p)), c(he.timeContainer, ["wheel", "increment"], he.debouncedChange), c(he.timeContainer, "input", he.triggerChange), c([he.hourElement, he.minuteElement], "focus", e), void 0 !== he.secondElement && c(he.secondElement, "focus", function () {
        return he.secondElement.select();
      }), void 0 !== he.amPM && c(he.amPM, "mousedown", s(function (e) {
        a(e), he.triggerChange(e);
      }));
    }
  }

  function u() {
    for (var e = he._animationLoop.length; e--;) {
      he._animationLoop[e](), he._animationLoop.splice(e, 1);
    }
  }

  function f(e) {
    if (he.daysContainer.childNodes.length > 1) switch (e.animationName) {
      case "fpSlideLeft":
        he.daysContainer.lastChild.classList.remove("slideLeftNew"), he.daysContainer.removeChild(he.daysContainer.firstChild), he.days = he.daysContainer.firstChild, u();
        break;

      case "fpSlideRight":
        he.daysContainer.firstChild.classList.remove("slideRightNew"), he.daysContainer.removeChild(he.daysContainer.lastChild), he.days = he.daysContainer.firstChild, u();
    }
  }

  function m(e) {
    switch (e.animationName) {
      case "fpSlideLeftNew":
      case "fpSlideRightNew":
        he.navigationCurrentMonth.classList.remove("slideLeftNew"), he.navigationCurrentMonth.classList.remove("slideRightNew");

        for (var t = he.navigationCurrentMonth; t.nextSibling && /curr/.test(t.nextSibling.className);) {
          he.monthNav.removeChild(t.nextSibling);
        }

        for (; t.previousSibling && /curr/.test(t.previousSibling.className);) {
          he.monthNav.removeChild(t.previousSibling);
        }

        he.oldCurMonth = null;
    }
  }

  function g(e) {
    e = e ? he.parseDate(e) : he.latestSelectedDateObj || (he.config.minDate > he.now ? he.config.minDate : he.config.maxDate && he.config.maxDate < he.now ? he.config.maxDate : he.now);

    try {
      he.currentYear = e.getFullYear(), he.currentMonth = e.getMonth();
    } catch (t) {
      console.error(t.stack), console.warn("Invalid date supplied: " + e);
    }

    he.redraw();
  }

  function p(e) {
    ~e.target.className.indexOf("arrow") && h(e, e.target.classList.contains("arrowUp") ? 1 : -1);
  }

  function h(e, t, n) {
    var a = n || e.target.parentNode.childNodes[0],
        i = ne("increment");
    i.delta = t, a.dispatchEvent(i);
  }

  function D(e) {
    var t = de("div", "numInputWrapper"),
        n = de("input", "numInput " + e),
        a = de("span", "arrowUp"),
        i = de("span", "arrowDown");
    return n.type = "text", n.pattern = "\\d*", t.appendChild(n), t.appendChild(a), t.appendChild(i), t;
  }

  function v() {
    var e = window.document.createDocumentFragment();
    he.calendarContainer = de("div", "flatpickr-calendar"), he.calendarContainer.tabIndex = -1, he.config.noCalendar || (e.appendChild(k()), he.innerContainer = de("div", "flatpickr-innerContainer"), he.config.weekNumbers && he.innerContainer.appendChild(N()), he.rContainer = de("div", "flatpickr-rContainer"), he.rContainer.appendChild(E()), he.daysContainer || (he.daysContainer = de("div", "flatpickr-days"), he.daysContainer.tabIndex = -1), M(), he.rContainer.appendChild(he.daysContainer), he.innerContainer.appendChild(he.rContainer), e.appendChild(he.innerContainer)), he.config.enableTime && e.appendChild(x()), fe(he.calendarContainer, "rangeMode", "range" === he.config.mode), fe(he.calendarContainer, "animate", he.config.animate), he.calendarContainer.appendChild(e);
    var t = he.config.appendTo && he.config.appendTo.nodeType;

    if (he.config.inline || he.config["static"]) {
      if (he.calendarContainer.classList.add(he.config.inline ? "inline" : "static"), he.config.inline && !t) return he.element.parentNode.insertBefore(he.calendarContainer, he._input.nextSibling);

      if (he.config["static"]) {
        var n = de("div", "flatpickr-wrapper");
        return he.element.parentNode.insertBefore(n, he.element), n.appendChild(he.element), he.altInput && n.appendChild(he.altInput), void n.appendChild(he.calendarContainer);
      }
    }

    (t ? he.config.appendTo : window.document.body).appendChild(he.calendarContainer);
  }

  function C(e, t, n, a) {
    var i = A(t, !0),
        r = de("span", "flatpickr-day " + e, t.getDate());
    return r.dateObj = t, r.$i = a, r.setAttribute("aria-label", he.formatDate(t, he.config.ariaDateFormat)), 0 === ge(t, he.now) && (he.todayDateElem = r, r.classList.add("today")), i ? (r.tabIndex = -1, ae(t) && (r.classList.add("selected"), he.selectedDateElem = r, "range" === he.config.mode && (fe(r, "startRange", 0 === ge(t, he.selectedDates[0])), fe(r, "endRange", 0 === ge(t, he.selectedDates[1]))))) : (r.classList.add("disabled"), he.selectedDates[0] && t > he.minRangeDate && t < he.selectedDates[0] ? he.minRangeDate = t : he.selectedDates[0] && t < he.maxRangeDate && t > he.selectedDates[0] && (he.maxRangeDate = t)), "range" === he.config.mode && (ie(t) && !ae(t) && r.classList.add("inRange"), 1 === he.selectedDates.length && (t < he.minRangeDate || t > he.maxRangeDate) && r.classList.add("notAllowed")), he.config.weekNumbers && "prevMonthDay" !== e && n % 7 == 1 && he.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + he.config.getWeek(t) + "</span>"), te("DayCreate", r), r;
  }

  function w(e, t) {
    var n = e + t || 0,
        a = void 0 !== e ? he.days.childNodes[n] : he.selectedDateElem || he.todayDateElem || he.days.childNodes[0],
        i = function i() {
      (a = a || he.days.childNodes[n]).focus(), "range" === he.config.mode && P(a);
    };

    if (void 0 === a && 0 !== t) return t > 0 ? (he.changeMonth(1), n %= 42) : t < 0 && (he.changeMonth(-1), n += 42), b(i);
    i();
  }

  function b(e) {
    if (!0 === he.config.animate) return he._animationLoop.push(e);
    e();
  }

  function M(e) {
    var t = (new Date(he.currentYear, he.currentMonth, 1).getDay() - he.l10n.firstDayOfWeek + 7) % 7,
        n = "range" === he.config.mode;
    he.prevMonthDays = he.utils.getDaysinMonth((he.currentMonth - 1 + 12) % 12), he.selectedDateElem = void 0, he.todayDateElem = void 0;
    var a = he.utils.getDaysinMonth(),
        i = window.document.createDocumentFragment(),
        r = he.prevMonthDays + 1 - t,
        o = 0;

    for (he.config.weekNumbers && he.weekNumbers.firstChild && (he.weekNumbers.textContent = ""), n && (he.minRangeDate = new Date(he.currentYear, he.currentMonth - 1, r), he.maxRangeDate = new Date(he.currentYear, he.currentMonth + 1, (42 - t) % a)); r <= he.prevMonthDays; r++, o++) {
      i.appendChild(C("prevMonthDay", new Date(he.currentYear, he.currentMonth - 1, r), r, o));
    }

    for (r = 1; r <= a; r++, o++) {
      i.appendChild(C("", new Date(he.currentYear, he.currentMonth, r), r, o));
    }

    for (var l = a + 1; l <= 42 - t; l++, o++) {
      i.appendChild(C("nextMonthDay", new Date(he.currentYear, he.currentMonth + 1, l % a), l, o));
    }

    n && 1 === he.selectedDates.length && i.childNodes[0] ? (he._hidePrevMonthArrow = he._hidePrevMonthArrow || he.minRangeDate > i.childNodes[0].dateObj, he._hideNextMonthArrow = he._hideNextMonthArrow || he.maxRangeDate < new Date(he.currentYear, he.currentMonth + 1, 1)) : re();
    var c = de("div", "dayContainer");
    if (c.appendChild(i), he.config.animate && void 0 !== e) for (; he.daysContainer.childNodes.length > 1;) {
      he.daysContainer.removeChild(he.daysContainer.firstChild);
    } else y(he.daysContainer);
    return e >= 0 ? he.daysContainer.appendChild(c) : he.daysContainer.insertBefore(c, he.daysContainer.firstChild), he.days = he.daysContainer.firstChild, he.daysContainer;
  }

  function y(e) {
    for (; e.firstChild;) {
      e.removeChild(e.firstChild);
    }
  }

  function k() {
    var e = window.document.createDocumentFragment();
    he.monthNav = de("div", "flatpickr-month"), he.prevMonthNav = de("span", "flatpickr-prev-month"), he.prevMonthNav.innerHTML = he.config.prevArrow, he.currentMonthElement = de("span", "cur-month"), he.currentMonthElement.title = he.l10n.scrollTitle;
    var t = D("cur-year");
    return he.currentYearElement = t.childNodes[0], he.currentYearElement.title = he.l10n.scrollTitle, he.config.minDate && (he.currentYearElement.min = he.config.minDate.getFullYear()), he.config.maxDate && (he.currentYearElement.max = he.config.maxDate.getFullYear(), he.currentYearElement.disabled = he.config.minDate && he.config.minDate.getFullYear() === he.config.maxDate.getFullYear()), he.nextMonthNav = de("span", "flatpickr-next-month"), he.nextMonthNav.innerHTML = he.config.nextArrow, he.navigationCurrentMonth = de("span", "flatpickr-current-month"), he.navigationCurrentMonth.appendChild(he.currentMonthElement), he.navigationCurrentMonth.appendChild(t), e.appendChild(he.prevMonthNav), e.appendChild(he.navigationCurrentMonth), e.appendChild(he.nextMonthNav), he.monthNav.appendChild(e), Object.defineProperty(he, "_hidePrevMonthArrow", {
      get: function get() {
        return this.__hidePrevMonthArrow;
      },
      set: function set(e) {
        this.__hidePrevMonthArrow !== e && (he.prevMonthNav.style.display = e ? "none" : "block"), this.__hidePrevMonthArrow = e;
      }
    }), Object.defineProperty(he, "_hideNextMonthArrow", {
      get: function get() {
        return this.__hideNextMonthArrow;
      },
      set: function set(e) {
        this.__hideNextMonthArrow !== e && (he.nextMonthNav.style.display = e ? "none" : "block"), this.__hideNextMonthArrow = e;
      }
    }), re(), he.monthNav;
  }

  function x() {
    he.calendarContainer.classList.add("hasTime"), he.config.noCalendar && he.calendarContainer.classList.add("noCalendar"), he.timeContainer = de("div", "flatpickr-time"), he.timeContainer.tabIndex = -1;
    var e = de("span", "flatpickr-time-separator", ":"),
        t = D("flatpickr-hour");
    he.hourElement = t.childNodes[0];
    var n = D("flatpickr-minute");

    if (he.minuteElement = n.childNodes[0], he.hourElement.tabIndex = he.minuteElement.tabIndex = -1, he.hourElement.value = he.pad(he.latestSelectedDateObj ? he.latestSelectedDateObj.getHours() : he.config.defaultHour), he.minuteElement.value = he.pad(he.latestSelectedDateObj ? he.latestSelectedDateObj.getMinutes() : he.config.defaultMinute), he.hourElement.step = he.config.hourIncrement, he.minuteElement.step = he.config.minuteIncrement, he.hourElement.min = he.config.time_24hr ? 0 : 1, he.hourElement.max = he.config.time_24hr ? 23 : 12, he.minuteElement.min = 0, he.minuteElement.max = 59, he.hourElement.title = he.minuteElement.title = he.l10n.scrollTitle, he.timeContainer.appendChild(t), he.timeContainer.appendChild(e), he.timeContainer.appendChild(n), he.config.time_24hr && he.timeContainer.classList.add("time24hr"), he.config.enableSeconds) {
      he.timeContainer.classList.add("hasSeconds");
      var a = D("flatpickr-second");
      he.secondElement = a.childNodes[0], he.secondElement.value = he.latestSelectedDateObj ? he.pad(he.latestSelectedDateObj.getSeconds()) : "00", he.secondElement.step = he.minuteElement.step, he.secondElement.min = he.minuteElement.min, he.secondElement.max = he.minuteElement.max, he.timeContainer.appendChild(de("span", "flatpickr-time-separator", ":")), he.timeContainer.appendChild(a);
    }

    return he.config.time_24hr || (he.amPM = de("span", "flatpickr-am-pm", ["AM", "PM"][he.hourElement.value > 11 | 0]), he.amPM.title = he.l10n.toggleTitle, he.amPM.tabIndex = -1, he.timeContainer.appendChild(he.amPM)), he.timeContainer;
  }

  function E() {
    he.weekdayContainer || (he.weekdayContainer = de("div", "flatpickr-weekdays"));
    var e = he.l10n.firstDayOfWeek,
        t = he.l10n.weekdays.shorthand.slice();
    return e > 0 && e < t.length && (t = [].concat(t.splice(e, t.length), t.splice(0, e))), he.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + t.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t", he.weekdayContainer;
  }

  function N() {
    return he.calendarContainer.classList.add("hasWeeks"), he.weekWrapper = de("div", "flatpickr-weekwrapper"), he.weekWrapper.appendChild(de("span", "flatpickr-weekday", he.l10n.weekAbbreviation)), he.weekNumbers = de("div", "flatpickr-weeks"), he.weekWrapper.appendChild(he.weekNumbers), he.weekWrapper;
  }

  function T(e, t, n) {
    var a = (t = void 0 === t || t) ? e : e - he.currentMonth,
        i = !he.config.animate || !1 === n;

    if (!(a < 0 && he._hidePrevMonthArrow || a > 0 && he._hideNextMonthArrow)) {
      if (he.currentMonth += a, (he.currentMonth < 0 || he.currentMonth > 11) && (he.currentYear += he.currentMonth > 11 ? 1 : -1, he.currentMonth = (he.currentMonth + 12) % 12, te("YearChange")), M(i ? void 0 : a), i) return te("MonthChange"), re();
      var r = he.navigationCurrentMonth;
      if (a < 0) for (; r.nextSibling && /curr/.test(r.nextSibling.className);) {
        he.monthNav.removeChild(r.nextSibling);
      } else if (a > 0) for (; r.previousSibling && /curr/.test(r.previousSibling.className);) {
        he.monthNav.removeChild(r.previousSibling);
      }

      if (he.oldCurMonth = he.navigationCurrentMonth, he.navigationCurrentMonth = he.monthNav.insertBefore(he.oldCurMonth.cloneNode(!0), a > 0 ? he.oldCurMonth.nextSibling : he.oldCurMonth), a > 0 ? (he.daysContainer.firstChild.classList.add("slideLeft"), he.daysContainer.lastChild.classList.add("slideLeftNew"), he.oldCurMonth.classList.add("slideLeft"), he.navigationCurrentMonth.classList.add("slideLeftNew")) : a < 0 && (he.daysContainer.firstChild.classList.add("slideRightNew"), he.daysContainer.lastChild.classList.add("slideRight"), he.oldCurMonth.classList.add("slideRight"), he.navigationCurrentMonth.classList.add("slideRightNew")), he.currentMonthElement = he.navigationCurrentMonth.firstChild, he.currentYearElement = he.navigationCurrentMonth.lastChild.childNodes[0], re(), he.oldCurMonth.firstChild.textContent = he.utils.monthToStr(he.currentMonth - a), te("MonthChange"), document.activeElement && document.activeElement.$i) {
        var o = document.activeElement.$i;
        b(function () {
          w(o, 0);
        });
      }
    }
  }

  function _(e) {
    he.input.value = "", he.altInput && (he.altInput.value = ""), he.mobileInput && (he.mobileInput.value = ""), he.selectedDates = [], he.latestSelectedDateObj = void 0, he.showTimeInput = !1, he.redraw(), !1 !== e && te("Change");
  }

  function S() {
    he.isOpen = !1, he.isMobile || (he.calendarContainer.classList.remove("open"), he._input.classList.remove("active")), te("Close");
  }

  function Y() {
    for (var e = he._handlers.length; e--;) {
      var t = he._handlers[e];
      t.element.removeEventListener(t.event, t.handler);
    }

    he._handlers = [], he.mobileInput ? (he.mobileInput.parentNode && he.mobileInput.parentNode.removeChild(he.mobileInput), he.mobileInput = null) : he.calendarContainer && he.calendarContainer.parentNode && he.calendarContainer.parentNode.removeChild(he.calendarContainer), he.altInput && (he.input.type = "text", he.altInput.parentNode && he.altInput.parentNode.removeChild(he.altInput), delete he.altInput), he.input && (he.input.type = he.input._type, he.input.classList.remove("flatpickr-input"), he.input.removeAttribute("readonly"), he.input.value = ""), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (e) {
      return delete he[e];
    });
  }

  function F(e) {
    return !(!he.config.appendTo || !he.config.appendTo.contains(e)) || he.calendarContainer.contains(e);
  }

  function I(e) {
    if (he.isOpen && !he.config.inline) {
      var t = F(e.target),
          n = e.target === he.input || e.target === he.altInput || he.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(he.input) || ~e.path.indexOf(he.altInput));
      ("blur" === e.type ? n && e.relatedTarget && !F(e.relatedTarget) : !n && !t) && (e.preventDefault(), he.close(), "range" === he.config.mode && 1 === he.selectedDates.length && (he.clear(!1), he.redraw()));
    }
  }

  function O(e) {
    if (!(!e || he.currentYearElement.min && e < he.currentYearElement.min || he.currentYearElement.max && e > he.currentYearElement.max)) {
      var t = parseInt(e, 10),
          n = he.currentYear !== t;
      he.currentYear = t || he.currentYear, he.config.maxDate && he.currentYear === he.config.maxDate.getFullYear() ? he.currentMonth = Math.min(he.config.maxDate.getMonth(), he.currentMonth) : he.config.minDate && he.currentYear === he.config.minDate.getFullYear() && (he.currentMonth = Math.max(he.config.minDate.getMonth(), he.currentMonth)), n && (he.redraw(), te("YearChange"));
    }
  }

  function A(e, t) {
    if (he.config.minDate && ge(e, he.config.minDate, void 0 !== t ? t : !he.minDateHasTime) < 0 || he.config.maxDate && ge(e, he.config.maxDate, void 0 !== t ? t : !he.maxDateHasTime) > 0) return !1;
    if (!he.config.enable.length && !he.config.disable.length) return !0;

    for (var n, a = he.parseDate(e, null, !0), i = he.config.enable.length > 0, r = i ? he.config.enable : he.config.disable, o = 0; o < r.length; o++) {
      if ((n = r[o]) instanceof Function && n(a)) return i;
      if (n instanceof Date && n.getTime() === a.getTime()) return i;
      if ("string" == typeof n && he.parseDate(n, null, !0).getTime() === a.getTime()) return i;
      if ("object" === (void 0 === n ? "undefined" : _typeof(n)) && n.from && n.to && a >= n.from && a <= n.to) return i;
    }

    return !i;
  }

  function L(e) {
    var t = e.target === he._input,
        n = F(e.target),
        r = he.config.allowInput,
        o = he.isOpen && (!r || !t),
        l = he.config.inline && t && !r;
    if ("Enter" === e.key && r && t) return he.setDate(he._input.value, !0, e.target === he.altInput ? he.config.altFormat : he.config.dateFormat), e.target.blur();

    if (n || o || l) {
      var c = he.timeContainer && he.timeContainer.contains(e.target);

      switch (e.key) {
        case "Enter":
          c ? oe() : U(e);
          break;

        case "Escape":
          e.preventDefault(), he.close();
          break;

        case "ArrowLeft":
        case "ArrowRight":
          if (!c) if (e.preventDefault(), he.daysContainer) {
            var s = "ArrowRight" === e.key ? 1 : -1;
            e.ctrlKey ? T(s, !0) : w(e.target.$i, s);
          } else he.config.enableTime && !c && he.hourElement.focus();
          break;

        case "ArrowUp":
        case "ArrowDown":
          e.preventDefault();
          var d = "ArrowDown" === e.key ? 1 : -1;
          he.daysContainer ? e.ctrlKey ? (O(he.currentYear - d), w(e.target.$i, 0)) : c || w(e.target.$i, 7 * d) : he.config.enableTime && (c || he.hourElement.focus(), a(e));
          break;

        case "Tab":
          e.target === he.hourElement ? (e.preventDefault(), he.minuteElement.select()) : e.target === he.minuteElement && (he.secondElement || he.amPM) ? (e.preventDefault(), (he.secondElement || he.amPM).focus()) : e.target === he.secondElement && (e.preventDefault(), he.amPM.focus());
          break;

        case "a":
          e.target === he.amPM && (he.amPM.textContent = "AM", i(), oe());
          break;

        case "p":
          e.target === he.amPM && (he.amPM.textContent = "PM", i(), oe());
      }

      te("KeyDown", e);
    }
  }

  function P(e) {
    if (1 === he.selectedDates.length && e.classList.contains("flatpickr-day")) {
      for (var t = e.dateObj, n = he.parseDate(he.selectedDates[0], null, !0), a = Math.min(t.getTime(), he.selectedDates[0].getTime()), i = Math.max(t.getTime(), he.selectedDates[0].getTime()), r = !1, o = a; o < i; o += he.utils.duration.DAY) {
        if (!A(new Date(o))) {
          r = !0;
          break;
        }
      }

      for (var l = he.days.childNodes[0].dateObj.getTime(), c = 0; c < 42; c++, l += he.utils.duration.DAY) {
        (function (o, l) {
          var c = o < he.minRangeDate.getTime() || o > he.maxRangeDate.getTime(),
              s = he.days.childNodes[l];
          if (c) return he.days.childNodes[l].classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function (e) {
            s.classList.remove(e);
          }), "continue";
          if (r && !c) return "continue";
          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (e) {
            s.classList.remove(e);
          });
          var d = Math.max(he.minRangeDate.getTime(), a),
              u = Math.min(he.maxRangeDate.getTime(), i);
          e.classList.add(t < he.selectedDates[0] ? "startRange" : "endRange"), n < t && o === n.getTime() ? s.classList.add("startRange") : n > t && o === n.getTime() && s.classList.add("endRange"), o >= d && o <= u && s.classList.add("inRange");
        })(l, c);
      }
    }
  }

  function j() {
    !he.isOpen || he.config["static"] || he.config.inline || J();
  }

  function H(e) {
    if (he.isMobile) return e && (e.preventDefault(), e.target.blur()), setTimeout(function () {
      he.mobileInput.click();
    }, 0), void te("Open");
    he.isOpen || he._input.disabled || he.config.inline || (he.isOpen = !0, he.calendarContainer.classList.add("open"), J(), he._input.classList.add("active"), te("Open"));
  }

  function R(e) {
    return function (t) {
      var n = he.config["_" + e + "Date"] = he.parseDate(t),
          a = he.config["_" + ("min" === e ? "max" : "min") + "Date"],
          i = t && n instanceof Date;
      i && (he[e + "DateHasTime"] = n.getHours() || n.getMinutes() || n.getSeconds()), he.selectedDates && (he.selectedDates = he.selectedDates.filter(function (e) {
        return A(e);
      }), he.selectedDates.length || "min" !== e || r(n), oe()), he.daysContainer && (K(), i ? he.currentYearElement[e] = n.getFullYear() : he.currentYearElement.removeAttribute(e), he.currentYearElement.disabled = a && n && a.getFullYear() === n.getFullYear());
    };
  }

  function W() {
    var e = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
        t = ["onChange", "onClose", "onDayCreate", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];
    he.config = Object.create(flatpickr.defaultConfig);

    var a = _extends({}, he.instanceConfig, JSON.parse(JSON.stringify(he.element.dataset || {})));

    he.config.parseDate = a.parseDate, he.config.formatDate = a.formatDate, _extends(he.config, a), !a.dateFormat && a.enableTime && (he.config.dateFormat = he.config.noCalendar ? "H:i" + (he.config.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (he.config.enableSeconds ? ":S" : "")), a.altInput && a.enableTime && !a.altFormat && (he.config.altFormat = he.config.noCalendar ? "h:i" + (he.config.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + " h:i" + (he.config.enableSeconds ? ":S" : "") + " K"), Object.defineProperty(he.config, "minDate", {
      get: function get() {
        return this._minDate;
      },
      set: R("min")
    }), Object.defineProperty(he.config, "maxDate", {
      get: function get() {
        return this._maxDate;
      },
      set: R("max")
    }), he.config.minDate = a.minDate, he.config.maxDate = a.maxDate;

    for (var i = 0; i < e.length; i++) {
      he.config[e[i]] = !0 === he.config[e[i]] || "true" === he.config[e[i]];
    }

    for (var r = t.length; r--;) {
      void 0 !== he.config[t[r]] && (he.config[t[r]] = ue(he.config[t[r]] || []).map(n));
    }

    for (var o = 0; o < he.config.plugins.length; o++) {
      var l = he.config.plugins[o](he) || {};

      for (var c in l) {
        he.config[c] instanceof Array || ~t.indexOf(c) ? he.config[c] = ue(l[c]).map(n).concat(he.config[c]) : void 0 === a[c] && (he.config[c] = l[c]);
      }
    }

    te("ParseConfig");
  }

  function B() {
    "object" !== _typeof(he.config.locale) && void 0 === flatpickr.l10ns[he.config.locale] && console.warn("flatpickr: invalid locale " + he.config.locale), he.l10n = _extends(Object.create(flatpickr.l10ns["default"]), "object" === _typeof(he.config.locale) ? he.config.locale : "default" !== he.config.locale ? flatpickr.l10ns[he.config.locale] || {} : {});
  }

  function J() {
    if (void 0 !== he.calendarContainer) {
      var e = he.calendarContainer.offsetHeight,
          t = he.calendarContainer.offsetWidth,
          n = he.config.position,
          a = he._positionElement.getBoundingClientRect(),
          i = window.innerHeight - a.bottom,
          r = "above" === n || "below" !== n && i < e && a.top > e,
          o = window.pageYOffset + a.top + (r ? -e - 2 : he._positionElement.offsetHeight + 2);

      if (fe(he.calendarContainer, "arrowTop", !r), fe(he.calendarContainer, "arrowBottom", r), !he.config.inline) {
        var l = window.pageXOffset + a.left,
            c = window.document.body.offsetWidth - a.right,
            s = l + t > window.document.body.offsetWidth;
        fe(he.calendarContainer, "rightMost", s), he.config["static"] || (he.calendarContainer.style.top = o + "px", s ? (he.calendarContainer.style.left = "auto", he.calendarContainer.style.right = c + "px") : (he.calendarContainer.style.left = l + "px", he.calendarContainer.style.right = "auto"));
      }
    }
  }

  function K() {
    he.config.noCalendar || he.isMobile || (E(), re(), M());
  }

  function U(e) {
    if (e.preventDefault(), e.stopPropagation(), e.target.classList.contains("flatpickr-day") && !e.target.classList.contains("disabled") && !e.target.classList.contains("notAllowed")) {
      var t = he.latestSelectedDateObj = new Date(e.target.dateObj.getTime()),
          n = t.getMonth() !== he.currentMonth && "range" !== he.config.mode;
      if (he.selectedDateElem = e.target, "single" === he.config.mode) he.selectedDates = [t];else if ("multiple" === he.config.mode) {
        var a = ae(t);
        a ? he.selectedDates.splice(a, 1) : he.selectedDates.push(t);
      } else "range" === he.config.mode && (2 === he.selectedDates.length && he.clear(), he.selectedDates.push(t), 0 !== ge(t, he.selectedDates[0], !0) && he.selectedDates.sort(function (e, t) {
        return e.getTime() - t.getTime();
      }));

      if (i(), n) {
        var o = he.currentYear !== t.getFullYear();
        he.currentYear = t.getFullYear(), he.currentMonth = t.getMonth(), o && te("YearChange"), te("MonthChange");
      }

      if (M(), he.minDateHasTime && he.config.enableTime && 0 === ge(t, he.config.minDate) && r(he.config.minDate), oe(), he.config.enableTime && setTimeout(function () {
        return he.showTimeInput = !0;
      }, 50), "range" === he.config.mode && (1 === he.selectedDates.length ? (P(e.target), he._hidePrevMonthArrow = he._hidePrevMonthArrow || he.minRangeDate > he.days.childNodes[0].dateObj, he._hideNextMonthArrow = he._hideNextMonthArrow || he.maxRangeDate < new Date(he.currentYear, he.currentMonth + 1, 1)) : re()), te("Change"), n ? b(function () {
        return he.selectedDateElem.focus();
      }) : w(e.target.$i, 0), he.config.enableTime && setTimeout(function () {
        return he.hourElement.select();
      }, 451), he.config.closeOnSelect) {
        var l = "single" === he.config.mode && !he.config.enableTime,
            c = "range" === he.config.mode && 2 === he.selectedDates.length && !he.config.enableTime;
        (l || c) && he.close();
      }
    }
  }

  function $(e, t) {
    he.config[e] = t, he.redraw(), g();
  }

  function z(e, t) {
    if (e instanceof Array) he.selectedDates = e.map(function (e) {
      return he.parseDate(e, t);
    });else if (e instanceof Date || !isNaN(e)) he.selectedDates = [he.parseDate(e, t)];else if (e && e.substring) switch (he.config.mode) {
      case "single":
        he.selectedDates = [he.parseDate(e, t)];
        break;

      case "multiple":
        he.selectedDates = e.split("; ").map(function (e) {
          return he.parseDate(e, t);
        });
        break;

      case "range":
        he.selectedDates = e.split(he.l10n.rangeSeparator).map(function (e) {
          return he.parseDate(e, t);
        });
    }
    he.selectedDates = he.selectedDates.filter(function (e) {
      return e instanceof Date && A(e, !1);
    }), he.selectedDates.sort(function (e, t) {
      return e.getTime() - t.getTime();
    });
  }

  function G(e, t, n) {
    if (!e) return he.clear(t);
    z(e, n), he.showTimeInput = he.selectedDates.length > 0, he.latestSelectedDateObj = he.selectedDates[0], he.redraw(), g(), r(), oe(t), t && te("Change");
  }

  function V() {
    function e(e) {
      for (var t = e.length; t--;) {
        "string" == typeof e[t] || +e[t] ? e[t] = he.parseDate(e[t], null, !0) : e[t] && e[t].from && e[t].to && (e[t].from = he.parseDate(e[t].from), e[t].to = he.parseDate(e[t].to));
      }

      return e.filter(function (e) {
        return e;
      });
    }

    he.selectedDates = [], he.now = new Date(), he.config.disable.length && (he.config.disable = e(he.config.disable)), he.config.enable.length && (he.config.enable = e(he.config.enable));
    var t = he.config.defaultDate || he.input.value;
    t && z(t, he.config.dateFormat);
    var n = he.selectedDates.length ? he.selectedDates[0] : he.config.minDate && he.config.minDate.getTime() > he.now ? he.config.minDate : he.config.maxDate && he.config.maxDate.getTime() < he.now ? he.config.maxDate : he.now;
    he.currentYear = n.getFullYear(), he.currentMonth = n.getMonth(), he.selectedDates.length && (he.latestSelectedDateObj = he.selectedDates[0]), he.minDateHasTime = he.config.minDate && (he.config.minDate.getHours() || he.config.minDate.getMinutes() || he.config.minDate.getSeconds()), he.maxDateHasTime = he.config.maxDate && (he.config.maxDate.getHours() || he.config.maxDate.getMinutes() || he.config.maxDate.getSeconds()), Object.defineProperty(he, "latestSelectedDateObj", {
      get: function get() {
        return he._selectedDateObj || he.selectedDates[he.selectedDates.length - 1];
      },
      set: function set(e) {
        he._selectedDateObj = e;
      }
    }), he.isMobile || Object.defineProperty(he, "showTimeInput", {
      get: function get() {
        return he._showTimeInput;
      },
      set: function set(e) {
        he._showTimeInput = e, he.calendarContainer && fe(he.calendarContainer, "showTimeInput", e), J();
      }
    });
  }

  function Z() {
    he.utils = {
      duration: {
        DAY: 864e5
      },
      getDaysinMonth: function getDaysinMonth(e, t) {
        return e = void 0 === e ? he.currentMonth : e, t = void 0 === t ? he.currentYear : t, 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : he.l10n.daysInMonth[e];
      },
      monthToStr: function monthToStr(e, t) {
        return t = void 0 === t ? he.config.shorthandCurrentMonth : t, he.l10n.months[(t ? "short" : "long") + "hand"][e];
      }
    };
  }

  function q() {
    ["D", "F", "J", "M", "W", "l"].forEach(function (e) {
      he.formats[e] = Flatpickr.prototype.formats[e].bind(he);
    }), he.revFormat.F = Flatpickr.prototype.revFormat.F.bind(he), he.revFormat.M = Flatpickr.prototype.revFormat.M.bind(he);
  }

  function Q() {
    if (he.input = he.config.wrap ? he.element.querySelector("[data-input]") : he.element, !he.input) return console.warn("Error: invalid input element specified", he.input);
    he.input._type = he.input.type, he.input.type = "text", he.input.classList.add("flatpickr-input"), he._input = he.input, he.config.altInput && (he.altInput = de(he.input.nodeName, he.input.className + " " + he.config.altInputClass), he._input = he.altInput, he.altInput.placeholder = he.input.placeholder, he.altInput.disabled = he.input.disabled, he.altInput.type = "text", he.input.type = "hidden", !he.config["static"] && he.input.parentNode && he.input.parentNode.insertBefore(he.altInput, he.input.nextSibling)), he.config.allowInput || he._input.setAttribute("readonly", "readonly"), he._positionElement = he.config.positionElement || he._input;
  }

  function X() {
    var e = he.config.enableTime ? he.config.noCalendar ? "time" : "datetime-local" : "date";
    he.mobileInput = de("input", he.input.className + " flatpickr-mobile"), he.mobileInput.step = "any", he.mobileInput.tabIndex = 1, he.mobileInput.type = e, he.mobileInput.disabled = he.input.disabled, he.mobileInput.placeholder = he.input.placeholder, he.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", he.selectedDates.length && (he.mobileInput.defaultValue = he.mobileInput.value = he.formatDate(he.selectedDates[0], he.mobileFormatStr)), he.config.minDate && (he.mobileInput.min = he.formatDate(he.config.minDate, "Y-m-d")), he.config.maxDate && (he.mobileInput.max = he.formatDate(he.config.maxDate, "Y-m-d")), he.input.type = "hidden", he.config.altInput && (he.altInput.type = "hidden");

    try {
      he.input.parentNode.insertBefore(he.mobileInput, he.input.nextSibling);
    } catch (e) {}

    he.mobileInput.addEventListener("change", function (e) {
      he.setDate(e.target.value, !1, he.mobileFormatStr), te("Change"), te("Close");
    });
  }

  function ee() {
    if (he.isOpen) return he.close();
    he.open();
  }

  function te(e, t) {
    var n = he.config["on" + e];
    if (void 0 !== n && n.length > 0) for (var a = 0; n[a] && a < n.length; a++) {
      n[a](he.selectedDates, he.input.value, he, t);
    }
    "Change" === e && (he.input.dispatchEvent(ne("change")), he.input.dispatchEvent(ne("input")));
  }

  function ne(e) {
    return he._supportsEvents ? new Event(e, {
      bubbles: !0
    }) : (he._[e + "Event"] = document.createEvent("Event"), he._[e + "Event"].initEvent(e, !0, !0), he._[e + "Event"]);
  }

  function ae(e) {
    for (var t = 0; t < he.selectedDates.length; t++) {
      if (0 === ge(he.selectedDates[t], e)) return "" + t;
    }

    return !1;
  }

  function ie(e) {
    return !("range" !== he.config.mode || he.selectedDates.length < 2) && ge(e, he.selectedDates[0]) >= 0 && ge(e, he.selectedDates[1]) <= 0;
  }

  function re() {
    he.config.noCalendar || he.isMobile || !he.monthNav || (he.currentMonthElement.textContent = he.utils.monthToStr(he.currentMonth) + " ", he.currentYearElement.value = he.currentYear, he._hidePrevMonthArrow = he.config.minDate && (he.currentYear === he.config.minDate.getFullYear() ? he.currentMonth <= he.config.minDate.getMonth() : he.currentYear < he.config.minDate.getFullYear()), he._hideNextMonthArrow = he.config.maxDate && (he.currentYear === he.config.maxDate.getFullYear() ? he.currentMonth + 1 > he.config.maxDate.getMonth() : he.currentYear > he.config.maxDate.getFullYear()));
  }

  function oe(e) {
    if (!he.selectedDates.length) return he.clear(e);
    he.isMobile && (he.mobileInput.value = he.selectedDates.length ? he.formatDate(he.latestSelectedDateObj, he.mobileFormatStr) : "");
    var t = "range" !== he.config.mode ? "; " : he.l10n.rangeSeparator;
    he.input.value = he.selectedDates.map(function (e) {
      return he.formatDate(e, he.config.dateFormat);
    }).join(t), he.config.altInput && (he.altInput.value = he.selectedDates.map(function (e) {
      return he.formatDate(e, he.config.altFormat);
    }).join(t)), te("ValueUpdate");
  }

  function le(e) {
    return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
  }

  function ce(e) {
    e.preventDefault();
    var t = he.currentYearElement.parentNode.contains(e.target);

    if (e.target === he.currentMonthElement || t) {
      var n = le(e);
      t ? (O(he.currentYear + n), e.target.value = he.currentYear) : he.changeMonth(n, !0, !1);
    }
  }

  function se(e) {
    var t = he.prevMonthNav.contains(e.target),
        n = he.nextMonthNav.contains(e.target);
    t || n ? T(t ? -1 : 1) : e.target === he.currentYearElement ? (e.preventDefault(), he.currentYearElement.select()) : "arrowUp" === e.target.className ? he.changeYear(he.currentYear + 1) : "arrowDown" === e.target.className && he.changeYear(he.currentYear - 1);
  }

  function de(e, t, n) {
    var a = window.document.createElement(e);
    return t = t || "", n = n || "", a.className = t, void 0 !== n && (a.textContent = n), a;
  }

  function ue(e) {
    return e instanceof Array ? e : [e];
  }

  function fe(e, t, n) {
    if (n) return e.classList.add(t);
    e.classList.remove(t);
  }

  function me(e, t, n) {
    var a = void 0;
    return function () {
      var i = this,
          r = arguments;
      clearTimeout(a), a = setTimeout(function () {
        a = null, n || e.apply(i, r);
      }, t), n && !a && e.apply(i, r);
    };
  }

  function ge(e, t, n) {
    return e instanceof Date && t instanceof Date && (!1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime());
  }

  function pe(e) {
    e.preventDefault();
    var t = "keydown" === e.type,
        n = (e.type, e.type, e.target);
    if (he.amPM && e.target === he.amPM) return e.target.textContent = ["AM", "PM"]["AM" === e.target.textContent | 0];
    var a = Number(n.min),
        i = Number(n.max),
        r = Number(n.step),
        o = parseInt(n.value, 10),
        l = o + r * (e.delta || (t ? 38 === e.which ? 1 : -1 : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0));

    if (void 0 !== n.value && 2 === n.value.length) {
      var c = n === he.hourElement,
          s = n === he.minuteElement;
      l < a ? (l = i + l + !c + (c && !he.amPM), s && h(null, -1, he.hourElement)) : l > i && (l = n === he.hourElement ? l - i - !he.amPM : a, s && h(null, 1, he.hourElement)), he.amPM && c && (1 === r ? l + o === 23 : Math.abs(l - o) > r) && (he.amPM.textContent = "PM" === he.amPM.textContent ? "AM" : "PM"), n.value = he.pad(l);
    }
  }

  var he = this;
  return he._ = {}, he._.afterDayAnim = b, he.changeMonth = T, he.changeYear = O, he.clear = _, he.close = S, he._createElement = de, he.destroy = Y, he.isEnabled = A, he.jumpToDate = g, he.open = H, he.redraw = K, he.set = $, he.setDate = G, he.toggle = ee, function () {
    he.element = he.input = e, he.instanceConfig = t || {}, he.parseDate = Flatpickr.prototype.parseDate.bind(he), he.formatDate = Flatpickr.prototype.formatDate.bind(he), q(), W(), B(), Q(), V(), Z(), he.isOpen = !1, he.isMobile = !he.config.disableMobile && !he.config.inline && "single" === he.config.mode && !he.config.disable.length && !he.config.enable.length && !he.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), he.isMobile || v(), d(), (he.selectedDates.length || he.config.noCalendar) && (he.config.enableTime && r(he.config.noCalendar ? he.latestSelectedDateObj || he.config.minDate : null), oe()), he.config.weekNumbers && (he.calendarContainer.style.width = he.daysContainer.offsetWidth + he.weekWrapper.offsetWidth + "px"), he.showTimeInput = he.selectedDates.length > 0 || he.config.noCalendar, he.isMobile || J(), te("Ready");
  }(), he;
}

function _flatpickr(e, t) {
  for (var n = Array.prototype.slice.call(e), a = [], i = 0; i < n.length; i++) {
    try {
      n[i]._flatpickr && (n[i]._flatpickr.destroy(), n[i]._flatpickr = null), n[i]._flatpickr = new Flatpickr(n[i], t || {}), a.push(n[i]._flatpickr);
    } catch (e) {
      console.warn(e, e.stack);
    }
  }

  return 1 === a.length ? a[0] : a;
}

function flatpickr(e, t) {
  return e instanceof HTMLElement ? _flatpickr([e], t) : _flatpickr(window.document.querySelectorAll(e), t);
}

var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];

    for (var a in n) {
      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
  }

  return e;
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
};

Flatpickr.prototype = {
  formats: {
    Z: function Z(e) {
      return e.toISOString();
    },
    D: function D(e) {
      return this.l10n.weekdays.shorthand[this.formats.w(e)];
    },
    F: function F(e) {
      return this.utils.monthToStr(this.formats.n(e) - 1, !1);
    },
    G: function G(e) {
      return Flatpickr.prototype.pad(Flatpickr.prototype.formats.h(e));
    },
    H: function H(e) {
      return Flatpickr.prototype.pad(e.getHours());
    },
    J: function J(e) {
      return e.getDate() + this.l10n.ordinal(e.getDate());
    },
    K: function K(e) {
      return e.getHours() > 11 ? "PM" : "AM";
    },
    M: function M(e) {
      return this.utils.monthToStr(e.getMonth(), !0);
    },
    S: function S(e) {
      return Flatpickr.prototype.pad(e.getSeconds());
    },
    U: function U(e) {
      return e.getTime() / 1e3;
    },
    W: function W(e) {
      return this.config.getWeek(e);
    },
    Y: function Y(e) {
      return e.getFullYear();
    },
    d: function d(e) {
      return Flatpickr.prototype.pad(e.getDate());
    },
    h: function h(e) {
      return e.getHours() % 12 ? e.getHours() % 12 : 12;
    },
    i: function i(e) {
      return Flatpickr.prototype.pad(e.getMinutes());
    },
    j: function j(e) {
      return e.getDate();
    },
    l: function l(e) {
      return this.l10n.weekdays.longhand[e.getDay()];
    },
    m: function m(e) {
      return Flatpickr.prototype.pad(e.getMonth() + 1);
    },
    n: function n(e) {
      return e.getMonth() + 1;
    },
    s: function s(e) {
      return e.getSeconds();
    },
    w: function w(e) {
      return e.getDay();
    },
    y: function y(e) {
      return String(e.getFullYear()).substring(2);
    }
  },
  formatDate: function formatDate(e, t) {
    var n = this;
    return void 0 !== this.config && void 0 !== this.config.formatDate ? this.config.formatDate(e, t) : t.split("").map(function (t, a, i) {
      return n.formats[t] && "\\" !== i[a - 1] ? n.formats[t](e) : "\\" !== t ? t : "";
    }).join("");
  },
  revFormat: {
    D: function D() {},
    F: function F(e, t) {
      e.setMonth(this.l10n.months.longhand.indexOf(t));
    },
    G: function G(e, t) {
      e.setHours(parseFloat(t));
    },
    H: function H(e, t) {
      e.setHours(parseFloat(t));
    },
    J: function J(e, t) {
      e.setDate(parseFloat(t));
    },
    K: function K(e, t) {
      var n = e.getHours();
      12 !== n && e.setHours(n % 12 + 12 * /pm/i.test(t));
    },
    M: function M(e, t) {
      e.setMonth(this.l10n.months.shorthand.indexOf(t));
    },
    S: function S(e, t) {
      e.setSeconds(t);
    },
    U: function U(e, t) {
      return new Date(1e3 * parseFloat(t));
    },
    W: function W(e, t) {
      return t = parseInt(t), new Date(e.getFullYear(), 0, 2 + 7 * (t - 1), 0, 0, 0, 0, 0);
    },
    Y: function Y(e, t) {
      e.setFullYear(t);
    },
    Z: function Z(e, t) {
      return new Date(t);
    },
    d: function d(e, t) {
      e.setDate(parseFloat(t));
    },
    h: function h(e, t) {
      e.setHours(parseFloat(t));
    },
    i: function i(e, t) {
      e.setMinutes(parseFloat(t));
    },
    j: function j(e, t) {
      e.setDate(parseFloat(t));
    },
    l: function l() {},
    m: function m(e, t) {
      e.setMonth(parseFloat(t) - 1);
    },
    n: function n(e, t) {
      e.setMonth(parseFloat(t) - 1);
    },
    s: function s(e, t) {
      e.setSeconds(parseFloat(t));
    },
    w: function w() {},
    y: function y(e, t) {
      e.setFullYear(2e3 + parseFloat(t));
    }
  },
  tokenRegex: {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "(\\w+)",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  },
  pad: function pad(e) {
    return ("0" + e).slice(-2);
  },
  parseDate: function parseDate(e, t, n) {
    if (!e) return null;
    var a = e;
    if (e instanceof Date) e = new Date(e.getTime());else if (void 0 !== e.toFixed) e = new Date(e);else {
      var i = t || (this.config || flatpickr.defaultConfig).dateFormat;
      if ("today" === (e = String(e).trim())) e = new Date(), n = !0;else if (/Z$/.test(e) || /GMT$/.test(e)) e = new Date(e);else if (this.config && this.config.parseDate) e = this.config.parseDate(e, i);else {
        for (var r = this.config && this.config.noCalendar ? new Date(new Date().setHours(0, 0, 0, 0)) : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0), o = void 0, l = 0, c = 0, s = ""; l < i.length; l++) {
          var d = i[l],
              u = "\\" === d,
              f = "\\" === i[l - 1] || u;

          if (this.tokenRegex[d] && !f) {
            s += this.tokenRegex[d];
            var m = new RegExp(s).exec(e);
            m && (o = !0) && (r = this.revFormat[d](r, m[++c]) || r);
          } else u || (s += ".");
        }

        e = o ? r : null;
      }
    }
    return e instanceof Date ? (!0 === n && e.setHours(0, 0, 0, 0), e) : (console.warn("flatpickr: invalid date " + a), console.info(this.element), null);
  }
}, "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
  return _flatpickr(this, e);
}, HTMLElement.prototype.flatpickr = function (e) {
  return _flatpickr([this], e);
}), flatpickr.defaultConfig = Flatpickr.defaultConfig = {
  mode: "single",
  position: "auto",
  animate: -1 === window.navigator.userAgent.indexOf("MSIE"),
  wrap: !1,
  weekNumbers: !1,
  allowInput: !1,
  clickOpens: !0,
  closeOnSelect: !0,
  time_24hr: !1,
  enableTime: !1,
  noCalendar: !1,
  dateFormat: "Y-m-d",
  ariaDateFormat: "F j, Y",
  altInput: !1,
  altInputClass: "form-control input",
  altFormat: "F j, Y",
  defaultDate: null,
  minDate: null,
  maxDate: null,
  parseDate: null,
  formatDate: null,
  getWeek: function getWeek(e) {
    var t = new Date(e.getTime()),
        n = new Date(t.getFullYear(), 0, 1);
    return Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7);
  },
  enable: [],
  disable: [],
  shorthandCurrentMonth: !1,
  inline: !1,
  "static": !1,
  appendTo: null,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  enableSeconds: !1,
  hourIncrement: 1,
  minuteIncrement: 5,
  defaultHour: 12,
  defaultMinute: 0,
  disableMobile: !1,
  locale: "default",
  plugins: [],
  onClose: void 0,
  onChange: void 0,
  onDayCreate: void 0,
  onMonthChange: void 0,
  onOpen: void 0,
  onParseConfig: void 0,
  onReady: void 0,
  onValueUpdate: void 0,
  onYearChange: void 0,
  onKeyDown: void 0
}, flatpickr.l10ns = {
  en: {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
      shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function ordinal(e) {
      var t = e % 100;
      if (t > 3 && t < 21) return "th";

      switch (t % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle"
  }
}, flatpickr.l10ns["default"] = Object.create(flatpickr.l10ns.en), flatpickr.localize = function (e) {
  return _extends(flatpickr.l10ns["default"], e || {});
}, flatpickr.setDefaults = function (e) {
  return _extends(flatpickr.defaultConfig, e || {});
}, "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function (e) {
  return _flatpickr(this, e);
}), Date.prototype.fp_incr = function (e) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(e, 10));
},  true && (module.exports = flatpickr);
$(".datepicker").flatpickr({
  enableTime: true,
  disableMobile: "true"
});

/***/ }),

/***/ "./resources/js/work/jquery.mCustomScrollbar.js":
/*!******************************************************!*\
  !*** ./resources/js/work/jquery.mCustomScrollbar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
== malihu jquery custom scrollbar plugin == 
Version: 3.1.5 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  (function (init) {
    var _rjs =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"),

    /* RequireJS */
    _njs =  true && module.exports,

    /* NodeJS */
    _dlp = "https:" == document.location.protocol ? "https:" : "http:",

    /* location protocol */
    _url = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";

    if (!_rjs) {
      if (_njs) {
        __webpack_require__(/*! jquery-mousewheel */ "./node_modules/jquery-mousewheel/jquery.mousewheel.js")($);
      } else {
        /* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
        (works when mCustomScrollbar fn is called on window load) */
        $.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src=" + _dlp + "//" + _url + "%3E%3C/script%3E"));
      }
    }

    init();
  })(function () {
    /* 
    ----------------------------------------
    PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
    ----------------------------------------
    */
    var pluginNS = "mCustomScrollbar",
        pluginPfx = "mCS",
        defaultSelector = ".mCustomScrollbar",

    /* 
    ----------------------------------------
    DEFAULT OPTIONS 
    ----------------------------------------
    */
    defaults = {
      /*
      set element/content width/height programmatically 
      values: boolean, pixels, percentage 
      	option						default
      	-------------------------------------
      	setWidth					false
      	setHeight					false
      */

      /*
      set the initial css top property of content  
      values: string (e.g. "-100px", "10%" etc.)
      */
      setTop: 0,

      /*
      set the initial css left property of content  
      values: string (e.g. "-100px", "10%" etc.)
      */
      setLeft: 0,

      /* 
      scrollbar axis (vertical and/or horizontal scrollbars) 
      values (string): "y", "x", "yx"
      */
      axis: "y",

      /*
      position of scrollbar relative to content  
      values (string): "inside", "outside" ("outside" requires elements with position:relative)
      */
      scrollbarPosition: "inside",

      /*
      scrolling inertia
      values: integer (milliseconds)
      */
      scrollInertia: 950,

      /* 
      auto-adjust scrollbar dragger length
      values: boolean
      */
      autoDraggerLength: true,

      /*
      auto-hide scrollbar when idle 
      values: boolean
      	option						default
      	-------------------------------------
      	autoHideScrollbar			false
      */

      /*
      auto-expands scrollbar on mouse-over and dragging
      values: boolean
      	option						default
      	-------------------------------------
      	autoExpandScrollbar			false
      */

      /*
      always show scrollbar, even when there's nothing to scroll 
      values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
      */
      alwaysShowScrollbar: 0,

      /*
      scrolling always snaps to a multiple of this number in pixels
      values: integer, array ([y,x])
      	option						default
      	-------------------------------------
      	snapAmount					null
      */

      /*
      when snapping, snap with this number in pixels as an offset 
      values: integer
      */
      snapOffset: 0,

      /* 
      mouse-wheel scrolling
      */
      mouseWheel: {
        /* 
        enable mouse-wheel scrolling
        values: boolean
        */
        enable: true,

        /* 
        scrolling amount in pixels
        values: "auto", integer 
        */
        scrollAmount: "auto",

        /* 
        mouse-wheel scrolling axis 
        the default scrolling direction when both vertical and horizontal scrollbars are present 
        values (string): "y", "x" 
        */
        axis: "y",

        /* 
        prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
        values: boolean
        	option						default
        	-------------------------------------
        	preventDefault				null
        */

        /*
        the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
        values: "auto", integer 
        "auto" uses the default OS/browser value 
        */
        deltaFactor: "auto",

        /*
        normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
        values: boolean
        	option						default
        	-------------------------------------
        	normalizeDelta				null
        */

        /*
        invert mouse-wheel scrolling direction 
        values: boolean
        	option						default
        	-------------------------------------
        	invert						null
        */

        /*
        the tags that disable mouse-wheel when cursor is over them
        */
        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
      },

      /* 
      scrollbar buttons
      */
      scrollButtons: {
        /*
        enable scrollbar buttons
        values: boolean
        	option						default
        	-------------------------------------
        	enable						null
        */

        /*
        scrollbar buttons scrolling type 
        values (string): "stepless", "stepped"
        */
        scrollType: "stepless",

        /*
        scrolling amount in pixels
        values: "auto", integer 
        */
        scrollAmount: "auto"
        /*
        tabindex of the scrollbar buttons
        values: false, integer
        	option						default
        	-------------------------------------
        	tabindex					null
        */

      },

      /* 
      keyboard scrolling
      */
      keyboard: {
        /*
        enable scrolling via keyboard
        values: boolean
        */
        enable: true,

        /*
        keyboard scrolling type 
        values (string): "stepless", "stepped"
        */
        scrollType: "stepless",

        /*
        scrolling amount in pixels
        values: "auto", integer 
        */
        scrollAmount: "auto"
      },

      /*
      enable content touch-swipe scrolling 
      values: boolean, integer, string (number)
      integer values define the axis-specific minimum amount required for scrolling momentum
      */
      contentTouchScroll: 25,

      /*
      enable/disable document (default) touch-swipe scrolling 
      */
      documentTouchScroll: true,

      /*
      advanced option parameters
      */
      advanced: {
        /*
        auto-expand content horizontally (for "x" or "yx" axis) 
        values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
        	option						default
        	-------------------------------------
        	autoExpandHorizontalScroll	null
        */

        /*
        auto-scroll to elements with focus
        */
        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",

        /*
        auto-update scrollbars on content, element or viewport resize 
        should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
        values: boolean
        */
        updateOnContentResize: true,

        /*
        auto-update scrollbars each time each image inside the element is fully loaded 
        values: "auto", boolean
        */
        updateOnImageLoad: "auto",

        /*
        auto-update scrollbars based on the amount and size changes of specific selectors 
        useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
        values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
        a value of true (boolean) will auto-update scrollbars each time any element is changed
        	option						default
        	-------------------------------------
        	updateOnSelectorChange		null
        */

        /*
        extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
        	option						default
        	-------------------------------------
        	extraDraggableSelectors		null
        */

        /*
        extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
        	option						default
        	-------------------------------------
        	releaseDraggableSelectors	null
        */

        /*
        auto-update timeout 
        values: integer (milliseconds)
        */
        autoUpdateTimeout: 60
      },

      /* 
      scrollbar theme 
      values: string (see CSS/plugin URI for a list of ready-to-use themes)
      */
      theme: "light",

      /*
      user defined callback functions
      */
      callbacks: {
        /*
        Available callbacks: 
        	callback					default
        	-------------------------------------
        	onCreate					null
        	onInit						null
        	onScrollStart				null
        	onScroll					null
        	onTotalScroll				null
        	onTotalScrollBack			null
        	whileScrolling				null
        	onOverflowY					null
        	onOverflowX					null
        	onOverflowYNone				null
        	onOverflowXNone				null
        	onImageLoad					null
        	onSelectorChange			null
        	onBeforeUpdate				null
        	onUpdate					null
        */
        onTotalScrollOffset: 0,
        onTotalScrollBackOffset: 0,
        alwaysTriggerOffsets: true
      }
      /*
      add scrollbar(s) on all elements matching the current selector, now and in the future 
      values: boolean, string 
      string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
      liveSelector values: string (selector)
      	option						default
      	-------------------------------------
      	live						false
      	liveSelector				null
      */

    },

    /* 
    ----------------------------------------
    VARS, CONSTANTS 
    ----------------------------------------
    */
    totalInstances = 0,

    /* plugin instances amount */
    liveTimers = {},

    /* live option timers */
    oldIE = window.attachEvent && !window.addEventListener ? 1 : 0,

    /* detect IE < 9 */
    touchActive = false,
        touchable,

    /* global touch vars (for touch and pointer events) */

    /* general plugin classes */
    classes = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],

    /* 
    ----------------------------------------
    METHODS 
    ----------------------------------------
    */
    methods = {
      /* 
      plugin initialization method 
      creates the scrollbar(s), plugin data object and options
      ----------------------------------------
      */
      init: function init(options) {
        var options = $.extend(true, {}, defaults, options),
            selector = _selector.call(this);
        /* validate selector */

        /* 
        if live option is enabled, monitor for elements matching the current selector and 
        apply scrollbar(s) when found (now and in the future) 
        */


        if (options.live) {
          var liveSelector = options.liveSelector || this.selector || defaultSelector,

          /* live selector(s) */
          $liveSelector = $(liveSelector);
          /* live selector(s) as jquery object */

          if (options.live === "off") {
            /* 
            disable live if requested 
            usage: $(selector).mCustomScrollbar({live:"off"}); 
            */
            removeLiveTimers(liveSelector);
            return;
          }

          liveTimers[liveSelector] = setTimeout(function () {
            /* call mCustomScrollbar fn on live selector(s) every half-second */
            $liveSelector.mCustomScrollbar(options);

            if (options.live === "once" && $liveSelector.length) {
              /* disable live after first invocation */
              removeLiveTimers(liveSelector);
            }
          }, 500);
        } else {
          removeLiveTimers(liveSelector);
        }
        /* options backward compatibility (for versions < 3.0.0) and normalization */


        options.setWidth = options.set_width ? options.set_width : options.setWidth;
        options.setHeight = options.set_height ? options.set_height : options.setHeight;
        options.axis = options.horizontalScroll ? "x" : _findAxis(options.axis);
        options.scrollInertia = options.scrollInertia > 0 && options.scrollInertia < 17 ? 17 : options.scrollInertia;

        if (_typeof(options.mouseWheel) !== "object" && options.mouseWheel == true) {
          /* old school mouseWheel option (non-object) */
          options.mouseWheel = {
            enable: true,
            scrollAmount: "auto",
            axis: "y",
            preventDefault: false,
            deltaFactor: "auto",
            normalizeDelta: false,
            invert: false
          };
        }

        options.mouseWheel.scrollAmount = !options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
        options.mouseWheel.normalizeDelta = !options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
        options.scrollButtons.scrollType = _findScrollButtonsType(options.scrollButtons.scrollType);

        _theme(options);
        /* theme-specific options */

        /* plugin constructor */


        return $(selector).each(function () {
          var $this = $(this);

          if (!$this.data(pluginPfx)) {
            /* prevent multiple instantiations */

            /* store options and create objects in jquery data */
            $this.data(pluginPfx, {
              idx: ++totalInstances,

              /* instance index */
              opt: options,

              /* options */
              scrollRatio: {
                y: null,
                x: null
              },

              /* scrollbar to content ratio */
              overflowed: null,

              /* overflowed axis */
              contentReset: {
                y: null,
                x: null
              },

              /* object to check when content resets */
              bindEvents: false,

              /* object to check if events are bound */
              tweenRunning: false,

              /* object to check if tween is running */
              sequential: {},

              /* sequential scrolling object */
              langDir: $this.css("direction"),

              /* detect/store direction (ltr or rtl) */
              cbOffsets: null,

              /* object to check whether callback offsets always trigger */

              /* 
              object to check how scrolling events where last triggered 
              "internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
              usage: object.data("mCS").trigger
              */
              trigger: null,

              /* 
              object to check for changes in elements in order to call the update method automatically 
              */
              poll: {
                size: {
                  o: 0,
                  n: 0
                },
                img: {
                  o: 0,
                  n: 0
                },
                change: {
                  o: 0,
                  n: 0
                }
              }
            });
            var d = $this.data(pluginPfx),
                o = d.opt,

            /* HTML data attributes */
            htmlDataAxis = $this.data("mcs-axis"),
                htmlDataSbPos = $this.data("mcs-scrollbar-position"),
                htmlDataTheme = $this.data("mcs-theme");

            if (htmlDataAxis) {
              o.axis = htmlDataAxis;
            }
            /* usage example: data-mcs-axis="y" */


            if (htmlDataSbPos) {
              o.scrollbarPosition = htmlDataSbPos;
            }
            /* usage example: data-mcs-scrollbar-position="outside" */


            if (htmlDataTheme) {
              /* usage example: data-mcs-theme="minimal" */
              o.theme = htmlDataTheme;

              _theme(o);
              /* theme-specific options */

            }

            _pluginMarkup.call(this);
            /* add plugin markup */


            if (d && o.callbacks.onCreate && typeof o.callbacks.onCreate === "function") {
              o.callbacks.onCreate.call(this);
            }
            /* callbacks: onCreate */


            $("#mCSB_" + d.idx + "_container img:not(." + classes[2] + ")").addClass(classes[2]);
            /* flag loaded images */

            methods.update.call(null, $this);
            /* call the update method */
          }
        });
      },

      /* ---------------------------------------- */

      /* 
      plugin update method 
      updates content and scrollbar(s) values, events and status 
      ----------------------------------------
      usage: $(selector).mCustomScrollbar("update");
      */
      update: function update(el, cb) {
        var selector = el || _selector.call(this);
        /* validate selector */


        return $(selector).each(function () {
          var $this = $(this);

          if ($this.data(pluginPfx)) {
            /* check if plugin has initialized */
            var d = $this.data(pluginPfx),
                o = d.opt,
                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                mCustomScrollBox = $("#mCSB_" + d.idx),
                mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];

            if (!mCSB_container.length) {
              return;
            }

            if (d.tweenRunning) {
              _stop($this);
            }
            /* stop any running tweens while updating */


            if (cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate === "function") {
              o.callbacks.onBeforeUpdate.call(this);
            }
            /* callbacks: onBeforeUpdate */

            /* if element was disabled or destroyed, remove class(es) */


            if ($this.hasClass(classes[3])) {
              $this.removeClass(classes[3]);
            }

            if ($this.hasClass(classes[4])) {
              $this.removeClass(classes[4]);
            }
            /* css flexbox fix, detect/set max-height */


            mCustomScrollBox.css("max-height", "none");

            if (mCustomScrollBox.height() !== $this.height()) {
              mCustomScrollBox.css("max-height", $this.height());
            }

            _expandContentHorizontally.call(this);
            /* expand content horizontally */


            if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
              mCSB_container.css("width", _contentWidth(mCSB_container));
            }

            d.overflowed = _overflowed.call(this);
            /* determine if scrolling is required */

            _scrollbarVisibility.call(this);
            /* show/hide scrollbar(s) */

            /* auto-adjust scrollbar dragger length analogous to content */


            if (o.autoDraggerLength) {
              _setDraggerLength.call(this);
            }

            _scrollRatio.call(this);
            /* calculate and store scrollbar to content ratio */


            _bindEvents.call(this);
            /* bind scrollbar events */

            /* reset scrolling position and/or events */


            var to = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)];

            if (o.axis !== "x") {
              /* y/yx axis */
              if (!d.overflowed[0]) {
                /* y scrolling is not required */
                _resetContentPosition.call(this);
                /* reset content position */


                if (o.axis === "y") {
                  _unbindEvents.call(this);
                } else if (o.axis === "yx" && d.overflowed[1]) {
                  _scrollTo($this, to[1].toString(), {
                    dir: "x",
                    dur: 0,
                    overwrite: "none"
                  });
                }
              } else if (mCSB_dragger[0].height() > mCSB_dragger[0].parent().height()) {
                _resetContentPosition.call(this);
                /* reset content position */

              } else {
                /* y scrolling is required */
                _scrollTo($this, to[0].toString(), {
                  dir: "y",
                  dur: 0,
                  overwrite: "none"
                });

                d.contentReset.y = null;
              }
            }

            if (o.axis !== "y") {
              /* x/yx axis */
              if (!d.overflowed[1]) {
                /* x scrolling is not required */
                _resetContentPosition.call(this);
                /* reset content position */


                if (o.axis === "x") {
                  _unbindEvents.call(this);
                } else if (o.axis === "yx" && d.overflowed[0]) {
                  _scrollTo($this, to[0].toString(), {
                    dir: "y",
                    dur: 0,
                    overwrite: "none"
                  });
                }
              } else if (mCSB_dragger[1].width() > mCSB_dragger[1].parent().width()) {
                _resetContentPosition.call(this);
                /* reset content position */

              } else {
                /* x scrolling is required */
                _scrollTo($this, to[1].toString(), {
                  dir: "x",
                  dur: 0,
                  overwrite: "none"
                });

                d.contentReset.x = null;
              }
            }
            /* callbacks: onImageLoad, onSelectorChange, onUpdate */


            if (cb && d) {
              if (cb === 2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad === "function") {
                o.callbacks.onImageLoad.call(this);
              } else if (cb === 3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange === "function") {
                o.callbacks.onSelectorChange.call(this);
              } else if (o.callbacks.onUpdate && typeof o.callbacks.onUpdate === "function") {
                o.callbacks.onUpdate.call(this);
              }
            }

            _autoUpdate.call(this);
            /* initialize automatic updating (for dynamic content, fluid layouts etc.) */

          }
        });
      },

      /* ---------------------------------------- */

      /* 
      plugin scrollTo method 
      triggers a scrolling event to a specific value
      ----------------------------------------
      usage: $(selector).mCustomScrollbar("scrollTo",value,options);
      */
      scrollTo: function scrollTo(val, options) {
        /* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
        if (typeof val == "undefined" || val == null) {
          return;
        }

        var selector = _selector.call(this);
        /* validate selector */


        return $(selector).each(function () {
          var $this = $(this);

          if ($this.data(pluginPfx)) {
            /* check if plugin has initialized */
            var d = $this.data(pluginPfx),
                o = d.opt,

            /* method default options */
            methodDefaults = {
              trigger: "external",

              /* method is by default triggered externally (e.g. from other scripts) */
              scrollInertia: o.scrollInertia,

              /* scrolling inertia (animation duration) */
              scrollEasing: "mcsEaseInOut",

              /* animation easing */
              moveDragger: false,

              /* move dragger instead of content */
              timeout: 60,

              /* scroll-to delay */
              callbacks: true,

              /* enable/disable callbacks */
              onStart: true,
              onUpdate: true,
              onComplete: true
            },
                methodOptions = $.extend(true, {}, methodDefaults, options),
                to = _arr.call(this, val),
                dur = methodOptions.scrollInertia > 0 && methodOptions.scrollInertia < 17 ? 17 : methodOptions.scrollInertia;
            /* translate yx values to actual scroll-to positions */


            to[0] = _to.call(this, to[0], "y");
            to[1] = _to.call(this, to[1], "x");
            /* 
            check if scroll-to value moves the dragger instead of content. 
            Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
            */

            if (methodOptions.moveDragger) {
              to[0] *= d.scrollRatio.y;
              to[1] *= d.scrollRatio.x;
            }

            methodOptions.dur = _isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden

            setTimeout(function () {
              /* do the scrolling */
              if (to[0] !== null && typeof to[0] !== "undefined" && o.axis !== "x" && d.overflowed[0]) {
                /* scroll y */
                methodOptions.dir = "y";
                methodOptions.overwrite = "all";

                _scrollTo($this, to[0].toString(), methodOptions);
              }

              if (to[1] !== null && typeof to[1] !== "undefined" && o.axis !== "y" && d.overflowed[1]) {
                /* scroll x */
                methodOptions.dir = "x";
                methodOptions.overwrite = "none";

                _scrollTo($this, to[1].toString(), methodOptions);
              }
            }, methodOptions.timeout);
          }
        });
      },

      /* ---------------------------------------- */

      /*
      plugin stop method 
      stops scrolling animation
      ----------------------------------------
      usage: $(selector).mCustomScrollbar("stop");
      */
      stop: function stop() {
        var selector = _selector.call(this);
        /* validate selector */


        return $(selector).each(function () {
          var $this = $(this);

          if ($this.data(pluginPfx)) {
            /* check if plugin has initialized */
            _stop($this);
          }
        });
      },

      /* ---------------------------------------- */

      /*
      plugin disable method 
      temporarily disables the scrollbar(s) 
      ----------------------------------------
      usage: $(selector).mCustomScrollbar("disable",reset); 
      reset (boolean): resets content position to 0 
      */
      disable: function disable(r) {
        var selector = _selector.call(this);
        /* validate selector */


        return $(selector).each(function () {
          var $this = $(this);

          if ($this.data(pluginPfx)) {
            /* check if plugin has initialized */
            var d = $this.data(pluginPfx);

            _autoUpdate.call(this, "remove");
            /* remove automatic updating */


            _unbindEvents.call(this);
            /* unbind events */


            if (r) {
              _resetContentPosition.call(this);
            }
            /* reset content position */


            _scrollbarVisibility.call(this, true);
            /* show/hide scrollbar(s) */


            $this.addClass(classes[3]);
            /* add disable class */
          }
        });
      },

      /* ---------------------------------------- */

      /*
      plugin destroy method 
      completely removes the scrollbar(s) and returns the element to its original state
      ----------------------------------------
      usage: $(selector).mCustomScrollbar("destroy"); 
      */
      destroy: function destroy() {
        var selector = _selector.call(this);
        /* validate selector */


        return $(selector).each(function () {
          var $this = $(this);

          if ($this.data(pluginPfx)) {
            /* check if plugin has initialized */
            var d = $this.data(pluginPfx),
                o = d.opt,
                mCustomScrollBox = $("#mCSB_" + d.idx),
                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                scrollbar = $(".mCSB_" + d.idx + "_scrollbar");

            if (o.live) {
              removeLiveTimers(o.liveSelector || $(selector).selector);
            }
            /* remove live timers */


            _autoUpdate.call(this, "remove");
            /* remove automatic updating */


            _unbindEvents.call(this);
            /* unbind events */


            _resetContentPosition.call(this);
            /* reset content position */


            $this.removeData(pluginPfx);
            /* remove plugin data object */

            _delete(this, "mcs");
            /* delete callbacks object */

            /* remove plugin markup */


            scrollbar.remove();
            /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */

            mCSB_container.find("img." + classes[2]).removeClass(classes[2]);
            /* remove loaded images flag */

            mCustomScrollBox.replaceWith(mCSB_container.contents());
            /* replace plugin's inner wrapper with the original content */

            /* remove plugin classes from the element and add destroy class */

            $this.removeClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + classes[6] + " " + classes[7] + " " + classes[5] + " " + classes[3]).addClass(classes[4]);
          }
        });
      }
      /* ---------------------------------------- */

    },

    /* 
    ----------------------------------------
    FUNCTIONS
    ----------------------------------------
    */

    /* validates selector (if selector is invalid or undefined uses the default one) */
    _selector = function _selector() {
      return _typeof($(this)) !== "object" || $(this).length < 1 ? defaultSelector : this;
    },

    /* -------------------- */

    /* changes options according to theme */
    _theme = function _theme(obj) {
      var fixedSizeScrollbarThemes = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
          nonExpandedScrollbarThemes = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
          disabledScrollButtonsThemes = ["minimal", "minimal-dark"],
          enabledAutoHideScrollbarThemes = ["minimal", "minimal-dark"],
          scrollbarPositionOutsideThemes = ["minimal", "minimal-dark"];
      obj.autoDraggerLength = $.inArray(obj.theme, fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
      obj.autoExpandScrollbar = $.inArray(obj.theme, nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
      obj.scrollButtons.enable = $.inArray(obj.theme, disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
      obj.autoHideScrollbar = $.inArray(obj.theme, enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
      obj.scrollbarPosition = $.inArray(obj.theme, scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
    },

    /* -------------------- */

    /* live option timers removal */
    removeLiveTimers = function removeLiveTimers(selector) {
      if (liveTimers[selector]) {
        clearTimeout(liveTimers[selector]);

        _delete(liveTimers, selector);
      }
    },

    /* -------------------- */

    /* normalizes axis option to valid values: "y", "x", "yx" */
    _findAxis = function _findAxis(val) {
      return val === "yx" || val === "xy" || val === "auto" ? "yx" : val === "x" || val === "horizontal" ? "x" : "y";
    },

    /* -------------------- */

    /* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
    _findScrollButtonsType = function _findScrollButtonsType(val) {
      return val === "stepped" || val === "pixels" || val === "step" || val === "click" ? "stepped" : "stepless";
    },

    /* -------------------- */

    /* generates plugin markup */
    _pluginMarkup = function _pluginMarkup() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          expandClass = o.autoExpandScrollbar ? " " + classes[1] + "_expand" : "",
          scrollbar = ["<div id='mCSB_" + d.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + d.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
          wrapperClass = o.axis === "yx" ? "mCSB_vertical_horizontal" : o.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
          scrollbars = o.axis === "yx" ? scrollbar[0] + scrollbar[1] : o.axis === "x" ? scrollbar[1] : scrollbar[0],
          contentWrapper = o.axis === "yx" ? "<div id='mCSB_" + d.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
          autoHideClass = o.autoHideScrollbar ? " " + classes[6] : "",
          scrollbarDirClass = o.axis !== "x" && d.langDir === "rtl" ? " " + classes[7] : "";

      if (o.setWidth) {
        $this.css("width", o.setWidth);
      }
      /* set element width */


      if (o.setHeight) {
        $this.css("height", o.setHeight);
      }
      /* set element height */


      o.setLeft = o.axis !== "y" && d.langDir === "rtl" ? "989999px" : o.setLeft;
      /* adjust left position for rtl direction */

      $this.addClass(pluginNS + " _" + pluginPfx + "_" + d.idx + autoHideClass + scrollbarDirClass).wrapInner("<div id='mCSB_" + d.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + wrapperClass + "'><div id='mCSB_" + d.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + d.langDir + "' /></div>");
      var mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container");

      if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
        mCSB_container.css("width", _contentWidth(mCSB_container));
      }

      if (o.scrollbarPosition === "outside") {
        if ($this.css("position") === "static") {
          /* requires elements with non-static position */
          $this.css("position", "relative");
        }

        $this.css("overflow", "visible");
        mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
      } else {
        mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
        mCSB_container.wrap(contentWrapper);
      }

      _scrollButtons.call(this);
      /* add scrollbar buttons */

      /* minimum dragger length */


      var mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
      mCSB_dragger[0].css("min-height", mCSB_dragger[0].height());
      mCSB_dragger[1].css("min-width", mCSB_dragger[1].width());
    },

    /* -------------------- */

    /* calculates content width */
    _contentWidth = function _contentWidth(el) {
      var val = [el[0].scrollWidth, Math.max.apply(Math, el.children().map(function () {
        return $(this).outerWidth(true);
      }).get())],
          w = el.parent().width();
      return val[0] > w ? val[0] : val[1] > w ? val[1] : "100%";
    },

    /* -------------------- */

    /* expands content horizontally */
    _expandContentHorizontally = function _expandContentHorizontally() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          mCSB_container = $("#mCSB_" + d.idx + "_container");

      if (o.advanced.autoExpandHorizontalScroll && o.axis !== "y") {
        /* calculate scrollWidth */
        mCSB_container.css({
          "width": "auto",
          "min-width": 0,
          "overflow-x": "scroll"
        });
        var w = Math.ceil(mCSB_container[0].scrollWidth);

        if (o.advanced.autoExpandHorizontalScroll === 3 || o.advanced.autoExpandHorizontalScroll !== 2 && w > mCSB_container.parent().width()) {
          mCSB_container.css({
            "width": w,
            "min-width": "100%",
            "overflow-x": "inherit"
          });
        } else {
          /* 
          wrap content with an infinite width div and set its position to absolute and width to auto. 
          Setting width to auto before calculating the actual width is important! 
          We must let the browser set the width as browser zoom values are impossible to calculate.
          */
          mCSB_container.css({
            "overflow-x": "inherit",
            "position": "absolute"
          }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
            /* set actual width, original position and un-wrap */

            /* 
            get the exact width (with decimals) and then round-up. 
            Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
            */
            "width": Math.ceil(mCSB_container[0].getBoundingClientRect().right + 0.4) - Math.floor(mCSB_container[0].getBoundingClientRect().left),
            "min-width": "100%",
            "position": "relative"
          }).unwrap();
        }
      }
    },

    /* -------------------- */

    /* adds scrollbar buttons */
    _scrollButtons = function _scrollButtons() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          mCSB_scrollTools = $(".mCSB_" + d.idx + "_scrollbar:first"),
          tabindex = !_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='" + o.scrollButtons.tabindex + "'",
          btnHTML = ["<a href='#' class='" + classes[13] + "' " + tabindex + " />", "<a href='#' class='" + classes[14] + "' " + tabindex + " />", "<a href='#' class='" + classes[15] + "' " + tabindex + " />", "<a href='#' class='" + classes[16] + "' " + tabindex + " />"],
          btn = [o.axis === "x" ? btnHTML[2] : btnHTML[0], o.axis === "x" ? btnHTML[3] : btnHTML[1], btnHTML[2], btnHTML[3]];

      if (o.scrollButtons.enable) {
        mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
      }
    },

    /* -------------------- */

    /* auto-adjusts scrollbar dragger length */
    _setDraggerLength = function _setDraggerLength() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
          ratio = [mCustomScrollBox.height() / mCSB_container.outerHeight(false), mCustomScrollBox.width() / mCSB_container.outerWidth(false)],
          l = [parseInt(mCSB_dragger[0].css("min-height")), Math.round(ratio[0] * mCSB_dragger[0].parent().height()), parseInt(mCSB_dragger[1].css("min-width")), Math.round(ratio[1] * mCSB_dragger[1].parent().width())],
          h = oldIE && l[1] < l[0] ? l[0] : l[1],
          w = oldIE && l[3] < l[2] ? l[2] : l[3];
      mCSB_dragger[0].css({
        "height": h,
        "max-height": mCSB_dragger[0].parent().height() - 10
      }).find(".mCSB_dragger_bar").css({
        "line-height": l[0] + "px"
      });
      mCSB_dragger[1].css({
        "width": w,
        "max-width": mCSB_dragger[1].parent().width() - 10
      });
    },

    /* -------------------- */

    /* calculates scrollbar to content ratio */
    _scrollRatio = function _scrollRatio() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
          scrollAmount = [mCSB_container.outerHeight(false) - mCustomScrollBox.height(), mCSB_container.outerWidth(false) - mCustomScrollBox.width()],
          ratio = [scrollAmount[0] / (mCSB_dragger[0].parent().height() - mCSB_dragger[0].height()), scrollAmount[1] / (mCSB_dragger[1].parent().width() - mCSB_dragger[1].width())];
      d.scrollRatio = {
        y: ratio[0],
        x: ratio[1]
      };
    },

    /* -------------------- */

    /* toggles scrolling classes */
    _onDragClasses = function _onDragClasses(el, action, xpnd) {
      var expandClass = xpnd ? classes[0] + "_expanded" : "",
          scrollbar = el.closest(".mCSB_scrollTools");

      if (action === "active") {
        el.toggleClass(classes[0] + " " + expandClass);
        scrollbar.toggleClass(classes[1]);
        el[0]._draggable = el[0]._draggable ? 0 : 1;
      } else {
        if (!el[0]._draggable) {
          if (action === "hide") {
            el.removeClass(classes[0]);
            scrollbar.removeClass(classes[1]);
          } else {
            el.addClass(classes[0]);
            scrollbar.addClass(classes[1]);
          }
        }
      }
    },

    /* -------------------- */

    /* checks if content overflows its container to determine if scrolling is required */
    _overflowed = function _overflowed() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          contentHeight = d.overflowed == null ? mCSB_container.height() : mCSB_container.outerHeight(false),
          contentWidth = d.overflowed == null ? mCSB_container.width() : mCSB_container.outerWidth(false),
          h = mCSB_container[0].scrollHeight,
          w = mCSB_container[0].scrollWidth;

      if (h > contentHeight) {
        contentHeight = h;
      }

      if (w > contentWidth) {
        contentWidth = w;
      }

      return [contentHeight > mCustomScrollBox.height(), contentWidth > mCustomScrollBox.width()];
    },

    /* -------------------- */

    /* resets content position to 0 */
    _resetContentPosition = function _resetContentPosition() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];

      _stop($this);
      /* stop any current scrolling before resetting */


      if (o.axis !== "x" && !d.overflowed[0] || o.axis === "y" && d.overflowed[0]) {
        /* reset y */
        mCSB_dragger[0].add(mCSB_container).css("top", 0);

        _scrollTo($this, "_resetY");
      }

      if (o.axis !== "y" && !d.overflowed[1] || o.axis === "x" && d.overflowed[1]) {
        /* reset x */
        var cx = dx = 0;

        if (d.langDir === "rtl") {
          /* adjust left position for rtl direction */
          cx = mCustomScrollBox.width() - mCSB_container.outerWidth(false);
          dx = Math.abs(cx / d.scrollRatio.x);
        }

        mCSB_container.css("left", cx);
        mCSB_dragger[1].css("left", dx);

        _scrollTo($this, "_resetX");
      }
    },

    /* -------------------- */

    /* binds scrollbar events */
    _bindEvents = function _bindEvents() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt;

      if (!d.bindEvents) {
        /* check if events are already bound */
        _draggable.call(this);

        if (o.contentTouchScroll) {
          _contentDraggable.call(this);
        }

        _selectable.call(this);

        if (o.mouseWheel.enable) {
          /* bind mousewheel fn when plugin is available */
          var _mwt = function _mwt() {
            mousewheelTimeout = setTimeout(function () {
              if (!$.event.special.mousewheel) {
                _mwt();
              } else {
                clearTimeout(mousewheelTimeout);

                _mousewheel.call($this[0]);
              }
            }, 100);
          };

          var mousewheelTimeout;

          _mwt();
        }

        _draggerRail.call(this);

        _wrapperScroll.call(this);

        if (o.advanced.autoScrollOnFocus) {
          _focus.call(this);
        }

        if (o.scrollButtons.enable) {
          _buttons.call(this);
        }

        if (o.keyboard.enable) {
          _keyboard.call(this);
        }

        d.bindEvents = true;
      }
    },

    /* -------------------- */

    /* unbinds scrollbar events */
    _unbindEvents = function _unbindEvents() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          namespace = pluginPfx + "_" + d.idx,
          sb = ".mCSB_" + d.idx + "_scrollbar",
          sel = $("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + sb + " ." + classes[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + sb + ">a"),
          mCSB_container = $("#mCSB_" + d.idx + "_container");

      if (o.advanced.releaseDraggableSelectors) {
        sel.add($(o.advanced.releaseDraggableSelectors));
      }

      if (o.advanced.extraDraggableSelectors) {
        sel.add($(o.advanced.extraDraggableSelectors));
      }

      if (d.bindEvents) {
        /* check if events are bound */

        /* unbind namespaced events from document/selectors */
        $(document).add($(!_canAccessIFrame() || top.document)).unbind("." + namespace);
        sel.each(function () {
          $(this).unbind("." + namespace);
        });
        /* clear and delete timeouts/objects */

        clearTimeout($this[0]._focusTimeout);

        _delete($this[0], "_focusTimeout");

        clearTimeout(d.sequential.step);

        _delete(d.sequential, "step");

        clearTimeout(mCSB_container[0].onCompleteTimeout);

        _delete(mCSB_container[0], "onCompleteTimeout");

        d.bindEvents = false;
      }
    },

    /* -------------------- */

    /* toggles scrollbar visibility */
    _scrollbarVisibility = function _scrollbarVisibility(disabled) {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          contentWrapper = $("#mCSB_" + d.idx + "_container_wrapper"),
          content = contentWrapper.length ? contentWrapper : $("#mCSB_" + d.idx + "_container"),
          scrollbar = [$("#mCSB_" + d.idx + "_scrollbar_vertical"), $("#mCSB_" + d.idx + "_scrollbar_horizontal")],
          mCSB_dragger = [scrollbar[0].find(".mCSB_dragger"), scrollbar[1].find(".mCSB_dragger")];

      if (o.axis !== "x") {
        if (d.overflowed[0] && !disabled) {
          scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display", "block");
          content.removeClass(classes[8] + " " + classes[10]);
        } else {
          if (o.alwaysShowScrollbar) {
            if (o.alwaysShowScrollbar !== 2) {
              mCSB_dragger[0].css("display", "none");
            }

            content.removeClass(classes[10]);
          } else {
            scrollbar[0].css("display", "none");
            content.addClass(classes[10]);
          }

          content.addClass(classes[8]);
        }
      }

      if (o.axis !== "y") {
        if (d.overflowed[1] && !disabled) {
          scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display", "block");
          content.removeClass(classes[9] + " " + classes[11]);
        } else {
          if (o.alwaysShowScrollbar) {
            if (o.alwaysShowScrollbar !== 2) {
              mCSB_dragger[1].css("display", "none");
            }

            content.removeClass(classes[11]);
          } else {
            scrollbar[1].css("display", "none");
            content.addClass(classes[11]);
          }

          content.addClass(classes[9]);
        }
      }

      if (!d.overflowed[0] && !d.overflowed[1]) {
        $this.addClass(classes[5]);
      } else {
        $this.removeClass(classes[5]);
      }
    },

    /* -------------------- */

    /* returns input coordinates of pointer, touch and mouse events (relative to document) */
    _coordinates = function _coordinates(e) {
      var t = e.type,
          o = e.target.ownerDocument !== document && frameElement !== null ? [$(frameElement).offset().top, $(frameElement).offset().left] : null,
          io = _canAccessIFrame() && e.target.ownerDocument !== top.document && frameElement !== null ? [$(e.view.frameElement).offset().top, $(e.view.frameElement).offset().left] : [0, 0];

      switch (t) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
          return o ? [e.originalEvent.pageY - o[0] + io[0], e.originalEvent.pageX - o[1] + io[1], false] : [e.originalEvent.pageY, e.originalEvent.pageX, false];
          break;

        case "touchstart":
        case "touchmove":
        case "touchend":
          var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
              touches = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
          return e.target.ownerDocument !== document ? [touch.screenY, touch.screenX, touches > 1] : [touch.pageY, touch.pageX, touches > 1];
          break;

        default:
          return o ? [e.pageY - o[0] + io[0], e.pageX - o[1] + io[1], false] : [e.pageY, e.pageX, false];
      }
    },

    /* -------------------- */

    /* 
    SCROLLBAR DRAG EVENTS
    scrolls content via scrollbar dragging 
    */
    _draggable = function _draggable() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          namespace = pluginPfx + "_" + d.idx,
          draggerId = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          mCSB_dragger = $("#" + draggerId[0] + ",#" + draggerId[1]),
          draggable,
          dragY,
          dragX,
          rds = o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
          eds = o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
      mCSB_dragger.bind("contextmenu." + namespace, function (e) {
        e.preventDefault(); //prevent right click
      }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();

        if (!_mouseBtnLeft(e)) {
          return;
        }
        /* left mouse button only */


        touchActive = true;

        if (oldIE) {
          document.onselectstart = function () {
            return false;
          };
        }
        /* disable text selection for IE < 9 */


        _iframe.call(mCSB_container, false);
        /* enable scrollbar dragging over iframes by disabling their events */


        _stop($this);

        draggable = $(this);
        var offset = draggable.offset(),
            y = _coordinates(e)[0] - offset.top,
            x = _coordinates(e)[1] - offset.left,
            h = draggable.height() + offset.top,
            w = draggable.width() + offset.left;

        if (y < h && y > 0 && x < w && x > 0) {
          dragY = y;
          dragX = x;
        }

        _onDragClasses(draggable, "active", o.autoExpandScrollbar);
      }).bind("touchmove." + namespace, function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        var offset = draggable.offset(),
            y = _coordinates(e)[0] - offset.top,
            x = _coordinates(e)[1] - offset.left;

        _drag(dragY, dragX, y, x);
      });
      $(document).add(eds).bind("mousemove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, function (e) {
        if (draggable) {
          var offset = draggable.offset(),
              y = _coordinates(e)[0] - offset.top,
              x = _coordinates(e)[1] - offset.left;

          if (dragY === y && dragX === x) {
            return;
          }
          /* has it really moved? */


          _drag(dragY, dragX, y, x);
        }
      }).add(rds).bind("mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function (e) {
        if (draggable) {
          _onDragClasses(draggable, "active", o.autoExpandScrollbar);

          draggable = null;
        }

        touchActive = false;

        if (oldIE) {
          document.onselectstart = null;
        }
        /* enable text selection for IE < 9 */


        _iframe.call(mCSB_container, true);
        /* enable iframes events */

      });

      function _drag(dragY, dragX, y, x) {
        mCSB_container[0].idleTimer = o.scrollInertia < 233 ? 250 : 0;

        if (draggable.attr("id") === draggerId[1]) {
          var dir = "x",
              to = (draggable[0].offsetLeft - dragX + x) * d.scrollRatio.x;
        } else {
          var dir = "y",
              to = (draggable[0].offsetTop - dragY + y) * d.scrollRatio.y;
        }

        _scrollTo($this, to.toString(), {
          dir: dir,
          drag: true
        });
      }
    },

    /* -------------------- */

    /* 
    TOUCH SWIPE EVENTS
    scrolls content via touch swipe 
    Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
    */
    _contentDraggable = function _contentDraggable() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          namespace = pluginPfx + "_" + d.idx,
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
          draggable,
          dragY,
          dragX,
          touchStartY,
          touchStartX,
          touchMoveY = [],
          touchMoveX = [],
          startTime,
          runningTime,
          endTime,
          distance,
          speed,
          amount,
          durA = 0,
          durB,
          overwrite = o.axis === "yx" ? "none" : "all",
          touchIntent = [],
          touchDrag,
          docDrag,
          iframe = mCSB_container.find("iframe"),
          events = ["touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, //start
      "touchmove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, //move
      "touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace //end
      ],
          touchAction = document.body.style.touchAction !== undefined && document.body.style.touchAction !== "";
      mCSB_container.bind(events[0], function (e) {
        _onTouchstart(e);
      }).bind(events[1], function (e) {
        _onTouchmove(e);
      });
      mCustomScrollBox.bind(events[0], function (e) {
        _onTouchstart2(e);
      }).bind(events[2], function (e) {
        _onTouchend(e);
      });

      if (iframe.length) {
        iframe.each(function () {
          $(this).bind("load", function () {
            /* bind events on accessible iframes */
            if (_canAccessIFrame(this)) {
              $(this.contentDocument || this.contentWindow.document).bind(events[0], function (e) {
                _onTouchstart(e);

                _onTouchstart2(e);
              }).bind(events[1], function (e) {
                _onTouchmove(e);
              }).bind(events[2], function (e) {
                _onTouchend(e);
              });
            }
          });
        });
      }

      function _onTouchstart(e) {
        if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
          touchable = 0;
          return;
        }

        touchable = 1;
        touchDrag = 0;
        docDrag = 0;
        draggable = 1;
        $this.removeClass("mCS_touch_action");
        var offset = mCSB_container.offset();
        dragY = _coordinates(e)[0] - offset.top;
        dragX = _coordinates(e)[1] - offset.left;
        touchIntent = [_coordinates(e)[0], _coordinates(e)[1]];
      }

      function _onTouchmove(e) {
        if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
          return;
        }

        if (!o.documentTouchScroll) {
          e.preventDefault();
        }

        e.stopImmediatePropagation();

        if (docDrag && !touchDrag) {
          return;
        }

        if (draggable) {
          runningTime = _getTime();
          var offset = mCustomScrollBox.offset(),
              y = _coordinates(e)[0] - offset.top,
              x = _coordinates(e)[1] - offset.left,
              easing = "mcsLinearOut";
          touchMoveY.push(y);
          touchMoveX.push(x);
          touchIntent[2] = Math.abs(_coordinates(e)[0] - touchIntent[0]);
          touchIntent[3] = Math.abs(_coordinates(e)[1] - touchIntent[1]);

          if (d.overflowed[0]) {
            var limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                prevent = dragY - y > 0 && y - dragY > -(limit * d.scrollRatio.y) && (touchIntent[3] * 2 < touchIntent[2] || o.axis === "yx");
          }

          if (d.overflowed[1]) {
            var limitX = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                preventX = dragX - x > 0 && x - dragX > -(limitX * d.scrollRatio.x) && (touchIntent[2] * 2 < touchIntent[3] || o.axis === "yx");
          }

          if (prevent || preventX) {
            /* prevent native document scrolling */
            if (!touchAction) {
              e.preventDefault();
            }

            touchDrag = 1;
          } else {
            docDrag = 1;
            $this.addClass("mCS_touch_action");
          }

          if (touchAction) {
            e.preventDefault();
          }

          amount = o.axis === "yx" ? [dragY - y, dragX - x] : o.axis === "x" ? [null, dragX - x] : [dragY - y, null];
          mCSB_container[0].idleTimer = 250;

          if (d.overflowed[0]) {
            _drag(amount[0], durA, easing, "y", "all", true);
          }

          if (d.overflowed[1]) {
            _drag(amount[1], durA, easing, "x", overwrite, true);
          }
        }
      }

      function _onTouchstart2(e) {
        if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
          touchable = 0;
          return;
        }

        touchable = 1;
        e.stopImmediatePropagation();

        _stop($this);

        startTime = _getTime();
        var offset = mCustomScrollBox.offset();
        touchStartY = _coordinates(e)[0] - offset.top;
        touchStartX = _coordinates(e)[1] - offset.left;
        touchMoveY = [];
        touchMoveX = [];
      }

      function _onTouchend(e) {
        if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
          return;
        }

        draggable = 0;
        e.stopImmediatePropagation();
        touchDrag = 0;
        docDrag = 0;
        endTime = _getTime();
        var offset = mCustomScrollBox.offset(),
            y = _coordinates(e)[0] - offset.top,
            x = _coordinates(e)[1] - offset.left;

        if (endTime - runningTime > 30) {
          return;
        }

        speed = 1000 / (endTime - startTime);
        var easing = "mcsEaseOut",
            slow = speed < 2.5,
            diff = slow ? [touchMoveY[touchMoveY.length - 2], touchMoveX[touchMoveX.length - 2]] : [0, 0];
        distance = slow ? [y - diff[0], x - diff[1]] : [y - touchStartY, x - touchStartX];
        var absDistance = [Math.abs(distance[0]), Math.abs(distance[1])];
        speed = slow ? [Math.abs(distance[0] / 4), Math.abs(distance[1] / 4)] : [speed, speed];
        var a = [Math.abs(mCSB_container[0].offsetTop) - distance[0] * _m(absDistance[0] / speed[0], speed[0]), Math.abs(mCSB_container[0].offsetLeft) - distance[1] * _m(absDistance[1] / speed[1], speed[1])];
        amount = o.axis === "yx" ? [a[0], a[1]] : o.axis === "x" ? [null, a[1]] : [a[0], null];
        durB = [absDistance[0] * 4 + o.scrollInertia, absDistance[1] * 4 + o.scrollInertia];
        var md = parseInt(o.contentTouchScroll) || 0;
        /* absolute minimum distance required */

        amount[0] = absDistance[0] > md ? amount[0] : 0;
        amount[1] = absDistance[1] > md ? amount[1] : 0;

        if (d.overflowed[0]) {
          _drag(amount[0], durB[0], easing, "y", overwrite, false);
        }

        if (d.overflowed[1]) {
          _drag(amount[1], durB[1], easing, "x", overwrite, false);
        }
      }

      function _m(ds, s) {
        var r = [s * 1.5, s * 2, s / 1.5, s / 2];

        if (ds > 90) {
          return s > 4 ? r[0] : r[3];
        } else if (ds > 60) {
          return s > 3 ? r[3] : r[2];
        } else if (ds > 30) {
          return s > 8 ? r[1] : s > 6 ? r[0] : s > 4 ? s : r[2];
        } else {
          return s > 8 ? s : r[3];
        }
      }

      function _drag(amount, dur, easing, dir, overwrite, drag) {
        if (!amount) {
          return;
        }

        _scrollTo($this, amount.toString(), {
          dur: dur,
          scrollEasing: easing,
          dir: dir,
          overwrite: overwrite,
          drag: drag
        });
      }
    },

    /* -------------------- */

    /* 
    SELECT TEXT EVENTS 
    scrolls content when text is selected 
    */
    _selectable = function _selectable() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          seq = d.sequential,
          namespace = pluginPfx + "_" + d.idx,
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          wrapper = mCSB_container.parent(),
          action;
      mCSB_container.bind("mousedown." + namespace, function (e) {
        if (touchable) {
          return;
        }

        if (!action) {
          action = 1;
          touchActive = true;
        }
      }).add(document).bind("mousemove." + namespace, function (e) {
        if (!touchable && action && _sel()) {
          var offset = mCSB_container.offset(),
              y = _coordinates(e)[0] - offset.top + mCSB_container[0].offsetTop,
              x = _coordinates(e)[1] - offset.left + mCSB_container[0].offsetLeft;

          if (y > 0 && y < wrapper.height() && x > 0 && x < wrapper.width()) {
            if (seq.step) {
              _seq("off", null, "stepped");
            }
          } else {
            if (o.axis !== "x" && d.overflowed[0]) {
              if (y < 0) {
                _seq("on", 38);
              } else if (y > wrapper.height()) {
                _seq("on", 40);
              }
            }

            if (o.axis !== "y" && d.overflowed[1]) {
              if (x < 0) {
                _seq("on", 37);
              } else if (x > wrapper.width()) {
                _seq("on", 39);
              }
            }
          }
        }
      }).bind("mouseup." + namespace + " dragend." + namespace, function (e) {
        if (touchable) {
          return;
        }

        if (action) {
          action = 0;

          _seq("off", null);
        }

        touchActive = false;
      });

      function _sel() {
        return window.getSelection ? window.getSelection().toString() : document.selection && document.selection.type != "Control" ? document.selection.createRange().text : 0;
      }

      function _seq(a, c, s) {
        seq.type = s && action ? "stepped" : "stepless";
        seq.scrollAmount = 10;

        _sequentialScroll($this, a, c, "mcsLinearOut", s ? 60 : null);
      }
    },

    /* -------------------- */

    /* 
    MOUSE WHEEL EVENT
    scrolls content via mouse-wheel 
    via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
    */
    _mousewheel = function _mousewheel() {
      if (!$(this).data(pluginPfx)) {
        return;
      }
      /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */


      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          namespace = pluginPfx + "_" + d.idx,
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
          iframe = $("#mCSB_" + d.idx + "_container").find("iframe");

      if (iframe.length) {
        iframe.each(function () {
          $(this).bind("load", function () {
            /* bind events on accessible iframes */
            if (_canAccessIFrame(this)) {
              $(this.contentDocument || this.contentWindow.document).bind("mousewheel." + namespace, function (e, delta) {
                _onMousewheel(e, delta);
              });
            }
          });
        });
      }

      mCustomScrollBox.bind("mousewheel." + namespace, function (e, delta) {
        _onMousewheel(e, delta);
      });

      function _onMousewheel(e, delta) {
        _stop($this);

        if (_disableMousewheel($this, e.target)) {
          return;
        }
        /* disables mouse-wheel when hovering specific elements */


        var deltaFactor = o.mouseWheel.deltaFactor !== "auto" ? parseInt(o.mouseWheel.deltaFactor) : oldIE && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
            dur = o.scrollInertia;

        if (o.axis === "x" || o.mouseWheel.axis === "x") {
          var dir = "x",
              px = [Math.round(deltaFactor * d.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
              amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.width() ? mCustomScrollBox.width() * 0.9 : px[0],
              contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetLeft),
              draggerPos = mCSB_dragger[1][0].offsetLeft,
              limit = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
              dlt = o.mouseWheel.axis === "y" ? e.deltaY || delta : e.deltaX;
        } else {
          var dir = "y",
              px = [Math.round(deltaFactor * d.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
              amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.height() ? mCustomScrollBox.height() * 0.9 : px[0],
              contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetTop),
              draggerPos = mCSB_dragger[0][0].offsetTop,
              limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
              dlt = e.deltaY || delta;
        }

        if (dir === "y" && !d.overflowed[0] || dir === "x" && !d.overflowed[1]) {
          return;
        }

        if (o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) {
          dlt = -dlt;
        }

        if (o.mouseWheel.normalizeDelta) {
          dlt = dlt < 0 ? -1 : 1;
        }

        if (dlt > 0 && draggerPos !== 0 || dlt < 0 && draggerPos !== limit || o.mouseWheel.preventDefault) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }

        if (e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta) {
          //very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
          amount = e.deltaFactor;
          dur = 17;
        }

        _scrollTo($this, (contentPos - dlt * amount).toString(), {
          dir: dir,
          dur: dur
        });
      }
    },

    /* -------------------- */

    /* checks if iframe can be accessed */
    _canAccessIFrameCache = new Object(),
        _canAccessIFrame = function _canAccessIFrame(iframe) {
      var result = false,
          cacheKey = false,
          html = null;

      if (iframe === undefined) {
        cacheKey = "#empty";
      } else if ($(iframe).attr("id") !== undefined) {
        cacheKey = $(iframe).attr("id");
      }

      if (cacheKey !== false && _canAccessIFrameCache[cacheKey] !== undefined) {
        return _canAccessIFrameCache[cacheKey];
      }

      if (!iframe) {
        try {
          var doc = top.document;
          html = doc.body.innerHTML;
        } catch (err) {
          /* do nothing */
        }

        result = html !== null;
      } else {
        try {
          var doc = iframe.contentDocument || iframe.contentWindow.document;
          html = doc.body.innerHTML;
        } catch (err) {
          /* do nothing */
        }

        result = html !== null;
      }

      if (cacheKey !== false) {
        _canAccessIFrameCache[cacheKey] = result;
      }

      return result;
    },

    /* -------------------- */

    /* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
    _iframe = function _iframe(evt) {
      var el = this.find("iframe");

      if (!el.length) {
        return;
      }
      /* check if content contains iframes */


      var val = !evt ? "none" : "auto";
      el.css("pointer-events", val);
      /* for IE11, iframe's display property should not be "block" */
    },

    /* -------------------- */

    /* disables mouse-wheel when hovering specific elements like select, datalist etc. */
    _disableMousewheel = function _disableMousewheel(el, target) {
      var tag = target.nodeName.toLowerCase(),
          tags = el.data(pluginPfx).opt.mouseWheel.disableOver,

      /* elements that require focus */
      focusTags = ["select", "textarea"];
      return $.inArray(tag, tags) > -1 && !($.inArray(tag, focusTags) > -1 && !$(target).is(":focus"));
    },

    /* -------------------- */

    /* 
    DRAGGER RAIL CLICK EVENT
    scrolls content via dragger rail 
    */
    _draggerRail = function _draggerRail() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          namespace = pluginPfx + "_" + d.idx,
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          wrapper = mCSB_container.parent(),
          mCSB_draggerContainer = $(".mCSB_" + d.idx + "_scrollbar ." + classes[12]),
          clickable;
      mCSB_draggerContainer.bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function (e) {
        touchActive = true;

        if (!$(e.target).hasClass("mCSB_dragger")) {
          clickable = 1;
        }
      }).bind("touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function (e) {
        touchActive = false;
      }).bind("click." + namespace, function (e) {
        if (!clickable) {
          return;
        }

        clickable = 0;

        if ($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")) {
          _stop($this);

          var el = $(this),
              mCSB_dragger = el.find(".mCSB_dragger");

          if (el.parent(".mCSB_scrollTools_horizontal").length > 0) {
            if (!d.overflowed[1]) {
              return;
            }

            var dir = "x",
                clickDir = e.pageX > mCSB_dragger.offset().left ? -1 : 1,
                to = Math.abs(mCSB_container[0].offsetLeft) - clickDir * (wrapper.width() * 0.9);
          } else {
            if (!d.overflowed[0]) {
              return;
            }

            var dir = "y",
                clickDir = e.pageY > mCSB_dragger.offset().top ? -1 : 1,
                to = Math.abs(mCSB_container[0].offsetTop) - clickDir * (wrapper.height() * 0.9);
          }

          _scrollTo($this, to.toString(), {
            dir: dir,
            scrollEasing: "mcsEaseInOut"
          });
        }
      });
    },

    /* -------------------- */

    /* 
    FOCUS EVENT
    scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
    */
    _focus = function _focus() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          namespace = pluginPfx + "_" + d.idx,
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          wrapper = mCSB_container.parent();
      mCSB_container.bind("focusin." + namespace, function (e) {
        var el = $(document.activeElement),
            nested = mCSB_container.find(".mCustomScrollBox").length,
            dur = 0;

        if (!el.is(o.advanced.autoScrollOnFocus)) {
          return;
        }

        _stop($this);

        clearTimeout($this[0]._focusTimeout);
        $this[0]._focusTimer = nested ? (dur + 17) * nested : 0;
        $this[0]._focusTimeout = setTimeout(function () {
          var to = [_childPos(el)[0], _childPos(el)[1]],
              contentPos = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
              isVisible = [contentPos[0] + to[0] >= 0 && contentPos[0] + to[0] < wrapper.height() - el.outerHeight(false), contentPos[1] + to[1] >= 0 && contentPos[0] + to[1] < wrapper.width() - el.outerWidth(false)],
              overwrite = o.axis === "yx" && !isVisible[0] && !isVisible[1] ? "none" : "all";

          if (o.axis !== "x" && !isVisible[0]) {
            _scrollTo($this, to[0].toString(), {
              dir: "y",
              scrollEasing: "mcsEaseInOut",
              overwrite: overwrite,
              dur: dur
            });
          }

          if (o.axis !== "y" && !isVisible[1]) {
            _scrollTo($this, to[1].toString(), {
              dir: "x",
              scrollEasing: "mcsEaseInOut",
              overwrite: overwrite,
              dur: dur
            });
          }
        }, $this[0]._focusTimer);
      });
    },

    /* -------------------- */

    /* sets content wrapper scrollTop/scrollLeft always to 0 */
    _wrapperScroll = function _wrapperScroll() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          namespace = pluginPfx + "_" + d.idx,
          wrapper = $("#mCSB_" + d.idx + "_container").parent();
      wrapper.bind("scroll." + namespace, function (e) {
        if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
          $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "hidden");
          /* hide scrollbar(s) */
        }
      });
    },

    /* -------------------- */

    /* 
    BUTTONS EVENTS
    scrolls content via up, down, left and right buttons 
    */
    _buttons = function _buttons() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          seq = d.sequential,
          namespace = pluginPfx + "_" + d.idx,
          sel = ".mCSB_" + d.idx + "_scrollbar",
          btn = $(sel + ">a");
      btn.bind("contextmenu." + namespace, function (e) {
        e.preventDefault(); //prevent right click
      }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace + " mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace + " mouseout." + namespace + " pointerout." + namespace + " MSPointerOut." + namespace + " click." + namespace, function (e) {
        e.preventDefault();

        if (!_mouseBtnLeft(e)) {
          return;
        }
        /* left mouse button only */


        var btnClass = $(this).attr("class");
        seq.type = o.scrollButtons.scrollType;

        switch (e.type) {
          case "mousedown":
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
            if (seq.type === "stepped") {
              return;
            }

            touchActive = true;
            d.tweenRunning = false;

            _seq("on", btnClass);

            break;

          case "mouseup":
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseout":
          case "pointerout":
          case "MSPointerOut":
            if (seq.type === "stepped") {
              return;
            }

            touchActive = false;

            if (seq.dir) {
              _seq("off", btnClass);
            }

            break;

          case "click":
            if (seq.type !== "stepped" || d.tweenRunning) {
              return;
            }

            _seq("on", btnClass);

            break;
        }

        function _seq(a, c) {
          seq.scrollAmount = o.scrollButtons.scrollAmount;

          _sequentialScroll($this, a, c);
        }
      });
    },

    /* -------------------- */

    /* 
    KEYBOARD EVENTS
    scrolls content via keyboard 
    Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
    */
    _keyboard = function _keyboard() {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          seq = d.sequential,
          namespace = pluginPfx + "_" + d.idx,
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          wrapper = mCSB_container.parent(),
          editables = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          iframe = mCSB_container.find("iframe"),
          events = ["blur." + namespace + " keydown." + namespace + " keyup." + namespace];

      if (iframe.length) {
        iframe.each(function () {
          $(this).bind("load", function () {
            /* bind events on accessible iframes */
            if (_canAccessIFrame(this)) {
              $(this.contentDocument || this.contentWindow.document).bind(events[0], function (e) {
                _onKeyboard(e);
              });
            }
          });
        });
      }

      mCustomScrollBox.attr("tabindex", "0").bind(events[0], function (e) {
        _onKeyboard(e);
      });

      function _onKeyboard(e) {
        switch (e.type) {
          case "blur":
            if (d.tweenRunning && seq.dir) {
              _seq("off", null);
            }

            break;

          case "keydown":
          case "keyup":
            var code = e.keyCode ? e.keyCode : e.which,
                action = "on";

            if (o.axis !== "x" && (code === 38 || code === 40) || o.axis !== "y" && (code === 37 || code === 39)) {
              /* up (38), down (40), left (37), right (39) arrows */
              if ((code === 38 || code === 40) && !d.overflowed[0] || (code === 37 || code === 39) && !d.overflowed[1]) {
                return;
              }

              if (e.type === "keyup") {
                action = "off";
              }

              if (!$(document.activeElement).is(editables)) {
                e.preventDefault();
                e.stopImmediatePropagation();

                _seq(action, code);
              }
            } else if (code === 33 || code === 34) {
              /* PgUp (33), PgDn (34) */
              if (d.overflowed[0] || d.overflowed[1]) {
                e.preventDefault();
                e.stopImmediatePropagation();
              }

              if (e.type === "keyup") {
                _stop($this);

                var keyboardDir = code === 34 ? -1 : 1;

                if (o.axis === "x" || o.axis === "yx" && d.overflowed[1] && !d.overflowed[0]) {
                  var dir = "x",
                      to = Math.abs(mCSB_container[0].offsetLeft) - keyboardDir * (wrapper.width() * 0.9);
                } else {
                  var dir = "y",
                      to = Math.abs(mCSB_container[0].offsetTop) - keyboardDir * (wrapper.height() * 0.9);
                }

                _scrollTo($this, to.toString(), {
                  dir: dir,
                  scrollEasing: "mcsEaseInOut"
                });
              }
            } else if (code === 35 || code === 36) {
              /* End (35), Home (36) */
              if (!$(document.activeElement).is(editables)) {
                if (d.overflowed[0] || d.overflowed[1]) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                }

                if (e.type === "keyup") {
                  if (o.axis === "x" || o.axis === "yx" && d.overflowed[1] && !d.overflowed[0]) {
                    var dir = "x",
                        to = code === 35 ? Math.abs(wrapper.width() - mCSB_container.outerWidth(false)) : 0;
                  } else {
                    var dir = "y",
                        to = code === 35 ? Math.abs(wrapper.height() - mCSB_container.outerHeight(false)) : 0;
                  }

                  _scrollTo($this, to.toString(), {
                    dir: dir,
                    scrollEasing: "mcsEaseInOut"
                  });
                }
              }
            }

            break;
        }

        function _seq(a, c) {
          seq.type = o.keyboard.scrollType;
          seq.scrollAmount = o.keyboard.scrollAmount;

          if (seq.type === "stepped" && d.tweenRunning) {
            return;
          }

          _sequentialScroll($this, a, c);
        }
      }
    },

    /* -------------------- */

    /* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
    _sequentialScroll = function _sequentialScroll(el, action, trigger, e, s) {
      var d = el.data(pluginPfx),
          o = d.opt,
          seq = d.sequential,
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          once = seq.type === "stepped" ? true : false,
          steplessSpeed = o.scrollInertia < 26 ? 26 : o.scrollInertia,

      /* 26/1.5=17 */
      steppedSpeed = o.scrollInertia < 1 ? 17 : o.scrollInertia;

      switch (action) {
        case "on":
          seq.dir = [trigger === classes[16] || trigger === classes[15] || trigger === 39 || trigger === 37 ? "x" : "y", trigger === classes[13] || trigger === classes[15] || trigger === 38 || trigger === 37 ? -1 : 1];

          _stop(el);

          if (_isNumeric(trigger) && seq.type === "stepped") {
            return;
          }

          _on(once);

          break;

        case "off":
          _off();

          if (once || d.tweenRunning && seq.dir) {
            _on(true);
          }

          break;
      }
      /* starts sequence */


      function _on(once) {
        if (o.snapAmount) {
          seq.scrollAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0] === "x" ? o.snapAmount[1] : o.snapAmount[0];
        }
        /* scrolling snapping */


        var c = seq.type !== "stepped",

        /* continuous scrolling */
        t = s ? s : !once ? 1000 / 60 : c ? steplessSpeed / 1.5 : steppedSpeed,

        /* timer */
        m = !once ? 2.5 : c ? 7.5 : 40,

        /* multiplier */
        contentPos = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)],
            ratio = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
            amount = seq.dir[0] === "x" ? contentPos[1] + seq.dir[1] * (ratio[1] * m) : contentPos[0] + seq.dir[1] * (ratio[0] * m),
            px = seq.dir[0] === "x" ? contentPos[1] + seq.dir[1] * parseInt(seq.scrollAmount) : contentPos[0] + seq.dir[1] * parseInt(seq.scrollAmount),
            to = seq.scrollAmount !== "auto" ? px : amount,
            easing = e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
            onComplete = !once ? false : true;

        if (once && t < 17) {
          to = seq.dir[0] === "x" ? contentPos[1] : contentPos[0];
        }

        _scrollTo(el, to.toString(), {
          dir: seq.dir[0],
          scrollEasing: easing,
          dur: t,
          onComplete: onComplete
        });

        if (once) {
          seq.dir = false;
          return;
        }

        clearTimeout(seq.step);
        seq.step = setTimeout(function () {
          _on();
        }, t);
      }
      /* stops sequence */


      function _off() {
        clearTimeout(seq.step);

        _delete(seq, "step");

        _stop(el);
      }
    },

    /* -------------------- */

    /* returns a yx array from value */
    _arr = function _arr(val) {
      var o = $(this).data(pluginPfx).opt,
          vals = [];

      if (typeof val === "function") {
        val = val();
      }
      /* check if the value is a single anonymous function */

      /* check if value is object or array, its length and create an array with yx values */


      if (!(val instanceof Array)) {
        /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
        vals[0] = val.y ? val.y : val.x || o.axis === "x" ? null : val;
        vals[1] = val.x ? val.x : val.y || o.axis === "y" ? null : val;
      } else {
        /* array value (e.g. [100,100]) */
        vals = val.length > 1 ? [val[0], val[1]] : o.axis === "x" ? [null, val[0]] : [val[0], null];
      }
      /* check if array values are anonymous functions */


      if (typeof vals[0] === "function") {
        vals[0] = vals[0]();
      }

      if (typeof vals[1] === "function") {
        vals[1] = vals[1]();
      }

      return vals;
    },

    /* -------------------- */

    /* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
    _to = function _to(val, dir) {
      if (val == null || typeof val == "undefined") {
        return;
      }

      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          wrapper = mCSB_container.parent(),
          t = _typeof(val);

      if (!dir) {
        dir = o.axis === "x" ? "x" : "y";
      }

      var contentLength = dir === "x" ? mCSB_container.outerWidth(false) - wrapper.width() : mCSB_container.outerHeight(false) - wrapper.height(),
          contentPos = dir === "x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
          cssProp = dir === "x" ? "left" : "top";

      switch (t) {
        case "function":
          /* this currently is not used. Consider removing it */
          return val();
          break;

        case "object":
          /* js/jquery object */
          var obj = val.jquery ? val : $(val);

          if (!obj.length) {
            return;
          }

          return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
          break;

        case "string":
        case "number":
          if (_isNumeric(val)) {
            /* numeric value */
            return Math.abs(val);
          } else if (val.indexOf("%") !== -1) {
            /* percentage value */
            return Math.abs(contentLength * parseInt(val) / 100);
          } else if (val.indexOf("-=") !== -1) {
            /* decrease value */
            return Math.abs(contentPos - parseInt(val.split("-=")[1]));
          } else if (val.indexOf("+=") !== -1) {
            /* inrease value */
            var p = contentPos + parseInt(val.split("+=")[1]);
            return p >= 0 ? 0 : Math.abs(p);
          } else if (val.indexOf("px") !== -1 && _isNumeric(val.split("px")[0])) {
            /* pixels string value (e.g. "100px") */
            return Math.abs(val.split("px")[0]);
          } else {
            if (val === "top" || val === "left") {
              /* special strings */
              return 0;
            } else if (val === "bottom") {
              return Math.abs(wrapper.height() - mCSB_container.outerHeight(false));
            } else if (val === "right") {
              return Math.abs(wrapper.width() - mCSB_container.outerWidth(false));
            } else if (val === "first" || val === "last") {
              var obj = mCSB_container.find(":" + val);
              return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
            } else {
              if ($(val).length) {
                /* jquery selector */
                return dir === "x" ? _childPos($(val))[1] : _childPos($(val))[0];
              } else {
                /* other values (e.g. "100em") */
                mCSB_container.css(cssProp, val);
                methods.update.call(null, $this[0]);
                return;
              }
            }
          }

          break;
      }
    },

    /* -------------------- */

    /* calls the update method automatically */
    _autoUpdate = function _autoUpdate(rem) {
      var $this = $(this),
          d = $this.data(pluginPfx),
          o = d.opt,
          mCSB_container = $("#mCSB_" + d.idx + "_container");

      if (rem) {
        /* 
        removes autoUpdate timer 
        usage: _autoUpdate.call(this,"remove");
        */
        clearTimeout(mCSB_container[0].autoUpdate);

        _delete(mCSB_container[0], "autoUpdate");

        return;
      }

      upd();

      function upd() {
        clearTimeout(mCSB_container[0].autoUpdate);

        if ($this.parents("html").length === 0) {
          /* check element in dom tree */
          $this = null;
          return;
        }

        mCSB_container[0].autoUpdate = setTimeout(function () {
          /* update on specific selector(s) length and size change */
          if (o.advanced.updateOnSelectorChange) {
            d.poll.change.n = sizesSum();

            if (d.poll.change.n !== d.poll.change.o) {
              d.poll.change.o = d.poll.change.n;
              doUpd(3);
              return;
            }
          }
          /* update on main element and scrollbar size changes */


          if (o.advanced.updateOnContentResize) {
            d.poll.size.n = $this[0].scrollHeight + $this[0].scrollWidth + mCSB_container[0].offsetHeight + $this[0].offsetHeight + $this[0].offsetWidth;

            if (d.poll.size.n !== d.poll.size.o) {
              d.poll.size.o = d.poll.size.n;
              doUpd(1);
              return;
            }
          }
          /* update on image load */


          if (o.advanced.updateOnImageLoad) {
            if (!(o.advanced.updateOnImageLoad === "auto" && o.axis === "y")) {
              //by default, it doesn't run on vertical content
              d.poll.img.n = mCSB_container.find("img").length;

              if (d.poll.img.n !== d.poll.img.o) {
                d.poll.img.o = d.poll.img.n;
                mCSB_container.find("img").each(function () {
                  imgLoader(this);
                });
                return;
              }
            }
          }

          if (o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) {
            upd();
          }
        }, o.advanced.autoUpdateTimeout);
      }
      /* a tiny image loader */


      function imgLoader(el) {
        if ($(el).hasClass(classes[2])) {
          doUpd();
          return;
        }

        var img = new Image();

        function createDelegate(contextObject, delegateMethod) {
          return function () {
            return delegateMethod.apply(contextObject, arguments);
          };
        }

        function imgOnLoad() {
          this.onload = null;
          $(el).addClass(classes[2]);
          doUpd(2);
        }

        img.onload = createDelegate(img, imgOnLoad);
        img.src = el.src;
      }
      /* returns the total height and width sum of all elements matching the selector */


      function sizesSum() {
        if (o.advanced.updateOnSelectorChange === true) {
          o.advanced.updateOnSelectorChange = "*";
        }

        var total = 0,
            sel = mCSB_container.find(o.advanced.updateOnSelectorChange);

        if (o.advanced.updateOnSelectorChange && sel.length > 0) {
          sel.each(function () {
            total += this.offsetHeight + this.offsetWidth;
          });
        }

        return total;
      }
      /* calls the update method */


      function doUpd(cb) {
        clearTimeout(mCSB_container[0].autoUpdate);
        methods.update.call(null, $this[0], cb);
      }
    },

    /* -------------------- */

    /* snaps scrolling to a multiple of a pixels number */
    _snapAmount = function _snapAmount(to, amount, offset) {
      return Math.round(to / amount) * amount - offset;
    },

    /* -------------------- */

    /* stops content and scrollbar animations */
    _stop = function _stop(el) {
      var d = el.data(pluginPfx),
          sel = $("#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal");
      sel.each(function () {
        _stopTween.call(this);
      });
    },

    /* -------------------- */

    /* 
    ANIMATES CONTENT 
    This is where the actual scrolling happens
    */
    _scrollTo = function _scrollTo(el, to, options) {
      var d = el.data(pluginPfx),
          o = d.opt,
          defaults = {
        trigger: "internal",
        dir: "y",
        scrollEasing: "mcsEaseOut",
        drag: false,
        dur: o.scrollInertia,
        overwrite: "all",
        callbacks: true,
        onStart: true,
        onUpdate: true,
        onComplete: true
      },
          options = $.extend(defaults, options),
          dur = [options.dur, options.drag ? 0 : options.dur],
          mCustomScrollBox = $("#mCSB_" + d.idx),
          mCSB_container = $("#mCSB_" + d.idx + "_container"),
          wrapper = mCSB_container.parent(),
          totalScrollOffsets = o.callbacks.onTotalScrollOffset ? _arr.call(el, o.callbacks.onTotalScrollOffset) : [0, 0],
          totalScrollBackOffsets = o.callbacks.onTotalScrollBackOffset ? _arr.call(el, o.callbacks.onTotalScrollBackOffset) : [0, 0];
      d.trigger = options.trigger;

      if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
        /* always reset scrollTop/Left */
        $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "visible");
        wrapper.scrollTop(0).scrollLeft(0);
      }

      if (to === "_resetY" && !d.contentReset.y) {
        /* callbacks: onOverflowYNone */
        if (_cb("onOverflowYNone")) {
          o.callbacks.onOverflowYNone.call(el[0]);
        }

        d.contentReset.y = 1;
      }

      if (to === "_resetX" && !d.contentReset.x) {
        /* callbacks: onOverflowXNone */
        if (_cb("onOverflowXNone")) {
          o.callbacks.onOverflowXNone.call(el[0]);
        }

        d.contentReset.x = 1;
      }

      if (to === "_resetY" || to === "_resetX") {
        return;
      }

      if ((d.contentReset.y || !el[0].mcs) && d.overflowed[0]) {
        /* callbacks: onOverflowY */
        if (_cb("onOverflowY")) {
          o.callbacks.onOverflowY.call(el[0]);
        }

        d.contentReset.x = null;
      }

      if ((d.contentReset.x || !el[0].mcs) && d.overflowed[1]) {
        /* callbacks: onOverflowX */
        if (_cb("onOverflowX")) {
          o.callbacks.onOverflowX.call(el[0]);
        }

        d.contentReset.x = null;
      }

      if (o.snapAmount) {
        /* scrolling snapping */
        var snapAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : options.dir === "x" ? o.snapAmount[1] : o.snapAmount[0];
        to = _snapAmount(to, snapAmount, o.snapOffset);
      }

      switch (options.dir) {
        case "x":
          var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_horizontal"),
              property = "left",
              contentPos = mCSB_container[0].offsetLeft,
              limit = [mCustomScrollBox.width() - mCSB_container.outerWidth(false), mCSB_dragger.parent().width() - mCSB_dragger.width()],
              scrollTo = [to, to === 0 ? 0 : to / d.scrollRatio.x],
              tso = totalScrollOffsets[1],
              tsbo = totalScrollBackOffsets[1],
              totalScrollOffset = tso > 0 ? tso / d.scrollRatio.x : 0,
              totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.x : 0;
          break;

        case "y":
          var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_vertical"),
              property = "top",
              contentPos = mCSB_container[0].offsetTop,
              limit = [mCustomScrollBox.height() - mCSB_container.outerHeight(false), mCSB_dragger.parent().height() - mCSB_dragger.height()],
              scrollTo = [to, to === 0 ? 0 : to / d.scrollRatio.y],
              tso = totalScrollOffsets[0],
              tsbo = totalScrollBackOffsets[0],
              totalScrollOffset = tso > 0 ? tso / d.scrollRatio.y : 0,
              totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.y : 0;
          break;
      }

      if (scrollTo[1] < 0 || scrollTo[0] === 0 && scrollTo[1] === 0) {
        scrollTo = [0, 0];
      } else if (scrollTo[1] >= limit[1]) {
        scrollTo = [limit[0], limit[1]];
      } else {
        scrollTo[0] = -scrollTo[0];
      }

      if (!el[0].mcs) {
        _mcs();
        /* init mcs object (once) to make it available before callbacks */


        if (_cb("onInit")) {
          o.callbacks.onInit.call(el[0]);
        }
        /* callbacks: onInit */

      }

      clearTimeout(mCSB_container[0].onCompleteTimeout);

      _tweenTo(mCSB_dragger[0], property, Math.round(scrollTo[1]), dur[1], options.scrollEasing);

      if (!d.tweenRunning && (contentPos === 0 && scrollTo[0] >= 0 || contentPos === limit[0] && scrollTo[0] <= limit[0])) {
        return;
      }

      _tweenTo(mCSB_container[0], property, Math.round(scrollTo[0]), dur[0], options.scrollEasing, options.overwrite, {
        onStart: function onStart() {
          if (options.callbacks && options.onStart && !d.tweenRunning) {
            /* callbacks: onScrollStart */
            if (_cb("onScrollStart")) {
              _mcs();

              o.callbacks.onScrollStart.call(el[0]);
            }

            d.tweenRunning = true;

            _onDragClasses(mCSB_dragger);

            d.cbOffsets = _cbOffsets();
          }
        },
        onUpdate: function onUpdate() {
          if (options.callbacks && options.onUpdate) {
            /* callbacks: whileScrolling */
            if (_cb("whileScrolling")) {
              _mcs();

              o.callbacks.whileScrolling.call(el[0]);
            }
          }
        },
        onComplete: function onComplete() {
          if (options.callbacks && options.onComplete) {
            if (o.axis === "yx") {
              clearTimeout(mCSB_container[0].onCompleteTimeout);
            }

            var t = mCSB_container[0].idleTimer || 0;
            mCSB_container[0].onCompleteTimeout = setTimeout(function () {
              /* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
              if (_cb("onScroll")) {
                _mcs();

                o.callbacks.onScroll.call(el[0]);
              }

              if (_cb("onTotalScroll") && scrollTo[1] >= limit[1] - totalScrollOffset && d.cbOffsets[0]) {
                _mcs();

                o.callbacks.onTotalScroll.call(el[0]);
              }

              if (_cb("onTotalScrollBack") && scrollTo[1] <= totalScrollBackOffset && d.cbOffsets[1]) {
                _mcs();

                o.callbacks.onTotalScrollBack.call(el[0]);
              }

              d.tweenRunning = false;
              mCSB_container[0].idleTimer = 0;

              _onDragClasses(mCSB_dragger, "hide");
            }, t);
          }
        }
      });
      /* checks if callback function exists */


      function _cb(cb) {
        return d && o.callbacks[cb] && typeof o.callbacks[cb] === "function";
      }
      /* checks whether callback offsets always trigger */


      function _cbOffsets() {
        return [o.callbacks.alwaysTriggerOffsets || contentPos >= limit[0] + tso, o.callbacks.alwaysTriggerOffsets || contentPos <= -tsbo];
      }
      /* 
      populates object with useful values for the user 
      values: 
      	content: this.mcs.content
      	content top position: this.mcs.top 
      	content left position: this.mcs.left 
      	dragger top position: this.mcs.draggerTop 
      	dragger left position: this.mcs.draggerLeft 
      	scrolling y percentage: this.mcs.topPct 
      	scrolling x percentage: this.mcs.leftPct 
      	scrolling direction: this.mcs.direction
      */


      function _mcs() {
        var cp = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],

        /* content position */
        dp = [mCSB_dragger[0].offsetTop, mCSB_dragger[0].offsetLeft],

        /* dragger position */
        cl = [mCSB_container.outerHeight(false), mCSB_container.outerWidth(false)],

        /* content length */
        pl = [mCustomScrollBox.height(), mCustomScrollBox.width()];
        /* content parent length */

        el[0].mcs = {
          content: mCSB_container,

          /* original content wrapper as jquery object */
          top: cp[0],
          left: cp[1],
          draggerTop: dp[0],
          draggerLeft: dp[1],
          topPct: Math.round(100 * Math.abs(cp[0]) / (Math.abs(cl[0]) - pl[0])),
          leftPct: Math.round(100 * Math.abs(cp[1]) / (Math.abs(cl[1]) - pl[1])),
          direction: options.dir
        };
        /* 
        this refers to the original element containing the scrollbar(s)
        usage: this.mcs.top, this.mcs.leftPct etc. 
        */
      }
    },

    /* -------------------- */

    /* 
    CUSTOM JAVASCRIPT ANIMATION TWEEN 
    Lighter and faster than jquery animate() and css transitions 
    Animates top/left properties and includes easings 
    */
    _tweenTo = function _tweenTo(el, prop, to, duration, easing, overwrite, callbacks) {
      if (!el._mTween) {
        el._mTween = {
          top: {},
          left: {}
        };
      }

      var callbacks = callbacks || {},
          onStart = callbacks.onStart || function () {},
          onUpdate = callbacks.onUpdate || function () {},
          onComplete = callbacks.onComplete || function () {},
          startTime = _getTime(),
          _delay,
          progress = 0,
          from = el.offsetTop,
          elStyle = el.style,
          _request,
          tobj = el._mTween[prop];

      if (prop === "left") {
        from = el.offsetLeft;
      }

      var diff = to - from;
      tobj.stop = 0;

      if (overwrite !== "none") {
        _cancelTween();
      }

      _startTween();

      function _step() {
        if (tobj.stop) {
          return;
        }

        if (!progress) {
          onStart.call();
        }

        progress = _getTime() - startTime;

        _tween();

        if (progress >= tobj.time) {
          tobj.time = progress > tobj.time ? progress + _delay - (progress - tobj.time) : progress + _delay - 1;

          if (tobj.time < progress + 1) {
            tobj.time = progress + 1;
          }
        }

        if (tobj.time < duration) {
          tobj.id = _request(_step);
        } else {
          onComplete.call();
        }
      }

      function _tween() {
        if (duration > 0) {
          tobj.currVal = _ease(tobj.time, from, diff, duration, easing);
          elStyle[prop] = Math.round(tobj.currVal) + "px";
        } else {
          elStyle[prop] = to + "px";
        }

        onUpdate.call();
      }

      function _startTween() {
        _delay = 1000 / 60;
        tobj.time = progress + _delay;
        _request = !window.requestAnimationFrame ? function (f) {
          _tween();

          return setTimeout(f, 0.01);
        } : window.requestAnimationFrame;
        tobj.id = _request(_step);
      }

      function _cancelTween() {
        if (tobj.id == null) {
          return;
        }

        if (!window.requestAnimationFrame) {
          clearTimeout(tobj.id);
        } else {
          window.cancelAnimationFrame(tobj.id);
        }

        tobj.id = null;
      }

      function _ease(t, b, c, d, type) {
        switch (type) {
          case "linear":
          case "mcsLinear":
            return c * t / d + b;
            break;

          case "mcsLinearOut":
            t /= d;
            t--;
            return c * Math.sqrt(1 - t * t) + b;
            break;

          case "easeInOutSmooth":
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
            break;

          case "easeInOutStrong":
            t /= d / 2;
            if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            t--;
            return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
            break;

          case "easeInOut":
          case "mcsEaseInOut":
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
            break;

          case "easeOutSmooth":
            t /= d;
            t--;
            return -c * (t * t * t * t - 1) + b;
            break;

          case "easeOutStrong":
            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
            break;

          case "easeOut":
          case "mcsEaseOut":
          default:
            var ts = (t /= d) * t,
                tc = ts * t;
            return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
        }
      }
    },

    /* -------------------- */

    /* returns current time */
    _getTime = function _getTime() {
      if (window.performance && window.performance.now) {
        return window.performance.now();
      } else {
        if (window.performance && window.performance.webkitNow) {
          return window.performance.webkitNow();
        } else {
          if (Date.now) {
            return Date.now();
          } else {
            return new Date().getTime();
          }
        }
      }
    },

    /* -------------------- */

    /* stops a tween */
    _stopTween = function _stopTween() {
      var el = this;

      if (!el._mTween) {
        el._mTween = {
          top: {},
          left: {}
        };
      }

      var props = ["top", "left"];

      for (var i = 0; i < props.length; i++) {
        var prop = props[i];

        if (el._mTween[prop].id) {
          if (!window.requestAnimationFrame) {
            clearTimeout(el._mTween[prop].id);
          } else {
            window.cancelAnimationFrame(el._mTween[prop].id);
          }

          el._mTween[prop].id = null;
          el._mTween[prop].stop = 1;
        }
      }
    },

    /* -------------------- */

    /* deletes a property (avoiding the exception thrown by IE) */
    _delete = function _delete(c, m) {
      try {
        delete c[m];
      } catch (e) {
        c[m] = null;
      }
    },

    /* -------------------- */

    /* detects left mouse button */
    _mouseBtnLeft = function _mouseBtnLeft(e) {
      return !(e.which && e.which !== 1);
    },

    /* -------------------- */

    /* detects if pointer type event is touch */
    _pointerTouch = function _pointerTouch(e) {
      var t = e.originalEvent.pointerType;
      return !(t && t !== "touch" && t !== 2);
    },

    /* -------------------- */

    /* checks if value is numeric */
    _isNumeric = function _isNumeric(val) {
      return !isNaN(parseFloat(val)) && isFinite(val);
    },

    /* -------------------- */

    /* returns element position according to content */
    _childPos = function _childPos(el) {
      var p = el.parents(".mCSB_container");
      return [el.offset().top - p.offset().top, el.offset().left - p.offset().left];
    },

    /* -------------------- */

    /* checks if browser tab is hidden/inactive via Page Visibility API */
    _isTabHidden = function _isTabHidden() {
      var prop = _getHiddenProp();

      if (!prop) return false;
      return document[prop];

      function _getHiddenProp() {
        var pfx = ["webkit", "moz", "ms", "o"];
        if ("hidden" in document) return "hidden"; //natively supported

        for (var i = 0; i < pfx.length; i++) {
          //prefixed
          if (pfx[i] + "Hidden" in document) return pfx[i] + "Hidden";
        }

        return null; //not supported
      }
    };
    /* -------------------- */

    /* 
    ----------------------------------------
    PLUGIN SETUP 
    ----------------------------------------
    */

    /* plugin constructor functions */


    $.fn[pluginNS] = function (method) {
      /* usage: $(selector).mCustomScrollbar(); */
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (_typeof(method) === "object" || !method) {
        return methods.init.apply(this, arguments);
      } else {
        $.error("Method " + method + " does not exist");
      }
    };

    $[pluginNS] = function (method) {
      /* usage: $.mCustomScrollbar(); */
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (_typeof(method) === "object" || !method) {
        return methods.init.apply(this, arguments);
      } else {
        $.error("Method " + method + " does not exist");
      }
    };
    /* 
    allow setting plugin default options. 
    usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
    to apply any changed default options on default selectors (below), use inside document ready fn 
    e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
    */


    $[pluginNS].defaults = defaults;
    /* 
    add window object (window.mCustomScrollbar) 
    usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
    */

    window[pluginNS] = true;
    $(window).bind("load", function () {
      $(defaultSelector)[pluginNS]();
      /* add scrollbars automatically on default selector */

      /* extend jQuery expressions */

      $.extend($.expr[":"], {
        /* checks if element is within scrollable viewport */
        mcsInView: $.expr[":"].mcsInView || function (el) {
          var $el = $(el),
              content = $el.parents(".mCSB_container"),
              wrapper,
              cPos;

          if (!content.length) {
            return;
          }

          wrapper = content.parent();
          cPos = [content[0].offsetTop, content[0].offsetLeft];
          return cPos[0] + _childPos($el)[0] >= 0 && cPos[0] + _childPos($el)[0] < wrapper.height() - $el.outerHeight(false) && cPos[1] + _childPos($el)[1] >= 0 && cPos[1] + _childPos($el)[1] < wrapper.width() - $el.outerWidth(false);
        },

        /* checks if element or part of element is in view of scrollable viewport */
        mcsInSight: $.expr[":"].mcsInSight || function (el, i, m) {
          var $el = $(el),
              elD,
              content = $el.parents(".mCSB_container"),
              wrapperView,
              pos,
              wrapperViewPct,
              pctVals = m[3] === "exact" ? [[1, 0], [1, 0]] : [[0.9, 0.1], [0.6, 0.4]];

          if (!content.length) {
            return;
          }

          elD = [$el.outerHeight(false), $el.outerWidth(false)];
          pos = [content[0].offsetTop + _childPos($el)[0], content[0].offsetLeft + _childPos($el)[1]];
          wrapperView = [content.parent()[0].offsetHeight, content.parent()[0].offsetWidth];
          wrapperViewPct = [elD[0] < wrapperView[0] ? pctVals[0] : pctVals[1], elD[1] < wrapperView[1] ? pctVals[0] : pctVals[1]];
          return pos[0] - wrapperView[0] * wrapperViewPct[0][0] < 0 && pos[0] + elD[0] - wrapperView[0] * wrapperViewPct[0][1] >= 0 && pos[1] - wrapperView[1] * wrapperViewPct[1][0] < 0 && pos[1] + elD[1] - wrapperView[1] * wrapperViewPct[1][1] >= 0;
        },

        /* checks if element is overflowed having visible scrollbar(s) */
        mcsOverflow: $.expr[":"].mcsOverflow || function (el) {
          var d = $(el).data(pluginPfx);

          if (!d) {
            return;
          }

          return d.overflowed[0] || d.overflowed[1];
        }
      });
    });
  });
});

/***/ }),

/***/ "./resources/js/work/jquery.range-min.js":
/*!***********************************************!*\
  !*** ./resources/js/work/jquery.range-min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function ($, t, i, s) {
  "use strict";

  var o = function o() {
    return this.init.apply(this, arguments);
  };

  o.prototype = {
    defaults: {
      onstatechange: function onstatechange() {},
      ondragend: function ondragend() {},
      onbarclicked: function onbarclicked() {},
      isRange: !1,
      showLabels: !0,
      showScale: !0,
      step: 1,
      format: "%s",
      theme: "theme-green",
      width: 300,
      disable: !1,
      snap: !1
    },
    template: '<div class="slider-container">			<div class="back-bar">                <div class="selected-bar"></div>                <div class="pointer low"></div><div class="pointer-label low">123456</div>                <div class="pointer high"></div><div class="pointer-label high">456789</div>                <div class="clickable-dummy"></div>            </div>            <div class="scale"></div>		</div>',
    init: function init(t, i) {
      this.options = $.extend({}, this.defaults, i), this.inputNode = $(t), this.options.value = this.inputNode.val() || (this.options.isRange ? this.options.from + "," + this.options.from : "" + this.options.from), this.domNode = $(this.template), this.domNode.addClass(this.options.theme), this.inputNode.after(this.domNode), this.domNode.on("change", this.onChange), this.pointers = $(".pointer", this.domNode), this.lowPointer = this.pointers.first(), this.highPointer = this.pointers.last(), this.labels = $(".pointer-label", this.domNode), this.lowLabel = this.labels.first(), this.highLabel = this.labels.last(), this.scale = $(".scale", this.domNode), this.bar = $(".selected-bar", this.domNode), this.clickableBar = this.domNode.find(".clickable-dummy"), this.interval = this.options.to - this.options.from, this.render();
    },
    render: function render() {
      return 0 !== this.inputNode.width() || this.options.width ? (this.options.width = this.options.width || this.inputNode.width(), this.domNode.width(this.options.width), this.inputNode.hide(), this.isSingle() && (this.lowPointer.hide(), this.lowLabel.hide()), this.options.showLabels || this.labels.hide(), this.attachEvents(), this.options.showScale && this.renderScale(), void this.setValue(this.options.value)) : void console.log("jRange : no width found, returning");
    },
    isSingle: function isSingle() {
      return "number" == typeof this.options.value ? !0 : -1 === this.options.value.indexOf(",") && !this.options.isRange;
    },
    attachEvents: function attachEvents() {
      this.clickableBar.click($.proxy(this.barClicked, this)), this.pointers.on("mousedown touchstart", $.proxy(this.onDragStart, this)), this.pointers.bind("dragstart", function (t) {
        t.preventDefault();
      });
    },
    onDragStart: function onDragStart(t) {
      if (!(this.options.disable || "mousedown" === t.type && 1 !== t.which)) {
        t.stopPropagation(), t.preventDefault();
        var s = $(t.target);
        this.pointers.removeClass("last-active"), s.addClass("focused last-active"), this[(s.hasClass("low") ? "low" : "high") + "Label"].addClass("focused"), $(i).on("mousemove.slider touchmove.slider", $.proxy(this.onDrag, this, s)), $(i).on("mouseup.slider touchend.slider touchcancel.slider", $.proxy(this.onDragEnd, this));
      }
    },
    onDrag: function onDrag(t, i) {
      i.stopPropagation(), i.preventDefault(), i.originalEvent.touches && i.originalEvent.touches.length ? i = i.originalEvent.touches[0] : i.originalEvent.changedTouches && i.originalEvent.changedTouches.length && (i = i.originalEvent.changedTouches[0]);
      var s = i.clientX - this.domNode.offset().left;
      this.domNode.trigger("change", [this, t, s]);
    },
    onDragEnd: function onDragEnd(t) {
      this.pointers.removeClass("focused").trigger("rangeslideend"), this.labels.removeClass("focused"), $(i).off(".slider"), this.options.ondragend.call(this, this.options.value);
    },
    barClicked: function barClicked(t) {
      if (!this.options.disable) {
        var i = t.pageX - this.clickableBar.offset().left;
        if (this.isSingle()) this.setPosition(this.pointers.last(), i, !0, !0);else {
          var s = Math.abs(parseFloat(this.pointers.first().css("left"), 10)),
              o = this.pointers.first().width() / 2,
              e = Math.abs(parseFloat(this.pointers.last().css("left"), 10)),
              n = this.pointers.first().width() / 2,
              a = Math.abs(s - i + o),
              h = Math.abs(e - i + n),
              l;
          l = a == h ? s > i ? this.pointers.first() : this.pointers.last() : h > a ? this.pointers.first() : this.pointers.last(), this.setPosition(l, i, !0, !0);
        }
        this.options.onbarclicked.call(this, this.options.value);
      }
    },
    onChange: function onChange(t, i, s, o) {
      var e, n;
      e = 0, n = i.domNode.width(), i.isSingle() || (e = s.hasClass("high") ? parseFloat(i.lowPointer.css("left")) + i.lowPointer.width() / 2 : 0, n = s.hasClass("low") ? parseFloat(i.highPointer.css("left")) + i.highPointer.width() / 2 : i.domNode.width());
      var a = Math.min(Math.max(o, e), n);
      i.setPosition(s, a, !0);
    },
    setPosition: function setPosition(t, i, s, o) {
      var e,
          n,
          a = parseFloat(this.lowPointer.css("left")),
          h = parseFloat(this.highPointer.css("left")) || 0,
          l = this.highPointer.width() / 2;

      if (s || (i = this.prcToPx(i)), this.options.snap) {
        var r = this.correctPositionForSnap(i);
        if (-1 === r) return;
        i = r;
      }

      t[0] === this.highPointer[0] ? h = Math.round(i - l) : a = Math.round(i - l), t[o ? "animate" : "css"]({
        left: Math.round(i - l)
      }), this.isSingle() ? e = 0 : (e = a + l, n = h + l);
      var d = Math.round(h + l - e);
      this.bar[o ? "animate" : "css"]({
        width: Math.abs(d),
        left: d > 0 ? e : e + d
      }), this.showPointerValue(t, i, o), this.isReadonly();
    },
    correctPositionForSnap: function correctPositionForSnap(t) {
      var i = this.positionToValue(t) - this.options.from,
          s = this.options.width / (this.interval / this.options.step),
          o = i / this.options.step * s;
      return o + s / 2 >= t && t >= o - s / 2 ? o : -1;
    },
    setValue: function setValue(t) {
      var i = t.toString().split(",");
      i[0] = Math.min(Math.max(i[0], this.options.from), this.options.to) + "", i.length > 1 && (i[1] = Math.min(Math.max(i[1], this.options.from), this.options.to) + ""), this.options.value = t;
      var s = this.valuesToPrc(2 === i.length ? i : [0, i[0]]);
      this.isSingle() ? this.setPosition(this.highPointer, s[1]) : (this.setPosition(this.lowPointer, s[0]), this.setPosition(this.highPointer, s[1]));
    },
    renderScale: function renderScale() {
      for (var t = this.options.scale || [this.options.from, this.options.to], i = Math.round(100 / (t.length - 1) * 10) / 10, s = "", o = 0; o < t.length; o++) {
        s += '<span style="left: ' + o * i + '%">' + ("|" != t[o] ? "<ins>" + t[o] + "</ins>" : "") + "</span>";
      }

      this.scale.html(s), $("ins", this.scale).each(function () {
        $(this).css({
          marginLeft: -$(this).outerWidth() / 2
        });
      });
    },
    getBarWidth: function getBarWidth() {
      var t = this.options.value.split(",");
      return t.length > 1 ? parseFloat(t[1]) - parseFloat(t[0]) : parseFloat(t[0]);
    },
    showPointerValue: function showPointerValue(t, i, o) {
      var e = $(".pointer-label", this.domNode)[t.hasClass("low") ? "first" : "last"](),
          n,
          a = this.positionToValue(i);

      if ($.isFunction(this.options.format)) {
        var h = this.isSingle() ? s : t.hasClass("low") ? "low" : "high";
        n = this.options.format(a, h);
      } else n = this.options.format.replace("%s", a);

      var l = e.html(n).width(),
          r = i - l / 2;
      r = Math.min(Math.max(r, 0), this.options.width - l), e[o ? "animate" : "css"]({
        left: r
      }), this.setInputValue(t, a);
    },
    valuesToPrc: function valuesToPrc(t) {
      var i = 100 * (parseFloat(t[0]) - parseFloat(this.options.from)) / this.interval,
          s = 100 * (parseFloat(t[1]) - parseFloat(this.options.from)) / this.interval;
      return [i, s];
    },
    prcToPx: function prcToPx(t) {
      return this.domNode.width() * t / 100;
    },
    isDecimal: function isDecimal() {
      return -1 !== (this.options.value + this.options.from + this.options.to).indexOf(".");
    },
    positionToValue: function positionToValue(t) {
      var i = t / this.domNode.width() * this.interval;

      if (i = parseFloat(i, 10) + parseFloat(this.options.from, 10), this.isDecimal()) {
        var s = Math.round(Math.round(i / this.options.step) * this.options.step * 100) / 100;
        if (0 !== s) for (s = "" + s, -1 === s.indexOf(".") && (s += "."); s.length - s.indexOf(".") < 3;) {
          s += "0";
        } else s = "0.00";
        return s;
      }

      return Math.round(i / this.options.step) * this.options.step;
    },
    setInputValue: function setInputValue(t, i) {
      if (this.isSingle()) this.options.value = i.toString();else {
        var s = this.options.value.split(",");
        t.hasClass("low") ? this.options.value = i + "," + s[1] : this.options.value = s[0] + "," + i;
      }
      this.inputNode.val() !== this.options.value && (this.inputNode.val(this.options.value).trigger("change"), this.options.onstatechange.call(this, this.options.value));
    },
    getValue: function getValue() {
      return this.options.value;
    },
    getOptions: function getOptions() {
      return this.options;
    },
    getRange: function getRange() {
      return this.options.from + "," + this.options.to;
    },
    isReadonly: function isReadonly() {
      this.domNode.toggleClass("slider-readonly", this.options.disable);
    },
    disable: function disable() {
      this.options.disable = !0, this.isReadonly();
    },
    enable: function enable() {
      this.options.disable = !1, this.isReadonly();
    },
    toggleDisable: function toggleDisable() {
      this.options.disable = !this.options.disable, this.isReadonly();
    },
    updateRange: function updateRange(t, i) {
      var s = t.toString().split(",");
      this.interval = parseInt(s[1]) - parseInt(s[0]), i ? this.setValue(i) : this.setValue(this.getValue());
    }
  };
  var e = "jRange";

  $.fn[e] = function (i) {
    var s = arguments,
        n;
    return this.each(function () {
      var a = $(this),
          h = $.data(this, "plugin_" + e),
          l = "object" == _typeof(i) && i;
      h || (a.data("plugin_" + e, h = new o(this, l)), $(t).resize(function () {
        h.setValue(h.getValue());
      })), "string" == typeof i && (n = h[i].apply(h, Array.prototype.slice.call(s, 1)));
    }), n || this;
  };
}(jQuery, window, document);
$(window).on("load", function () {
  $('.rn-slider').jRange({
    from: 0,
    to: 100,
    step: 1,
    scale: [],
    format: '%s',
    width: 300,
    showLabels: true,
    isRange: true
  });
});

/***/ }),

/***/ "./resources/js/work/script.js":
/*!*************************************!*\
  !*** ./resources/js/work/script.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on("load", function () {
  "use strict"; //  ============= POST PROJECT POPUP FUNCTION =========

  $(".post_project").on("click", function () {
    $(".post-popup.pst-pj").addClass("active");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".post-project > a").on("click", function () {
    $(".post-popup.pst-pj").removeClass("active");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= POST JOB POPUP FUNCTION =========

  $(".post-jb").on("click", function () {
    $(".post-popup.job_post").addClass("active");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".post-project > a").on("click", function () {
    $(".post-popup.job_post").removeClass("active");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= SIGNIN CONTROL FUNCTION =========

  $('.sign-control li').on("click", function () {
    var tab_id = $(this).attr('data-tab');
    $('.sign-control li').removeClass('current');
    $('.sign_in_sec').removeClass('current');
    $(this).addClass('current animated fadeIn');
    $("#" + tab_id).addClass('current animated fadeIn');
    return false;
  }); //  ============= SIGNIN TAB FUNCTIONALITY =========

  $('.signup-tab ul li').on("click", function () {
    var tab_id = $(this).attr('data-tab');
    $('.signup-tab ul li').removeClass('current');
    $('.dff-tab').removeClass('current');
    $(this).addClass('current animated fadeIn');
    $("#" + tab_id).addClass('current animated fadeIn');
    return false;
  }); //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========

  $('.tab-feed ul li').on("click", function () {
    var tab_id = $(this).attr('data-tab');
    $('.tab-feed ul li').removeClass('active');
    $('.product-feed-tab').removeClass('current');
    $(this).addClass('active animated fadeIn');
    $("#" + tab_id).addClass('current animated fadeIn');
    return false;
  }); //  ============= COVER GAP FUNCTION =========

  var gap = $(".container").offset().left;
  $(".cover-sec > a, .chatbox-list").css({
    "right": gap
  }); //  ============= OVERVIEW EDIT FUNCTION =========

  $(".overview-open").on("click", function () {
    $("#overview-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#overview-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= EXPERIENCE EDIT FUNCTION =========

  $(".exp-bx-open").on("click", function () {
    $("#experience-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#experience-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= EDUCATION EDIT FUNCTION =========

  $(".ed-box-open").on("click", function () {
    $("#education-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#education-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= LOCATION EDIT FUNCTION =========

  $(".lct-box-open").on("click", function () {
    $("#location-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#location-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= SKILLS EDIT FUNCTION =========

  $(".skills-open").on("click", function () {
    $("#skills-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#skills-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= ESTABLISH EDIT FUNCTION =========

  $(".esp-bx-open").on("click", function () {
    $("#establish-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#establish-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= CREATE PORTFOLIO FUNCTION =========

  $(".gallery_pt > a").on("click", function () {
    $("#create-portfolio").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#create-portfolio").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============= EMPLOYEE EDIT FUNCTION =========

  $(".emp-open").on("click", function () {
    $("#total-employes").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#total-employes").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  =============== Ask a Question Popup ============

  $(".ask-question").on("click", function () {
    $("#question-box").addClass("open");
    $(".wrapper").addClass("overlay");
    return false;
  });
  $(".close-box").on("click", function () {
    $("#question-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    return false;
  }); //  ============== ChatBox ============== 

  $(".chat-mg").on("click", function () {
    $(this).next(".conversation-box").toggleClass("active");
    return false;
  });
  $(".close-chat").on("click", function () {
    $(".conversation-box").removeClass("active");
    return false;
  }); //  ================== Edit Options Function =================

  $(".ed-opts-open").on("click", function () {
    $(this).next(".ed-options").toggleClass("active");
    return false;
  }); // ============== Menu Script =============

  $(".menu-btn > a").on("click", function () {
    $("nav").toggleClass("active");
    return false;
  }); //  ============ Notifications Open =============

  $(".not-box-open").on("click", function () {
    $(this).next(".notification-box").toggleClass("active");
  }); // ============= User Account Setting Open ===========

  $(".user-info").on("click", function () {
    $(this).next(".user-account-settingss").toggleClass("active");
  }); //  ============= FORUM LINKS MOBILE MENU FUNCTION =========

  $(".forum-links-btn > a").on("click", function () {
    $(".forum-links").toggleClass("active");
    return false;
  });
  $("html").on("click", function () {
    $(".forum-links").removeClass("active");
  });
  $(".forum-links-btn > a, .forum-links").on("click", function () {
    e.stopPropagation();
  }); //  ============= PORTFOLIO SLIDER FUNCTION =========

  $('.profiles-slider').slick({
    slidesToShow: 3,
    slck: true,
    slidesToScroll: 1,
    prevArrow: '<span class="slick-previous"></span>',
    nextArrow: '<span class="slick-nexti"></span>',
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});

/***/ }),

/***/ "./resources/js/work/scrollbar.js":
/*!****************************************!*\
  !*** ./resources/js/work/scrollbar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(window).on("load", function () {
    $(".chat-hist, .messages-line").mCustomScrollbar();

    axis: "yx";
  });
})(jQuery);

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/work/flatpickr.min.js ./resources/js/work/jquery.mCustomScrollbar.js ./resources/js/work/jquery.range-min.js ./resources/js/work/script.js ./resources/js/work/scrollbar.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/adn/RS/resources/js/work/flatpickr.min.js */"./resources/js/work/flatpickr.min.js");
__webpack_require__(/*! /home/adn/RS/resources/js/work/jquery.mCustomScrollbar.js */"./resources/js/work/jquery.mCustomScrollbar.js");
__webpack_require__(/*! /home/adn/RS/resources/js/work/jquery.range-min.js */"./resources/js/work/jquery.range-min.js");
__webpack_require__(/*! /home/adn/RS/resources/js/work/script.js */"./resources/js/work/script.js");
module.exports = __webpack_require__(/*! /home/adn/RS/resources/js/work/scrollbar.js */"./resources/js/work/scrollbar.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3dvcmsvZmxhdHBpY2tyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvd29yay9qcXVlcnkubUN1c3RvbVNjcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvd29yay9qcXVlcnkucmFuZ2UtbWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy93b3JrL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvd29yay9zY3JvbGxiYXIuanMiXSwibmFtZXMiOlsiRmxhdHBpY2tyIiwiZSIsInQiLCJuIiwiYmluZCIsImhlIiwiYSIsImNvbmZpZyIsIm5vQ2FsZW5kYXIiLCJzZWxlY3RlZERhdGVzIiwibGVuZ3RoIiwibm93IiwicGUiLCJtaW5EYXRlSGFzVGltZSIsInR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkiLCJvZSIsInNldFRpbWVvdXQiLCJlbmFibGVUaW1lIiwicGFyc2VJbnQiLCJob3VyRWxlbWVudCIsImFtUE0iLCJtaW51dGVFbGVtZW50IiwiZW5hYmxlU2Vjb25kcyIsInNlY29uZEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdlIiwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqIiwibWluRGF0ZSIsIk1hdGgiLCJtYXgiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJtYXhEYXRlSGFzVGltZSIsIm1heERhdGUiLCJtaW4iLCJvIiwiciIsImdldFNlY29uZHMiLCJzZXRIb3VycyIsImlzTW9iaWxlIiwicGFkIiwidGltZV8yNGhyIiwibCIsImRlbHRhIiwidG9TdHJpbmciLCJrZXkiLCJjdXJyZW50WWVhckVsZW1lbnQiLCJibHVyIiwidGVzdCIsIk8iLCJjIiwiQXJyYXkiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVycyIsInB1c2giLCJlbGVtZW50IiwiZXZlbnQiLCJoYW5kbGVyIiwicyIsIndoaWNoIiwiZCIsIl9hbmltYXRpb25Mb29wIiwid3JhcCIsInByb3RvdHlwZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiWCIsImRlYm91bmNlZFJlc2l6ZSIsIm1lIiwiaiIsInRyaWdnZXJDaGFuZ2UiLCJ0ZSIsImRlYm91bmNlZENoYW5nZSIsIm1vZGUiLCJkYXlzQ29udGFpbmVyIiwiUCIsIndpbmRvdyIsImRvY3VtZW50IiwiYm9keSIsIkwiLCJfaW5wdXQiLCJpbmxpbmUiLCJvbnRvdWNoc3RhcnQiLCJJIiwiY2xpY2tPcGVucyIsIm9wZW4iLCJtb250aE5hdiIsInByZXZlbnREZWZhdWx0IiwiY2UiLCJzZSIsIlUiLCJhbmltYXRlIiwiZiIsIm0iLCJzZWxlY3QiLCJ0aW1lQ29udGFpbmVyIiwicCIsInUiLCJzcGxpY2UiLCJjaGlsZE5vZGVzIiwiYW5pbWF0aW9uTmFtZSIsImxhc3RDaGlsZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiZmlyc3RDaGlsZCIsImRheXMiLCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoIiwibmV4dFNpYmxpbmciLCJjbGFzc05hbWUiLCJwcmV2aW91c1NpYmxpbmciLCJvbGRDdXJNb250aCIsImciLCJwYXJzZURhdGUiLCJjdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwiY3VycmVudE1vbnRoIiwiZ2V0TW9udGgiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsIndhcm4iLCJyZWRyYXciLCJpbmRleE9mIiwiaCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm5lIiwiZGlzcGF0Y2hFdmVudCIsIkQiLCJkZSIsInBhdHRlcm4iLCJhcHBlbmRDaGlsZCIsInYiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2FsZW5kYXJDb250YWluZXIiLCJ0YWJJbmRleCIsImsiLCJpbm5lckNvbnRhaW5lciIsIndlZWtOdW1iZXJzIiwiTiIsInJDb250YWluZXIiLCJFIiwiTSIsIngiLCJmZSIsImFwcGVuZFRvIiwibm9kZVR5cGUiLCJhZGQiLCJpbnNlcnRCZWZvcmUiLCJhbHRJbnB1dCIsIkMiLCJBIiwiZ2V0RGF0ZSIsImRhdGVPYmoiLCIkaSIsInNldEF0dHJpYnV0ZSIsImZvcm1hdERhdGUiLCJhcmlhRGF0ZUZvcm1hdCIsInRvZGF5RGF0ZUVsZW0iLCJhZSIsInNlbGVjdGVkRGF0ZUVsZW0iLCJtaW5SYW5nZURhdGUiLCJtYXhSYW5nZURhdGUiLCJpZSIsImluc2VydEFkamFjZW50SFRNTCIsImdldFdlZWsiLCJ3IiwiZm9jdXMiLCJjaGFuZ2VNb250aCIsImIiLCJEYXRlIiwiZ2V0RGF5IiwibDEwbiIsImZpcnN0RGF5T2ZXZWVrIiwicHJldk1vbnRoRGF5cyIsInV0aWxzIiwiZ2V0RGF5c2luTW9udGgiLCJfaGlkZVByZXZNb250aEFycm93IiwiX2hpZGVOZXh0TW9udGhBcnJvdyIsInJlIiwieSIsInByZXZNb250aE5hdiIsImlubmVySFRNTCIsInByZXZBcnJvdyIsImN1cnJlbnRNb250aEVsZW1lbnQiLCJ0aXRsZSIsInNjcm9sbFRpdGxlIiwiZGlzYWJsZWQiLCJuZXh0TW9udGhOYXYiLCJuZXh0QXJyb3ciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9faGlkZVByZXZNb250aEFycm93Iiwic2V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiX19oaWRlTmV4dE1vbnRoQXJyb3ciLCJkZWZhdWx0SG91ciIsImRlZmF1bHRNaW51dGUiLCJzdGVwIiwiaG91ckluY3JlbWVudCIsIm1pbnV0ZUluY3JlbWVudCIsInRvZ2dsZVRpdGxlIiwid2Vla2RheUNvbnRhaW5lciIsIndlZWtkYXlzIiwic2hvcnRoYW5kIiwic2xpY2UiLCJjb25jYXQiLCJqb2luIiwid2Vla1dyYXBwZXIiLCJ3ZWVrQWJicmV2aWF0aW9uIiwiVCIsImNsb25lTm9kZSIsIm1vbnRoVG9TdHIiLCJhY3RpdmVFbGVtZW50IiwiXyIsImlucHV0IiwibW9iaWxlSW5wdXQiLCJzaG93VGltZUlucHV0IiwiUyIsImlzT3BlbiIsIlkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3R5cGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJGIiwicGF0aCIsInJlbGF0ZWRUYXJnZXQiLCJjbG9zZSIsImNsZWFyIiwiZW5hYmxlIiwiZGlzYWJsZSIsIkZ1bmN0aW9uIiwiZ2V0VGltZSIsIl90eXBlb2YiLCJmcm9tIiwidG8iLCJhbGxvd0lucHV0Iiwic2V0RGF0ZSIsImFsdEZvcm1hdCIsImRhdGVGb3JtYXQiLCJjdHJsS2V5IiwiZHVyYXRpb24iLCJEQVkiLCJKIiwiSCIsImNsaWNrIiwiUiIsImZpbHRlciIsIksiLCJXIiwiY3JlYXRlIiwiZmxhdHBpY2tyIiwiZGVmYXVsdENvbmZpZyIsIl9leHRlbmRzIiwiaW5zdGFuY2VDb25maWciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwiX21pbkRhdGUiLCJfbWF4RGF0ZSIsInVlIiwibWFwIiwicGx1Z2lucyIsIkIiLCJsb2NhbGUiLCJsMTBucyIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwicG9zaXRpb24iLCJfcG9zaXRpb25FbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJ0b3AiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwibGVmdCIsInJpZ2h0Iiwic3RvcFByb3BhZ2F0aW9uIiwic29ydCIsImNsb3NlT25TZWxlY3QiLCIkIiwieiIsImlzTmFOIiwic3Vic3RyaW5nIiwic3BsaXQiLCJyYW5nZVNlcGFyYXRvciIsIkciLCJWIiwiZGVmYXVsdERhdGUiLCJfc2VsZWN0ZWREYXRlT2JqIiwiX3Nob3dUaW1lSW5wdXQiLCJaIiwiZGF5c0luTW9udGgiLCJzaG9ydGhhbmRDdXJyZW50TW9udGgiLCJtb250aHMiLCJxIiwiZm9ybWF0cyIsInJldkZvcm1hdCIsIlEiLCJxdWVyeVNlbGVjdG9yIiwibm9kZU5hbWUiLCJhbHRJbnB1dENsYXNzIiwicGxhY2Vob2xkZXIiLCJwb3NpdGlvbkVsZW1lbnQiLCJtb2JpbGVGb3JtYXRTdHIiLCJkZWZhdWx0VmFsdWUiLCJlZSIsIl9zdXBwb3J0c0V2ZW50cyIsIkV2ZW50IiwiYnViYmxlcyIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwibGUiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwiY2hhbmdlWWVhciIsImNyZWF0ZUVsZW1lbnQiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJhcHBseSIsIk51bWJlciIsImFicyIsImFmdGVyRGF5QW5pbSIsIl9jcmVhdGVFbGVtZW50IiwiZGVzdHJveSIsImlzRW5hYmxlZCIsImp1bXBUb0RhdGUiLCJ0b2dnbGUiLCJkaXNhYmxlTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwid2lkdGgiLCJfZmxhdHBpY2tyIiwiSFRNTEVsZW1lbnQiLCJhc3NpZ24iLCJoYXNPd25Qcm9wZXJ0eSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJ0b0lTT1N0cmluZyIsIm9yZGluYWwiLCJsb25naGFuZCIsIlN0cmluZyIsInNldE1vbnRoIiwicGFyc2VGbG9hdCIsInNldFNlY29uZHMiLCJzZXRGdWxsWWVhciIsInNldE1pbnV0ZXMiLCJ0b2tlblJlZ2V4IiwidG9GaXhlZCIsInRyaW0iLCJSZWdFeHAiLCJleGVjIiwiaW5mbyIsIkhUTUxDb2xsZWN0aW9uIiwiTm9kZUxpc3QiLCJjZWlsIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwib25EYXlDcmVhdGUiLCJvbk1vbnRoQ2hhbmdlIiwib25PcGVuIiwib25QYXJzZUNvbmZpZyIsIm9uUmVhZHkiLCJvblZhbHVlVXBkYXRlIiwib25ZZWFyQ2hhbmdlIiwib25LZXlEb3duIiwiZW4iLCJsb2NhbGl6ZSIsInNldERlZmF1bHRzIiwialF1ZXJ5IiwiZm4iLCJmcF9pbmNyIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY3RvcnkiLCJkZWZpbmUiLCJpbml0IiwiX3JqcyIsIl9uanMiLCJfZGxwIiwibG9jYXRpb24iLCJwcm90b2NvbCIsIl91cmwiLCJyZXF1aXJlIiwic3BlY2lhbCIsIm1vdXNld2hlZWwiLCJhcHBlbmQiLCJkZWNvZGVVUkkiLCJwbHVnaW5OUyIsInBsdWdpblBmeCIsImRlZmF1bHRTZWxlY3RvciIsImRlZmF1bHRzIiwic2V0VG9wIiwic2V0TGVmdCIsImF4aXMiLCJzY3JvbGxiYXJQb3NpdGlvbiIsInNjcm9sbEluZXJ0aWEiLCJhdXRvRHJhZ2dlckxlbmd0aCIsImFsd2F5c1Nob3dTY3JvbGxiYXIiLCJzbmFwT2Zmc2V0IiwibW91c2VXaGVlbCIsInNjcm9sbEFtb3VudCIsImRlbHRhRmFjdG9yIiwiZGlzYWJsZU92ZXIiLCJzY3JvbGxCdXR0b25zIiwic2Nyb2xsVHlwZSIsImtleWJvYXJkIiwiY29udGVudFRvdWNoU2Nyb2xsIiwiZG9jdW1lbnRUb3VjaFNjcm9sbCIsImFkdmFuY2VkIiwiYXV0b1Njcm9sbE9uRm9jdXMiLCJ1cGRhdGVPbkNvbnRlbnRSZXNpemUiLCJ1cGRhdGVPbkltYWdlTG9hZCIsImF1dG9VcGRhdGVUaW1lb3V0IiwidGhlbWUiLCJjYWxsYmFja3MiLCJvblRvdGFsU2Nyb2xsT2Zmc2V0Iiwib25Ub3RhbFNjcm9sbEJhY2tPZmZzZXQiLCJhbHdheXNUcmlnZ2VyT2Zmc2V0cyIsInRvdGFsSW5zdGFuY2VzIiwibGl2ZVRpbWVycyIsIm9sZElFIiwiYXR0YWNoRXZlbnQiLCJ0b3VjaEFjdGl2ZSIsInRvdWNoYWJsZSIsImNsYXNzZXMiLCJtZXRob2RzIiwib3B0aW9ucyIsImV4dGVuZCIsInNlbGVjdG9yIiwiX3NlbGVjdG9yIiwibGl2ZSIsImxpdmVTZWxlY3RvciIsIiRsaXZlU2VsZWN0b3IiLCJyZW1vdmVMaXZlVGltZXJzIiwibUN1c3RvbVNjcm9sbGJhciIsInNldFdpZHRoIiwic2V0X3dpZHRoIiwic2V0SGVpZ2h0Iiwic2V0X2hlaWdodCIsImhvcml6b250YWxTY3JvbGwiLCJfZmluZEF4aXMiLCJub3JtYWxpemVEZWx0YSIsImludmVydCIsIm1vdXNlV2hlZWxQaXhlbHMiLCJub3JtYWxpemVNb3VzZVdoZWVsRGVsdGEiLCJfZmluZFNjcm9sbEJ1dHRvbnNUeXBlIiwiX3RoZW1lIiwiZWFjaCIsIiR0aGlzIiwiZGF0YSIsImlkeCIsIm9wdCIsInNjcm9sbFJhdGlvIiwib3ZlcmZsb3dlZCIsImNvbnRlbnRSZXNldCIsImJpbmRFdmVudHMiLCJ0d2VlblJ1bm5pbmciLCJzZXF1ZW50aWFsIiwibGFuZ0RpciIsImNzcyIsImNiT2Zmc2V0cyIsInRyaWdnZXIiLCJwb2xsIiwic2l6ZSIsImltZyIsImNoYW5nZSIsImh0bWxEYXRhQXhpcyIsImh0bWxEYXRhU2JQb3MiLCJodG1sRGF0YVRoZW1lIiwiX3BsdWdpbk1hcmt1cCIsIm9uQ3JlYXRlIiwiYWRkQ2xhc3MiLCJ1cGRhdGUiLCJlbCIsImNiIiwibUNTQl9jb250YWluZXIiLCJtQ3VzdG9tU2Nyb2xsQm94IiwibUNTQl9kcmFnZ2VyIiwiX3N0b3AiLCJvbkJlZm9yZVVwZGF0ZSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoZWlnaHQiLCJfZXhwYW5kQ29udGVudEhvcml6b250YWxseSIsImF1dG9FeHBhbmRIb3Jpem9udGFsU2Nyb2xsIiwiX2NvbnRlbnRXaWR0aCIsIl9vdmVyZmxvd2VkIiwiX3Njcm9sbGJhclZpc2liaWxpdHkiLCJfc2V0RHJhZ2dlckxlbmd0aCIsIl9zY3JvbGxSYXRpbyIsIl9iaW5kRXZlbnRzIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIl9yZXNldENvbnRlbnRQb3NpdGlvbiIsIl91bmJpbmRFdmVudHMiLCJfc2Nyb2xsVG8iLCJkaXIiLCJkdXIiLCJvdmVyd3JpdGUiLCJwYXJlbnQiLCJvbkltYWdlTG9hZCIsIm9uU2VsZWN0b3JDaGFuZ2UiLCJvblVwZGF0ZSIsIl9hdXRvVXBkYXRlIiwic2Nyb2xsVG8iLCJ2YWwiLCJtZXRob2REZWZhdWx0cyIsInNjcm9sbEVhc2luZyIsIm1vdmVEcmFnZ2VyIiwidGltZW91dCIsIm9uU3RhcnQiLCJvbkNvbXBsZXRlIiwibWV0aG9kT3B0aW9ucyIsIl9hcnIiLCJfdG8iLCJfaXNUYWJIaWRkZW4iLCJzdG9wIiwic2Nyb2xsYmFyIiwicmVtb3ZlRGF0YSIsIl9kZWxldGUiLCJmaW5kIiwicmVwbGFjZVdpdGgiLCJjb250ZW50cyIsIm9iaiIsImZpeGVkU2l6ZVNjcm9sbGJhclRoZW1lcyIsIm5vbkV4cGFuZGVkU2Nyb2xsYmFyVGhlbWVzIiwiZGlzYWJsZWRTY3JvbGxCdXR0b25zVGhlbWVzIiwiZW5hYmxlZEF1dG9IaWRlU2Nyb2xsYmFyVGhlbWVzIiwic2Nyb2xsYmFyUG9zaXRpb25PdXRzaWRlVGhlbWVzIiwiaW5BcnJheSIsImF1dG9FeHBhbmRTY3JvbGxiYXIiLCJhdXRvSGlkZVNjcm9sbGJhciIsImV4cGFuZENsYXNzIiwid3JhcHBlckNsYXNzIiwic2Nyb2xsYmFycyIsImNvbnRlbnRXcmFwcGVyIiwiYXV0b0hpZGVDbGFzcyIsInNjcm9sbGJhckRpckNsYXNzIiwid3JhcElubmVyIiwiYWZ0ZXIiLCJfc2Nyb2xsQnV0dG9ucyIsInNjcm9sbFdpZHRoIiwiY2hpbGRyZW4iLCJvdXRlcldpZHRoIiwiZmxvb3IiLCJ1bndyYXAiLCJtQ1NCX3Njcm9sbFRvb2xzIiwidGFiaW5kZXgiLCJfaXNOdW1lcmljIiwiYnRuSFRNTCIsImJ0biIsInByZXBlbmQiLCJuZXh0IiwicmF0aW8iLCJvdXRlckhlaWdodCIsInJvdW5kIiwiX29uRHJhZ0NsYXNzZXMiLCJhY3Rpb24iLCJ4cG5kIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiX2RyYWdnYWJsZSIsImNvbnRlbnRIZWlnaHQiLCJjb250ZW50V2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJjeCIsImR4IiwiX2NvbnRlbnREcmFnZ2FibGUiLCJfc2VsZWN0YWJsZSIsIl9td3QiLCJtb3VzZXdoZWVsVGltZW91dCIsIl9tb3VzZXdoZWVsIiwiX2RyYWdnZXJSYWlsIiwiX3dyYXBwZXJTY3JvbGwiLCJfZm9jdXMiLCJfYnV0dG9ucyIsIl9rZXlib2FyZCIsIm5hbWVzcGFjZSIsInNiIiwic2VsIiwicmVsZWFzZURyYWdnYWJsZVNlbGVjdG9ycyIsImV4dHJhRHJhZ2dhYmxlU2VsZWN0b3JzIiwiX2NhbkFjY2Vzc0lGcmFtZSIsInVuYmluZCIsIl9mb2N1c1RpbWVvdXQiLCJvbkNvbXBsZXRlVGltZW91dCIsImNvbnRlbnQiLCJfY29vcmRpbmF0ZXMiLCJvd25lckRvY3VtZW50IiwiZnJhbWVFbGVtZW50Iiwib2Zmc2V0IiwiaW8iLCJ2aWV3Iiwib3JpZ2luYWxFdmVudCIsInBhZ2VZIiwicGFnZVgiLCJ0b3VjaCIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblkiLCJzY3JlZW5YIiwiZHJhZ2dlcklkIiwiZHJhZ2dhYmxlIiwiZHJhZ1kiLCJkcmFnWCIsInJkcyIsImVkcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIl9tb3VzZUJ0bkxlZnQiLCJvbnNlbGVjdHN0YXJ0IiwiX2lmcmFtZSIsIl9kcmFnIiwiaWRsZVRpbWVyIiwiYXR0ciIsImRyYWciLCJ0b3VjaFN0YXJ0WSIsInRvdWNoU3RhcnRYIiwidG91Y2hNb3ZlWSIsInRvdWNoTW92ZVgiLCJzdGFydFRpbWUiLCJydW5uaW5nVGltZSIsImVuZFRpbWUiLCJkaXN0YW5jZSIsInNwZWVkIiwiYW1vdW50IiwiZHVyQSIsImR1ckIiLCJ0b3VjaEludGVudCIsInRvdWNoRHJhZyIsImRvY0RyYWciLCJpZnJhbWUiLCJldmVudHMiLCJ0b3VjaEFjdGlvbiIsInVuZGVmaW5lZCIsIl9vblRvdWNoc3RhcnQiLCJfb25Ub3VjaG1vdmUiLCJfb25Ub3VjaHN0YXJ0MiIsIl9vblRvdWNoZW5kIiwiY29udGVudERvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIl9wb2ludGVyVG91Y2giLCJfZ2V0VGltZSIsImVhc2luZyIsImxpbWl0IiwicHJldmVudCIsImxpbWl0WCIsInByZXZlbnRYIiwic2xvdyIsImRpZmYiLCJhYnNEaXN0YW5jZSIsIl9tIiwibWQiLCJkcyIsInNlcSIsIndyYXBwZXIiLCJfc2VsIiwiX3NlcSIsImdldFNlbGVjdGlvbiIsInNlbGVjdGlvbiIsImNyZWF0ZVJhbmdlIiwidGV4dCIsIl9zZXF1ZW50aWFsU2Nyb2xsIiwiX29uTW91c2V3aGVlbCIsIl9kaXNhYmxlTW91c2V3aGVlbCIsInB4IiwiY29udGVudFBvcyIsImRyYWdnZXJQb3MiLCJkbHQiLCJkZWx0YVgiLCJ3ZWJraXREaXJlY3Rpb25JbnZlcnRlZEZyb21EZXZpY2UiLCJfY2FuQWNjZXNzSUZyYW1lQ2FjaGUiLCJyZXN1bHQiLCJjYWNoZUtleSIsImh0bWwiLCJkb2MiLCJlcnIiLCJldnQiLCJ0YWciLCJ0b0xvd2VyQ2FzZSIsInRhZ3MiLCJmb2N1c1RhZ3MiLCJpcyIsIm1DU0JfZHJhZ2dlckNvbnRhaW5lciIsImNsaWNrYWJsZSIsImNsaWNrRGlyIiwibmVzdGVkIiwiX2ZvY3VzVGltZXIiLCJfY2hpbGRQb3MiLCJpc1Zpc2libGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiYnRuQ2xhc3MiLCJlZGl0YWJsZXMiLCJfb25LZXlib2FyZCIsImNvZGUiLCJrZXlDb2RlIiwia2V5Ym9hcmREaXIiLCJvbmNlIiwic3RlcGxlc3NTcGVlZCIsInN0ZXBwZWRTcGVlZCIsIl9vbiIsIl9vZmYiLCJzbmFwQW1vdW50IiwidmFscyIsImNvbnRlbnRMZW5ndGgiLCJjc3NQcm9wIiwianF1ZXJ5IiwicmVtIiwiYXV0b1VwZGF0ZSIsInVwZCIsInBhcmVudHMiLCJ1cGRhdGVPblNlbGVjdG9yQ2hhbmdlIiwic2l6ZXNTdW0iLCJkb1VwZCIsImltZ0xvYWRlciIsIkltYWdlIiwiY3JlYXRlRGVsZWdhdGUiLCJjb250ZXh0T2JqZWN0IiwiZGVsZWdhdGVNZXRob2QiLCJpbWdPbkxvYWQiLCJvbmxvYWQiLCJzcmMiLCJ0b3RhbCIsIl9zbmFwQW1vdW50IiwiX3N0b3BUd2VlbiIsInRvdGFsU2Nyb2xsT2Zmc2V0cyIsInRvdGFsU2Nyb2xsQmFja09mZnNldHMiLCJfY2IiLCJvbk92ZXJmbG93WU5vbmUiLCJvbk92ZXJmbG93WE5vbmUiLCJtY3MiLCJvbk92ZXJmbG93WSIsIm9uT3ZlcmZsb3dYIiwicHJvcGVydHkiLCJ0c28iLCJ0c2JvIiwidG90YWxTY3JvbGxPZmZzZXQiLCJ0b3RhbFNjcm9sbEJhY2tPZmZzZXQiLCJfbWNzIiwib25Jbml0IiwiX3R3ZWVuVG8iLCJvblNjcm9sbFN0YXJ0IiwiX2NiT2Zmc2V0cyIsIndoaWxlU2Nyb2xsaW5nIiwib25TY3JvbGwiLCJvblRvdGFsU2Nyb2xsIiwib25Ub3RhbFNjcm9sbEJhY2siLCJjcCIsImRwIiwiY2wiLCJwbCIsImRyYWdnZXJUb3AiLCJkcmFnZ2VyTGVmdCIsInRvcFBjdCIsImxlZnRQY3QiLCJkaXJlY3Rpb24iLCJwcm9wIiwiX21Ud2VlbiIsIl9kZWxheSIsInByb2dyZXNzIiwiZWxTdHlsZSIsIl9yZXF1ZXN0IiwidG9iaiIsIl9jYW5jZWxUd2VlbiIsIl9zdGFydFR3ZWVuIiwiX3N0ZXAiLCJfdHdlZW4iLCJ0aW1lIiwiaWQiLCJjdXJyVmFsIiwiX2Vhc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNxcnQiLCJwb3ciLCJ0cyIsInRjIiwicGVyZm9ybWFuY2UiLCJ3ZWJraXROb3ciLCJwcm9wcyIsInBvaW50ZXJUeXBlIiwiaXNGaW5pdGUiLCJfZ2V0SGlkZGVuUHJvcCIsInBmeCIsIm1ldGhvZCIsImV4cHIiLCJtY3NJblZpZXciLCIkZWwiLCJjUG9zIiwibWNzSW5TaWdodCIsImVsRCIsIndyYXBwZXJWaWV3IiwicG9zIiwid3JhcHBlclZpZXdQY3QiLCJwY3RWYWxzIiwibWNzT3ZlcmZsb3ciLCJvbnN0YXRlY2hhbmdlIiwib25kcmFnZW5kIiwib25iYXJjbGlja2VkIiwiaXNSYW5nZSIsInNob3dMYWJlbHMiLCJzaG93U2NhbGUiLCJmb3JtYXQiLCJzbmFwIiwidGVtcGxhdGUiLCJpbnB1dE5vZGUiLCJkb21Ob2RlIiwib24iLCJwb2ludGVycyIsImxvd1BvaW50ZXIiLCJmaXJzdCIsImhpZ2hQb2ludGVyIiwibGFzdCIsImxhYmVscyIsImxvd0xhYmVsIiwiaGlnaExhYmVsIiwic2NhbGUiLCJiYXIiLCJjbGlja2FibGVCYXIiLCJpbnRlcnZhbCIsInJlbmRlciIsImhpZGUiLCJpc1NpbmdsZSIsImF0dGFjaEV2ZW50cyIsInJlbmRlclNjYWxlIiwic2V0VmFsdWUiLCJsb2ciLCJwcm94eSIsImJhckNsaWNrZWQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsImNsaWVudFgiLCJvZmYiLCJzZXRQb3NpdGlvbiIsInByY1RvUHgiLCJjb3JyZWN0UG9zaXRpb25Gb3JTbmFwIiwic2hvd1BvaW50ZXJWYWx1ZSIsImlzUmVhZG9ubHkiLCJwb3NpdGlvblRvVmFsdWUiLCJ2YWx1ZXNUb1ByYyIsIm1hcmdpbkxlZnQiLCJnZXRCYXJXaWR0aCIsImlzRnVuY3Rpb24iLCJyZXBsYWNlIiwic2V0SW5wdXRWYWx1ZSIsImlzRGVjaW1hbCIsImdldFZhbHVlIiwiZ2V0T3B0aW9ucyIsImdldFJhbmdlIiwidG9nZ2xlRGlzYWJsZSIsInVwZGF0ZVJhbmdlIiwicmVzaXplIiwialJhbmdlIiwidGFiX2lkIiwiZ2FwIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGNrIiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImRvdHMiLCJhdXRvcGxheVNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImluZmluaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLFNBQVNBLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXFCQyxDQUFyQixFQUF1QjtBQUFDLFdBQVNDLENBQVQsQ0FBV0YsQ0FBWCxFQUFhO0FBQUMsV0FBT0EsQ0FBQyxDQUFDRyxJQUFGLENBQU9DLEVBQVAsQ0FBUDtBQUFrQjs7QUFBQSxXQUFTQyxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDSSxNQUFFLENBQUNFLE1BQUgsQ0FBVUMsVUFBVixJQUFzQixDQUFDSCxFQUFFLENBQUNJLGFBQUgsQ0FBaUJDLE1BQXhDLEtBQWlETCxFQUFFLENB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O0FBRlI7QUFGWixLQWpCWSxDQXdCWjtBQUNBO0FBQ0E7QUExQlk7QUFUWSxHQUE1QjtBQTZDSCxDQWxTRCxFOzs7Ozs7Ozs7OztBQ0FBLENBQUMsVUFBU3JrQixDQUFULEVBQVc7QUFDUkEsR0FBQyxDQUFDak4sTUFBRCxDQUFELENBQVVrdUIsRUFBVixDQUFhLE1BQWIsRUFBb0IsWUFBVTtBQUMxQmpoQixLQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRKLGdCQUFoQzs7QUFDQ3pDLFFBQUksRUFBQztBQUNULEdBSEQ7QUFJSCxDQUxELEVBS0d6QixNQUxILEUiLCJmaWxlIjoiL2pzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwiLyohIGZsYXRwaWNrciB2Mi42LjMsIEBsaWNlbnNlIE1JVCAqL1xuZnVuY3Rpb24gRmxhdHBpY2tyKGUsdCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZS5iaW5kKGhlKX1mdW5jdGlvbiBhKGUpe2hlLmNvbmZpZy5ub0NhbGVuZGFyJiYhaGUuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJihoZS5zZWxlY3RlZERhdGVzPVtoZS5ub3ddKSxwZShlKSxoZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmKCFoZS5taW5EYXRlSGFzVGltZXx8XCJpbnB1dFwiIT09ZS50eXBlfHxlLnRhcmdldC52YWx1ZS5sZW5ndGg+PTI/KGkoKSxvZSgpKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aSgpLG9lKCl9LDFlMykpfWZ1bmN0aW9uIGkoKXtpZihoZS5jb25maWcuZW5hYmxlVGltZSl7dmFyIGU9KHBhcnNlSW50KGhlLmhvdXJFbGVtZW50LnZhbHVlLDEwKXx8MCklKGhlLmFtUE0/MTI6MjQpLHQ9KHBhcnNlSW50KGhlLm1pbnV0ZUVsZW1lbnQudmFsdWUsMTApfHwwKSU2MCxuPWhlLmNvbmZpZy5lbmFibGVTZWNvbmRzPyhwYXJzZUludChoZS5zZWNvbmRFbGVtZW50LnZhbHVlLDEwKXx8MCklNjA6MDt2b2lkIDAhPT1oZS5hbVBNJiYoZT1lJTEyKzEyKihcIlBNXCI9PT1oZS5hbVBNLnRleHRDb250ZW50KSksaGUubWluRGF0ZUhhc1RpbWUmJjA9PT1nZShoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmosaGUuY29uZmlnLm1pbkRhdGUpJiYoZT1NYXRoLm1heChlLGhlLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpKT09PWhlLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkmJih0PU1hdGgubWF4KHQsaGUuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpKSksaGUubWF4RGF0ZUhhc1RpbWUmJjA9PT1nZShoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmosaGUuY29uZmlnLm1heERhdGUpJiYoZT1NYXRoLm1pbihlLGhlLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkpKT09PWhlLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkmJih0PU1hdGgubWluKHQsaGUuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpKSksbyhlLHQsbil9fWZ1bmN0aW9uIHIoZSl7dmFyIHQ9ZXx8aGUubGF0ZXN0U2VsZWN0ZWREYXRlT2JqO3QmJm8odC5nZXRIb3VycygpLHQuZ2V0TWludXRlcygpLHQuZ2V0U2Vjb25kcygpKX1mdW5jdGlvbiBvKGUsdCxuKXtoZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmaGUubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGUlMjQsdCxufHwwLDApLGhlLmNvbmZpZy5lbmFibGVUaW1lJiYhaGUuaXNNb2JpbGUmJihoZS5ob3VyRWxlbWVudC52YWx1ZT1oZS5wYWQoaGUuY29uZmlnLnRpbWVfMjRocj9lOigxMitlKSUxMisxMiooZSUxMj09MCkpLGhlLm1pbnV0ZUVsZW1lbnQudmFsdWU9aGUucGFkKHQpLGhlLmNvbmZpZy50aW1lXzI0aHJ8fChoZS5hbVBNLnRleHRDb250ZW50PWU+PTEyP1wiUE1cIjpcIkFNXCIpLCEwPT09aGUuY29uZmlnLmVuYWJsZVNlY29uZHMmJihoZS5zZWNvbmRFbGVtZW50LnZhbHVlPWhlLnBhZChuKSkpfWZ1bmN0aW9uIGwoZSl7dmFyIHQ9ZS50YXJnZXQudmFsdWU7ZS5kZWx0YSYmKHQ9KHBhcnNlSW50KHQpK2UuZGVsdGEpLnRvU3RyaW5nKCkpLDQhPT10Lmxlbmd0aCYmXCJFbnRlclwiIT09ZS5rZXl8fChoZS5jdXJyZW50WWVhckVsZW1lbnQuYmx1cigpLC9bXlxcZF0vLnRlc3QodCl8fE8odCkpfWZ1bmN0aW9uIGMoZSx0LG4pe3JldHVybiB0IGluc3RhbmNlb2YgQXJyYXk/dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBjKGUsdCxuKX0pOmUgaW5zdGFuY2VvZiBBcnJheT9lLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGMoZSx0LG4pfSk6KGUuYWRkRXZlbnRMaXN0ZW5lcih0LG4pLHZvaWQgaGUuX2hhbmRsZXJzLnB1c2goe2VsZW1lbnQ6ZSxldmVudDp0LGhhbmRsZXI6bn0pKX1mdW5jdGlvbiBzKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gMT09PXQud2hpY2gmJmUodCl9fWZ1bmN0aW9uIGQoKXtpZihoZS5faGFuZGxlcnM9W10saGUuX2FuaW1hdGlvbkxvb3A9W10saGUuY29uZmlnLndyYXAmJltcIm9wZW5cIixcImNsb3NlXCIsXCJ0b2dnbGVcIixcImNsZWFyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChoZS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIitlK1wiXVwiKSxmdW5jdGlvbih0KXtyZXR1cm4gYyh0LFwibW91c2Vkb3duXCIscyhoZVtlXSkpfSl9KSxoZS5pc01vYmlsZSlyZXR1cm4gWCgpO2lmKGhlLmRlYm91bmNlZFJlc2l6ZT1tZShqLDUwKSxoZS50cmlnZ2VyQ2hhbmdlPWZ1bmN0aW9uKCl7dGUoXCJDaGFuZ2VcIil9LGhlLmRlYm91bmNlZENoYW5nZT1tZShoZS50cmlnZ2VyQ2hhbmdlLDMwMCksXCJyYW5nZVwiPT09aGUuY29uZmlnLm1vZGUmJmhlLmRheXNDb250YWluZXImJmMoaGUuZGF5c0NvbnRhaW5lcixcIm1vdXNlb3ZlclwiLGZ1bmN0aW9uKGUpe3JldHVybiBQKGUudGFyZ2V0KX0pLGMod2luZG93LmRvY3VtZW50LmJvZHksXCJrZXlkb3duXCIsTCksaGUuY29uZmlnLnN0YXRpY3x8YyhoZS5faW5wdXQsXCJrZXlkb3duXCIsTCksaGUuY29uZmlnLmlubGluZXx8aGUuY29uZmlnLnN0YXRpY3x8Yyh3aW5kb3csXCJyZXNpemVcIixoZS5kZWJvdW5jZWRSZXNpemUpLHZvaWQgMCE9PXdpbmRvdy5vbnRvdWNoc3RhcnQmJmMod2luZG93LmRvY3VtZW50LFwidG91Y2hzdGFydFwiLEkpLGMod2luZG93LmRvY3VtZW50LFwibW91c2Vkb3duXCIscyhJKSksYyhoZS5faW5wdXQsXCJibHVyXCIsSSksITA9PT1oZS5jb25maWcuY2xpY2tPcGVucyYmYyhoZS5faW5wdXQsXCJmb2N1c1wiLGhlLm9wZW4pLGhlLmNvbmZpZy5ub0NhbGVuZGFyfHwoaGUubW9udGhOYXYuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGUucHJldmVudERlZmF1bHQoKX0pLGMoaGUubW9udGhOYXYsXCJ3aGVlbFwiLG1lKGNlLDEwKSksYyhoZS5tb250aE5hdixcIm1vdXNlZG93blwiLHMoc2UpKSxjKGhlLm1vbnRoTmF2LFtcImtleXVwXCIsXCJpbmNyZW1lbnRcIl0sbCksYyhoZS5kYXlzQ29udGFpbmVyLFwibW91c2Vkb3duXCIscyhVKSksaGUuY29uZmlnLmFuaW1hdGUmJihjKGhlLmRheXNDb250YWluZXIsW1wid2Via2l0QW5pbWF0aW9uRW5kXCIsXCJhbmltYXRpb25lbmRcIl0sZiksYyhoZS5tb250aE5hdixbXCJ3ZWJraXRBbmltYXRpb25FbmRcIixcImFuaW1hdGlvbmVuZFwiXSxtKSkpLGhlLmNvbmZpZy5lbmFibGVUaW1lKXt2YXIgZT1mdW5jdGlvbihlKXtyZXR1cm4gZS50YXJnZXQuc2VsZWN0KCl9O2MoaGUudGltZUNvbnRhaW5lcixbXCJ3aGVlbFwiLFwiaW5wdXRcIixcImluY3JlbWVudFwiXSxhKSxjKGhlLnRpbWVDb250YWluZXIsXCJtb3VzZWRvd25cIixzKHApKSxjKGhlLnRpbWVDb250YWluZXIsW1wid2hlZWxcIixcImluY3JlbWVudFwiXSxoZS5kZWJvdW5jZWRDaGFuZ2UpLGMoaGUudGltZUNvbnRhaW5lcixcImlucHV0XCIsaGUudHJpZ2dlckNoYW5nZSksYyhbaGUuaG91ckVsZW1lbnQsaGUubWludXRlRWxlbWVudF0sXCJmb2N1c1wiLGUpLHZvaWQgMCE9PWhlLnNlY29uZEVsZW1lbnQmJmMoaGUuc2Vjb25kRWxlbWVudCxcImZvY3VzXCIsZnVuY3Rpb24oKXtyZXR1cm4gaGUuc2Vjb25kRWxlbWVudC5zZWxlY3QoKX0pLHZvaWQgMCE9PWhlLmFtUE0mJmMoaGUuYW1QTSxcIm1vdXNlZG93blwiLHMoZnVuY3Rpb24oZSl7YShlKSxoZS50cmlnZ2VyQ2hhbmdlKGUpfSkpfX1mdW5jdGlvbiB1KCl7Zm9yKHZhciBlPWhlLl9hbmltYXRpb25Mb29wLmxlbmd0aDtlLS07KWhlLl9hbmltYXRpb25Mb29wW2VdKCksaGUuX2FuaW1hdGlvbkxvb3Auc3BsaWNlKGUsMSl9ZnVuY3Rpb24gZihlKXtpZihoZS5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoPjEpc3dpdGNoKGUuYW5pbWF0aW9uTmFtZSl7Y2FzZVwiZnBTbGlkZUxlZnRcIjpoZS5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0TmV3XCIpLGhlLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoaGUuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkKSxoZS5kYXlzPWhlLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCx1KCk7YnJlYWs7Y2FzZVwiZnBTbGlkZVJpZ2h0XCI6aGUuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVJpZ2h0TmV3XCIpLGhlLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoaGUuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQpLGhlLmRheXM9aGUuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLHUoKX19ZnVuY3Rpb24gbShlKXtzd2l0Y2goZS5hbmltYXRpb25OYW1lKXtjYXNlXCJmcFNsaWRlTGVmdE5ld1wiOmNhc2VcImZwU2xpZGVSaWdodE5ld1wiOmhlLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTGVmdE5ld1wiKSxoZS5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVJpZ2h0TmV3XCIpO2Zvcih2YXIgdD1oZS5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO3QubmV4dFNpYmxpbmcmJi9jdXJyLy50ZXN0KHQubmV4dFNpYmxpbmcuY2xhc3NOYW1lKTspaGUubW9udGhOYXYucmVtb3ZlQ2hpbGQodC5uZXh0U2libGluZyk7Zm9yKDt0LnByZXZpb3VzU2libGluZyYmL2N1cnIvLnRlc3QodC5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKTspaGUubW9udGhOYXYucmVtb3ZlQ2hpbGQodC5wcmV2aW91c1NpYmxpbmcpO2hlLm9sZEN1ck1vbnRoPW51bGx9fWZ1bmN0aW9uIGcoZSl7ZT1lP2hlLnBhcnNlRGF0ZShlKTpoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmp8fChoZS5jb25maWcubWluRGF0ZT5oZS5ub3c/aGUuY29uZmlnLm1pbkRhdGU6aGUuY29uZmlnLm1heERhdGUmJmhlLmNvbmZpZy5tYXhEYXRlPGhlLm5vdz9oZS5jb25maWcubWF4RGF0ZTpoZS5ub3cpO3RyeXtoZS5jdXJyZW50WWVhcj1lLmdldEZ1bGxZZWFyKCksaGUuY3VycmVudE1vbnRoPWUuZ2V0TW9udGgoKX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQuc3RhY2spLGNvbnNvbGUud2FybihcIkludmFsaWQgZGF0ZSBzdXBwbGllZDogXCIrZSl9aGUucmVkcmF3KCl9ZnVuY3Rpb24gcChlKXt+ZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSYmaChlLGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIik/MTotMSl9ZnVuY3Rpb24gaChlLHQsbil7dmFyIGE9bnx8ZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLGk9bmUoXCJpbmNyZW1lbnRcIik7aS5kZWx0YT10LGEuZGlzcGF0Y2hFdmVudChpKX1mdW5jdGlvbiBEKGUpe3ZhciB0PWRlKFwiZGl2XCIsXCJudW1JbnB1dFdyYXBwZXJcIiksbj1kZShcImlucHV0XCIsXCJudW1JbnB1dCBcIitlKSxhPWRlKFwic3BhblwiLFwiYXJyb3dVcFwiKSxpPWRlKFwic3BhblwiLFwiYXJyb3dEb3duXCIpO3JldHVybiBuLnR5cGU9XCJ0ZXh0XCIsbi5wYXR0ZXJuPVwiXFxcXGQqXCIsdC5hcHBlbmRDaGlsZChuKSx0LmFwcGVuZENoaWxkKGEpLHQuYXBwZW5kQ2hpbGQoaSksdH1mdW5jdGlvbiB2KCl7dmFyIGU9d2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtoZS5jYWxlbmRhckNvbnRhaW5lcj1kZShcImRpdlwiLFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpLGhlLmNhbGVuZGFyQ29udGFpbmVyLnRhYkluZGV4PS0xLGhlLmNvbmZpZy5ub0NhbGVuZGFyfHwoZS5hcHBlbmRDaGlsZChrKCkpLGhlLmlubmVyQ29udGFpbmVyPWRlKFwiZGl2XCIsXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIiksaGUuY29uZmlnLndlZWtOdW1iZXJzJiZoZS5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChOKCkpLGhlLnJDb250YWluZXI9ZGUoXCJkaXZcIixcImZsYXRwaWNrci1yQ29udGFpbmVyXCIpLGhlLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoRSgpKSxoZS5kYXlzQ29udGFpbmVyfHwoaGUuZGF5c0NvbnRhaW5lcj1kZShcImRpdlwiLFwiZmxhdHBpY2tyLWRheXNcIiksaGUuZGF5c0NvbnRhaW5lci50YWJJbmRleD0tMSksTSgpLGhlLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGUuZGF5c0NvbnRhaW5lciksaGUuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGUuckNvbnRhaW5lciksZS5hcHBlbmRDaGlsZChoZS5pbm5lckNvbnRhaW5lcikpLGhlLmNvbmZpZy5lbmFibGVUaW1lJiZlLmFwcGVuZENoaWxkKHgoKSksZmUoaGUuY2FsZW5kYXJDb250YWluZXIsXCJyYW5nZU1vZGVcIixcInJhbmdlXCI9PT1oZS5jb25maWcubW9kZSksZmUoaGUuY2FsZW5kYXJDb250YWluZXIsXCJhbmltYXRlXCIsaGUuY29uZmlnLmFuaW1hdGUpLGhlLmNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpO3ZhciB0PWhlLmNvbmZpZy5hcHBlbmRUbyYmaGUuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlO2lmKGhlLmNvbmZpZy5pbmxpbmV8fGhlLmNvbmZpZy5zdGF0aWMpe2lmKGhlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaGUuY29uZmlnLmlubGluZT9cImlubGluZVwiOlwic3RhdGljXCIpLGhlLmNvbmZpZy5pbmxpbmUmJiF0KXJldHVybiBoZS5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlLmNhbGVuZGFyQ29udGFpbmVyLGhlLl9pbnB1dC5uZXh0U2libGluZyk7aWYoaGUuY29uZmlnLnN0YXRpYyl7dmFyIG49ZGUoXCJkaXZcIixcImZsYXRwaWNrci13cmFwcGVyXCIpO3JldHVybiBoZS5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG4saGUuZWxlbWVudCksbi5hcHBlbmRDaGlsZChoZS5lbGVtZW50KSxoZS5hbHRJbnB1dCYmbi5hcHBlbmRDaGlsZChoZS5hbHRJbnB1dCksdm9pZCBuLmFwcGVuZENoaWxkKGhlLmNhbGVuZGFyQ29udGFpbmVyKX19KHQ/aGUuY29uZmlnLmFwcGVuZFRvOndpbmRvdy5kb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChoZS5jYWxlbmRhckNvbnRhaW5lcil9ZnVuY3Rpb24gQyhlLHQsbixhKXt2YXIgaT1BKHQsITApLHI9ZGUoXCJzcGFuXCIsXCJmbGF0cGlja3ItZGF5IFwiK2UsdC5nZXREYXRlKCkpO3JldHVybiByLmRhdGVPYmo9dCxyLiRpPWEsci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsaGUuZm9ybWF0RGF0ZSh0LGhlLmNvbmZpZy5hcmlhRGF0ZUZvcm1hdCkpLDA9PT1nZSh0LGhlLm5vdykmJihoZS50b2RheURhdGVFbGVtPXIsci5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIikpLGk/KHIudGFiSW5kZXg9LTEsYWUodCkmJihyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSxoZS5zZWxlY3RlZERhdGVFbGVtPXIsXCJyYW5nZVwiPT09aGUuY29uZmlnLm1vZGUmJihmZShyLFwic3RhcnRSYW5nZVwiLDA9PT1nZSh0LGhlLnNlbGVjdGVkRGF0ZXNbMF0pKSxmZShyLFwiZW5kUmFuZ2VcIiwwPT09Z2UodCxoZS5zZWxlY3RlZERhdGVzWzFdKSkpKSk6KHIuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpLGhlLnNlbGVjdGVkRGF0ZXNbMF0mJnQ+aGUubWluUmFuZ2VEYXRlJiZ0PGhlLnNlbGVjdGVkRGF0ZXNbMF0/aGUubWluUmFuZ2VEYXRlPXQ6aGUuc2VsZWN0ZWREYXRlc1swXSYmdDxoZS5tYXhSYW5nZURhdGUmJnQ+aGUuc2VsZWN0ZWREYXRlc1swXSYmKGhlLm1heFJhbmdlRGF0ZT10KSksXCJyYW5nZVwiPT09aGUuY29uZmlnLm1vZGUmJihpZSh0KSYmIWFlKHQpJiZyLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpLDE9PT1oZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmKHQ8aGUubWluUmFuZ2VEYXRlfHx0PmhlLm1heFJhbmdlRGF0ZSkmJnIuY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIikpLGhlLmNvbmZpZy53ZWVrTnVtYmVycyYmXCJwcmV2TW9udGhEYXlcIiE9PWUmJm4lNz09MSYmaGUud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8c3BhbiBjbGFzcz0nZGlzYWJsZWQgZmxhdHBpY2tyLWRheSc+XCIraGUuY29uZmlnLmdldFdlZWsodCkrXCI8L3NwYW4+XCIpLHRlKFwiRGF5Q3JlYXRlXCIscikscn1mdW5jdGlvbiB3KGUsdCl7dmFyIG49ZSt0fHwwLGE9dm9pZCAwIT09ZT9oZS5kYXlzLmNoaWxkTm9kZXNbbl06aGUuc2VsZWN0ZWREYXRlRWxlbXx8aGUudG9kYXlEYXRlRWxlbXx8aGUuZGF5cy5jaGlsZE5vZGVzWzBdLGk9ZnVuY3Rpb24oKXsoYT1hfHxoZS5kYXlzLmNoaWxkTm9kZXNbbl0pLmZvY3VzKCksXCJyYW5nZVwiPT09aGUuY29uZmlnLm1vZGUmJlAoYSl9O2lmKHZvaWQgMD09PWEmJjAhPT10KXJldHVybiB0PjA/KGhlLmNoYW5nZU1vbnRoKDEpLG4lPTQyKTp0PDAmJihoZS5jaGFuZ2VNb250aCgtMSksbis9NDIpLGIoaSk7aSgpfWZ1bmN0aW9uIGIoZSl7aWYoITA9PT1oZS5jb25maWcuYW5pbWF0ZSlyZXR1cm4gaGUuX2FuaW1hdGlvbkxvb3AucHVzaChlKTtlKCl9ZnVuY3Rpb24gTShlKXt2YXIgdD0obmV3IERhdGUoaGUuY3VycmVudFllYXIsaGUuY3VycmVudE1vbnRoLDEpLmdldERheSgpLWhlLmwxMG4uZmlyc3REYXlPZldlZWsrNyklNyxuPVwicmFuZ2VcIj09PWhlLmNvbmZpZy5tb2RlO2hlLnByZXZNb250aERheXM9aGUudXRpbHMuZ2V0RGF5c2luTW9udGgoKGhlLmN1cnJlbnRNb250aC0xKzEyKSUxMiksaGUuc2VsZWN0ZWREYXRlRWxlbT12b2lkIDAsaGUudG9kYXlEYXRlRWxlbT12b2lkIDA7dmFyIGE9aGUudXRpbHMuZ2V0RGF5c2luTW9udGgoKSxpPXdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj1oZS5wcmV2TW9udGhEYXlzKzEtdCxvPTA7Zm9yKGhlLmNvbmZpZy53ZWVrTnVtYmVycyYmaGUud2Vla051bWJlcnMuZmlyc3RDaGlsZCYmKGhlLndlZWtOdW1iZXJzLnRleHRDb250ZW50PVwiXCIpLG4mJihoZS5taW5SYW5nZURhdGU9bmV3IERhdGUoaGUuY3VycmVudFllYXIsaGUuY3VycmVudE1vbnRoLTEsciksaGUubWF4UmFuZ2VEYXRlPW5ldyBEYXRlKGhlLmN1cnJlbnRZZWFyLGhlLmN1cnJlbnRNb250aCsxLCg0Mi10KSVhKSk7cjw9aGUucHJldk1vbnRoRGF5cztyKyssbysrKWkuYXBwZW5kQ2hpbGQoQyhcInByZXZNb250aERheVwiLG5ldyBEYXRlKGhlLmN1cnJlbnRZZWFyLGhlLmN1cnJlbnRNb250aC0xLHIpLHIsbykpO2ZvcihyPTE7cjw9YTtyKyssbysrKWkuYXBwZW5kQ2hpbGQoQyhcIlwiLG5ldyBEYXRlKGhlLmN1cnJlbnRZZWFyLGhlLmN1cnJlbnRNb250aCxyKSxyLG8pKTtmb3IodmFyIGw9YSsxO2w8PTQyLXQ7bCsrLG8rKylpLmFwcGVuZENoaWxkKEMoXCJuZXh0TW9udGhEYXlcIixuZXcgRGF0ZShoZS5jdXJyZW50WWVhcixoZS5jdXJyZW50TW9udGgrMSxsJWEpLGwsbykpO24mJjE9PT1oZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmaS5jaGlsZE5vZGVzWzBdPyhoZS5faGlkZVByZXZNb250aEFycm93PWhlLl9oaWRlUHJldk1vbnRoQXJyb3d8fGhlLm1pblJhbmdlRGF0ZT5pLmNoaWxkTm9kZXNbMF0uZGF0ZU9iaixoZS5faGlkZU5leHRNb250aEFycm93PWhlLl9oaWRlTmV4dE1vbnRoQXJyb3d8fGhlLm1heFJhbmdlRGF0ZTxuZXcgRGF0ZShoZS5jdXJyZW50WWVhcixoZS5jdXJyZW50TW9udGgrMSwxKSk6cmUoKTt2YXIgYz1kZShcImRpdlwiLFwiZGF5Q29udGFpbmVyXCIpO2lmKGMuYXBwZW5kQ2hpbGQoaSksaGUuY29uZmlnLmFuaW1hdGUmJnZvaWQgMCE9PWUpZm9yKDtoZS5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoPjE7KWhlLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoaGUuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkKTtlbHNlIHkoaGUuZGF5c0NvbnRhaW5lcik7cmV0dXJuIGU+PTA/aGUuZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjKTpoZS5kYXlzQ29udGFpbmVyLmluc2VydEJlZm9yZShjLGhlLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCksaGUuZGF5cz1oZS5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQsaGUuZGF5c0NvbnRhaW5lcn1mdW5jdGlvbiB5KGUpe2Zvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gaygpe3ZhciBlPXdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aGUubW9udGhOYXY9ZGUoXCJkaXZcIixcImZsYXRwaWNrci1tb250aFwiKSxoZS5wcmV2TW9udGhOYXY9ZGUoXCJzcGFuXCIsXCJmbGF0cGlja3ItcHJldi1tb250aFwiKSxoZS5wcmV2TW9udGhOYXYuaW5uZXJIVE1MPWhlLmNvbmZpZy5wcmV2QXJyb3csaGUuY3VycmVudE1vbnRoRWxlbWVudD1kZShcInNwYW5cIixcImN1ci1tb250aFwiKSxoZS5jdXJyZW50TW9udGhFbGVtZW50LnRpdGxlPWhlLmwxMG4uc2Nyb2xsVGl0bGU7dmFyIHQ9RChcImN1ci15ZWFyXCIpO3JldHVybiBoZS5jdXJyZW50WWVhckVsZW1lbnQ9dC5jaGlsZE5vZGVzWzBdLGhlLmN1cnJlbnRZZWFyRWxlbWVudC50aXRsZT1oZS5sMTBuLnNjcm9sbFRpdGxlLGhlLmNvbmZpZy5taW5EYXRlJiYoaGUuY3VycmVudFllYXJFbGVtZW50Lm1pbj1oZS5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKSxoZS5jb25maWcubWF4RGF0ZSYmKGhlLmN1cnJlbnRZZWFyRWxlbWVudC5tYXg9aGUuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSxoZS5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQ9aGUuY29uZmlnLm1pbkRhdGUmJmhlLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCk9PT1oZS5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSxoZS5uZXh0TW9udGhOYXY9ZGUoXCJzcGFuXCIsXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKSxoZS5uZXh0TW9udGhOYXYuaW5uZXJIVE1MPWhlLmNvbmZpZy5uZXh0QXJyb3csaGUubmF2aWdhdGlvbkN1cnJlbnRNb250aD1kZShcInNwYW5cIixcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpLGhlLm5hdmlnYXRpb25DdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoaGUuY3VycmVudE1vbnRoRWxlbWVudCksaGUubmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZCh0KSxlLmFwcGVuZENoaWxkKGhlLnByZXZNb250aE5hdiksZS5hcHBlbmRDaGlsZChoZS5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoKSxlLmFwcGVuZENoaWxkKGhlLm5leHRNb250aE5hdiksaGUubW9udGhOYXYuYXBwZW5kQ2hpbGQoZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGhlLFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX2hpZGVQcmV2TW9udGhBcnJvd30sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuX19oaWRlUHJldk1vbnRoQXJyb3chPT1lJiYoaGUucHJldk1vbnRoTmF2LnN0eWxlLmRpc3BsYXk9ZT9cIm5vbmVcIjpcImJsb2NrXCIpLHRoaXMuX19oaWRlUHJldk1vbnRoQXJyb3c9ZX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaGUsXCJfaGlkZU5leHRNb250aEFycm93XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9faGlkZU5leHRNb250aEFycm93fSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5fX2hpZGVOZXh0TW9udGhBcnJvdyE9PWUmJihoZS5uZXh0TW9udGhOYXYuc3R5bGUuZGlzcGxheT1lP1wibm9uZVwiOlwiYmxvY2tcIiksdGhpcy5fX2hpZGVOZXh0TW9udGhBcnJvdz1lfX0pLHJlKCksaGUubW9udGhOYXZ9ZnVuY3Rpb24geCgpe2hlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpLGhlLmNvbmZpZy5ub0NhbGVuZGFyJiZoZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9DYWxlbmRhclwiKSxoZS50aW1lQ29udGFpbmVyPWRlKFwiZGl2XCIsXCJmbGF0cGlja3ItdGltZVwiKSxoZS50aW1lQ29udGFpbmVyLnRhYkluZGV4PS0xO3ZhciBlPWRlKFwic3BhblwiLFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsXCI6XCIpLHQ9RChcImZsYXRwaWNrci1ob3VyXCIpO2hlLmhvdXJFbGVtZW50PXQuY2hpbGROb2Rlc1swXTt2YXIgbj1EKFwiZmxhdHBpY2tyLW1pbnV0ZVwiKTtpZihoZS5taW51dGVFbGVtZW50PW4uY2hpbGROb2Rlc1swXSxoZS5ob3VyRWxlbWVudC50YWJJbmRleD1oZS5taW51dGVFbGVtZW50LnRhYkluZGV4PS0xLGhlLmhvdXJFbGVtZW50LnZhbHVlPWhlLnBhZChoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmo/aGUubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCk6aGUuY29uZmlnLmRlZmF1bHRIb3VyKSxoZS5taW51dGVFbGVtZW50LnZhbHVlPWhlLnBhZChoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmo/aGUubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKTpoZS5jb25maWcuZGVmYXVsdE1pbnV0ZSksaGUuaG91ckVsZW1lbnQuc3RlcD1oZS5jb25maWcuaG91ckluY3JlbWVudCxoZS5taW51dGVFbGVtZW50LnN0ZXA9aGUuY29uZmlnLm1pbnV0ZUluY3JlbWVudCxoZS5ob3VyRWxlbWVudC5taW49aGUuY29uZmlnLnRpbWVfMjRocj8wOjEsaGUuaG91ckVsZW1lbnQubWF4PWhlLmNvbmZpZy50aW1lXzI0aHI/MjM6MTIsaGUubWludXRlRWxlbWVudC5taW49MCxoZS5taW51dGVFbGVtZW50Lm1heD01OSxoZS5ob3VyRWxlbWVudC50aXRsZT1oZS5taW51dGVFbGVtZW50LnRpdGxlPWhlLmwxMG4uc2Nyb2xsVGl0bGUsaGUudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0KSxoZS50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpLGhlLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobiksaGUuY29uZmlnLnRpbWVfMjRociYmaGUudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZTI0aHJcIiksaGUuY29uZmlnLmVuYWJsZVNlY29uZHMpe2hlLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1NlY29uZHNcIik7dmFyIGE9RChcImZsYXRwaWNrci1zZWNvbmRcIik7aGUuc2Vjb25kRWxlbWVudD1hLmNoaWxkTm9kZXNbMF0saGUuc2Vjb25kRWxlbWVudC52YWx1ZT1oZS5sYXRlc3RTZWxlY3RlZERhdGVPYmo/aGUucGFkKGhlLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKCkpOlwiMDBcIixoZS5zZWNvbmRFbGVtZW50LnN0ZXA9aGUubWludXRlRWxlbWVudC5zdGVwLGhlLnNlY29uZEVsZW1lbnQubWluPWhlLm1pbnV0ZUVsZW1lbnQubWluLGhlLnNlY29uZEVsZW1lbnQubWF4PWhlLm1pbnV0ZUVsZW1lbnQubWF4LGhlLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGUoXCJzcGFuXCIsXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIixcIjpcIikpLGhlLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYSl9cmV0dXJuIGhlLmNvbmZpZy50aW1lXzI0aHJ8fChoZS5hbVBNPWRlKFwic3BhblwiLFwiZmxhdHBpY2tyLWFtLXBtXCIsW1wiQU1cIixcIlBNXCJdW2hlLmhvdXJFbGVtZW50LnZhbHVlPjExfDBdKSxoZS5hbVBNLnRpdGxlPWhlLmwxMG4udG9nZ2xlVGl0bGUsaGUuYW1QTS50YWJJbmRleD0tMSxoZS50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlLmFtUE0pKSxoZS50aW1lQ29udGFpbmVyfWZ1bmN0aW9uIEUoKXtoZS53ZWVrZGF5Q29udGFpbmVyfHwoaGUud2Vla2RheUNvbnRhaW5lcj1kZShcImRpdlwiLFwiZmxhdHBpY2tyLXdlZWtkYXlzXCIpKTt2YXIgZT1oZS5sMTBuLmZpcnN0RGF5T2ZXZWVrLHQ9aGUubDEwbi53ZWVrZGF5cy5zaG9ydGhhbmQuc2xpY2UoKTtyZXR1cm4gZT4wJiZlPHQubGVuZ3RoJiYodD1bXS5jb25jYXQodC5zcGxpY2UoZSx0Lmxlbmd0aCksdC5zcGxpY2UoMCxlKSkpLGhlLndlZWtkYXlDb250YWluZXIuaW5uZXJIVE1MPVwiXFxuXFx0XFx0PHNwYW4gY2xhc3M9ZmxhdHBpY2tyLXdlZWtkYXk+XFxuXFx0XFx0XFx0XCIrdC5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlwiKStcIlxcblxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcIixoZS53ZWVrZGF5Q29udGFpbmVyfWZ1bmN0aW9uIE4oKXtyZXR1cm4gaGUuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpLGhlLndlZWtXcmFwcGVyPWRlKFwiZGl2XCIsXCJmbGF0cGlja3Itd2Vla3dyYXBwZXJcIiksaGUud2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGUoXCJzcGFuXCIsXCJmbGF0cGlja3Itd2Vla2RheVwiLGhlLmwxMG4ud2Vla0FiYnJldmlhdGlvbikpLGhlLndlZWtOdW1iZXJzPWRlKFwiZGl2XCIsXCJmbGF0cGlja3Itd2Vla3NcIiksaGUud2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGUud2Vla051bWJlcnMpLGhlLndlZWtXcmFwcGVyfWZ1bmN0aW9uIFQoZSx0LG4pe3ZhciBhPSh0PXZvaWQgMD09PXR8fHQpP2U6ZS1oZS5jdXJyZW50TW9udGgsaT0haGUuY29uZmlnLmFuaW1hdGV8fCExPT09bjtpZighKGE8MCYmaGUuX2hpZGVQcmV2TW9udGhBcnJvd3x8YT4wJiZoZS5faGlkZU5leHRNb250aEFycm93KSl7aWYoaGUuY3VycmVudE1vbnRoKz1hLChoZS5jdXJyZW50TW9udGg8MHx8aGUuY3VycmVudE1vbnRoPjExKSYmKGhlLmN1cnJlbnRZZWFyKz1oZS5jdXJyZW50TW9udGg+MTE/MTotMSxoZS5jdXJyZW50TW9udGg9KGhlLmN1cnJlbnRNb250aCsxMiklMTIsdGUoXCJZZWFyQ2hhbmdlXCIpKSxNKGk/dm9pZCAwOmEpLGkpcmV0dXJuIHRlKFwiTW9udGhDaGFuZ2VcIikscmUoKTt2YXIgcj1oZS5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO2lmKGE8MClmb3IoO3IubmV4dFNpYmxpbmcmJi9jdXJyLy50ZXN0KHIubmV4dFNpYmxpbmcuY2xhc3NOYW1lKTspaGUubW9udGhOYXYucmVtb3ZlQ2hpbGQoci5uZXh0U2libGluZyk7ZWxzZSBpZihhPjApZm9yKDtyLnByZXZpb3VzU2libGluZyYmL2N1cnIvLnRlc3Qoci5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKTspaGUubW9udGhOYXYucmVtb3ZlQ2hpbGQoci5wcmV2aW91c1NpYmxpbmcpO2lmKGhlLm9sZEN1ck1vbnRoPWhlLm5hdmlnYXRpb25DdXJyZW50TW9udGgsaGUubmF2aWdhdGlvbkN1cnJlbnRNb250aD1oZS5tb250aE5hdi5pbnNlcnRCZWZvcmUoaGUub2xkQ3VyTW9udGguY2xvbmVOb2RlKCEwKSxhPjA/aGUub2xkQ3VyTW9udGgubmV4dFNpYmxpbmc6aGUub2xkQ3VyTW9udGgpLGE+MD8oaGUuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnRcIiksaGUuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdE5ld1wiKSxoZS5vbGRDdXJNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpLGhlLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdE5ld1wiKSk6YTwwJiYoaGUuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0TmV3XCIpLGhlLmRheXNDb250YWluZXIubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0XCIpLGhlLm9sZEN1ck1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0XCIpLGhlLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIikpLGhlLmN1cnJlbnRNb250aEVsZW1lbnQ9aGUubmF2aWdhdGlvbkN1cnJlbnRNb250aC5maXJzdENoaWxkLGhlLmN1cnJlbnRZZWFyRWxlbWVudD1oZS5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmxhc3RDaGlsZC5jaGlsZE5vZGVzWzBdLHJlKCksaGUub2xkQ3VyTW9udGguZmlyc3RDaGlsZC50ZXh0Q29udGVudD1oZS51dGlscy5tb250aFRvU3RyKGhlLmN1cnJlbnRNb250aC1hKSx0ZShcIk1vbnRoQ2hhbmdlXCIpLGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuJGkpe3ZhciBvPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuJGk7YihmdW5jdGlvbigpe3cobywwKX0pfX19ZnVuY3Rpb24gXyhlKXtoZS5pbnB1dC52YWx1ZT1cIlwiLGhlLmFsdElucHV0JiYoaGUuYWx0SW5wdXQudmFsdWU9XCJcIiksaGUubW9iaWxlSW5wdXQmJihoZS5tb2JpbGVJbnB1dC52YWx1ZT1cIlwiKSxoZS5zZWxlY3RlZERhdGVzPVtdLGhlLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj12b2lkIDAsaGUuc2hvd1RpbWVJbnB1dD0hMSxoZS5yZWRyYXcoKSwhMSE9PWUmJnRlKFwiQ2hhbmdlXCIpfWZ1bmN0aW9uIFMoKXtoZS5pc09wZW49ITEsaGUuaXNNb2JpbGV8fChoZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKSxoZS5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSksdGUoXCJDbG9zZVwiKX1mdW5jdGlvbiBZKCl7Zm9yKHZhciBlPWhlLl9oYW5kbGVycy5sZW5ndGg7ZS0tOyl7dmFyIHQ9aGUuX2hhbmRsZXJzW2VdO3QuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHQuZXZlbnQsdC5oYW5kbGVyKX1oZS5faGFuZGxlcnM9W10saGUubW9iaWxlSW5wdXQ/KGhlLm1vYmlsZUlucHV0LnBhcmVudE5vZGUmJmhlLm1vYmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaGUubW9iaWxlSW5wdXQpLGhlLm1vYmlsZUlucHV0PW51bGwpOmhlLmNhbGVuZGFyQ29udGFpbmVyJiZoZS5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlJiZoZS5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGhlLmNhbGVuZGFyQ29udGFpbmVyKSxoZS5hbHRJbnB1dCYmKGhlLmlucHV0LnR5cGU9XCJ0ZXh0XCIsaGUuYWx0SW5wdXQucGFyZW50Tm9kZSYmaGUuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoZS5hbHRJbnB1dCksZGVsZXRlIGhlLmFsdElucHV0KSxoZS5pbnB1dCYmKGhlLmlucHV0LnR5cGU9aGUuaW5wdXQuX3R5cGUsaGUuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZsYXRwaWNrci1pbnB1dFwiKSxoZS5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSxoZS5pbnB1dC52YWx1ZT1cIlwiKSxbXCJfc2hvd1RpbWVJbnB1dFwiLFwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqXCIsXCJfaGlkZU5leHRNb250aEFycm93XCIsXCJfaGlkZVByZXZNb250aEFycm93XCIsXCJfX2hpZGVOZXh0TW9udGhBcnJvd1wiLFwiX19oaWRlUHJldk1vbnRoQXJyb3dcIixcImlzTW9iaWxlXCIsXCJpc09wZW5cIixcInNlbGVjdGVkRGF0ZUVsZW1cIixcIm1pbkRhdGVIYXNUaW1lXCIsXCJtYXhEYXRlSGFzVGltZVwiLFwiZGF5c1wiLFwiZGF5c0NvbnRhaW5lclwiLFwiX2lucHV0XCIsXCJfcG9zaXRpb25FbGVtZW50XCIsXCJpbm5lckNvbnRhaW5lclwiLFwickNvbnRhaW5lclwiLFwibW9udGhOYXZcIixcInRvZGF5RGF0ZUVsZW1cIixcImNhbGVuZGFyQ29udGFpbmVyXCIsXCJ3ZWVrZGF5Q29udGFpbmVyXCIsXCJwcmV2TW9udGhOYXZcIixcIm5leHRNb250aE5hdlwiLFwiY3VycmVudE1vbnRoRWxlbWVudFwiLFwiY3VycmVudFllYXJFbGVtZW50XCIsXCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoXCIsXCJzZWxlY3RlZERhdGVFbGVtXCIsXCJjb25maWdcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZGVsZXRlIGhlW2VdfSl9ZnVuY3Rpb24gRihlKXtyZXR1cm4hKCFoZS5jb25maWcuYXBwZW5kVG98fCFoZS5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZSkpfHxoZS5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlKX1mdW5jdGlvbiBJKGUpe2lmKGhlLmlzT3BlbiYmIWhlLmNvbmZpZy5pbmxpbmUpe3ZhciB0PUYoZS50YXJnZXQpLG49ZS50YXJnZXQ9PT1oZS5pbnB1dHx8ZS50YXJnZXQ9PT1oZS5hbHRJbnB1dHx8aGUuZWxlbWVudC5jb250YWlucyhlLnRhcmdldCl8fGUucGF0aCYmZS5wYXRoLmluZGV4T2YmJih+ZS5wYXRoLmluZGV4T2YoaGUuaW5wdXQpfHx+ZS5wYXRoLmluZGV4T2YoaGUuYWx0SW5wdXQpKTsoXCJibHVyXCI9PT1lLnR5cGU/biYmZS5yZWxhdGVkVGFyZ2V0JiYhRihlLnJlbGF0ZWRUYXJnZXQpOiFuJiYhdCkmJihlLnByZXZlbnREZWZhdWx0KCksaGUuY2xvc2UoKSxcInJhbmdlXCI9PT1oZS5jb25maWcubW9kZSYmMT09PWhlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoJiYoaGUuY2xlYXIoITEpLGhlLnJlZHJhdygpKSl9fWZ1bmN0aW9uIE8oZSl7aWYoISghZXx8aGUuY3VycmVudFllYXJFbGVtZW50Lm1pbiYmZTxoZS5jdXJyZW50WWVhckVsZW1lbnQubWlufHxoZS5jdXJyZW50WWVhckVsZW1lbnQubWF4JiZlPmhlLmN1cnJlbnRZZWFyRWxlbWVudC5tYXgpKXt2YXIgdD1wYXJzZUludChlLDEwKSxuPWhlLmN1cnJlbnRZZWFyIT09dDtoZS5jdXJyZW50WWVhcj10fHxoZS5jdXJyZW50WWVhcixoZS5jb25maWcubWF4RGF0ZSYmaGUuY3VycmVudFllYXI9PT1oZS5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpP2hlLmN1cnJlbnRNb250aD1NYXRoLm1pbihoZS5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpLGhlLmN1cnJlbnRNb250aCk6aGUuY29uZmlnLm1pbkRhdGUmJmhlLmN1cnJlbnRZZWFyPT09aGUuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSYmKGhlLmN1cnJlbnRNb250aD1NYXRoLm1heChoZS5jb25maWcubWluRGF0ZS5nZXRNb250aCgpLGhlLmN1cnJlbnRNb250aCkpLG4mJihoZS5yZWRyYXcoKSx0ZShcIlllYXJDaGFuZ2VcIikpfX1mdW5jdGlvbiBBKGUsdCl7aWYoaGUuY29uZmlnLm1pbkRhdGUmJmdlKGUsaGUuY29uZmlnLm1pbkRhdGUsdm9pZCAwIT09dD90OiFoZS5taW5EYXRlSGFzVGltZSk8MHx8aGUuY29uZmlnLm1heERhdGUmJmdlKGUsaGUuY29uZmlnLm1heERhdGUsdm9pZCAwIT09dD90OiFoZS5tYXhEYXRlSGFzVGltZSk+MClyZXR1cm4hMTtpZighaGUuY29uZmlnLmVuYWJsZS5sZW5ndGgmJiFoZS5jb25maWcuZGlzYWJsZS5sZW5ndGgpcmV0dXJuITA7Zm9yKHZhciBuLGE9aGUucGFyc2VEYXRlKGUsbnVsbCwhMCksaT1oZS5jb25maWcuZW5hYmxlLmxlbmd0aD4wLHI9aT9oZS5jb25maWcuZW5hYmxlOmhlLmNvbmZpZy5kaXNhYmxlLG89MDtvPHIubGVuZ3RoO28rKyl7aWYoKG49cltvXSlpbnN0YW5jZW9mIEZ1bmN0aW9uJiZuKGEpKXJldHVybiBpO2lmKG4gaW5zdGFuY2VvZiBEYXRlJiZuLmdldFRpbWUoKT09PWEuZ2V0VGltZSgpKXJldHVybiBpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuJiZoZS5wYXJzZURhdGUobixudWxsLCEwKS5nZXRUaW1lKCk9PT1hLmdldFRpbWUoKSlyZXR1cm4gaTtpZihcIm9iamVjdFwiPT09KHZvaWQgMD09PW4/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKG4pKSYmbi5mcm9tJiZuLnRvJiZhPj1uLmZyb20mJmE8PW4udG8pcmV0dXJuIGl9cmV0dXJuIWl9ZnVuY3Rpb24gTChlKXt2YXIgdD1lLnRhcmdldD09PWhlLl9pbnB1dCxuPUYoZS50YXJnZXQpLHI9aGUuY29uZmlnLmFsbG93SW5wdXQsbz1oZS5pc09wZW4mJighcnx8IXQpLGw9aGUuY29uZmlnLmlubGluZSYmdCYmIXI7aWYoXCJFbnRlclwiPT09ZS5rZXkmJnImJnQpcmV0dXJuIGhlLnNldERhdGUoaGUuX2lucHV0LnZhbHVlLCEwLGUudGFyZ2V0PT09aGUuYWx0SW5wdXQ/aGUuY29uZmlnLmFsdEZvcm1hdDpoZS5jb25maWcuZGF0ZUZvcm1hdCksZS50YXJnZXQuYmx1cigpO2lmKG58fG98fGwpe3ZhciBjPWhlLnRpbWVDb250YWluZXImJmhlLnRpbWVDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpO3N3aXRjaChlLmtleSl7Y2FzZVwiRW50ZXJcIjpjP29lKCk6VShlKTticmVhaztjYXNlXCJFc2NhcGVcIjplLnByZXZlbnREZWZhdWx0KCksaGUuY2xvc2UoKTticmVhaztjYXNlXCJBcnJvd0xlZnRcIjpjYXNlXCJBcnJvd1JpZ2h0XCI6aWYoIWMpaWYoZS5wcmV2ZW50RGVmYXVsdCgpLGhlLmRheXNDb250YWluZXIpe3ZhciBzPVwiQXJyb3dSaWdodFwiPT09ZS5rZXk/MTotMTtlLmN0cmxLZXk/VChzLCEwKTp3KGUudGFyZ2V0LiRpLHMpfWVsc2UgaGUuY29uZmlnLmVuYWJsZVRpbWUmJiFjJiZoZS5ob3VyRWxlbWVudC5mb2N1cygpO2JyZWFrO2Nhc2VcIkFycm93VXBcIjpjYXNlXCJBcnJvd0Rvd25cIjplLnByZXZlbnREZWZhdWx0KCk7dmFyIGQ9XCJBcnJvd0Rvd25cIj09PWUua2V5PzE6LTE7aGUuZGF5c0NvbnRhaW5lcj9lLmN0cmxLZXk/KE8oaGUuY3VycmVudFllYXItZCksdyhlLnRhcmdldC4kaSwwKSk6Y3x8dyhlLnRhcmdldC4kaSw3KmQpOmhlLmNvbmZpZy5lbmFibGVUaW1lJiYoY3x8aGUuaG91ckVsZW1lbnQuZm9jdXMoKSxhKGUpKTticmVhaztjYXNlXCJUYWJcIjplLnRhcmdldD09PWhlLmhvdXJFbGVtZW50PyhlLnByZXZlbnREZWZhdWx0KCksaGUubWludXRlRWxlbWVudC5zZWxlY3QoKSk6ZS50YXJnZXQ9PT1oZS5taW51dGVFbGVtZW50JiYoaGUuc2Vjb25kRWxlbWVudHx8aGUuYW1QTSk/KGUucHJldmVudERlZmF1bHQoKSwoaGUuc2Vjb25kRWxlbWVudHx8aGUuYW1QTSkuZm9jdXMoKSk6ZS50YXJnZXQ9PT1oZS5zZWNvbmRFbGVtZW50JiYoZS5wcmV2ZW50RGVmYXVsdCgpLGhlLmFtUE0uZm9jdXMoKSk7YnJlYWs7Y2FzZVwiYVwiOmUudGFyZ2V0PT09aGUuYW1QTSYmKGhlLmFtUE0udGV4dENvbnRlbnQ9XCJBTVwiLGkoKSxvZSgpKTticmVhaztjYXNlXCJwXCI6ZS50YXJnZXQ9PT1oZS5hbVBNJiYoaGUuYW1QTS50ZXh0Q29udGVudD1cIlBNXCIsaSgpLG9lKCkpfXRlKFwiS2V5RG93blwiLGUpfX1mdW5jdGlvbiBQKGUpe2lmKDE9PT1oZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpKXtmb3IodmFyIHQ9ZS5kYXRlT2JqLG49aGUucGFyc2VEYXRlKGhlLnNlbGVjdGVkRGF0ZXNbMF0sbnVsbCwhMCksYT1NYXRoLm1pbih0LmdldFRpbWUoKSxoZS5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksaT1NYXRoLm1heCh0LmdldFRpbWUoKSxoZS5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSkscj0hMSxvPWE7bzxpO28rPWhlLnV0aWxzLmR1cmF0aW9uLkRBWSlpZighQShuZXcgRGF0ZShvKSkpe3I9ITA7YnJlYWt9Zm9yKHZhciBsPWhlLmRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqLmdldFRpbWUoKSxjPTA7Yzw0MjtjKyssbCs9aGUudXRpbHMuZHVyYXRpb24uREFZKXsoZnVuY3Rpb24obyxsKXt2YXIgYz1vPGhlLm1pblJhbmdlRGF0ZS5nZXRUaW1lKCl8fG8+aGUubWF4UmFuZ2VEYXRlLmdldFRpbWUoKSxzPWhlLmRheXMuY2hpbGROb2Rlc1tsXTtpZihjKXJldHVybiBoZS5kYXlzLmNoaWxkTm9kZXNbbF0uY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIiksW1wiaW5SYW5nZVwiLFwic3RhcnRSYW5nZVwiLFwiZW5kUmFuZ2VcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtzLmNsYXNzTGlzdC5yZW1vdmUoZSl9KSxcImNvbnRpbnVlXCI7aWYociYmIWMpcmV0dXJuXCJjb250aW51ZVwiO1tcInN0YXJ0UmFuZ2VcIixcImluUmFuZ2VcIixcImVuZFJhbmdlXCIsXCJub3RBbGxvd2VkXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7cy5jbGFzc0xpc3QucmVtb3ZlKGUpfSk7dmFyIGQ9TWF0aC5tYXgoaGUubWluUmFuZ2VEYXRlLmdldFRpbWUoKSxhKSx1PU1hdGgubWluKGhlLm1heFJhbmdlRGF0ZS5nZXRUaW1lKCksaSk7ZS5jbGFzc0xpc3QuYWRkKHQ8aGUuc2VsZWN0ZWREYXRlc1swXT9cInN0YXJ0UmFuZ2VcIjpcImVuZFJhbmdlXCIpLG48dCYmbz09PW4uZ2V0VGltZSgpP3MuY2xhc3NMaXN0LmFkZChcInN0YXJ0UmFuZ2VcIik6bj50JiZvPT09bi5nZXRUaW1lKCkmJnMuY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpLG8+PWQmJm88PXUmJnMuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIil9KShsLGMpfX19ZnVuY3Rpb24gaigpeyFoZS5pc09wZW58fGhlLmNvbmZpZy5zdGF0aWN8fGhlLmNvbmZpZy5pbmxpbmV8fEooKX1mdW5jdGlvbiBIKGUpe2lmKGhlLmlzTW9iaWxlKXJldHVybiBlJiYoZS5wcmV2ZW50RGVmYXVsdCgpLGUudGFyZ2V0LmJsdXIoKSksc2V0VGltZW91dChmdW5jdGlvbigpe2hlLm1vYmlsZUlucHV0LmNsaWNrKCl9LDApLHZvaWQgdGUoXCJPcGVuXCIpO2hlLmlzT3Blbnx8aGUuX2lucHV0LmRpc2FibGVkfHxoZS5jb25maWcuaW5saW5lfHwoaGUuaXNPcGVuPSEwLGhlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpLEooKSxoZS5faW5wdXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSx0ZShcIk9wZW5cIikpfWZ1bmN0aW9uIFIoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPWhlLmNvbmZpZ1tcIl9cIitlK1wiRGF0ZVwiXT1oZS5wYXJzZURhdGUodCksYT1oZS5jb25maWdbXCJfXCIrKFwibWluXCI9PT1lP1wibWF4XCI6XCJtaW5cIikrXCJEYXRlXCJdLGk9dCYmbiBpbnN0YW5jZW9mIERhdGU7aSYmKGhlW2UrXCJEYXRlSGFzVGltZVwiXT1uLmdldEhvdXJzKCl8fG4uZ2V0TWludXRlcygpfHxuLmdldFNlY29uZHMoKSksaGUuc2VsZWN0ZWREYXRlcyYmKGhlLnNlbGVjdGVkRGF0ZXM9aGUuc2VsZWN0ZWREYXRlcy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIEEoZSl9KSxoZS5zZWxlY3RlZERhdGVzLmxlbmd0aHx8XCJtaW5cIiE9PWV8fHIobiksb2UoKSksaGUuZGF5c0NvbnRhaW5lciYmKEsoKSxpP2hlLmN1cnJlbnRZZWFyRWxlbWVudFtlXT1uLmdldEZ1bGxZZWFyKCk6aGUuY3VycmVudFllYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShlKSxoZS5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQ9YSYmbiYmYS5nZXRGdWxsWWVhcigpPT09bi5nZXRGdWxsWWVhcigpKX19ZnVuY3Rpb24gVygpe3ZhciBlPVtcIndyYXBcIixcIndlZWtOdW1iZXJzXCIsXCJhbGxvd0lucHV0XCIsXCJjbGlja09wZW5zXCIsXCJ0aW1lXzI0aHJcIixcImVuYWJsZVRpbWVcIixcIm5vQ2FsZW5kYXJcIixcImFsdElucHV0XCIsXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcImlubGluZVwiLFwic3RhdGljXCIsXCJlbmFibGVTZWNvbmRzXCIsXCJkaXNhYmxlTW9iaWxlXCJdLHQ9W1wib25DaGFuZ2VcIixcIm9uQ2xvc2VcIixcIm9uRGF5Q3JlYXRlXCIsXCJvbktleURvd25cIixcIm9uTW9udGhDaGFuZ2VcIixcIm9uT3BlblwiLFwib25QYXJzZUNvbmZpZ1wiLFwib25SZWFkeVwiLFwib25WYWx1ZVVwZGF0ZVwiLFwib25ZZWFyQ2hhbmdlXCJdO2hlLmNvbmZpZz1PYmplY3QuY3JlYXRlKGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKTt2YXIgYT1fZXh0ZW5kcyh7fSxoZS5pbnN0YW5jZUNvbmZpZyxKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhlLmVsZW1lbnQuZGF0YXNldHx8e30pKSk7aGUuY29uZmlnLnBhcnNlRGF0ZT1hLnBhcnNlRGF0ZSxoZS5jb25maWcuZm9ybWF0RGF0ZT1hLmZvcm1hdERhdGUsX2V4dGVuZHMoaGUuY29uZmlnLGEpLCFhLmRhdGVGb3JtYXQmJmEuZW5hYmxlVGltZSYmKGhlLmNvbmZpZy5kYXRlRm9ybWF0PWhlLmNvbmZpZy5ub0NhbGVuZGFyP1wiSDppXCIrKGhlLmNvbmZpZy5lbmFibGVTZWNvbmRzP1wiOlNcIjpcIlwiKTpmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0K1wiIEg6aVwiKyhoZS5jb25maWcuZW5hYmxlU2Vjb25kcz9cIjpTXCI6XCJcIikpLGEuYWx0SW5wdXQmJmEuZW5hYmxlVGltZSYmIWEuYWx0Rm9ybWF0JiYoaGUuY29uZmlnLmFsdEZvcm1hdD1oZS5jb25maWcubm9DYWxlbmRhcj9cImg6aVwiKyhoZS5jb25maWcuZW5hYmxlU2Vjb25kcz9cIjpTIEtcIjpcIiBLXCIpOmZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCtcIiBoOmlcIisoaGUuY29uZmlnLmVuYWJsZVNlY29uZHM/XCI6U1wiOlwiXCIpK1wiIEtcIiksT2JqZWN0LmRlZmluZVByb3BlcnR5KGhlLmNvbmZpZyxcIm1pbkRhdGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21pbkRhdGV9LHNldDpSKFwibWluXCIpfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGhlLmNvbmZpZyxcIm1heERhdGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21heERhdGV9LHNldDpSKFwibWF4XCIpfSksaGUuY29uZmlnLm1pbkRhdGU9YS5taW5EYXRlLGhlLmNvbmZpZy5tYXhEYXRlPWEubWF4RGF0ZTtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyloZS5jb25maWdbZVtpXV09ITA9PT1oZS5jb25maWdbZVtpXV18fFwidHJ1ZVwiPT09aGUuY29uZmlnW2VbaV1dO2Zvcih2YXIgcj10Lmxlbmd0aDtyLS07KXZvaWQgMCE9PWhlLmNvbmZpZ1t0W3JdXSYmKGhlLmNvbmZpZ1t0W3JdXT11ZShoZS5jb25maWdbdFtyXV18fFtdKS5tYXAobikpO2Zvcih2YXIgbz0wO288aGUuY29uZmlnLnBsdWdpbnMubGVuZ3RoO28rKyl7dmFyIGw9aGUuY29uZmlnLnBsdWdpbnNbb10oaGUpfHx7fTtmb3IodmFyIGMgaW4gbCloZS5jb25maWdbY11pbnN0YW5jZW9mIEFycmF5fHx+dC5pbmRleE9mKGMpP2hlLmNvbmZpZ1tjXT11ZShsW2NdKS5tYXAobikuY29uY2F0KGhlLmNvbmZpZ1tjXSk6dm9pZCAwPT09YVtjXSYmKGhlLmNvbmZpZ1tjXT1sW2NdKX10ZShcIlBhcnNlQ29uZmlnXCIpfWZ1bmN0aW9uIEIoKXtcIm9iamVjdFwiIT09X3R5cGVvZihoZS5jb25maWcubG9jYWxlKSYmdm9pZCAwPT09ZmxhdHBpY2tyLmwxMG5zW2hlLmNvbmZpZy5sb2NhbGVdJiZjb25zb2xlLndhcm4oXCJmbGF0cGlja3I6IGludmFsaWQgbG9jYWxlIFwiK2hlLmNvbmZpZy5sb2NhbGUpLGhlLmwxMG49X2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShmbGF0cGlja3IubDEwbnMuZGVmYXVsdCksXCJvYmplY3RcIj09PV90eXBlb2YoaGUuY29uZmlnLmxvY2FsZSk/aGUuY29uZmlnLmxvY2FsZTpcImRlZmF1bHRcIiE9PWhlLmNvbmZpZy5sb2NhbGU/ZmxhdHBpY2tyLmwxMG5zW2hlLmNvbmZpZy5sb2NhbGVdfHx7fTp7fSl9ZnVuY3Rpb24gSigpe2lmKHZvaWQgMCE9PWhlLmNhbGVuZGFyQ29udGFpbmVyKXt2YXIgZT1oZS5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQsdD1oZS5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRXaWR0aCxuPWhlLmNvbmZpZy5wb3NpdGlvbixhPWhlLl9wb3NpdGlvbkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT13aW5kb3cuaW5uZXJIZWlnaHQtYS5ib3R0b20scj1cImFib3ZlXCI9PT1ufHxcImJlbG93XCIhPT1uJiZpPGUmJmEudG9wPmUsbz13aW5kb3cucGFnZVlPZmZzZXQrYS50b3ArKHI/LWUtMjpoZS5fcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCsyKTtpZihmZShoZS5jYWxlbmRhckNvbnRhaW5lcixcImFycm93VG9wXCIsIXIpLGZlKGhlLmNhbGVuZGFyQ29udGFpbmVyLFwiYXJyb3dCb3R0b21cIixyKSwhaGUuY29uZmlnLmlubGluZSl7dmFyIGw9d2luZG93LnBhZ2VYT2Zmc2V0K2EubGVmdCxjPXdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLWEucmlnaHQscz1sK3Q+d2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7ZmUoaGUuY2FsZW5kYXJDb250YWluZXIsXCJyaWdodE1vc3RcIixzKSxoZS5jb25maWcuc3RhdGljfHwoaGUuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wPW8rXCJweFwiLHM/KGhlLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQ9XCJhdXRvXCIsaGUuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQ9YytcInB4XCIpOihoZS5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0PWwrXCJweFwiLGhlLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0PVwiYXV0b1wiKSl9fX1mdW5jdGlvbiBLKCl7aGUuY29uZmlnLm5vQ2FsZW5kYXJ8fGhlLmlzTW9iaWxlfHwoRSgpLHJlKCksTSgpKX1mdW5jdGlvbiBVKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikmJiFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSYmIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdEFsbG93ZWRcIikpe3ZhciB0PWhlLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj1uZXcgRGF0ZShlLnRhcmdldC5kYXRlT2JqLmdldFRpbWUoKSksbj10LmdldE1vbnRoKCkhPT1oZS5jdXJyZW50TW9udGgmJlwicmFuZ2VcIiE9PWhlLmNvbmZpZy5tb2RlO2lmKGhlLnNlbGVjdGVkRGF0ZUVsZW09ZS50YXJnZXQsXCJzaW5nbGVcIj09PWhlLmNvbmZpZy5tb2RlKWhlLnNlbGVjdGVkRGF0ZXM9W3RdO2Vsc2UgaWYoXCJtdWx0aXBsZVwiPT09aGUuY29uZmlnLm1vZGUpe3ZhciBhPWFlKHQpO2E/aGUuc2VsZWN0ZWREYXRlcy5zcGxpY2UoYSwxKTpoZS5zZWxlY3RlZERhdGVzLnB1c2godCl9ZWxzZVwicmFuZ2VcIj09PWhlLmNvbmZpZy5tb2RlJiYoMj09PWhlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoJiZoZS5jbGVhcigpLGhlLnNlbGVjdGVkRGF0ZXMucHVzaCh0KSwwIT09Z2UodCxoZS5zZWxlY3RlZERhdGVzWzBdLCEwKSYmaGUuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZ2V0VGltZSgpLXQuZ2V0VGltZSgpfSkpO2lmKGkoKSxuKXt2YXIgbz1oZS5jdXJyZW50WWVhciE9PXQuZ2V0RnVsbFllYXIoKTtoZS5jdXJyZW50WWVhcj10LmdldEZ1bGxZZWFyKCksaGUuY3VycmVudE1vbnRoPXQuZ2V0TW9udGgoKSxvJiZ0ZShcIlllYXJDaGFuZ2VcIiksdGUoXCJNb250aENoYW5nZVwiKX1pZihNKCksaGUubWluRGF0ZUhhc1RpbWUmJmhlLmNvbmZpZy5lbmFibGVUaW1lJiYwPT09Z2UodCxoZS5jb25maWcubWluRGF0ZSkmJnIoaGUuY29uZmlnLm1pbkRhdGUpLG9lKCksaGUuY29uZmlnLmVuYWJsZVRpbWUmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gaGUuc2hvd1RpbWVJbnB1dD0hMH0sNTApLFwicmFuZ2VcIj09PWhlLmNvbmZpZy5tb2RlJiYoMT09PWhlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoPyhQKGUudGFyZ2V0KSxoZS5faGlkZVByZXZNb250aEFycm93PWhlLl9oaWRlUHJldk1vbnRoQXJyb3d8fGhlLm1pblJhbmdlRGF0ZT5oZS5kYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iaixoZS5faGlkZU5leHRNb250aEFycm93PWhlLl9oaWRlTmV4dE1vbnRoQXJyb3d8fGhlLm1heFJhbmdlRGF0ZTxuZXcgRGF0ZShoZS5jdXJyZW50WWVhcixoZS5jdXJyZW50TW9udGgrMSwxKSk6cmUoKSksdGUoXCJDaGFuZ2VcIiksbj9iKGZ1bmN0aW9uKCl7cmV0dXJuIGhlLnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKX0pOncoZS50YXJnZXQuJGksMCksaGUuY29uZmlnLmVuYWJsZVRpbWUmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gaGUuaG91ckVsZW1lbnQuc2VsZWN0KCl9LDQ1MSksaGUuY29uZmlnLmNsb3NlT25TZWxlY3Qpe3ZhciBsPVwic2luZ2xlXCI9PT1oZS5jb25maWcubW9kZSYmIWhlLmNvbmZpZy5lbmFibGVUaW1lLGM9XCJyYW5nZVwiPT09aGUuY29uZmlnLm1vZGUmJjI9PT1oZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmIWhlLmNvbmZpZy5lbmFibGVUaW1lOyhsfHxjKSYmaGUuY2xvc2UoKX19fWZ1bmN0aW9uICQoZSx0KXtoZS5jb25maWdbZV09dCxoZS5yZWRyYXcoKSxnKCl9ZnVuY3Rpb24geihlLHQpe2lmKGUgaW5zdGFuY2VvZiBBcnJheSloZS5zZWxlY3RlZERhdGVzPWUubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBoZS5wYXJzZURhdGUoZSx0KX0pO2Vsc2UgaWYoZSBpbnN0YW5jZW9mIERhdGV8fCFpc05hTihlKSloZS5zZWxlY3RlZERhdGVzPVtoZS5wYXJzZURhdGUoZSx0KV07ZWxzZSBpZihlJiZlLnN1YnN0cmluZylzd2l0Y2goaGUuY29uZmlnLm1vZGUpe2Nhc2VcInNpbmdsZVwiOmhlLnNlbGVjdGVkRGF0ZXM9W2hlLnBhcnNlRGF0ZShlLHQpXTticmVhaztjYXNlXCJtdWx0aXBsZVwiOmhlLnNlbGVjdGVkRGF0ZXM9ZS5zcGxpdChcIjsgXCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gaGUucGFyc2VEYXRlKGUsdCl9KTticmVhaztjYXNlXCJyYW5nZVwiOmhlLnNlbGVjdGVkRGF0ZXM9ZS5zcGxpdChoZS5sMTBuLnJhbmdlU2VwYXJhdG9yKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGhlLnBhcnNlRGF0ZShlLHQpfSl9aGUuc2VsZWN0ZWREYXRlcz1oZS5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGUmJkEoZSwhMSl9KSxoZS5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5nZXRUaW1lKCktdC5nZXRUaW1lKCl9KX1mdW5jdGlvbiBHKGUsdCxuKXtpZighZSlyZXR1cm4gaGUuY2xlYXIodCk7eihlLG4pLGhlLnNob3dUaW1lSW5wdXQ9aGUuc2VsZWN0ZWREYXRlcy5sZW5ndGg+MCxoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmo9aGUuc2VsZWN0ZWREYXRlc1swXSxoZS5yZWRyYXcoKSxnKCkscigpLG9lKHQpLHQmJnRlKFwiQ2hhbmdlXCIpfWZ1bmN0aW9uIFYoKXtmdW5jdGlvbiBlKGUpe2Zvcih2YXIgdD1lLmxlbmd0aDt0LS07KVwic3RyaW5nXCI9PXR5cGVvZiBlW3RdfHwrZVt0XT9lW3RdPWhlLnBhcnNlRGF0ZShlW3RdLG51bGwsITApOmVbdF0mJmVbdF0uZnJvbSYmZVt0XS50byYmKGVbdF0uZnJvbT1oZS5wYXJzZURhdGUoZVt0XS5mcm9tKSxlW3RdLnRvPWhlLnBhcnNlRGF0ZShlW3RdLnRvKSk7cmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9aGUuc2VsZWN0ZWREYXRlcz1bXSxoZS5ub3c9bmV3IERhdGUsaGUuY29uZmlnLmRpc2FibGUubGVuZ3RoJiYoaGUuY29uZmlnLmRpc2FibGU9ZShoZS5jb25maWcuZGlzYWJsZSkpLGhlLmNvbmZpZy5lbmFibGUubGVuZ3RoJiYoaGUuY29uZmlnLmVuYWJsZT1lKGhlLmNvbmZpZy5lbmFibGUpKTt2YXIgdD1oZS5jb25maWcuZGVmYXVsdERhdGV8fGhlLmlucHV0LnZhbHVlO3QmJnoodCxoZS5jb25maWcuZGF0ZUZvcm1hdCk7dmFyIG49aGUuc2VsZWN0ZWREYXRlcy5sZW5ndGg/aGUuc2VsZWN0ZWREYXRlc1swXTpoZS5jb25maWcubWluRGF0ZSYmaGUuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpPmhlLm5vdz9oZS5jb25maWcubWluRGF0ZTpoZS5jb25maWcubWF4RGF0ZSYmaGUuY29uZmlnLm1heERhdGUuZ2V0VGltZSgpPGhlLm5vdz9oZS5jb25maWcubWF4RGF0ZTpoZS5ub3c7aGUuY3VycmVudFllYXI9bi5nZXRGdWxsWWVhcigpLGhlLmN1cnJlbnRNb250aD1uLmdldE1vbnRoKCksaGUuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJihoZS5sYXRlc3RTZWxlY3RlZERhdGVPYmo9aGUuc2VsZWN0ZWREYXRlc1swXSksaGUubWluRGF0ZUhhc1RpbWU9aGUuY29uZmlnLm1pbkRhdGUmJihoZS5jb25maWcubWluRGF0ZS5nZXRIb3VycygpfHxoZS5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCl8fGhlLmNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKSksaGUubWF4RGF0ZUhhc1RpbWU9aGUuY29uZmlnLm1heERhdGUmJihoZS5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpfHxoZS5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCl8fGhlLmNvbmZpZy5tYXhEYXRlLmdldFNlY29uZHMoKSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGhlLFwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBoZS5fc2VsZWN0ZWREYXRlT2JqfHxoZS5zZWxlY3RlZERhdGVzW2hlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoLTFdfSxzZXQ6ZnVuY3Rpb24oZSl7aGUuX3NlbGVjdGVkRGF0ZU9iaj1lfX0pLGhlLmlzTW9iaWxlfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoaGUsXCJzaG93VGltZUlucHV0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBoZS5fc2hvd1RpbWVJbnB1dH0sc2V0OmZ1bmN0aW9uKGUpe2hlLl9zaG93VGltZUlucHV0PWUsaGUuY2FsZW5kYXJDb250YWluZXImJmZlKGhlLmNhbGVuZGFyQ29udGFpbmVyLFwic2hvd1RpbWVJbnB1dFwiLGUpLEooKX19KX1mdW5jdGlvbiBaKCl7aGUudXRpbHM9e2R1cmF0aW9uOntEQVk6ODY0ZTV9LGdldERheXNpbk1vbnRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9dm9pZCAwPT09ZT9oZS5jdXJyZW50TW9udGg6ZSx0PXZvaWQgMD09PXQ/aGUuY3VycmVudFllYXI6dCwxPT09ZSYmKHQlND09MCYmdCUxMDAhPTB8fHQlNDAwPT0wKT8yOTpoZS5sMTBuLmRheXNJbk1vbnRoW2VdfSxtb250aFRvU3RyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dm9pZCAwPT09dD9oZS5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoOnQsaGUubDEwbi5tb250aHNbKHQ/XCJzaG9ydFwiOlwibG9uZ1wiKStcImhhbmRcIl1bZV19fX1mdW5jdGlvbiBxKCl7W1wiRFwiLFwiRlwiLFwiSlwiLFwiTVwiLFwiV1wiLFwibFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2hlLmZvcm1hdHNbZV09RmxhdHBpY2tyLnByb3RvdHlwZS5mb3JtYXRzW2VdLmJpbmQoaGUpfSksaGUucmV2Rm9ybWF0LkY9RmxhdHBpY2tyLnByb3RvdHlwZS5yZXZGb3JtYXQuRi5iaW5kKGhlKSxoZS5yZXZGb3JtYXQuTT1GbGF0cGlja3IucHJvdG90eXBlLnJldkZvcm1hdC5NLmJpbmQoaGUpfWZ1bmN0aW9uIFEoKXtpZihoZS5pbnB1dD1oZS5jb25maWcud3JhcD9oZS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbnB1dF1cIik6aGUuZWxlbWVudCwhaGUuaW5wdXQpcmV0dXJuIGNvbnNvbGUud2FybihcIkVycm9yOiBpbnZhbGlkIGlucHV0IGVsZW1lbnQgc3BlY2lmaWVkXCIsaGUuaW5wdXQpO2hlLmlucHV0Ll90eXBlPWhlLmlucHV0LnR5cGUsaGUuaW5wdXQudHlwZT1cInRleHRcIixoZS5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpLGhlLl9pbnB1dD1oZS5pbnB1dCxoZS5jb25maWcuYWx0SW5wdXQmJihoZS5hbHRJbnB1dD1kZShoZS5pbnB1dC5ub2RlTmFtZSxoZS5pbnB1dC5jbGFzc05hbWUrXCIgXCIraGUuY29uZmlnLmFsdElucHV0Q2xhc3MpLGhlLl9pbnB1dD1oZS5hbHRJbnB1dCxoZS5hbHRJbnB1dC5wbGFjZWhvbGRlcj1oZS5pbnB1dC5wbGFjZWhvbGRlcixoZS5hbHRJbnB1dC5kaXNhYmxlZD1oZS5pbnB1dC5kaXNhYmxlZCxoZS5hbHRJbnB1dC50eXBlPVwidGV4dFwiLGhlLmlucHV0LnR5cGU9XCJoaWRkZW5cIiwhaGUuY29uZmlnLnN0YXRpYyYmaGUuaW5wdXQucGFyZW50Tm9kZSYmaGUuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaGUuYWx0SW5wdXQsaGUuaW5wdXQubmV4dFNpYmxpbmcpKSxoZS5jb25maWcuYWxsb3dJbnB1dHx8aGUuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsXCJyZWFkb25seVwiKSxoZS5fcG9zaXRpb25FbGVtZW50PWhlLmNvbmZpZy5wb3NpdGlvbkVsZW1lbnR8fGhlLl9pbnB1dH1mdW5jdGlvbiBYKCl7dmFyIGU9aGUuY29uZmlnLmVuYWJsZVRpbWU/aGUuY29uZmlnLm5vQ2FsZW5kYXI/XCJ0aW1lXCI6XCJkYXRldGltZS1sb2NhbFwiOlwiZGF0ZVwiO2hlLm1vYmlsZUlucHV0PWRlKFwiaW5wdXRcIixoZS5pbnB1dC5jbGFzc05hbWUrXCIgZmxhdHBpY2tyLW1vYmlsZVwiKSxoZS5tb2JpbGVJbnB1dC5zdGVwPVwiYW55XCIsaGUubW9iaWxlSW5wdXQudGFiSW5kZXg9MSxoZS5tb2JpbGVJbnB1dC50eXBlPWUsaGUubW9iaWxlSW5wdXQuZGlzYWJsZWQ9aGUuaW5wdXQuZGlzYWJsZWQsaGUubW9iaWxlSW5wdXQucGxhY2Vob2xkZXI9aGUuaW5wdXQucGxhY2Vob2xkZXIsaGUubW9iaWxlRm9ybWF0U3RyPVwiZGF0ZXRpbWUtbG9jYWxcIj09PWU/XCJZLW0tZFxcXFxUSDppOlNcIjpcImRhdGVcIj09PWU/XCJZLW0tZFwiOlwiSDppOlNcIixoZS5zZWxlY3RlZERhdGVzLmxlbmd0aCYmKGhlLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZT1oZS5tb2JpbGVJbnB1dC52YWx1ZT1oZS5mb3JtYXREYXRlKGhlLnNlbGVjdGVkRGF0ZXNbMF0saGUubW9iaWxlRm9ybWF0U3RyKSksaGUuY29uZmlnLm1pbkRhdGUmJihoZS5tb2JpbGVJbnB1dC5taW49aGUuZm9ybWF0RGF0ZShoZS5jb25maWcubWluRGF0ZSxcIlktbS1kXCIpKSxoZS5jb25maWcubWF4RGF0ZSYmKGhlLm1vYmlsZUlucHV0Lm1heD1oZS5mb3JtYXREYXRlKGhlLmNvbmZpZy5tYXhEYXRlLFwiWS1tLWRcIikpLGhlLmlucHV0LnR5cGU9XCJoaWRkZW5cIixoZS5jb25maWcuYWx0SW5wdXQmJihoZS5hbHRJbnB1dC50eXBlPVwiaGlkZGVuXCIpO3RyeXtoZS5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShoZS5tb2JpbGVJbnB1dCxoZS5pbnB1dC5uZXh0U2libGluZyl9Y2F0Y2goZSl7fWhlLm1vYmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbihlKXtoZS5zZXREYXRlKGUudGFyZ2V0LnZhbHVlLCExLGhlLm1vYmlsZUZvcm1hdFN0ciksdGUoXCJDaGFuZ2VcIiksdGUoXCJDbG9zZVwiKX0pfWZ1bmN0aW9uIGVlKCl7aWYoaGUuaXNPcGVuKXJldHVybiBoZS5jbG9zZSgpO2hlLm9wZW4oKX1mdW5jdGlvbiB0ZShlLHQpe3ZhciBuPWhlLmNvbmZpZ1tcIm9uXCIrZV07aWYodm9pZCAwIT09biYmbi5sZW5ndGg+MClmb3IodmFyIGE9MDtuW2FdJiZhPG4ubGVuZ3RoO2ErKyluW2FdKGhlLnNlbGVjdGVkRGF0ZXMsaGUuaW5wdXQudmFsdWUsaGUsdCk7XCJDaGFuZ2VcIj09PWUmJihoZS5pbnB1dC5kaXNwYXRjaEV2ZW50KG5lKFwiY2hhbmdlXCIpKSxoZS5pbnB1dC5kaXNwYXRjaEV2ZW50KG5lKFwiaW5wdXRcIikpKX1mdW5jdGlvbiBuZShlKXtyZXR1cm4gaGUuX3N1cHBvcnRzRXZlbnRzP25ldyBFdmVudChlLHtidWJibGVzOiEwfSk6KGhlLl9bZStcIkV2ZW50XCJdPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIiksaGUuX1tlK1wiRXZlbnRcIl0uaW5pdEV2ZW50KGUsITAsITApLGhlLl9bZStcIkV2ZW50XCJdKX1mdW5jdGlvbiBhZShlKXtmb3IodmFyIHQ9MDt0PGhlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoO3QrKylpZigwPT09Z2UoaGUuc2VsZWN0ZWREYXRlc1t0XSxlKSlyZXR1cm5cIlwiK3Q7cmV0dXJuITF9ZnVuY3Rpb24gaWUoZSl7cmV0dXJuIShcInJhbmdlXCIhPT1oZS5jb25maWcubW9kZXx8aGUuc2VsZWN0ZWREYXRlcy5sZW5ndGg8MikmJihnZShlLGhlLnNlbGVjdGVkRGF0ZXNbMF0pPj0wJiZnZShlLGhlLnNlbGVjdGVkRGF0ZXNbMV0pPD0wKX1mdW5jdGlvbiByZSgpe2hlLmNvbmZpZy5ub0NhbGVuZGFyfHxoZS5pc01vYmlsZXx8IWhlLm1vbnRoTmF2fHwoaGUuY3VycmVudE1vbnRoRWxlbWVudC50ZXh0Q29udGVudD1oZS51dGlscy5tb250aFRvU3RyKGhlLmN1cnJlbnRNb250aCkrXCIgXCIsaGUuY3VycmVudFllYXJFbGVtZW50LnZhbHVlPWhlLmN1cnJlbnRZZWFyLGhlLl9oaWRlUHJldk1vbnRoQXJyb3c9aGUuY29uZmlnLm1pbkRhdGUmJihoZS5jdXJyZW50WWVhcj09PWhlLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCk/aGUuY3VycmVudE1vbnRoPD1oZS5jb25maWcubWluRGF0ZS5nZXRNb250aCgpOmhlLmN1cnJlbnRZZWFyPGhlLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpLGhlLl9oaWRlTmV4dE1vbnRoQXJyb3c9aGUuY29uZmlnLm1heERhdGUmJihoZS5jdXJyZW50WWVhcj09PWhlLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk/aGUuY3VycmVudE1vbnRoKzE+aGUuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKTpoZS5jdXJyZW50WWVhcj5oZS5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSl9ZnVuY3Rpb24gb2UoZSl7aWYoIWhlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKXJldHVybiBoZS5jbGVhcihlKTtoZS5pc01vYmlsZSYmKGhlLm1vYmlsZUlucHV0LnZhbHVlPWhlLnNlbGVjdGVkRGF0ZXMubGVuZ3RoP2hlLmZvcm1hdERhdGUoaGUubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLGhlLm1vYmlsZUZvcm1hdFN0cik6XCJcIik7dmFyIHQ9XCJyYW5nZVwiIT09aGUuY29uZmlnLm1vZGU/XCI7IFwiOmhlLmwxMG4ucmFuZ2VTZXBhcmF0b3I7aGUuaW5wdXQudmFsdWU9aGUuc2VsZWN0ZWREYXRlcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGhlLmZvcm1hdERhdGUoZSxoZS5jb25maWcuZGF0ZUZvcm1hdCl9KS5qb2luKHQpLGhlLmNvbmZpZy5hbHRJbnB1dCYmKGhlLmFsdElucHV0LnZhbHVlPWhlLnNlbGVjdGVkRGF0ZXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBoZS5mb3JtYXREYXRlKGUsaGUuY29uZmlnLmFsdEZvcm1hdCl9KS5qb2luKHQpKSx0ZShcIlZhbHVlVXBkYXRlXCIpfWZ1bmN0aW9uIGxlKGUpe3JldHVybiBNYXRoLm1heCgtMSxNYXRoLm1pbigxLGUud2hlZWxEZWx0YXx8LWUuZGVsdGFZKSl9ZnVuY3Rpb24gY2UoZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PWhlLmN1cnJlbnRZZWFyRWxlbWVudC5wYXJlbnROb2RlLmNvbnRhaW5zKGUudGFyZ2V0KTtpZihlLnRhcmdldD09PWhlLmN1cnJlbnRNb250aEVsZW1lbnR8fHQpe3ZhciBuPWxlKGUpO3Q/KE8oaGUuY3VycmVudFllYXIrbiksZS50YXJnZXQudmFsdWU9aGUuY3VycmVudFllYXIpOmhlLmNoYW5nZU1vbnRoKG4sITAsITEpfX1mdW5jdGlvbiBzZShlKXt2YXIgdD1oZS5wcmV2TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpLG49aGUubmV4dE1vbnRoTmF2LmNvbnRhaW5zKGUudGFyZ2V0KTt0fHxuP1QodD8tMToxKTplLnRhcmdldD09PWhlLmN1cnJlbnRZZWFyRWxlbWVudD8oZS5wcmV2ZW50RGVmYXVsdCgpLGhlLmN1cnJlbnRZZWFyRWxlbWVudC5zZWxlY3QoKSk6XCJhcnJvd1VwXCI9PT1lLnRhcmdldC5jbGFzc05hbWU/aGUuY2hhbmdlWWVhcihoZS5jdXJyZW50WWVhcisxKTpcImFycm93RG93blwiPT09ZS50YXJnZXQuY2xhc3NOYW1lJiZoZS5jaGFuZ2VZZWFyKGhlLmN1cnJlbnRZZWFyLTEpfWZ1bmN0aW9uIGRlKGUsdCxuKXt2YXIgYT13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gdD10fHxcIlwiLG49bnx8XCJcIixhLmNsYXNzTmFtZT10LHZvaWQgMCE9PW4mJihhLnRleHRDb250ZW50PW4pLGF9ZnVuY3Rpb24gdWUoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBBcnJheT9lOltlXX1mdW5jdGlvbiBmZShlLHQsbil7aWYobilyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHQpO2UuY2xhc3NMaXN0LnJlbW92ZSh0KX1mdW5jdGlvbiBtZShlLHQsbil7dmFyIGE9dm9pZCAwO3JldHVybiBmdW5jdGlvbigpe3ZhciBpPXRoaXMscj1hcmd1bWVudHM7Y2xlYXJUaW1lb3V0KGEpLGE9c2V0VGltZW91dChmdW5jdGlvbigpe2E9bnVsbCxufHxlLmFwcGx5KGkscil9LHQpLG4mJiFhJiZlLmFwcGx5KGkscil9fWZ1bmN0aW9uIGdlKGUsdCxuKXtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGUmJnQgaW5zdGFuY2VvZiBEYXRlJiYoITEhPT1uP25ldyBEYXRlKGUuZ2V0VGltZSgpKS5zZXRIb3VycygwLDAsMCwwKS1uZXcgRGF0ZSh0LmdldFRpbWUoKSkuc2V0SG91cnMoMCwwLDAsMCk6ZS5nZXRUaW1lKCktdC5nZXRUaW1lKCkpfWZ1bmN0aW9uIHBlKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD1cImtleWRvd25cIj09PWUudHlwZSxuPShlLnR5cGUsZS50eXBlLGUudGFyZ2V0KTtpZihoZS5hbVBNJiZlLnRhcmdldD09PWhlLmFtUE0pcmV0dXJuIGUudGFyZ2V0LnRleHRDb250ZW50PVtcIkFNXCIsXCJQTVwiXVtcIkFNXCI9PT1lLnRhcmdldC50ZXh0Q29udGVudHwwXTt2YXIgYT1OdW1iZXIobi5taW4pLGk9TnVtYmVyKG4ubWF4KSxyPU51bWJlcihuLnN0ZXApLG89cGFyc2VJbnQobi52YWx1ZSwxMCksbD1vK3IqKGUuZGVsdGF8fCh0PzM4PT09ZS53aGljaD8xOi0xOk1hdGgubWF4KC0xLE1hdGgubWluKDEsZS53aGVlbERlbHRhfHwtZS5kZWx0YVkpKXx8MCkpO2lmKHZvaWQgMCE9PW4udmFsdWUmJjI9PT1uLnZhbHVlLmxlbmd0aCl7dmFyIGM9bj09PWhlLmhvdXJFbGVtZW50LHM9bj09PWhlLm1pbnV0ZUVsZW1lbnQ7bDxhPyhsPWkrbCshYysoYyYmIWhlLmFtUE0pLHMmJmgobnVsbCwtMSxoZS5ob3VyRWxlbWVudCkpOmw+aSYmKGw9bj09PWhlLmhvdXJFbGVtZW50P2wtaS0haGUuYW1QTTphLHMmJmgobnVsbCwxLGhlLmhvdXJFbGVtZW50KSksaGUuYW1QTSYmYyYmKDE9PT1yP2wrbz09PTIzOk1hdGguYWJzKGwtbyk+cikmJihoZS5hbVBNLnRleHRDb250ZW50PVwiUE1cIj09PWhlLmFtUE0udGV4dENvbnRlbnQ/XCJBTVwiOlwiUE1cIiksbi52YWx1ZT1oZS5wYWQobCl9fXZhciBoZT10aGlzO3JldHVybiBoZS5fPXt9LGhlLl8uYWZ0ZXJEYXlBbmltPWIsaGUuY2hhbmdlTW9udGg9VCxoZS5jaGFuZ2VZZWFyPU8saGUuY2xlYXI9XyxoZS5jbG9zZT1TLGhlLl9jcmVhdGVFbGVtZW50PWRlLGhlLmRlc3Ryb3k9WSxoZS5pc0VuYWJsZWQ9QSxoZS5qdW1wVG9EYXRlPWcsaGUub3Blbj1ILGhlLnJlZHJhdz1LLGhlLnNldD0kLGhlLnNldERhdGU9RyxoZS50b2dnbGU9ZWUsZnVuY3Rpb24oKXtoZS5lbGVtZW50PWhlLmlucHV0PWUsaGUuaW5zdGFuY2VDb25maWc9dHx8e30saGUucGFyc2VEYXRlPUZsYXRwaWNrci5wcm90b3R5cGUucGFyc2VEYXRlLmJpbmQoaGUpLGhlLmZvcm1hdERhdGU9RmxhdHBpY2tyLnByb3RvdHlwZS5mb3JtYXREYXRlLmJpbmQoaGUpLHEoKSxXKCksQigpLFEoKSxWKCksWigpLGhlLmlzT3Blbj0hMSxoZS5pc01vYmlsZT0haGUuY29uZmlnLmRpc2FibGVNb2JpbGUmJiFoZS5jb25maWcuaW5saW5lJiZcInNpbmdsZVwiPT09aGUuY29uZmlnLm1vZGUmJiFoZS5jb25maWcuZGlzYWJsZS5sZW5ndGgmJiFoZS5jb25maWcuZW5hYmxlLmxlbmd0aCYmIWhlLmNvbmZpZy53ZWVrTnVtYmVycyYmL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGhlLmlzTW9iaWxlfHx2KCksZCgpLChoZS5zZWxlY3RlZERhdGVzLmxlbmd0aHx8aGUuY29uZmlnLm5vQ2FsZW5kYXIpJiYoaGUuY29uZmlnLmVuYWJsZVRpbWUmJnIoaGUuY29uZmlnLm5vQ2FsZW5kYXI/aGUubGF0ZXN0U2VsZWN0ZWREYXRlT2JqfHxoZS5jb25maWcubWluRGF0ZTpudWxsKSxvZSgpKSxoZS5jb25maWcud2Vla051bWJlcnMmJihoZS5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aD1oZS5kYXlzQ29udGFpbmVyLm9mZnNldFdpZHRoK2hlLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoK1wicHhcIiksaGUuc2hvd1RpbWVJbnB1dD1oZS5zZWxlY3RlZERhdGVzLmxlbmd0aD4wfHxoZS5jb25maWcubm9DYWxlbmRhcixoZS5pc01vYmlsZXx8SigpLHRlKFwiUmVhZHlcIil9KCksaGV9ZnVuY3Rpb24gX2ZsYXRwaWNrcihlLHQpe2Zvcih2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSxhPVtdLGk9MDtpPG4ubGVuZ3RoO2krKyl0cnl7bltpXS5fZmxhdHBpY2tyJiYobltpXS5fZmxhdHBpY2tyLmRlc3Ryb3koKSxuW2ldLl9mbGF0cGlja3I9bnVsbCksbltpXS5fZmxhdHBpY2tyPW5ldyBGbGF0cGlja3IobltpXSx0fHx7fSksYS5wdXNoKG5baV0uX2ZsYXRwaWNrcil9Y2F0Y2goZSl7Y29uc29sZS53YXJuKGUsZS5zdGFjayl9cmV0dXJuIDE9PT1hLmxlbmd0aD9hWzBdOmF9ZnVuY3Rpb24gZmxhdHBpY2tyKGUsdCl7cmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9fZmxhdHBpY2tyKFtlXSx0KTpfZmxhdHBpY2tyKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpLHQpfXZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBhIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sYSkmJihlW2FdPW5bYV0pfXJldHVybiBlfSxfdHlwZW9mPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9O0ZsYXRwaWNrci5wcm90b3R5cGU9e2Zvcm1hdHM6e1o6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9JU09TdHJpbmcoKX0sRDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5sMTBuLndlZWtkYXlzLnNob3J0aGFuZFt0aGlzLmZvcm1hdHMudyhlKV19LEY6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudXRpbHMubW9udGhUb1N0cih0aGlzLmZvcm1hdHMubihlKS0xLCExKX0sRzpmdW5jdGlvbihlKXtyZXR1cm4gRmxhdHBpY2tyLnByb3RvdHlwZS5wYWQoRmxhdHBpY2tyLnByb3RvdHlwZS5mb3JtYXRzLmgoZSkpfSxIOmZ1bmN0aW9uKGUpe3JldHVybiBGbGF0cGlja3IucHJvdG90eXBlLnBhZChlLmdldEhvdXJzKCkpfSxKOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldERhdGUoKSt0aGlzLmwxMG4ub3JkaW5hbChlLmdldERhdGUoKSl9LEs6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0SG91cnMoKT4xMT9cIlBNXCI6XCJBTVwifSxNOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnV0aWxzLm1vbnRoVG9TdHIoZS5nZXRNb250aCgpLCEwKX0sUzpmdW5jdGlvbihlKXtyZXR1cm4gRmxhdHBpY2tyLnByb3RvdHlwZS5wYWQoZS5nZXRTZWNvbmRzKCkpfSxVOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldFRpbWUoKS8xZTN9LFc6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY29uZmlnLmdldFdlZWsoZSl9LFk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0RnVsbFllYXIoKX0sZDpmdW5jdGlvbihlKXtyZXR1cm4gRmxhdHBpY2tyLnByb3RvdHlwZS5wYWQoZS5nZXREYXRlKCkpfSxoOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCklMTI/ZS5nZXRIb3VycygpJTEyOjEyfSxpOmZ1bmN0aW9uKGUpe3JldHVybiBGbGF0cGlja3IucHJvdG90eXBlLnBhZChlLmdldE1pbnV0ZXMoKSl9LGo6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0RGF0ZSgpfSxsOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmwxMG4ud2Vla2RheXMubG9uZ2hhbmRbZS5nZXREYXkoKV19LG06ZnVuY3Rpb24oZSl7cmV0dXJuIEZsYXRwaWNrci5wcm90b3R5cGUucGFkKGUuZ2V0TW9udGgoKSsxKX0sbjpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRNb250aCgpKzF9LHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0U2Vjb25kcygpfSx3OmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldERheSgpfSx5OmZ1bmN0aW9uKGUpe3JldHVybiBTdHJpbmcoZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMil9fSxmb3JtYXREYXRlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gdm9pZCAwIT09dGhpcy5jb25maWcmJnZvaWQgMCE9PXRoaXMuY29uZmlnLmZvcm1hdERhdGU/dGhpcy5jb25maWcuZm9ybWF0RGF0ZShlLHQpOnQuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uKHQsYSxpKXtyZXR1cm4gbi5mb3JtYXRzW3RdJiZcIlxcXFxcIiE9PWlbYS0xXT9uLmZvcm1hdHNbdF0oZSk6XCJcXFxcXCIhPT10P3Q6XCJcIn0pLmpvaW4oXCJcIil9LHJldkZvcm1hdDp7RDpmdW5jdGlvbigpe30sRjpmdW5jdGlvbihlLHQpe2Uuc2V0TW9udGgodGhpcy5sMTBuLm1vbnRocy5sb25naGFuZC5pbmRleE9mKHQpKX0sRzpmdW5jdGlvbihlLHQpe2Uuc2V0SG91cnMocGFyc2VGbG9hdCh0KSl9LEg6ZnVuY3Rpb24oZSx0KXtlLnNldEhvdXJzKHBhcnNlRmxvYXQodCkpfSxKOmZ1bmN0aW9uKGUsdCl7ZS5zZXREYXRlKHBhcnNlRmxvYXQodCkpfSxLOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5nZXRIb3VycygpOzEyIT09biYmZS5zZXRIb3VycyhuJTEyKzEyKi9wbS9pLnRlc3QodCkpfSxNOmZ1bmN0aW9uKGUsdCl7ZS5zZXRNb250aCh0aGlzLmwxMG4ubW9udGhzLnNob3J0aGFuZC5pbmRleE9mKHQpKX0sUzpmdW5jdGlvbihlLHQpe2Uuc2V0U2Vjb25kcyh0KX0sVTpmdW5jdGlvbihlLHQpe3JldHVybiBuZXcgRGF0ZSgxZTMqcGFyc2VGbG9hdCh0KSl9LFc6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD1wYXJzZUludCh0KSxuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksMCwyKzcqKHQtMSksMCwwLDAsMCwwKX0sWTpmdW5jdGlvbihlLHQpe2Uuc2V0RnVsbFllYXIodCl9LFo6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IERhdGUodCl9LGQ6ZnVuY3Rpb24oZSx0KXtlLnNldERhdGUocGFyc2VGbG9hdCh0KSl9LGg6ZnVuY3Rpb24oZSx0KXtlLnNldEhvdXJzKHBhcnNlRmxvYXQodCkpfSxpOmZ1bmN0aW9uKGUsdCl7ZS5zZXRNaW51dGVzKHBhcnNlRmxvYXQodCkpfSxqOmZ1bmN0aW9uKGUsdCl7ZS5zZXREYXRlKHBhcnNlRmxvYXQodCkpfSxsOmZ1bmN0aW9uKCl7fSxtOmZ1bmN0aW9uKGUsdCl7ZS5zZXRNb250aChwYXJzZUZsb2F0KHQpLTEpfSxuOmZ1bmN0aW9uKGUsdCl7ZS5zZXRNb250aChwYXJzZUZsb2F0KHQpLTEpfSxzOmZ1bmN0aW9uKGUsdCl7ZS5zZXRTZWNvbmRzKHBhcnNlRmxvYXQodCkpfSx3OmZ1bmN0aW9uKCl7fSx5OmZ1bmN0aW9uKGUsdCl7ZS5zZXRGdWxsWWVhcigyZTMrcGFyc2VGbG9hdCh0KSl9fSx0b2tlblJlZ2V4OntEOlwiKFxcXFx3KylcIixGOlwiKFxcXFx3KylcIixHOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsSDpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLEo6XCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixLOlwiKFxcXFx3KylcIixNOlwiKFxcXFx3KylcIixTOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsVTpcIiguKylcIixXOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsWTpcIihcXFxcZHs0fSlcIixaOlwiKC4rKVwiLGQ6XCIoXFxcXGRcXFxcZHxcXFxcZClcIixoOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsaTpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLGo6XCIoXFxcXGRcXFxcZHxcXFxcZClcIixsOlwiKFxcXFx3KylcIixtOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsbjpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLHM6XCIoXFxcXGRcXFxcZHxcXFxcZClcIix3OlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIseTpcIihcXFxcZHsyfSlcIn0scGFkOmZ1bmN0aW9uKGUpe3JldHVybihcIjBcIitlKS5zbGljZSgtMil9LHBhcnNlRGF0ZTpmdW5jdGlvbihlLHQsbil7aWYoIWUpcmV0dXJuIG51bGw7dmFyIGE9ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSllPW5ldyBEYXRlKGUuZ2V0VGltZSgpKTtlbHNlIGlmKHZvaWQgMCE9PWUudG9GaXhlZCllPW5ldyBEYXRlKGUpO2Vsc2V7dmFyIGk9dHx8KHRoaXMuY29uZmlnfHxmbGF0cGlja3IuZGVmYXVsdENvbmZpZykuZGF0ZUZvcm1hdDtpZihcInRvZGF5XCI9PT0oZT1TdHJpbmcoZSkudHJpbSgpKSllPW5ldyBEYXRlLG49ITA7ZWxzZSBpZigvWiQvLnRlc3QoZSl8fC9HTVQkLy50ZXN0KGUpKWU9bmV3IERhdGUoZSk7ZWxzZSBpZih0aGlzLmNvbmZpZyYmdGhpcy5jb25maWcucGFyc2VEYXRlKWU9dGhpcy5jb25maWcucGFyc2VEYXRlKGUsaSk7ZWxzZXtmb3IodmFyIHI9dGhpcy5jb25maWcmJnRoaXMuY29uZmlnLm5vQ2FsZW5kYXI/bmV3IERhdGUoKG5ldyBEYXRlKS5zZXRIb3VycygwLDAsMCwwKSk6bmV3IERhdGUoKG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLDAsMSwwLDAsMCwwKSxvPXZvaWQgMCxsPTAsYz0wLHM9XCJcIjtsPGkubGVuZ3RoO2wrKyl7dmFyIGQ9aVtsXSx1PVwiXFxcXFwiPT09ZCxmPVwiXFxcXFwiPT09aVtsLTFdfHx1O2lmKHRoaXMudG9rZW5SZWdleFtkXSYmIWYpe3MrPXRoaXMudG9rZW5SZWdleFtkXTt2YXIgbT1uZXcgUmVnRXhwKHMpLmV4ZWMoZSk7bSYmKG89ITApJiYocj10aGlzLnJldkZvcm1hdFtkXShyLG1bKytjXSl8fHIpfWVsc2UgdXx8KHMrPVwiLlwiKX1lPW8/cjpudWxsfX1yZXR1cm4gZSBpbnN0YW5jZW9mIERhdGU/KCEwPT09biYmZS5zZXRIb3VycygwLDAsMCwwKSxlKTooY29uc29sZS53YXJuKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGRhdGUgXCIrYSksY29uc29sZS5pbmZvKHRoaXMuZWxlbWVudCksbnVsbCl9fSxcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTEVsZW1lbnQmJihIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdHBpY2tyPU5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3I9ZnVuY3Rpb24oZSl7cmV0dXJuIF9mbGF0cGlja3IodGhpcyxlKX0sSFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrcj1mdW5jdGlvbihlKXtyZXR1cm4gX2ZsYXRwaWNrcihbdGhpc10sZSl9KSxmbGF0cGlja3IuZGVmYXVsdENvbmZpZz1GbGF0cGlja3IuZGVmYXVsdENvbmZpZz17bW9kZTpcInNpbmdsZVwiLHBvc2l0aW9uOlwiYXV0b1wiLGFuaW1hdGU6LTE9PT13aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSx3cmFwOiExLHdlZWtOdW1iZXJzOiExLGFsbG93SW5wdXQ6ITEsY2xpY2tPcGVuczohMCxjbG9zZU9uU2VsZWN0OiEwLHRpbWVfMjRocjohMSxlbmFibGVUaW1lOiExLG5vQ2FsZW5kYXI6ITEsZGF0ZUZvcm1hdDpcIlktbS1kXCIsYXJpYURhdGVGb3JtYXQ6XCJGIGosIFlcIixhbHRJbnB1dDohMSxhbHRJbnB1dENsYXNzOlwiZm9ybS1jb250cm9sIGlucHV0XCIsYWx0Rm9ybWF0OlwiRiBqLCBZXCIsZGVmYXVsdERhdGU6bnVsbCxtaW5EYXRlOm51bGwsbWF4RGF0ZTpudWxsLHBhcnNlRGF0ZTpudWxsLGZvcm1hdERhdGU6bnVsbCxnZXRXZWVrOmZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBEYXRlKGUuZ2V0VGltZSgpKSxuPW5ldyBEYXRlKHQuZ2V0RnVsbFllYXIoKSwwLDEpO3JldHVybiBNYXRoLmNlaWwoKCh0LW4pLzg2NGU1K24uZ2V0RGF5KCkrMSkvNyl9LGVuYWJsZTpbXSxkaXNhYmxlOltdLHNob3J0aGFuZEN1cnJlbnRNb250aDohMSxpbmxpbmU6ITEsc3RhdGljOiExLGFwcGVuZFRvOm51bGwscHJldkFycm93OlwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsbmV4dEFycm93OlwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J00xMy4yMDcgOC40NzJsLTcuODU0IDcuODU0LTAuNzA3LTAuNzA3IDcuMTQ2LTcuMTQ2LTcuMTQ2LTcuMTQ4IDAuNzA3LTAuNzA3IDcuODU0IDcuODU0eicgLz48L3N2Zz5cIixlbmFibGVTZWNvbmRzOiExLGhvdXJJbmNyZW1lbnQ6MSxtaW51dGVJbmNyZW1lbnQ6NSxkZWZhdWx0SG91cjoxMixkZWZhdWx0TWludXRlOjAsZGlzYWJsZU1vYmlsZTohMSxsb2NhbGU6XCJkZWZhdWx0XCIscGx1Z2luczpbXSxvbkNsb3NlOnZvaWQgMCxvbkNoYW5nZTp2b2lkIDAsb25EYXlDcmVhdGU6dm9pZCAwLG9uTW9udGhDaGFuZ2U6dm9pZCAwLG9uT3Blbjp2b2lkIDAsb25QYXJzZUNvbmZpZzp2b2lkIDAsb25SZWFkeTp2b2lkIDAsb25WYWx1ZVVwZGF0ZTp2b2lkIDAsb25ZZWFyQ2hhbmdlOnZvaWQgMCxvbktleURvd246dm9pZCAwfSxmbGF0cGlja3IubDEwbnM9e2VuOnt3ZWVrZGF5czp7c2hvcnRoYW5kOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25naGFuZDpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sbW9udGhzOntzaG9ydGhhbmQ6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSxsb25naGFuZDpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl19LGRheXNJbk1vbnRoOlszMSwyOCwzMSwzMCwzMSwzMCwzMSwzMSwzMCwzMSwzMCwzMV0sZmlyc3REYXlPZldlZWs6MCxvcmRpbmFsOmZ1bmN0aW9uKGUpe3ZhciB0PWUlMTAwO2lmKHQ+MyYmdDwyMSlyZXR1cm5cInRoXCI7c3dpdGNoKHQlMTApe2Nhc2UgMTpyZXR1cm5cInN0XCI7Y2FzZSAyOnJldHVyblwibmRcIjtjYXNlIDM6cmV0dXJuXCJyZFwiO2RlZmF1bHQ6cmV0dXJuXCJ0aFwifX0scmFuZ2VTZXBhcmF0b3I6XCIgdG8gXCIsd2Vla0FiYnJldmlhdGlvbjpcIldrXCIsc2Nyb2xsVGl0bGU6XCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsdG9nZ2xlVGl0bGU6XCJDbGljayB0byB0b2dnbGVcIn19LGZsYXRwaWNrci5sMTBucy5kZWZhdWx0PU9iamVjdC5jcmVhdGUoZmxhdHBpY2tyLmwxMG5zLmVuKSxmbGF0cGlja3IubG9jYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIF9leHRlbmRzKGZsYXRwaWNrci5sMTBucy5kZWZhdWx0LGV8fHt9KX0sZmxhdHBpY2tyLnNldERlZmF1bHRzPWZ1bmN0aW9uKGUpe3JldHVybiBfZXh0ZW5kcyhmbGF0cGlja3IuZGVmYXVsdENvbmZpZyxlfHx7fSl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkmJihqUXVlcnkuZm4uZmxhdHBpY2tyPWZ1bmN0aW9uKGUpe3JldHVybiBfZmxhdHBpY2tyKHRoaXMsZSl9KSxEYXRlLnByb3RvdHlwZS5mcF9pbmNyPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksdGhpcy5nZXRNb250aCgpLHRoaXMuZ2V0RGF0ZSgpK3BhcnNlSW50KGUsMTApKX0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWZsYXRwaWNrcik7XG5cblxuXG5cbiQoXCIuZGF0ZXBpY2tlclwiKS5mbGF0cGlja3Ioe1xuXHRlbmFibGVUaW1lOiB0cnVlLFxuXHRkaXNhYmxlTW9iaWxlOiBcInRydWVcIlxufSk7IiwiLypcbj09IG1hbGlodSBqcXVlcnkgY3VzdG9tIHNjcm9sbGJhciBwbHVnaW4gPT0gXG5WZXJzaW9uOiAzLjEuNSBcblBsdWdpbiBVUkk6IGh0dHA6Ly9tYW5vcy5tYWxpaHUuZ3IvanF1ZXJ5LWN1c3RvbS1jb250ZW50LXNjcm9sbGVyIFxuQXV0aG9yOiBtYWxpaHVcbkF1dGhvciBVUkk6IGh0dHA6Ly9tYW5vcy5tYWxpaHUuZ3JcbkxpY2Vuc2U6IE1JVCBMaWNlbnNlIChNSVQpXG4qL1xuXG4vKlxuQ29weXJpZ2h0IE1hbm9zIE1hbGlodXRzYWtpcyAoZW1haWw6IG1hbm9zQG1hbGlodS5ncilcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuKi9cblxuLypcblRoZSBjb2RlIGJlbG93IGlzIGZhaXJseSBsb25nLCBmdWxseSBjb21tZW50ZWQgYW5kIHNob3VsZCBiZSBub3JtYWxseSB1c2VkIGluIGRldmVsb3BtZW50LiBcbkZvciBwcm9kdWN0aW9uLCB1c2UgZWl0aGVyIHRoZSBtaW5pZmllZCBqcXVlcnkubUN1c3RvbVNjcm9sbGJhci5taW4uanMgc2NyaXB0IG9yIFxudGhlIHByb2R1Y3Rpb24tcmVhZHkganF1ZXJ5Lm1DdXN0b21TY3JvbGxiYXIuY29uY2F0Lm1pbi5qcyB3aGljaCBjb250YWlucyB0aGUgcGx1Z2luIFxuYW5kIGRlcGVuZGVuY2llcyAobWluaWZpZWQpLiBcbiovXG5cbihmdW5jdGlvbihmYWN0b3J5KXtcblx0aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKXtcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCJdLGZhY3RvcnkpO1xuXHR9ZWxzZSBpZih0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyl7XG5cdFx0bW9kdWxlLmV4cG9ydHM9ZmFjdG9yeTtcblx0fWVsc2V7XG5cdFx0ZmFjdG9yeShqUXVlcnksd2luZG93LGRvY3VtZW50KTtcblx0fVxufShmdW5jdGlvbigkKXtcbihmdW5jdGlvbihpbml0KXtcblx0dmFyIF9yanM9dHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kLCAvKiBSZXF1aXJlSlMgKi9cblx0XHRfbmpzPXR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMsIC8qIE5vZGVKUyAqL1xuXHRcdF9kbHA9KFwiaHR0cHM6XCI9PWRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sKSA/IFwiaHR0cHM6XCIgOiBcImh0dHA6XCIsIC8qIGxvY2F0aW9uIHByb3RvY29sICovXG5cdFx0X3VybD1cImNkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnktbW91c2V3aGVlbC8zLjEuMTMvanF1ZXJ5Lm1vdXNld2hlZWwubWluLmpzXCI7XG5cdGlmKCFfcmpzKXtcblx0XHRpZihfbmpzKXtcblx0XHRcdHJlcXVpcmUoXCJqcXVlcnktbW91c2V3aGVlbFwiKSgkKTtcblx0XHR9ZWxzZXtcblx0XHRcdC8qIGxvYWQganF1ZXJ5LW1vdXNld2hlZWwgcGx1Z2luICh2aWEgQ0ROKSBpZiBpdCdzIG5vdCBwcmVzZW50IG9yIG5vdCBsb2FkZWQgdmlhIFJlcXVpcmVKUyBcblx0XHRcdCh3b3JrcyB3aGVuIG1DdXN0b21TY3JvbGxiYXIgZm4gaXMgY2FsbGVkIG9uIHdpbmRvdyBsb2FkKSAqL1xuXHRcdFx0JC5ldmVudC5zcGVjaWFsLm1vdXNld2hlZWwgfHwgJChcImhlYWRcIikuYXBwZW5kKGRlY29kZVVSSShcIiUzQ3NjcmlwdCBzcmM9XCIrX2RscCtcIi8vXCIrX3VybCtcIiUzRSUzQy9zY3JpcHQlM0VcIikpO1xuXHRcdH1cblx0fVxuXHRpbml0KCk7XG59KGZ1bmN0aW9uKCl7XG5cdFxuXHQvKiBcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRQTFVHSU4gTkFNRVNQQUNFLCBQUkVGSVgsIERFRkFVTFQgU0VMRUNUT1IoUykgXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ki9cblx0XG5cdHZhciBwbHVnaW5OUz1cIm1DdXN0b21TY3JvbGxiYXJcIixcblx0XHRwbHVnaW5QZng9XCJtQ1NcIixcblx0XHRkZWZhdWx0U2VsZWN0b3I9XCIubUN1c3RvbVNjcm9sbGJhclwiLFxuXHRcblx0XG5cdFx0XG5cdFxuXHRcblx0LyogXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0REVGQVVMVCBPUFRJT05TIFxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCovXG5cdFxuXHRcdGRlZmF1bHRzPXtcblx0XHRcdC8qXG5cdFx0XHRzZXQgZWxlbWVudC9jb250ZW50IHdpZHRoL2hlaWdodCBwcm9ncmFtbWF0aWNhbGx5IFxuXHRcdFx0dmFsdWVzOiBib29sZWFuLCBwaXhlbHMsIHBlcmNlbnRhZ2UgXG5cdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XHRzZXRXaWR0aFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRzZXRIZWlnaHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdCovXG5cdFx0XHQvKlxuXHRcdFx0c2V0IHRoZSBpbml0aWFsIGNzcyB0b3AgcHJvcGVydHkgb2YgY29udGVudCAgXG5cdFx0XHR2YWx1ZXM6IHN0cmluZyAoZS5nLiBcIi0xMDBweFwiLCBcIjEwJVwiIGV0Yy4pXG5cdFx0XHQqL1xuXHRcdFx0c2V0VG9wOjAsXG5cdFx0XHQvKlxuXHRcdFx0c2V0IHRoZSBpbml0aWFsIGNzcyBsZWZ0IHByb3BlcnR5IG9mIGNvbnRlbnQgIFxuXHRcdFx0dmFsdWVzOiBzdHJpbmcgKGUuZy4gXCItMTAwcHhcIiwgXCIxMCVcIiBldGMuKVxuXHRcdFx0Ki9cblx0XHRcdHNldExlZnQ6MCxcblx0XHRcdC8qIFxuXHRcdFx0c2Nyb2xsYmFyIGF4aXMgKHZlcnRpY2FsIGFuZC9vciBob3Jpem9udGFsIHNjcm9sbGJhcnMpIFxuXHRcdFx0dmFsdWVzIChzdHJpbmcpOiBcInlcIiwgXCJ4XCIsIFwieXhcIlxuXHRcdFx0Ki9cblx0XHRcdGF4aXM6XCJ5XCIsXG5cdFx0XHQvKlxuXHRcdFx0cG9zaXRpb24gb2Ygc2Nyb2xsYmFyIHJlbGF0aXZlIHRvIGNvbnRlbnQgIFxuXHRcdFx0dmFsdWVzIChzdHJpbmcpOiBcImluc2lkZVwiLCBcIm91dHNpZGVcIiAoXCJvdXRzaWRlXCIgcmVxdWlyZXMgZWxlbWVudHMgd2l0aCBwb3NpdGlvbjpyZWxhdGl2ZSlcblx0XHRcdCovXG5cdFx0XHRzY3JvbGxiYXJQb3NpdGlvbjpcImluc2lkZVwiLFxuXHRcdFx0Lypcblx0XHRcdHNjcm9sbGluZyBpbmVydGlhXG5cdFx0XHR2YWx1ZXM6IGludGVnZXIgKG1pbGxpc2Vjb25kcylcblx0XHRcdCovXG5cdFx0XHRzY3JvbGxJbmVydGlhOjk1MCxcblx0XHRcdC8qIFxuXHRcdFx0YXV0by1hZGp1c3Qgc2Nyb2xsYmFyIGRyYWdnZXIgbGVuZ3RoXG5cdFx0XHR2YWx1ZXM6IGJvb2xlYW5cblx0XHRcdCovXG5cdFx0XHRhdXRvRHJhZ2dlckxlbmd0aDp0cnVlLFxuXHRcdFx0Lypcblx0XHRcdGF1dG8taGlkZSBzY3JvbGxiYXIgd2hlbiBpZGxlIFxuXHRcdFx0dmFsdWVzOiBib29sZWFuXG5cdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XHRhdXRvSGlkZVNjcm9sbGJhclx0XHRcdGZhbHNlXG5cdFx0XHQqL1xuXHRcdFx0Lypcblx0XHRcdGF1dG8tZXhwYW5kcyBzY3JvbGxiYXIgb24gbW91c2Utb3ZlciBhbmQgZHJhZ2dpbmdcblx0XHRcdHZhbHVlczogYm9vbGVhblxuXHRcdFx0XHRvcHRpb25cdFx0XHRcdFx0XHRkZWZhdWx0XG5cdFx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdFx0YXV0b0V4cGFuZFNjcm9sbGJhclx0XHRcdGZhbHNlXG5cdFx0XHQqL1xuXHRcdFx0Lypcblx0XHRcdGFsd2F5cyBzaG93IHNjcm9sbGJhciwgZXZlbiB3aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBzY3JvbGwgXG5cdFx0XHR2YWx1ZXM6IGludGVnZXIgKDA9ZGlzYWJsZSwgMT1hbHdheXMgc2hvdyBkcmFnZ2VyIHJhaWwgYW5kIGJ1dHRvbnMsIDI9YWx3YXlzIHNob3cgZHJhZ2dlciByYWlsLCBkcmFnZ2VyIGFuZCBidXR0b25zKSwgYm9vbGVhblxuXHRcdFx0Ki9cblx0XHRcdGFsd2F5c1Nob3dTY3JvbGxiYXI6MCxcblx0XHRcdC8qXG5cdFx0XHRzY3JvbGxpbmcgYWx3YXlzIHNuYXBzIHRvIGEgbXVsdGlwbGUgb2YgdGhpcyBudW1iZXIgaW4gcGl4ZWxzXG5cdFx0XHR2YWx1ZXM6IGludGVnZXIsIGFycmF5IChbeSx4XSlcblx0XHRcdFx0b3B0aW9uXHRcdFx0XHRcdFx0ZGVmYXVsdFxuXHRcdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdHNuYXBBbW91bnRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0Ki9cblx0XHRcdC8qXG5cdFx0XHR3aGVuIHNuYXBwaW5nLCBzbmFwIHdpdGggdGhpcyBudW1iZXIgaW4gcGl4ZWxzIGFzIGFuIG9mZnNldCBcblx0XHRcdHZhbHVlczogaW50ZWdlclxuXHRcdFx0Ki9cblx0XHRcdHNuYXBPZmZzZXQ6MCxcblx0XHRcdC8qIFxuXHRcdFx0bW91c2Utd2hlZWwgc2Nyb2xsaW5nXG5cdFx0XHQqL1xuXHRcdFx0bW91c2VXaGVlbDp7XG5cdFx0XHRcdC8qIFxuXHRcdFx0XHRlbmFibGUgbW91c2Utd2hlZWwgc2Nyb2xsaW5nXG5cdFx0XHRcdHZhbHVlczogYm9vbGVhblxuXHRcdFx0XHQqL1xuXHRcdFx0XHRlbmFibGU6dHJ1ZSxcblx0XHRcdFx0LyogXG5cdFx0XHRcdHNjcm9sbGluZyBhbW91bnQgaW4gcGl4ZWxzXG5cdFx0XHRcdHZhbHVlczogXCJhdXRvXCIsIGludGVnZXIgXG5cdFx0XHRcdCovXG5cdFx0XHRcdHNjcm9sbEFtb3VudDpcImF1dG9cIixcblx0XHRcdFx0LyogXG5cdFx0XHRcdG1vdXNlLXdoZWVsIHNjcm9sbGluZyBheGlzIFxuXHRcdFx0XHR0aGUgZGVmYXVsdCBzY3JvbGxpbmcgZGlyZWN0aW9uIHdoZW4gYm90aCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIGFyZSBwcmVzZW50IFxuXHRcdFx0XHR2YWx1ZXMgKHN0cmluZyk6IFwieVwiLCBcInhcIiBcblx0XHRcdFx0Ki9cblx0XHRcdFx0YXhpczpcInlcIixcblx0XHRcdFx0LyogXG5cdFx0XHRcdHByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIHdoaWNoIGF1dG9tYXRpY2FsbHkgc2Nyb2xscyB0aGUgcGFyZW50IGVsZW1lbnQocykgd2hlbiBlbmQgb2Ygc2Nyb2xsaW5nIGlzIHJlYWNoZWQgXG5cdFx0XHRcdHZhbHVlczogYm9vbGVhblxuXHRcdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdFx0cHJldmVudERlZmF1bHRcdFx0XHRcdG51bGxcblx0XHRcdFx0Ki9cblx0XHRcdFx0Lypcblx0XHRcdFx0dGhlIHJlcG9ydGVkIG1vdXNlLXdoZWVsIGRlbHRhIHZhbHVlLiBUaGUgbnVtYmVyIG9mIGxpbmVzICh0cmFuc2xhdGVkIHRvIHBpeGVscykgb25lIHdoZWVsIG5vdGNoIHNjcm9sbHMuICBcblx0XHRcdFx0dmFsdWVzOiBcImF1dG9cIiwgaW50ZWdlciBcblx0XHRcdFx0XCJhdXRvXCIgdXNlcyB0aGUgZGVmYXVsdCBPUy9icm93c2VyIHZhbHVlIFxuXHRcdFx0XHQqL1xuXHRcdFx0XHRkZWx0YUZhY3RvcjpcImF1dG9cIixcblx0XHRcdFx0Lypcblx0XHRcdFx0bm9ybWFsaXplIG1vdXNlLXdoZWVsIGRlbHRhIHRvIC0xIG9yIDEgKGRpc2FibGVzIG1vdXNlLXdoZWVsIGFjY2VsZXJhdGlvbikgXG5cdFx0XHRcdHZhbHVlczogYm9vbGVhblxuXHRcdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdFx0bm9ybWFsaXplRGVsdGFcdFx0XHRcdG51bGxcblx0XHRcdFx0Ki9cblx0XHRcdFx0Lypcblx0XHRcdFx0aW52ZXJ0IG1vdXNlLXdoZWVsIHNjcm9sbGluZyBkaXJlY3Rpb24gXG5cdFx0XHRcdHZhbHVlczogYm9vbGVhblxuXHRcdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdFx0aW52ZXJ0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHQqL1xuXHRcdFx0XHQvKlxuXHRcdFx0XHR0aGUgdGFncyB0aGF0IGRpc2FibGUgbW91c2Utd2hlZWwgd2hlbiBjdXJzb3IgaXMgb3ZlciB0aGVtXG5cdFx0XHRcdCovXG5cdFx0XHRcdGRpc2FibGVPdmVyOltcInNlbGVjdFwiLFwib3B0aW9uXCIsXCJrZXlnZW5cIixcImRhdGFsaXN0XCIsXCJ0ZXh0YXJlYVwiXVxuXHRcdFx0fSxcblx0XHRcdC8qIFxuXHRcdFx0c2Nyb2xsYmFyIGJ1dHRvbnNcblx0XHRcdCovXG5cdFx0XHRzY3JvbGxCdXR0b25zOnsgXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGVuYWJsZSBzY3JvbGxiYXIgYnV0dG9uc1xuXHRcdFx0XHR2YWx1ZXM6IGJvb2xlYW5cblx0XHRcdFx0XHRvcHRpb25cdFx0XHRcdFx0XHRkZWZhdWx0XG5cdFx0XHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XHRcdGVuYWJsZVx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0Ki9cblx0XHRcdFx0Lypcblx0XHRcdFx0c2Nyb2xsYmFyIGJ1dHRvbnMgc2Nyb2xsaW5nIHR5cGUgXG5cdFx0XHRcdHZhbHVlcyAoc3RyaW5nKTogXCJzdGVwbGVzc1wiLCBcInN0ZXBwZWRcIlxuXHRcdFx0XHQqL1xuXHRcdFx0XHRzY3JvbGxUeXBlOlwic3RlcGxlc3NcIixcblx0XHRcdFx0Lypcblx0XHRcdFx0c2Nyb2xsaW5nIGFtb3VudCBpbiBwaXhlbHNcblx0XHRcdFx0dmFsdWVzOiBcImF1dG9cIiwgaW50ZWdlciBcblx0XHRcdFx0Ki9cblx0XHRcdFx0c2Nyb2xsQW1vdW50OlwiYXV0b1wiXG5cdFx0XHRcdC8qXG5cdFx0XHRcdHRhYmluZGV4IG9mIHRoZSBzY3JvbGxiYXIgYnV0dG9uc1xuXHRcdFx0XHR2YWx1ZXM6IGZhbHNlLCBpbnRlZ2VyXG5cdFx0XHRcdFx0b3B0aW9uXHRcdFx0XHRcdFx0ZGVmYXVsdFxuXHRcdFx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdFx0XHR0YWJpbmRleFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdCovXG5cdFx0XHR9LFxuXHRcdFx0LyogXG5cdFx0XHRrZXlib2FyZCBzY3JvbGxpbmdcblx0XHRcdCovXG5cdFx0XHRrZXlib2FyZDp7IFxuXHRcdFx0XHQvKlxuXHRcdFx0XHRlbmFibGUgc2Nyb2xsaW5nIHZpYSBrZXlib2FyZFxuXHRcdFx0XHR2YWx1ZXM6IGJvb2xlYW5cblx0XHRcdFx0Ki9cblx0XHRcdFx0ZW5hYmxlOnRydWUsXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGtleWJvYXJkIHNjcm9sbGluZyB0eXBlIFxuXHRcdFx0XHR2YWx1ZXMgKHN0cmluZyk6IFwic3RlcGxlc3NcIiwgXCJzdGVwcGVkXCJcblx0XHRcdFx0Ki9cblx0XHRcdFx0c2Nyb2xsVHlwZTpcInN0ZXBsZXNzXCIsXG5cdFx0XHRcdC8qXG5cdFx0XHRcdHNjcm9sbGluZyBhbW91bnQgaW4gcGl4ZWxzXG5cdFx0XHRcdHZhbHVlczogXCJhdXRvXCIsIGludGVnZXIgXG5cdFx0XHRcdCovXG5cdFx0XHRcdHNjcm9sbEFtb3VudDpcImF1dG9cIlxuXHRcdFx0fSxcblx0XHRcdC8qXG5cdFx0XHRlbmFibGUgY29udGVudCB0b3VjaC1zd2lwZSBzY3JvbGxpbmcgXG5cdFx0XHR2YWx1ZXM6IGJvb2xlYW4sIGludGVnZXIsIHN0cmluZyAobnVtYmVyKVxuXHRcdFx0aW50ZWdlciB2YWx1ZXMgZGVmaW5lIHRoZSBheGlzLXNwZWNpZmljIG1pbmltdW0gYW1vdW50IHJlcXVpcmVkIGZvciBzY3JvbGxpbmcgbW9tZW50dW1cblx0XHRcdCovXG5cdFx0XHRjb250ZW50VG91Y2hTY3JvbGw6MjUsXG5cdFx0XHQvKlxuXHRcdFx0ZW5hYmxlL2Rpc2FibGUgZG9jdW1lbnQgKGRlZmF1bHQpIHRvdWNoLXN3aXBlIHNjcm9sbGluZyBcblx0XHRcdCovXG5cdFx0XHRkb2N1bWVudFRvdWNoU2Nyb2xsOnRydWUsXG5cdFx0XHQvKlxuXHRcdFx0YWR2YW5jZWQgb3B0aW9uIHBhcmFtZXRlcnNcblx0XHRcdCovXG5cdFx0XHRhZHZhbmNlZDp7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdGF1dG8tZXhwYW5kIGNvbnRlbnQgaG9yaXpvbnRhbGx5IChmb3IgXCJ4XCIgb3IgXCJ5eFwiIGF4aXMpIFxuXHRcdFx0XHR2YWx1ZXM6IGJvb2xlYW4sIGludGVnZXIgKHRoZSB2YWx1ZSAyIGZvcmNlcyB0aGUgbm9uIHNjcm9sbEhlaWdodC9zY3JvbGxXaWR0aCBtZXRob2QsIHRoZSB2YWx1ZSAzIGZvcmNlcyB0aGUgc2Nyb2xsSGVpZ2h0L3Njcm9sbFdpZHRoIG1ldGhvZClcblx0XHRcdFx0XHRvcHRpb25cdFx0XHRcdFx0XHRkZWZhdWx0XG5cdFx0XHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XHRcdGF1dG9FeHBhbmRIb3Jpem9udGFsU2Nyb2xsXHRudWxsXG5cdFx0XHRcdCovXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGF1dG8tc2Nyb2xsIHRvIGVsZW1lbnRzIHdpdGggZm9jdXNcblx0XHRcdFx0Ki9cblx0XHRcdFx0YXV0b1Njcm9sbE9uRm9jdXM6XCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3QsYnV0dG9uLGRhdGFsaXN0LGtleWdlbixhW3RhYmluZGV4XSxhcmVhLG9iamVjdCxbY29udGVudGVkaXRhYmxlPSd0cnVlJ11cIixcblx0XHRcdFx0Lypcblx0XHRcdFx0YXV0by11cGRhdGUgc2Nyb2xsYmFycyBvbiBjb250ZW50LCBlbGVtZW50IG9yIHZpZXdwb3J0IHJlc2l6ZSBcblx0XHRcdFx0c2hvdWxkIGJlIHRydWUgZm9yIGZsdWlkIGxheW91dHMvZWxlbWVudHMsIGFkZGluZy9yZW1vdmluZyBjb250ZW50IGR5bmFtaWNhbGx5LCBoaWRpbmcvc2hvd2luZyBlbGVtZW50cywgY29udGVudCB3aXRoIGltYWdlcyBldGMuIFxuXHRcdFx0XHR2YWx1ZXM6IGJvb2xlYW5cblx0XHRcdFx0Ki9cblx0XHRcdFx0dXBkYXRlT25Db250ZW50UmVzaXplOnRydWUsXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGF1dG8tdXBkYXRlIHNjcm9sbGJhcnMgZWFjaCB0aW1lIGVhY2ggaW1hZ2UgaW5zaWRlIHRoZSBlbGVtZW50IGlzIGZ1bGx5IGxvYWRlZCBcblx0XHRcdFx0dmFsdWVzOiBcImF1dG9cIiwgYm9vbGVhblxuXHRcdFx0XHQqL1xuXHRcdFx0XHR1cGRhdGVPbkltYWdlTG9hZDpcImF1dG9cIixcblx0XHRcdFx0Lypcblx0XHRcdFx0YXV0by11cGRhdGUgc2Nyb2xsYmFycyBiYXNlZCBvbiB0aGUgYW1vdW50IGFuZCBzaXplIGNoYW5nZXMgb2Ygc3BlY2lmaWMgc2VsZWN0b3JzIFxuXHRcdFx0XHR1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHNjcm9sbGJhcihzKSBhdXRvbWF0aWNhbGx5LCBlYWNoIHRpbWUgYSB0eXBlIG9mIGVsZW1lbnQgaXMgYWRkZWQsIHJlbW92ZWQgb3IgY2hhbmdlcyBpdHMgc2l6ZSBcblx0XHRcdFx0dmFsdWVzOiBib29sZWFuLCBzdHJpbmcgKGUuZy4gXCJ1bCBsaVwiIHdpbGwgYXV0by11cGRhdGUgc2Nyb2xsYmFycyBlYWNoIHRpbWUgbGlzdC1pdGVtcyBpbnNpZGUgdGhlIGVsZW1lbnQgYXJlIGNoYW5nZWQpIFxuXHRcdFx0XHRhIHZhbHVlIG9mIHRydWUgKGJvb2xlYW4pIHdpbGwgYXV0by11cGRhdGUgc2Nyb2xsYmFycyBlYWNoIHRpbWUgYW55IGVsZW1lbnQgaXMgY2hhbmdlZFxuXHRcdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdFx0dXBkYXRlT25TZWxlY3RvckNoYW5nZVx0XHRudWxsXG5cdFx0XHRcdCovXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGV4dHJhIHNlbGVjdG9ycyB0aGF0J2xsIGFsbG93IHNjcm9sbGJhciBkcmFnZ2luZyB1cG9uIG1vdXNlbW92ZS91cCwgcG9pbnRlcm1vdmUvdXAsIHRvdWNoZW5kIGV0Yy4gKGUuZy4gXCJzZWxlY3Rvci0xLCBzZWxlY3Rvci0yXCIpXG5cdFx0XHRcdFx0b3B0aW9uXHRcdFx0XHRcdFx0ZGVmYXVsdFxuXHRcdFx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdFx0XHRleHRyYURyYWdnYWJsZVNlbGVjdG9yc1x0XHRudWxsXG5cdFx0XHRcdCovXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGV4dHJhIHNlbGVjdG9ycyB0aGF0J2xsIHJlbGVhc2Ugc2Nyb2xsYmFyIGRyYWdnaW5nIHVwb24gbW91c2V1cCwgcG9pbnRlcnVwLCB0b3VjaGVuZCBldGMuIChlLmcuIFwic2VsZWN0b3ItMSwgc2VsZWN0b3ItMlwiKVxuXHRcdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdFx0cmVsZWFzZURyYWdnYWJsZVNlbGVjdG9yc1x0bnVsbFxuXHRcdFx0XHQqL1xuXHRcdFx0XHQvKlxuXHRcdFx0XHRhdXRvLXVwZGF0ZSB0aW1lb3V0IFxuXHRcdFx0XHR2YWx1ZXM6IGludGVnZXIgKG1pbGxpc2Vjb25kcylcblx0XHRcdFx0Ki9cblx0XHRcdFx0YXV0b1VwZGF0ZVRpbWVvdXQ6NjBcblx0XHRcdH0sXG5cdFx0XHQvKiBcblx0XHRcdHNjcm9sbGJhciB0aGVtZSBcblx0XHRcdHZhbHVlczogc3RyaW5nIChzZWUgQ1NTL3BsdWdpbiBVUkkgZm9yIGEgbGlzdCBvZiByZWFkeS10by11c2UgdGhlbWVzKVxuXHRcdFx0Ki9cblx0XHRcdHRoZW1lOlwibGlnaHRcIixcblx0XHRcdC8qXG5cdFx0XHR1c2VyIGRlZmluZWQgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0XHQqL1xuXHRcdFx0Y2FsbGJhY2tzOntcblx0XHRcdFx0Lypcblx0XHRcdFx0QXZhaWxhYmxlIGNhbGxiYWNrczogXG5cdFx0XHRcdFx0Y2FsbGJhY2tcdFx0XHRcdFx0ZGVmYXVsdFxuXHRcdFx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdFx0XHRvbkNyZWF0ZVx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0b25Jbml0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdG9uU2Nyb2xsU3RhcnRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHRvblNjcm9sbFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0b25Ub3RhbFNjcm9sbFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdG9uVG90YWxTY3JvbGxCYWNrXHRcdFx0bnVsbFxuXHRcdFx0XHRcdHdoaWxlU2Nyb2xsaW5nXHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0b25PdmVyZmxvd1lcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdG9uT3ZlcmZsb3dYXHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHRvbk92ZXJmbG93WU5vbmVcdFx0XHRcdG51bGxcblx0XHRcdFx0XHRvbk92ZXJmbG93WE5vbmVcdFx0XHRcdG51bGxcblx0XHRcdFx0XHRvbkltYWdlTG9hZFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0b25TZWxlY3RvckNoYW5nZVx0XHRcdG51bGxcblx0XHRcdFx0XHRvbkJlZm9yZVVwZGF0ZVx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdG9uVXBkYXRlXHRcdFx0XHRcdG51bGxcblx0XHRcdFx0Ki9cblx0XHRcdFx0b25Ub3RhbFNjcm9sbE9mZnNldDowLFxuXHRcdFx0XHRvblRvdGFsU2Nyb2xsQmFja09mZnNldDowLFxuXHRcdFx0XHRhbHdheXNUcmlnZ2VyT2Zmc2V0czp0cnVlXG5cdFx0XHR9XG5cdFx0XHQvKlxuXHRcdFx0YWRkIHNjcm9sbGJhcihzKSBvbiBhbGwgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgc2VsZWN0b3IsIG5vdyBhbmQgaW4gdGhlIGZ1dHVyZSBcblx0XHRcdHZhbHVlczogYm9vbGVhbiwgc3RyaW5nIFxuXHRcdFx0c3RyaW5nIHZhbHVlczogXCJvblwiIChlbmFibGUpLCBcIm9uY2VcIiAoZGlzYWJsZSBhZnRlciBmaXJzdCBpbnZvY2F0aW9uKSwgXCJvZmZcIiAoZGlzYWJsZSlcblx0XHRcdGxpdmVTZWxlY3RvciB2YWx1ZXM6IHN0cmluZyAoc2VsZWN0b3IpXG5cdFx0XHRcdG9wdGlvblx0XHRcdFx0XHRcdGRlZmF1bHRcblx0XHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XHRsaXZlXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0bGl2ZVNlbGVjdG9yXHRcdFx0XHRudWxsXG5cdFx0XHQqL1xuXHRcdH0sXG5cdFxuXHRcblx0XG5cdFxuXHRcblx0LyogXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0VkFSUywgQ09OU1RBTlRTIFxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCovXG5cdFxuXHRcdHRvdGFsSW5zdGFuY2VzPTAsIC8qIHBsdWdpbiBpbnN0YW5jZXMgYW1vdW50ICovXG5cdFx0bGl2ZVRpbWVycz17fSwgLyogbGl2ZSBvcHRpb24gdGltZXJzICovXG5cdFx0b2xkSUU9KHdpbmRvdy5hdHRhY2hFdmVudCAmJiAhd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpID8gMSA6IDAsIC8qIGRldGVjdCBJRSA8IDkgKi9cblx0XHR0b3VjaEFjdGl2ZT1mYWxzZSx0b3VjaGFibGUsIC8qIGdsb2JhbCB0b3VjaCB2YXJzIChmb3IgdG91Y2ggYW5kIHBvaW50ZXIgZXZlbnRzKSAqL1xuXHRcdC8qIGdlbmVyYWwgcGx1Z2luIGNsYXNzZXMgKi9cblx0XHRjbGFzc2VzPVtcblx0XHRcdFwibUNTQl9kcmFnZ2VyX29uRHJhZ1wiLFwibUNTQl9zY3JvbGxUb29sc19vbkRyYWdcIixcIm1DU19pbWdfbG9hZGVkXCIsXCJtQ1NfZGlzYWJsZWRcIixcIm1DU19kZXN0cm95ZWRcIixcIm1DU19ub19zY3JvbGxiYXJcIixcblx0XHRcdFwibUNTLWF1dG9IaWRlXCIsXCJtQ1MtZGlyLXJ0bFwiLFwibUNTX25vX3Njcm9sbGJhcl95XCIsXCJtQ1Nfbm9fc2Nyb2xsYmFyX3hcIixcIm1DU195X2hpZGRlblwiLFwibUNTX3hfaGlkZGVuXCIsXCJtQ1NCX2RyYWdnZXJDb250YWluZXJcIixcblx0XHRcdFwibUNTQl9idXR0b25VcFwiLFwibUNTQl9idXR0b25Eb3duXCIsXCJtQ1NCX2J1dHRvbkxlZnRcIixcIm1DU0JfYnV0dG9uUmlnaHRcIlxuXHRcdF0sXG5cdFx0XG5cdFxuXHRcblx0XG5cdFxuXHQvKiBcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRNRVRIT0RTIFxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCovXG5cdFxuXHRcdG1ldGhvZHM9e1xuXHRcdFx0XG5cdFx0XHQvKiBcblx0XHRcdHBsdWdpbiBpbml0aWFsaXphdGlvbiBtZXRob2QgXG5cdFx0XHRjcmVhdGVzIHRoZSBzY3JvbGxiYXIocyksIHBsdWdpbiBkYXRhIG9iamVjdCBhbmQgb3B0aW9uc1xuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ki9cblx0XHRcdFxuXHRcdFx0aW5pdDpmdW5jdGlvbihvcHRpb25zKXtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBvcHRpb25zPSQuZXh0ZW5kKHRydWUse30sZGVmYXVsdHMsb3B0aW9ucyksXG5cdFx0XHRcdFx0c2VsZWN0b3I9X3NlbGVjdG9yLmNhbGwodGhpcyk7IC8qIHZhbGlkYXRlIHNlbGVjdG9yICovXG5cdFx0XHRcdFxuXHRcdFx0XHQvKiBcblx0XHRcdFx0aWYgbGl2ZSBvcHRpb24gaXMgZW5hYmxlZCwgbW9uaXRvciBmb3IgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgc2VsZWN0b3IgYW5kIFxuXHRcdFx0XHRhcHBseSBzY3JvbGxiYXIocykgd2hlbiBmb3VuZCAobm93IGFuZCBpbiB0aGUgZnV0dXJlKSBcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYob3B0aW9ucy5saXZlKXtcblx0XHRcdFx0XHR2YXIgbGl2ZVNlbGVjdG9yPW9wdGlvbnMubGl2ZVNlbGVjdG9yIHx8IHRoaXMuc2VsZWN0b3IgfHwgZGVmYXVsdFNlbGVjdG9yLCAvKiBsaXZlIHNlbGVjdG9yKHMpICovXG5cdFx0XHRcdFx0XHQkbGl2ZVNlbGVjdG9yPSQobGl2ZVNlbGVjdG9yKTsgLyogbGl2ZSBzZWxlY3RvcihzKSBhcyBqcXVlcnkgb2JqZWN0ICovXG5cdFx0XHRcdFx0aWYob3B0aW9ucy5saXZlPT09XCJvZmZcIil7XG5cdFx0XHRcdFx0XHQvKiBcblx0XHRcdFx0XHRcdGRpc2FibGUgbGl2ZSBpZiByZXF1ZXN0ZWQgXG5cdFx0XHRcdFx0XHR1c2FnZTogJChzZWxlY3RvcikubUN1c3RvbVNjcm9sbGJhcih7bGl2ZTpcIm9mZlwifSk7IFxuXHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdHJlbW92ZUxpdmVUaW1lcnMobGl2ZVNlbGVjdG9yKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGl2ZVRpbWVyc1tsaXZlU2VsZWN0b3JdPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdC8qIGNhbGwgbUN1c3RvbVNjcm9sbGJhciBmbiBvbiBsaXZlIHNlbGVjdG9yKHMpIGV2ZXJ5IGhhbGYtc2Vjb25kICovXG5cdFx0XHRcdFx0XHQkbGl2ZVNlbGVjdG9yLm1DdXN0b21TY3JvbGxiYXIob3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRpZihvcHRpb25zLmxpdmU9PT1cIm9uY2VcIiAmJiAkbGl2ZVNlbGVjdG9yLmxlbmd0aCl7XG5cdFx0XHRcdFx0XHRcdC8qIGRpc2FibGUgbGl2ZSBhZnRlciBmaXJzdCBpbnZvY2F0aW9uICovXG5cdFx0XHRcdFx0XHRcdHJlbW92ZUxpdmVUaW1lcnMobGl2ZVNlbGVjdG9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LDUwMCk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHJlbW92ZUxpdmVUaW1lcnMobGl2ZVNlbGVjdG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Lyogb3B0aW9ucyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IChmb3IgdmVyc2lvbnMgPCAzLjAuMCkgYW5kIG5vcm1hbGl6YXRpb24gKi9cblx0XHRcdFx0b3B0aW9ucy5zZXRXaWR0aD0ob3B0aW9ucy5zZXRfd2lkdGgpID8gb3B0aW9ucy5zZXRfd2lkdGggOiBvcHRpb25zLnNldFdpZHRoO1xuXHRcdFx0XHRvcHRpb25zLnNldEhlaWdodD0ob3B0aW9ucy5zZXRfaGVpZ2h0KSA/IG9wdGlvbnMuc2V0X2hlaWdodCA6IG9wdGlvbnMuc2V0SGVpZ2h0O1xuXHRcdFx0XHRvcHRpb25zLmF4aXM9KG9wdGlvbnMuaG9yaXpvbnRhbFNjcm9sbCkgPyBcInhcIiA6IF9maW5kQXhpcyhvcHRpb25zLmF4aXMpO1xuXHRcdFx0XHRvcHRpb25zLnNjcm9sbEluZXJ0aWE9b3B0aW9ucy5zY3JvbGxJbmVydGlhPjAgJiYgb3B0aW9ucy5zY3JvbGxJbmVydGlhPDE3ID8gMTcgOiBvcHRpb25zLnNjcm9sbEluZXJ0aWE7XG5cdFx0XHRcdGlmKHR5cGVvZiBvcHRpb25zLm1vdXNlV2hlZWwhPT1cIm9iamVjdFwiICYmICBvcHRpb25zLm1vdXNlV2hlZWw9PXRydWUpeyAvKiBvbGQgc2Nob29sIG1vdXNlV2hlZWwgb3B0aW9uIChub24tb2JqZWN0KSAqL1xuXHRcdFx0XHRcdG9wdGlvbnMubW91c2VXaGVlbD17ZW5hYmxlOnRydWUsc2Nyb2xsQW1vdW50OlwiYXV0b1wiLGF4aXM6XCJ5XCIscHJldmVudERlZmF1bHQ6ZmFsc2UsZGVsdGFGYWN0b3I6XCJhdXRvXCIsbm9ybWFsaXplRGVsdGE6ZmFsc2UsaW52ZXJ0OmZhbHNlfVxuXHRcdFx0XHR9XG5cdFx0XHRcdG9wdGlvbnMubW91c2VXaGVlbC5zY3JvbGxBbW91bnQ9IW9wdGlvbnMubW91c2VXaGVlbFBpeGVscyA/IG9wdGlvbnMubW91c2VXaGVlbC5zY3JvbGxBbW91bnQgOiBvcHRpb25zLm1vdXNlV2hlZWxQaXhlbHM7XG5cdFx0XHRcdG9wdGlvbnMubW91c2VXaGVlbC5ub3JtYWxpemVEZWx0YT0hb3B0aW9ucy5hZHZhbmNlZC5ub3JtYWxpemVNb3VzZVdoZWVsRGVsdGEgPyBvcHRpb25zLm1vdXNlV2hlZWwubm9ybWFsaXplRGVsdGEgOiBvcHRpb25zLmFkdmFuY2VkLm5vcm1hbGl6ZU1vdXNlV2hlZWxEZWx0YTtcblx0XHRcdFx0b3B0aW9ucy5zY3JvbGxCdXR0b25zLnNjcm9sbFR5cGU9X2ZpbmRTY3JvbGxCdXR0b25zVHlwZShvcHRpb25zLnNjcm9sbEJ1dHRvbnMuc2Nyb2xsVHlwZSk7IFxuXHRcdFx0XHRcblx0XHRcdFx0X3RoZW1lKG9wdGlvbnMpOyAvKiB0aGVtZS1zcGVjaWZpYyBvcHRpb25zICovXG5cdFx0XHRcdFxuXHRcdFx0XHQvKiBwbHVnaW4gY29uc3RydWN0b3IgKi9cblx0XHRcdFx0cmV0dXJuICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgJHRoaXM9JCh0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZighJHRoaXMuZGF0YShwbHVnaW5QZngpKXsgLyogcHJldmVudCBtdWx0aXBsZSBpbnN0YW50aWF0aW9ucyAqL1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Lyogc3RvcmUgb3B0aW9ucyBhbmQgY3JlYXRlIG9iamVjdHMgaW4ganF1ZXJ5IGRhdGEgKi9cblx0XHRcdFx0XHRcdCR0aGlzLmRhdGEocGx1Z2luUGZ4LHtcblx0XHRcdFx0XHRcdFx0aWR4OisrdG90YWxJbnN0YW5jZXMsIC8qIGluc3RhbmNlIGluZGV4ICovXG5cdFx0XHRcdFx0XHRcdG9wdDpvcHRpb25zLCAvKiBvcHRpb25zICovXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFJhdGlvOnt5Om51bGwseDpudWxsfSwgLyogc2Nyb2xsYmFyIHRvIGNvbnRlbnQgcmF0aW8gKi9cblx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dlZDpudWxsLCAvKiBvdmVyZmxvd2VkIGF4aXMgKi9cblx0XHRcdFx0XHRcdFx0Y29udGVudFJlc2V0Ont5Om51bGwseDpudWxsfSwgLyogb2JqZWN0IHRvIGNoZWNrIHdoZW4gY29udGVudCByZXNldHMgKi9cblx0XHRcdFx0XHRcdFx0YmluZEV2ZW50czpmYWxzZSwgLyogb2JqZWN0IHRvIGNoZWNrIGlmIGV2ZW50cyBhcmUgYm91bmQgKi9cblx0XHRcdFx0XHRcdFx0dHdlZW5SdW5uaW5nOmZhbHNlLCAvKiBvYmplY3QgdG8gY2hlY2sgaWYgdHdlZW4gaXMgcnVubmluZyAqL1xuXHRcdFx0XHRcdFx0XHRzZXF1ZW50aWFsOnt9LCAvKiBzZXF1ZW50aWFsIHNjcm9sbGluZyBvYmplY3QgKi9cblx0XHRcdFx0XHRcdFx0bGFuZ0RpcjokdGhpcy5jc3MoXCJkaXJlY3Rpb25cIiksIC8qIGRldGVjdC9zdG9yZSBkaXJlY3Rpb24gKGx0ciBvciBydGwpICovXG5cdFx0XHRcdFx0XHRcdGNiT2Zmc2V0czpudWxsLCAvKiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBjYWxsYmFjayBvZmZzZXRzIGFsd2F5cyB0cmlnZ2VyICovXG5cdFx0XHRcdFx0XHRcdC8qIFxuXHRcdFx0XHRcdFx0XHRvYmplY3QgdG8gY2hlY2sgaG93IHNjcm9sbGluZyBldmVudHMgd2hlcmUgbGFzdCB0cmlnZ2VyZWQgXG5cdFx0XHRcdFx0XHRcdFwiaW50ZXJuYWxcIiAoZGVmYXVsdCAtIHRyaWdnZXJlZCBieSB0aGlzIHNjcmlwdCksIFwiZXh0ZXJuYWxcIiAodHJpZ2dlcmVkIGJ5IG90aGVyIHNjcmlwdHMsIGUuZy4gdmlhIHNjcm9sbFRvIG1ldGhvZCkgXG5cdFx0XHRcdFx0XHRcdHVzYWdlOiBvYmplY3QuZGF0YShcIm1DU1wiKS50cmlnZ2VyXG5cdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXI6bnVsbCxcblx0XHRcdFx0XHRcdFx0LyogXG5cdFx0XHRcdFx0XHRcdG9iamVjdCB0byBjaGVjayBmb3IgY2hhbmdlcyBpbiBlbGVtZW50cyBpbiBvcmRlciB0byBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIGF1dG9tYXRpY2FsbHkgXG5cdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdHBvbGw6e3NpemU6e286MCxuOjB9LGltZzp7bzowLG46MH0sY2hhbmdlOntvOjAsbjowfX1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR2YXIgZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0XHRcdFx0LyogSFRNTCBkYXRhIGF0dHJpYnV0ZXMgKi9cblx0XHRcdFx0XHRcdFx0aHRtbERhdGFBeGlzPSR0aGlzLmRhdGEoXCJtY3MtYXhpc1wiKSxodG1sRGF0YVNiUG9zPSR0aGlzLmRhdGEoXCJtY3Mtc2Nyb2xsYmFyLXBvc2l0aW9uXCIpLGh0bWxEYXRhVGhlbWU9JHRoaXMuZGF0YShcIm1jcy10aGVtZVwiKTtcblx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdGlmKGh0bWxEYXRhQXhpcyl7by5heGlzPWh0bWxEYXRhQXhpczt9IC8qIHVzYWdlIGV4YW1wbGU6IGRhdGEtbWNzLWF4aXM9XCJ5XCIgKi9cblx0XHRcdFx0XHRcdGlmKGh0bWxEYXRhU2JQb3Mpe28uc2Nyb2xsYmFyUG9zaXRpb249aHRtbERhdGFTYlBvczt9IC8qIHVzYWdlIGV4YW1wbGU6IGRhdGEtbWNzLXNjcm9sbGJhci1wb3NpdGlvbj1cIm91dHNpZGVcIiAqL1xuXHRcdFx0XHRcdFx0aWYoaHRtbERhdGFUaGVtZSl7IC8qIHVzYWdlIGV4YW1wbGU6IGRhdGEtbWNzLXRoZW1lPVwibWluaW1hbFwiICovXG5cdFx0XHRcdFx0XHRcdG8udGhlbWU9aHRtbERhdGFUaGVtZTtcblx0XHRcdFx0XHRcdFx0X3RoZW1lKG8pOyAvKiB0aGVtZS1zcGVjaWZpYyBvcHRpb25zICovXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9wbHVnaW5NYXJrdXAuY2FsbCh0aGlzKTsgLyogYWRkIHBsdWdpbiBtYXJrdXAgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYoZCAmJiBvLmNhbGxiYWNrcy5vbkNyZWF0ZSAmJiB0eXBlb2Ygby5jYWxsYmFja3Mub25DcmVhdGU9PT1cImZ1bmN0aW9uXCIpe28uY2FsbGJhY2tzLm9uQ3JlYXRlLmNhbGwodGhpcyk7fSAvKiBjYWxsYmFja3M6IG9uQ3JlYXRlICovXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdCQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXIgaW1nOm5vdCguXCIrY2xhc3Nlc1syXStcIilcIikuYWRkQ2xhc3MoY2xhc3Nlc1syXSk7IC8qIGZsYWcgbG9hZGVkIGltYWdlcyAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRtZXRob2RzLnVwZGF0ZS5jYWxsKG51bGwsJHRoaXMpOyAvKiBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kICovXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0LyogXG5cdFx0XHRwbHVnaW4gdXBkYXRlIG1ldGhvZCBcblx0XHRcdHVwZGF0ZXMgY29udGVudCBhbmQgc2Nyb2xsYmFyKHMpIHZhbHVlcywgZXZlbnRzIGFuZCBzdGF0dXMgXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHR1c2FnZTogJChzZWxlY3RvcikubUN1c3RvbVNjcm9sbGJhcihcInVwZGF0ZVwiKTtcblx0XHRcdCovXG5cdFx0XHRcblx0XHRcdHVwZGF0ZTpmdW5jdGlvbihlbCxjYil7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgc2VsZWN0b3I9ZWwgfHwgX3NlbGVjdG9yLmNhbGwodGhpcyk7IC8qIHZhbGlkYXRlIHNlbGVjdG9yICovXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciAkdGhpcz0kKHRoaXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKCR0aGlzLmRhdGEocGx1Z2luUGZ4KSl7IC8qIGNoZWNrIGlmIHBsdWdpbiBoYXMgaW5pdGlhbGl6ZWQgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0dmFyIGQ9JHRoaXMuZGF0YShwbHVnaW5QZngpLG89ZC5vcHQsXG5cdFx0XHRcdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIiksXG5cdFx0XHRcdFx0XHRcdG1DdXN0b21TY3JvbGxCb3g9JChcIiNtQ1NCX1wiK2QuaWR4KSxcblx0XHRcdFx0XHRcdFx0bUNTQl9kcmFnZ2VyPVskKFwiI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbFwiKSwkKFwiI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl9ob3Jpem9udGFsXCIpXTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYoIW1DU0JfY29udGFpbmVyLmxlbmd0aCl7cmV0dXJuO31cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYoZC50d2VlblJ1bm5pbmcpe19zdG9wKCR0aGlzKTt9IC8qIHN0b3AgYW55IHJ1bm5pbmcgdHdlZW5zIHdoaWxlIHVwZGF0aW5nICovXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKGNiICYmIGQgJiYgby5jYWxsYmFja3Mub25CZWZvcmVVcGRhdGUgJiYgdHlwZW9mIG8uY2FsbGJhY2tzLm9uQmVmb3JlVXBkYXRlPT09XCJmdW5jdGlvblwiKXtvLmNhbGxiYWNrcy5vbkJlZm9yZVVwZGF0ZS5jYWxsKHRoaXMpO30gLyogY2FsbGJhY2tzOiBvbkJlZm9yZVVwZGF0ZSAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvKiBpZiBlbGVtZW50IHdhcyBkaXNhYmxlZCBvciBkZXN0cm95ZWQsIHJlbW92ZSBjbGFzcyhlcykgKi9cblx0XHRcdFx0XHRcdGlmKCR0aGlzLmhhc0NsYXNzKGNsYXNzZXNbM10pKXskdGhpcy5yZW1vdmVDbGFzcyhjbGFzc2VzWzNdKTt9XG5cdFx0XHRcdFx0XHRpZigkdGhpcy5oYXNDbGFzcyhjbGFzc2VzWzRdKSl7JHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3Nlc1s0XSk7fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvKiBjc3MgZmxleGJveCBmaXgsIGRldGVjdC9zZXQgbWF4LWhlaWdodCAqL1xuXHRcdFx0XHRcdFx0bUN1c3RvbVNjcm9sbEJveC5jc3MoXCJtYXgtaGVpZ2h0XCIsXCJub25lXCIpO1xuXHRcdFx0XHRcdFx0aWYobUN1c3RvbVNjcm9sbEJveC5oZWlnaHQoKSE9PSR0aGlzLmhlaWdodCgpKXttQ3VzdG9tU2Nyb2xsQm94LmNzcyhcIm1heC1oZWlnaHRcIiwkdGhpcy5oZWlnaHQoKSk7fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfZXhwYW5kQ29udGVudEhvcml6b250YWxseS5jYWxsKHRoaXMpOyAvKiBleHBhbmQgY29udGVudCBob3Jpem9udGFsbHkgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYoby5heGlzIT09XCJ5XCIgJiYgIW8uYWR2YW5jZWQuYXV0b0V4cGFuZEhvcml6b250YWxTY3JvbGwpe1xuXHRcdFx0XHRcdFx0XHRtQ1NCX2NvbnRhaW5lci5jc3MoXCJ3aWR0aFwiLF9jb250ZW50V2lkdGgobUNTQl9jb250YWluZXIpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZC5vdmVyZmxvd2VkPV9vdmVyZmxvd2VkLmNhbGwodGhpcyk7IC8qIGRldGVybWluZSBpZiBzY3JvbGxpbmcgaXMgcmVxdWlyZWQgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0X3Njcm9sbGJhclZpc2liaWxpdHkuY2FsbCh0aGlzKTsgLyogc2hvdy9oaWRlIHNjcm9sbGJhcihzKSAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvKiBhdXRvLWFkanVzdCBzY3JvbGxiYXIgZHJhZ2dlciBsZW5ndGggYW5hbG9nb3VzIHRvIGNvbnRlbnQgKi9cblx0XHRcdFx0XHRcdGlmKG8uYXV0b0RyYWdnZXJMZW5ndGgpe19zZXREcmFnZ2VyTGVuZ3RoLmNhbGwodGhpcyk7fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfc2Nyb2xsUmF0aW8uY2FsbCh0aGlzKTsgLyogY2FsY3VsYXRlIGFuZCBzdG9yZSBzY3JvbGxiYXIgdG8gY29udGVudCByYXRpbyAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfYmluZEV2ZW50cy5jYWxsKHRoaXMpOyAvKiBiaW5kIHNjcm9sbGJhciBldmVudHMgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0LyogcmVzZXQgc2Nyb2xsaW5nIHBvc2l0aW9uIGFuZC9vciBldmVudHMgKi9cblx0XHRcdFx0XHRcdHZhciB0bz1bTWF0aC5hYnMobUNTQl9jb250YWluZXJbMF0ub2Zmc2V0VG9wKSxNYXRoLmFicyhtQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRMZWZ0KV07XG5cdFx0XHRcdFx0XHRpZihvLmF4aXMhPT1cInhcIil7IC8qIHkveXggYXhpcyAqL1xuXHRcdFx0XHRcdFx0XHRpZighZC5vdmVyZmxvd2VkWzBdKXsgLyogeSBzY3JvbGxpbmcgaXMgbm90IHJlcXVpcmVkICovXG5cdFx0XHRcdFx0XHRcdFx0X3Jlc2V0Q29udGVudFBvc2l0aW9uLmNhbGwodGhpcyk7IC8qIHJlc2V0IGNvbnRlbnQgcG9zaXRpb24gKi9cblx0XHRcdFx0XHRcdFx0XHRpZihvLmF4aXM9PT1cInlcIil7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdW5iaW5kRXZlbnRzLmNhbGwodGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fWVsc2UgaWYoby5heGlzPT09XCJ5eFwiICYmIGQub3ZlcmZsb3dlZFsxXSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsdG9bMV0udG9TdHJpbmcoKSx7ZGlyOlwieFwiLGR1cjowLG92ZXJ3cml0ZTpcIm5vbmVcIn0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fWVsc2UgaWYobUNTQl9kcmFnZ2VyWzBdLmhlaWdodCgpPm1DU0JfZHJhZ2dlclswXS5wYXJlbnQoKS5oZWlnaHQoKSl7XG5cdFx0XHRcdFx0XHRcdFx0X3Jlc2V0Q29udGVudFBvc2l0aW9uLmNhbGwodGhpcyk7IC8qIHJlc2V0IGNvbnRlbnQgcG9zaXRpb24gKi9cblx0XHRcdFx0XHRcdFx0fWVsc2V7IC8qIHkgc2Nyb2xsaW5nIGlzIHJlcXVpcmVkICovXG5cdFx0XHRcdFx0XHRcdFx0X3Njcm9sbFRvKCR0aGlzLHRvWzBdLnRvU3RyaW5nKCkse2RpcjpcInlcIixkdXI6MCxvdmVyd3JpdGU6XCJub25lXCJ9KTtcblx0XHRcdFx0XHRcdFx0XHRkLmNvbnRlbnRSZXNldC55PW51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKG8uYXhpcyE9PVwieVwiKXsgLyogeC95eCBheGlzICovXG5cdFx0XHRcdFx0XHRcdGlmKCFkLm92ZXJmbG93ZWRbMV0peyAvKiB4IHNjcm9sbGluZyBpcyBub3QgcmVxdWlyZWQgKi9cblx0XHRcdFx0XHRcdFx0XHRfcmVzZXRDb250ZW50UG9zaXRpb24uY2FsbCh0aGlzKTsgLyogcmVzZXQgY29udGVudCBwb3NpdGlvbiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmKG8uYXhpcz09PVwieFwiKXtcblx0XHRcdFx0XHRcdFx0XHRcdF91bmJpbmRFdmVudHMuY2FsbCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZSBpZihvLmF4aXM9PT1cInl4XCIgJiYgZC5vdmVyZmxvd2VkWzBdKXtcblx0XHRcdFx0XHRcdFx0XHRcdF9zY3JvbGxUbygkdGhpcyx0b1swXS50b1N0cmluZygpLHtkaXI6XCJ5XCIsZHVyOjAsb3ZlcndyaXRlOlwibm9uZVwifSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZihtQ1NCX2RyYWdnZXJbMV0ud2lkdGgoKT5tQ1NCX2RyYWdnZXJbMV0ucGFyZW50KCkud2lkdGgoKSl7XG5cdFx0XHRcdFx0XHRcdFx0X3Jlc2V0Q29udGVudFBvc2l0aW9uLmNhbGwodGhpcyk7IC8qIHJlc2V0IGNvbnRlbnQgcG9zaXRpb24gKi9cblx0XHRcdFx0XHRcdFx0fWVsc2V7IC8qIHggc2Nyb2xsaW5nIGlzIHJlcXVpcmVkICovXG5cdFx0XHRcdFx0XHRcdFx0X3Njcm9sbFRvKCR0aGlzLHRvWzFdLnRvU3RyaW5nKCkse2RpcjpcInhcIixkdXI6MCxvdmVyd3JpdGU6XCJub25lXCJ9KTtcblx0XHRcdFx0XHRcdFx0XHRkLmNvbnRlbnRSZXNldC54PW51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0LyogY2FsbGJhY2tzOiBvbkltYWdlTG9hZCwgb25TZWxlY3RvckNoYW5nZSwgb25VcGRhdGUgKi9cblx0XHRcdFx0XHRcdGlmKGNiICYmIGQpe1xuXHRcdFx0XHRcdFx0XHRpZihjYj09PTIgJiYgby5jYWxsYmFja3Mub25JbWFnZUxvYWQgJiYgdHlwZW9mIG8uY2FsbGJhY2tzLm9uSW1hZ2VMb2FkPT09XCJmdW5jdGlvblwiKXtcblx0XHRcdFx0XHRcdFx0XHRvLmNhbGxiYWNrcy5vbkltYWdlTG9hZC5jYWxsKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZihjYj09PTMgJiYgby5jYWxsYmFja3Mub25TZWxlY3RvckNoYW5nZSAmJiB0eXBlb2Ygby5jYWxsYmFja3Mub25TZWxlY3RvckNoYW5nZT09PVwiZnVuY3Rpb25cIil7XG5cdFx0XHRcdFx0XHRcdFx0by5jYWxsYmFja3Mub25TZWxlY3RvckNoYW5nZS5jYWxsKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZihvLmNhbGxiYWNrcy5vblVwZGF0ZSAmJiB0eXBlb2Ygby5jYWxsYmFja3Mub25VcGRhdGU9PT1cImZ1bmN0aW9uXCIpe1xuXHRcdFx0XHRcdFx0XHRcdG8uY2FsbGJhY2tzLm9uVXBkYXRlLmNhbGwodGhpcyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0X2F1dG9VcGRhdGUuY2FsbCh0aGlzKTsgLyogaW5pdGlhbGl6ZSBhdXRvbWF0aWMgdXBkYXRpbmcgKGZvciBkeW5hbWljIGNvbnRlbnQsIGZsdWlkIGxheW91dHMgZXRjLikgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8qIFxuXHRcdFx0cGx1Z2luIHNjcm9sbFRvIG1ldGhvZCBcblx0XHRcdHRyaWdnZXJzIGEgc2Nyb2xsaW5nIGV2ZW50IHRvIGEgc3BlY2lmaWMgdmFsdWVcblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdHVzYWdlOiAkKHNlbGVjdG9yKS5tQ3VzdG9tU2Nyb2xsYmFyKFwic2Nyb2xsVG9cIix2YWx1ZSxvcHRpb25zKTtcblx0XHRcdCovXG5cdFx0XG5cdFx0XHRzY3JvbGxUbzpmdW5jdGlvbih2YWwsb3B0aW9ucyl7XG5cdFx0XHRcdFxuXHRcdFx0XHQvKiBwcmV2ZW50IHNpbGx5IHRoaW5ncyBsaWtlICQoc2VsZWN0b3IpLm1DdXN0b21TY3JvbGxiYXIoXCJzY3JvbGxUb1wiLHVuZGVmaW5lZCk7ICovXG5cdFx0XHRcdGlmKHR5cGVvZiB2YWw9PVwidW5kZWZpbmVkXCIgfHwgdmFsPT1udWxsKXtyZXR1cm47fVxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHNlbGVjdG9yPV9zZWxlY3Rvci5jYWxsKHRoaXMpOyAvKiB2YWxpZGF0ZSBzZWxlY3RvciAqL1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgJHRoaXM9JCh0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZigkdGhpcy5kYXRhKHBsdWdpblBmeCkpeyAvKiBjaGVjayBpZiBwbHVnaW4gaGFzIGluaXRpYWxpemVkICovXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR2YXIgZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0XHRcdFx0LyogbWV0aG9kIGRlZmF1bHQgb3B0aW9ucyAqL1xuXHRcdFx0XHRcdFx0XHRtZXRob2REZWZhdWx0cz17XG5cdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcjpcImV4dGVybmFsXCIsIC8qIG1ldGhvZCBpcyBieSBkZWZhdWx0IHRyaWdnZXJlZCBleHRlcm5hbGx5IChlLmcuIGZyb20gb3RoZXIgc2NyaXB0cykgKi9cblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxJbmVydGlhOm8uc2Nyb2xsSW5lcnRpYSwgLyogc2Nyb2xsaW5nIGluZXJ0aWEgKGFuaW1hdGlvbiBkdXJhdGlvbikgKi9cblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxFYXNpbmc6XCJtY3NFYXNlSW5PdXRcIiwgLyogYW5pbWF0aW9uIGVhc2luZyAqL1xuXHRcdFx0XHRcdFx0XHRcdG1vdmVEcmFnZ2VyOmZhbHNlLCAvKiBtb3ZlIGRyYWdnZXIgaW5zdGVhZCBvZiBjb250ZW50ICovXG5cdFx0XHRcdFx0XHRcdFx0dGltZW91dDo2MCwgLyogc2Nyb2xsLXRvIGRlbGF5ICovXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzOnRydWUsIC8qIGVuYWJsZS9kaXNhYmxlIGNhbGxiYWNrcyAqL1xuXHRcdFx0XHRcdFx0XHRcdG9uU3RhcnQ6dHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRvblVwZGF0ZTp0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ29tcGxldGU6dHJ1ZVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRtZXRob2RPcHRpb25zPSQuZXh0ZW5kKHRydWUse30sbWV0aG9kRGVmYXVsdHMsb3B0aW9ucyksXG5cdFx0XHRcdFx0XHRcdHRvPV9hcnIuY2FsbCh0aGlzLHZhbCksZHVyPW1ldGhvZE9wdGlvbnMuc2Nyb2xsSW5lcnRpYT4wICYmIG1ldGhvZE9wdGlvbnMuc2Nyb2xsSW5lcnRpYTwxNyA/IDE3IDogbWV0aG9kT3B0aW9ucy5zY3JvbGxJbmVydGlhO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvKiB0cmFuc2xhdGUgeXggdmFsdWVzIHRvIGFjdHVhbCBzY3JvbGwtdG8gcG9zaXRpb25zICovXG5cdFx0XHRcdFx0XHR0b1swXT1fdG8uY2FsbCh0aGlzLHRvWzBdLFwieVwiKTtcblx0XHRcdFx0XHRcdHRvWzFdPV90by5jYWxsKHRoaXMsdG9bMV0sXCJ4XCIpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvKiBcblx0XHRcdFx0XHRcdGNoZWNrIGlmIHNjcm9sbC10byB2YWx1ZSBtb3ZlcyB0aGUgZHJhZ2dlciBpbnN0ZWFkIG9mIGNvbnRlbnQuIFxuXHRcdFx0XHRcdFx0T25seSBwaXhlbCB2YWx1ZXMgYXBwbHkgb24gZHJhZ2dlciAoZS5nLiAxMDAsIFwiMTAwcHhcIiwgXCItPTEwMFwiIGV0Yy4pIFxuXHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdGlmKG1ldGhvZE9wdGlvbnMubW92ZURyYWdnZXIpe1xuXHRcdFx0XHRcdFx0XHR0b1swXSo9ZC5zY3JvbGxSYXRpby55O1xuXHRcdFx0XHRcdFx0XHR0b1sxXSo9ZC5zY3JvbGxSYXRpby54O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRtZXRob2RPcHRpb25zLmR1cj1faXNUYWJIaWRkZW4oKSA/IDAgOiBkdXI7IC8vc2tpcCBhbmltYXRpb25zIGlmIGJyb3dzZXIgdGFiIGlzIGhpZGRlblxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuXHRcdFx0XHRcdFx0XHQvKiBkbyB0aGUgc2Nyb2xsaW5nICovXG5cdFx0XHRcdFx0XHRcdGlmKHRvWzBdIT09bnVsbCAmJiB0eXBlb2YgdG9bMF0hPT1cInVuZGVmaW5lZFwiICYmIG8uYXhpcyE9PVwieFwiICYmIGQub3ZlcmZsb3dlZFswXSl7IC8qIHNjcm9sbCB5ICovXG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kT3B0aW9ucy5kaXI9XCJ5XCI7XG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kT3B0aW9ucy5vdmVyd3JpdGU9XCJhbGxcIjtcblx0XHRcdFx0XHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsdG9bMF0udG9TdHJpbmcoKSxtZXRob2RPcHRpb25zKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZih0b1sxXSE9PW51bGwgJiYgdHlwZW9mIHRvWzFdIT09XCJ1bmRlZmluZWRcIiAmJiBvLmF4aXMhPT1cInlcIiAmJiBkLm92ZXJmbG93ZWRbMV0peyAvKiBzY3JvbGwgeCAqL1xuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZE9wdGlvbnMuZGlyPVwieFwiO1xuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZE9wdGlvbnMub3ZlcndyaXRlPVwibm9uZVwiO1xuXHRcdFx0XHRcdFx0XHRcdF9zY3JvbGxUbygkdGhpcyx0b1sxXS50b1N0cmluZygpLG1ldGhvZE9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LG1ldGhvZE9wdGlvbnMudGltZW91dCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvKlxuXHRcdFx0cGx1Z2luIHN0b3AgbWV0aG9kIFxuXHRcdFx0c3RvcHMgc2Nyb2xsaW5nIGFuaW1hdGlvblxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0dXNhZ2U6ICQoc2VsZWN0b3IpLm1DdXN0b21TY3JvbGxiYXIoXCJzdG9wXCIpO1xuXHRcdFx0Ki9cblx0XHRcdHN0b3A6ZnVuY3Rpb24oKXtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZWxlY3Rvcj1fc2VsZWN0b3IuY2FsbCh0aGlzKTsgLyogdmFsaWRhdGUgc2VsZWN0b3IgKi9cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyICR0aGlzPSQodGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYoJHRoaXMuZGF0YShwbHVnaW5QZngpKXsgLyogY2hlY2sgaWYgcGx1Z2luIGhhcyBpbml0aWFsaXplZCAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9zdG9wKCR0aGlzKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvKlxuXHRcdFx0cGx1Z2luIGRpc2FibGUgbWV0aG9kIFxuXHRcdFx0dGVtcG9yYXJpbHkgZGlzYWJsZXMgdGhlIHNjcm9sbGJhcihzKSBcblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdHVzYWdlOiAkKHNlbGVjdG9yKS5tQ3VzdG9tU2Nyb2xsYmFyKFwiZGlzYWJsZVwiLHJlc2V0KTsgXG5cdFx0XHRyZXNldCAoYm9vbGVhbik6IHJlc2V0cyBjb250ZW50IHBvc2l0aW9uIHRvIDAgXG5cdFx0XHQqL1xuXHRcdFx0ZGlzYWJsZTpmdW5jdGlvbihyKXtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZWxlY3Rvcj1fc2VsZWN0b3IuY2FsbCh0aGlzKTsgLyogdmFsaWRhdGUgc2VsZWN0b3IgKi9cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyICR0aGlzPSQodGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYoJHRoaXMuZGF0YShwbHVnaW5QZngpKXsgLyogY2hlY2sgaWYgcGx1Z2luIGhhcyBpbml0aWFsaXplZCAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR2YXIgZD0kdGhpcy5kYXRhKHBsdWdpblBmeCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9hdXRvVXBkYXRlLmNhbGwodGhpcyxcInJlbW92ZVwiKTsgLyogcmVtb3ZlIGF1dG9tYXRpYyB1cGRhdGluZyAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfdW5iaW5kRXZlbnRzLmNhbGwodGhpcyk7IC8qIHVuYmluZCBldmVudHMgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYocil7X3Jlc2V0Q29udGVudFBvc2l0aW9uLmNhbGwodGhpcyk7fSAvKiByZXNldCBjb250ZW50IHBvc2l0aW9uICovXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9zY3JvbGxiYXJWaXNpYmlsaXR5LmNhbGwodGhpcyx0cnVlKTsgLyogc2hvdy9oaWRlIHNjcm9sbGJhcihzKSAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQkdGhpcy5hZGRDbGFzcyhjbGFzc2VzWzNdKTsgLyogYWRkIGRpc2FibGUgY2xhc3MgKi9cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvKlxuXHRcdFx0cGx1Z2luIGRlc3Ryb3kgbWV0aG9kIFxuXHRcdFx0Y29tcGxldGVseSByZW1vdmVzIHRoZSBzY3JvbGxiYXIocykgYW5kIHJldHVybnMgdGhlIGVsZW1lbnQgdG8gaXRzIG9yaWdpbmFsIHN0YXRlXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHR1c2FnZTogJChzZWxlY3RvcikubUN1c3RvbVNjcm9sbGJhcihcImRlc3Ryb3lcIik7IFxuXHRcdFx0Ki9cblx0XHRcdGRlc3Ryb3k6ZnVuY3Rpb24oKXtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZWxlY3Rvcj1fc2VsZWN0b3IuY2FsbCh0aGlzKTsgLyogdmFsaWRhdGUgc2VsZWN0b3IgKi9cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyICR0aGlzPSQodGhpcyk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYoJHRoaXMuZGF0YShwbHVnaW5QZngpKXsgLyogY2hlY2sgaWYgcGx1Z2luIGhhcyBpbml0aWFsaXplZCAqL1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0dmFyIGQ9JHRoaXMuZGF0YShwbHVnaW5QZngpLG89ZC5vcHQsXG5cdFx0XHRcdFx0XHRcdG1DdXN0b21TY3JvbGxCb3g9JChcIiNtQ1NCX1wiK2QuaWR4KSxcblx0XHRcdFx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0XHRcdFx0c2Nyb2xsYmFyPSQoXCIubUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXJcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZihvLmxpdmUpe3JlbW92ZUxpdmVUaW1lcnMoby5saXZlU2VsZWN0b3IgfHwgJChzZWxlY3Rvcikuc2VsZWN0b3IpO30gLyogcmVtb3ZlIGxpdmUgdGltZXJzICovXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9hdXRvVXBkYXRlLmNhbGwodGhpcyxcInJlbW92ZVwiKTsgLyogcmVtb3ZlIGF1dG9tYXRpYyB1cGRhdGluZyAqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfdW5iaW5kRXZlbnRzLmNhbGwodGhpcyk7IC8qIHVuYmluZCBldmVudHMgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0X3Jlc2V0Q29udGVudFBvc2l0aW9uLmNhbGwodGhpcyk7IC8qIHJlc2V0IGNvbnRlbnQgcG9zaXRpb24gKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0JHRoaXMucmVtb3ZlRGF0YShwbHVnaW5QZngpOyAvKiByZW1vdmUgcGx1Z2luIGRhdGEgb2JqZWN0ICovXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9kZWxldGUodGhpcyxcIm1jc1wiKTsgLyogZGVsZXRlIGNhbGxiYWNrcyBvYmplY3QgKi9cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0LyogcmVtb3ZlIHBsdWdpbiBtYXJrdXAgKi9cblx0XHRcdFx0XHRcdHNjcm9sbGJhci5yZW1vdmUoKTsgLyogcmVtb3ZlIHNjcm9sbGJhcihzKSBmaXJzdCAodGhvc2UgY2FuIGJlIGVpdGhlciBpbnNpZGUgb3Igb3V0c2lkZSBwbHVnaW4ncyBpbm5lciB3cmFwcGVyKSAqL1xuXHRcdFx0XHRcdFx0bUNTQl9jb250YWluZXIuZmluZChcImltZy5cIitjbGFzc2VzWzJdKS5yZW1vdmVDbGFzcyhjbGFzc2VzWzJdKTsgLyogcmVtb3ZlIGxvYWRlZCBpbWFnZXMgZmxhZyAqL1xuXHRcdFx0XHRcdFx0bUN1c3RvbVNjcm9sbEJveC5yZXBsYWNlV2l0aChtQ1NCX2NvbnRhaW5lci5jb250ZW50cygpKTsgLyogcmVwbGFjZSBwbHVnaW4ncyBpbm5lciB3cmFwcGVyIHdpdGggdGhlIG9yaWdpbmFsIGNvbnRlbnQgKi9cblx0XHRcdFx0XHRcdC8qIHJlbW92ZSBwbHVnaW4gY2xhc3NlcyBmcm9tIHRoZSBlbGVtZW50IGFuZCBhZGQgZGVzdHJveSBjbGFzcyAqL1xuXHRcdFx0XHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MocGx1Z2luTlMrXCIgX1wiK3BsdWdpblBmeCtcIl9cIitkLmlkeCtcIiBcIitjbGFzc2VzWzZdK1wiIFwiK2NsYXNzZXNbN10rXCIgXCIrY2xhc3Nlc1s1XStcIiBcIitjbGFzc2VzWzNdKS5hZGRDbGFzcyhjbGFzc2VzWzRdKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcdFxuXHRcdH0sXG5cdFxuXHRcblx0XG5cdFxuXHRcdFxuXHQvKiBcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRGVU5DVElPTlNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQqL1xuXHRcblx0XHQvKiB2YWxpZGF0ZXMgc2VsZWN0b3IgKGlmIHNlbGVjdG9yIGlzIGludmFsaWQgb3IgdW5kZWZpbmVkIHVzZXMgdGhlIGRlZmF1bHQgb25lKSAqL1xuXHRcdF9zZWxlY3Rvcj1mdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuICh0eXBlb2YgJCh0aGlzKSE9PVwib2JqZWN0XCIgfHwgJCh0aGlzKS5sZW5ndGg8MSkgPyBkZWZhdWx0U2VsZWN0b3IgOiB0aGlzO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBjaGFuZ2VzIG9wdGlvbnMgYWNjb3JkaW5nIHRvIHRoZW1lICovXG5cdFx0X3RoZW1lPWZ1bmN0aW9uKG9iail7XG5cdFx0XHR2YXIgZml4ZWRTaXplU2Nyb2xsYmFyVGhlbWVzPVtcInJvdW5kZWRcIixcInJvdW5kZWQtZGFya1wiLFwicm91bmRlZC1kb3RzXCIsXCJyb3VuZGVkLWRvdHMtZGFya1wiXSxcblx0XHRcdFx0bm9uRXhwYW5kZWRTY3JvbGxiYXJUaGVtZXM9W1wicm91bmRlZC1kb3RzXCIsXCJyb3VuZGVkLWRvdHMtZGFya1wiLFwiM2RcIixcIjNkLWRhcmtcIixcIjNkLXRoaWNrXCIsXCIzZC10aGljay1kYXJrXCIsXCJpbnNldFwiLFwiaW5zZXQtZGFya1wiLFwiaW5zZXQtMlwiLFwiaW5zZXQtMi1kYXJrXCIsXCJpbnNldC0zXCIsXCJpbnNldC0zLWRhcmtcIl0sXG5cdFx0XHRcdGRpc2FibGVkU2Nyb2xsQnV0dG9uc1RoZW1lcz1bXCJtaW5pbWFsXCIsXCJtaW5pbWFsLWRhcmtcIl0sXG5cdFx0XHRcdGVuYWJsZWRBdXRvSGlkZVNjcm9sbGJhclRoZW1lcz1bXCJtaW5pbWFsXCIsXCJtaW5pbWFsLWRhcmtcIl0sXG5cdFx0XHRcdHNjcm9sbGJhclBvc2l0aW9uT3V0c2lkZVRoZW1lcz1bXCJtaW5pbWFsXCIsXCJtaW5pbWFsLWRhcmtcIl07XG5cdFx0XHRvYmouYXV0b0RyYWdnZXJMZW5ndGg9JC5pbkFycmF5KG9iai50aGVtZSxmaXhlZFNpemVTY3JvbGxiYXJUaGVtZXMpID4gLTEgPyBmYWxzZSA6IG9iai5hdXRvRHJhZ2dlckxlbmd0aDtcblx0XHRcdG9iai5hdXRvRXhwYW5kU2Nyb2xsYmFyPSQuaW5BcnJheShvYmoudGhlbWUsbm9uRXhwYW5kZWRTY3JvbGxiYXJUaGVtZXMpID4gLTEgPyBmYWxzZSA6IG9iai5hdXRvRXhwYW5kU2Nyb2xsYmFyO1xuXHRcdFx0b2JqLnNjcm9sbEJ1dHRvbnMuZW5hYmxlPSQuaW5BcnJheShvYmoudGhlbWUsZGlzYWJsZWRTY3JvbGxCdXR0b25zVGhlbWVzKSA+IC0xID8gZmFsc2UgOiBvYmouc2Nyb2xsQnV0dG9ucy5lbmFibGU7XG5cdFx0XHRvYmouYXV0b0hpZGVTY3JvbGxiYXI9JC5pbkFycmF5KG9iai50aGVtZSxlbmFibGVkQXV0b0hpZGVTY3JvbGxiYXJUaGVtZXMpID4gLTEgPyB0cnVlIDogb2JqLmF1dG9IaWRlU2Nyb2xsYmFyO1xuXHRcdFx0b2JqLnNjcm9sbGJhclBvc2l0aW9uPSQuaW5BcnJheShvYmoudGhlbWUsc2Nyb2xsYmFyUG9zaXRpb25PdXRzaWRlVGhlbWVzKSA+IC0xID8gXCJvdXRzaWRlXCIgOiBvYmouc2Nyb2xsYmFyUG9zaXRpb247XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIGxpdmUgb3B0aW9uIHRpbWVycyByZW1vdmFsICovXG5cdFx0cmVtb3ZlTGl2ZVRpbWVycz1mdW5jdGlvbihzZWxlY3Rvcil7XG5cdFx0XHRpZihsaXZlVGltZXJzW3NlbGVjdG9yXSl7XG5cdFx0XHRcdGNsZWFyVGltZW91dChsaXZlVGltZXJzW3NlbGVjdG9yXSk7XG5cdFx0XHRcdF9kZWxldGUobGl2ZVRpbWVycyxzZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIG5vcm1hbGl6ZXMgYXhpcyBvcHRpb24gdG8gdmFsaWQgdmFsdWVzOiBcInlcIiwgXCJ4XCIsIFwieXhcIiAqL1xuXHRcdF9maW5kQXhpcz1mdW5jdGlvbih2YWwpe1xuXHRcdFx0cmV0dXJuICh2YWw9PT1cInl4XCIgfHwgdmFsPT09XCJ4eVwiIHx8IHZhbD09PVwiYXV0b1wiKSA/IFwieXhcIiA6ICh2YWw9PT1cInhcIiB8fCB2YWw9PT1cImhvcml6b250YWxcIikgPyBcInhcIiA6IFwieVwiO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBub3JtYWxpemVzIHNjcm9sbEJ1dHRvbnMuc2Nyb2xsVHlwZSBvcHRpb24gdG8gdmFsaWQgdmFsdWVzOiBcInN0ZXBsZXNzXCIsIFwic3RlcHBlZFwiICovXG5cdFx0X2ZpbmRTY3JvbGxCdXR0b25zVHlwZT1mdW5jdGlvbih2YWwpe1xuXHRcdFx0cmV0dXJuICh2YWw9PT1cInN0ZXBwZWRcIiB8fCB2YWw9PT1cInBpeGVsc1wiIHx8IHZhbD09PVwic3RlcFwiIHx8IHZhbD09PVwiY2xpY2tcIikgPyBcInN0ZXBwZWRcIiA6IFwic3RlcGxlc3NcIjtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogZ2VuZXJhdGVzIHBsdWdpbiBtYXJrdXAgKi9cblx0XHRfcGx1Z2luTWFya3VwPWZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxvPWQub3B0LFxuXHRcdFx0XHRleHBhbmRDbGFzcz1vLmF1dG9FeHBhbmRTY3JvbGxiYXIgPyBcIiBcIitjbGFzc2VzWzFdK1wiX2V4cGFuZFwiIDogXCJcIixcblx0XHRcdFx0c2Nyb2xsYmFyPVtcIjxkaXYgaWQ9J21DU0JfXCIrZC5pZHgrXCJfc2Nyb2xsYmFyX3ZlcnRpY2FsJyBjbGFzcz0nbUNTQl9zY3JvbGxUb29scyBtQ1NCX1wiK2QuaWR4K1wiX3Njcm9sbGJhciBtQ1MtXCIrby50aGVtZStcIiBtQ1NCX3Njcm9sbFRvb2xzX3ZlcnRpY2FsXCIrZXhwYW5kQ2xhc3MrXCInPjxkaXYgY2xhc3M9J1wiK2NsYXNzZXNbMTJdK1wiJz48ZGl2IGlkPSdtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfdmVydGljYWwnIGNsYXNzPSdtQ1NCX2RyYWdnZXInIHN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTsnPjxkaXYgY2xhc3M9J21DU0JfZHJhZ2dlcl9iYXInIC8+PC9kaXY+PGRpdiBjbGFzcz0nbUNTQl9kcmFnZ2VyUmFpbCcgLz48L2Rpdj48L2Rpdj5cIixcIjxkaXYgaWQ9J21DU0JfXCIrZC5pZHgrXCJfc2Nyb2xsYmFyX2hvcml6b250YWwnIGNsYXNzPSdtQ1NCX3Njcm9sbFRvb2xzIG1DU0JfXCIrZC5pZHgrXCJfc2Nyb2xsYmFyIG1DUy1cIitvLnRoZW1lK1wiIG1DU0Jfc2Nyb2xsVG9vbHNfaG9yaXpvbnRhbFwiK2V4cGFuZENsYXNzK1wiJz48ZGl2IGNsYXNzPSdcIitjbGFzc2VzWzEyXStcIic+PGRpdiBpZD0nbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWwnIGNsYXNzPSdtQ1NCX2RyYWdnZXInIHN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTsnPjxkaXYgY2xhc3M9J21DU0JfZHJhZ2dlcl9iYXInIC8+PC9kaXY+PGRpdiBjbGFzcz0nbUNTQl9kcmFnZ2VyUmFpbCcgLz48L2Rpdj48L2Rpdj5cIl0sXG5cdFx0XHRcdHdyYXBwZXJDbGFzcz1vLmF4aXM9PT1cInl4XCIgPyBcIm1DU0JfdmVydGljYWxfaG9yaXpvbnRhbFwiIDogby5heGlzPT09XCJ4XCIgPyBcIm1DU0JfaG9yaXpvbnRhbFwiIDogXCJtQ1NCX3ZlcnRpY2FsXCIsXG5cdFx0XHRcdHNjcm9sbGJhcnM9by5heGlzPT09XCJ5eFwiID8gc2Nyb2xsYmFyWzBdK3Njcm9sbGJhclsxXSA6IG8uYXhpcz09PVwieFwiID8gc2Nyb2xsYmFyWzFdIDogc2Nyb2xsYmFyWzBdLFxuXHRcdFx0XHRjb250ZW50V3JhcHBlcj1vLmF4aXM9PT1cInl4XCIgPyBcIjxkaXYgaWQ9J21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyX3dyYXBwZXInIGNsYXNzPSdtQ1NCX2NvbnRhaW5lcl93cmFwcGVyJyAvPlwiIDogXCJcIixcblx0XHRcdFx0YXV0b0hpZGVDbGFzcz1vLmF1dG9IaWRlU2Nyb2xsYmFyID8gXCIgXCIrY2xhc3Nlc1s2XSA6IFwiXCIsXG5cdFx0XHRcdHNjcm9sbGJhckRpckNsYXNzPShvLmF4aXMhPT1cInhcIiAmJiBkLmxhbmdEaXI9PT1cInJ0bFwiKSA/IFwiIFwiK2NsYXNzZXNbN10gOiBcIlwiO1xuXHRcdFx0aWYoby5zZXRXaWR0aCl7JHRoaXMuY3NzKFwid2lkdGhcIixvLnNldFdpZHRoKTt9IC8qIHNldCBlbGVtZW50IHdpZHRoICovXG5cdFx0XHRpZihvLnNldEhlaWdodCl7JHRoaXMuY3NzKFwiaGVpZ2h0XCIsby5zZXRIZWlnaHQpO30gLyogc2V0IGVsZW1lbnQgaGVpZ2h0ICovXG5cdFx0XHRvLnNldExlZnQ9KG8uYXhpcyE9PVwieVwiICYmIGQubGFuZ0Rpcj09PVwicnRsXCIpID8gXCI5ODk5OTlweFwiIDogby5zZXRMZWZ0OyAvKiBhZGp1c3QgbGVmdCBwb3NpdGlvbiBmb3IgcnRsIGRpcmVjdGlvbiAqL1xuXHRcdFx0JHRoaXMuYWRkQ2xhc3MocGx1Z2luTlMrXCIgX1wiK3BsdWdpblBmeCtcIl9cIitkLmlkeCthdXRvSGlkZUNsYXNzK3Njcm9sbGJhckRpckNsYXNzKS53cmFwSW5uZXIoXCI8ZGl2IGlkPSdtQ1NCX1wiK2QuaWR4K1wiJyBjbGFzcz0nbUN1c3RvbVNjcm9sbEJveCBtQ1MtXCIrby50aGVtZStcIiBcIit3cmFwcGVyQ2xhc3MrXCInPjxkaXYgaWQ9J21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyJyBjbGFzcz0nbUNTQl9jb250YWluZXInIHN0eWxlPSdwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOlwiK28uc2V0VG9wK1wiOyBsZWZ0OlwiK28uc2V0TGVmdCtcIjsnIGRpcj0nXCIrZC5sYW5nRGlyK1wiJyAvPjwvZGl2PlwiKTtcblx0XHRcdHZhciBtQ3VzdG9tU2Nyb2xsQm94PSQoXCIjbUNTQl9cIitkLmlkeCksXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIik7XG5cdFx0XHRpZihvLmF4aXMhPT1cInlcIiAmJiAhby5hZHZhbmNlZC5hdXRvRXhwYW5kSG9yaXpvbnRhbFNjcm9sbCl7XG5cdFx0XHRcdG1DU0JfY29udGFpbmVyLmNzcyhcIndpZHRoXCIsX2NvbnRlbnRXaWR0aChtQ1NCX2NvbnRhaW5lcikpO1xuXHRcdFx0fVxuXHRcdFx0aWYoby5zY3JvbGxiYXJQb3NpdGlvbj09PVwib3V0c2lkZVwiKXtcblx0XHRcdFx0aWYoJHRoaXMuY3NzKFwicG9zaXRpb25cIik9PT1cInN0YXRpY1wiKXsgLyogcmVxdWlyZXMgZWxlbWVudHMgd2l0aCBub24tc3RhdGljIHBvc2l0aW9uICovXG5cdFx0XHRcdFx0JHRoaXMuY3NzKFwicG9zaXRpb25cIixcInJlbGF0aXZlXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR0aGlzLmNzcyhcIm92ZXJmbG93XCIsXCJ2aXNpYmxlXCIpO1xuXHRcdFx0XHRtQ3VzdG9tU2Nyb2xsQm94LmFkZENsYXNzKFwibUNTQl9vdXRzaWRlXCIpLmFmdGVyKHNjcm9sbGJhcnMpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdG1DdXN0b21TY3JvbGxCb3guYWRkQ2xhc3MoXCJtQ1NCX2luc2lkZVwiKS5hcHBlbmQoc2Nyb2xsYmFycyk7XG5cdFx0XHRcdG1DU0JfY29udGFpbmVyLndyYXAoY29udGVudFdyYXBwZXIpO1xuXHRcdFx0fVxuXHRcdFx0X3Njcm9sbEJ1dHRvbnMuY2FsbCh0aGlzKTsgLyogYWRkIHNjcm9sbGJhciBidXR0b25zICovXG5cdFx0XHQvKiBtaW5pbXVtIGRyYWdnZXIgbGVuZ3RoICovXG5cdFx0XHR2YXIgbUNTQl9kcmFnZ2VyPVskKFwiI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbFwiKSwkKFwiI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl9ob3Jpem9udGFsXCIpXTtcblx0XHRcdG1DU0JfZHJhZ2dlclswXS5jc3MoXCJtaW4taGVpZ2h0XCIsbUNTQl9kcmFnZ2VyWzBdLmhlaWdodCgpKTtcblx0XHRcdG1DU0JfZHJhZ2dlclsxXS5jc3MoXCJtaW4td2lkdGhcIixtQ1NCX2RyYWdnZXJbMV0ud2lkdGgoKSk7XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIGNhbGN1bGF0ZXMgY29udGVudCB3aWR0aCAqL1xuXHRcdF9jb250ZW50V2lkdGg9ZnVuY3Rpb24oZWwpe1xuXHRcdFx0dmFyIHZhbD1bZWxbMF0uc2Nyb2xsV2lkdGgsTWF0aC5tYXguYXBwbHkoTWF0aCxlbC5jaGlsZHJlbigpLm1hcChmdW5jdGlvbigpe3JldHVybiAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7fSkuZ2V0KCkpXSx3PWVsLnBhcmVudCgpLndpZHRoKCk7XG5cdFx0XHRyZXR1cm4gdmFsWzBdPncgPyB2YWxbMF0gOiB2YWxbMV0+dyA/IHZhbFsxXSA6IFwiMTAwJVwiO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBleHBhbmRzIGNvbnRlbnQgaG9yaXpvbnRhbGx5ICovXG5cdFx0X2V4cGFuZENvbnRlbnRIb3Jpem9udGFsbHk9ZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkdGhpcz0kKHRoaXMpLGQ9JHRoaXMuZGF0YShwbHVnaW5QZngpLG89ZC5vcHQsXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIik7XG5cdFx0XHRpZihvLmFkdmFuY2VkLmF1dG9FeHBhbmRIb3Jpem9udGFsU2Nyb2xsICYmIG8uYXhpcyE9PVwieVwiKXtcblx0XHRcdFx0LyogY2FsY3VsYXRlIHNjcm9sbFdpZHRoICovXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOlwiYXV0b1wiLFwibWluLXdpZHRoXCI6MCxcIm92ZXJmbG93LXhcIjpcInNjcm9sbFwifSk7XG5cdFx0XHRcdHZhciB3PU1hdGguY2VpbChtQ1NCX2NvbnRhaW5lclswXS5zY3JvbGxXaWR0aCk7XG5cdFx0XHRcdGlmKG8uYWR2YW5jZWQuYXV0b0V4cGFuZEhvcml6b250YWxTY3JvbGw9PT0zIHx8IChvLmFkdmFuY2VkLmF1dG9FeHBhbmRIb3Jpem9udGFsU2Nyb2xsIT09MiAmJiB3Pm1DU0JfY29udGFpbmVyLnBhcmVudCgpLndpZHRoKCkpKXtcblx0XHRcdFx0XHRtQ1NCX2NvbnRhaW5lci5jc3Moe1wid2lkdGhcIjp3LFwibWluLXdpZHRoXCI6XCIxMDAlXCIsXCJvdmVyZmxvdy14XCI6XCJpbmhlcml0XCJ9KTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0LyogXG5cdFx0XHRcdFx0d3JhcCBjb250ZW50IHdpdGggYW4gaW5maW5pdGUgd2lkdGggZGl2IGFuZCBzZXQgaXRzIHBvc2l0aW9uIHRvIGFic29sdXRlIGFuZCB3aWR0aCB0byBhdXRvLiBcblx0XHRcdFx0XHRTZXR0aW5nIHdpZHRoIHRvIGF1dG8gYmVmb3JlIGNhbGN1bGF0aW5nIHRoZSBhY3R1YWwgd2lkdGggaXMgaW1wb3J0YW50ISBcblx0XHRcdFx0XHRXZSBtdXN0IGxldCB0aGUgYnJvd3NlciBzZXQgdGhlIHdpZHRoIGFzIGJyb3dzZXIgem9vbSB2YWx1ZXMgYXJlIGltcG9zc2libGUgdG8gY2FsY3VsYXRlLlxuXHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0bUNTQl9jb250YWluZXIuY3NzKHtcIm92ZXJmbG93LXhcIjpcImluaGVyaXRcIixcInBvc2l0aW9uXCI6XCJhYnNvbHV0ZVwifSlcblx0XHRcdFx0XHRcdC53cmFwKFwiPGRpdiBjbGFzcz0nbUNTQl9oX3dyYXBwZXInIHN0eWxlPSdwb3NpdGlvbjpyZWxhdGl2ZTsgbGVmdDowOyB3aWR0aDo5OTk5OTlweDsnIC8+XCIpXG5cdFx0XHRcdFx0XHQuY3NzKHsgLyogc2V0IGFjdHVhbCB3aWR0aCwgb3JpZ2luYWwgcG9zaXRpb24gYW5kIHVuLXdyYXAgKi9cblx0XHRcdFx0XHRcdFx0LyogXG5cdFx0XHRcdFx0XHRcdGdldCB0aGUgZXhhY3Qgd2lkdGggKHdpdGggZGVjaW1hbHMpIGFuZCB0aGVuIHJvdW5kLXVwLiBcblx0XHRcdFx0XHRcdFx0VXNpbmcganF1ZXJ5IG91dGVyV2lkdGgoKSB3aWxsIHJvdW5kIHRoZSB3aWR0aCB2YWx1ZSB3aGljaCB3aWxsIG1lc3MgdXAgd2l0aCBpbm5lciBlbGVtZW50cyB0aGF0IGhhdmUgbm9uLWludGVnZXIgd2lkdGhcblx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOihNYXRoLmNlaWwobUNTQl9jb250YWluZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQrMC40KS1NYXRoLmZsb29yKG1DU0JfY29udGFpbmVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpKSxcblx0XHRcdFx0XHRcdFx0XCJtaW4td2lkdGhcIjpcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIlxuXHRcdFx0XHRcdFx0fSkudW53cmFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogYWRkcyBzY3JvbGxiYXIgYnV0dG9ucyAqL1xuXHRcdF9zY3JvbGxCdXR0b25zPWZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxvPWQub3B0LFxuXHRcdFx0XHRtQ1NCX3Njcm9sbFRvb2xzPSQoXCIubUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXI6Zmlyc3RcIiksXG5cdFx0XHRcdHRhYmluZGV4PSFfaXNOdW1lcmljKG8uc2Nyb2xsQnV0dG9ucy50YWJpbmRleCkgPyBcIlwiIDogXCJ0YWJpbmRleD0nXCIrby5zY3JvbGxCdXR0b25zLnRhYmluZGV4K1wiJ1wiLFxuXHRcdFx0XHRidG5IVE1MPVtcblx0XHRcdFx0XHRcIjxhIGhyZWY9JyMnIGNsYXNzPSdcIitjbGFzc2VzWzEzXStcIicgXCIrdGFiaW5kZXgrXCIgLz5cIixcblx0XHRcdFx0XHRcIjxhIGhyZWY9JyMnIGNsYXNzPSdcIitjbGFzc2VzWzE0XStcIicgXCIrdGFiaW5kZXgrXCIgLz5cIixcblx0XHRcdFx0XHRcIjxhIGhyZWY9JyMnIGNsYXNzPSdcIitjbGFzc2VzWzE1XStcIicgXCIrdGFiaW5kZXgrXCIgLz5cIixcblx0XHRcdFx0XHRcIjxhIGhyZWY9JyMnIGNsYXNzPSdcIitjbGFzc2VzWzE2XStcIicgXCIrdGFiaW5kZXgrXCIgLz5cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRidG49WyhvLmF4aXM9PT1cInhcIiA/IGJ0bkhUTUxbMl0gOiBidG5IVE1MWzBdKSwoby5heGlzPT09XCJ4XCIgPyBidG5IVE1MWzNdIDogYnRuSFRNTFsxXSksYnRuSFRNTFsyXSxidG5IVE1MWzNdXTtcblx0XHRcdGlmKG8uc2Nyb2xsQnV0dG9ucy5lbmFibGUpe1xuXHRcdFx0XHRtQ1NCX3Njcm9sbFRvb2xzLnByZXBlbmQoYnRuWzBdKS5hcHBlbmQoYnRuWzFdKS5uZXh0KFwiLm1DU0Jfc2Nyb2xsVG9vbHNcIikucHJlcGVuZChidG5bMl0pLmFwcGVuZChidG5bM10pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBhdXRvLWFkanVzdHMgc2Nyb2xsYmFyIGRyYWdnZXIgbGVuZ3RoICovXG5cdFx0X3NldERyYWdnZXJMZW5ndGg9ZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkdGhpcz0kKHRoaXMpLGQ9JHRoaXMuZGF0YShwbHVnaW5QZngpLFxuXHRcdFx0XHRtQ3VzdG9tU2Nyb2xsQm94PSQoXCIjbUNTQl9cIitkLmlkeCksXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIiksXG5cdFx0XHRcdG1DU0JfZHJhZ2dlcj1bJChcIiNtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfdmVydGljYWxcIiksJChcIiNtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKV0sXG5cdFx0XHRcdHJhdGlvPVttQ3VzdG9tU2Nyb2xsQm94LmhlaWdodCgpL21DU0JfY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKSxtQ3VzdG9tU2Nyb2xsQm94LndpZHRoKCkvbUNTQl9jb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSldLFxuXHRcdFx0XHRsPVtcblx0XHRcdFx0XHRwYXJzZUludChtQ1NCX2RyYWdnZXJbMF0uY3NzKFwibWluLWhlaWdodFwiKSksTWF0aC5yb3VuZChyYXRpb1swXSptQ1NCX2RyYWdnZXJbMF0ucGFyZW50KCkuaGVpZ2h0KCkpLFxuXHRcdFx0XHRcdHBhcnNlSW50KG1DU0JfZHJhZ2dlclsxXS5jc3MoXCJtaW4td2lkdGhcIikpLE1hdGgucm91bmQocmF0aW9bMV0qbUNTQl9kcmFnZ2VyWzFdLnBhcmVudCgpLndpZHRoKCkpXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGg9b2xkSUUgJiYgKGxbMV08bFswXSkgPyBsWzBdIDogbFsxXSx3PW9sZElFICYmIChsWzNdPGxbMl0pID8gbFsyXSA6IGxbM107XG5cdFx0XHRtQ1NCX2RyYWdnZXJbMF0uY3NzKHtcblx0XHRcdFx0XCJoZWlnaHRcIjpoLFwibWF4LWhlaWdodFwiOihtQ1NCX2RyYWdnZXJbMF0ucGFyZW50KCkuaGVpZ2h0KCktMTApXG5cdFx0XHR9KS5maW5kKFwiLm1DU0JfZHJhZ2dlcl9iYXJcIikuY3NzKHtcImxpbmUtaGVpZ2h0XCI6bFswXStcInB4XCJ9KTtcblx0XHRcdG1DU0JfZHJhZ2dlclsxXS5jc3Moe1xuXHRcdFx0XHRcIndpZHRoXCI6dyxcIm1heC13aWR0aFwiOihtQ1NCX2RyYWdnZXJbMV0ucGFyZW50KCkud2lkdGgoKS0xMClcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBjYWxjdWxhdGVzIHNjcm9sbGJhciB0byBjb250ZW50IHJhdGlvICovXG5cdFx0X3Njcm9sbFJhdGlvPWZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxcblx0XHRcdFx0bUN1c3RvbVNjcm9sbEJveD0kKFwiI21DU0JfXCIrZC5pZHgpLFxuXHRcdFx0XHRtQ1NCX2NvbnRhaW5lcj0kKFwiI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyXCIpLFxuXHRcdFx0XHRtQ1NCX2RyYWdnZXI9WyQoXCIjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsXCIpLCQoXCIjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIildLFxuXHRcdFx0XHRzY3JvbGxBbW91bnQ9W21DU0JfY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKS1tQ3VzdG9tU2Nyb2xsQm94LmhlaWdodCgpLG1DU0JfY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpLW1DdXN0b21TY3JvbGxCb3gud2lkdGgoKV0sXG5cdFx0XHRcdHJhdGlvPVtcblx0XHRcdFx0XHRzY3JvbGxBbW91bnRbMF0vKG1DU0JfZHJhZ2dlclswXS5wYXJlbnQoKS5oZWlnaHQoKS1tQ1NCX2RyYWdnZXJbMF0uaGVpZ2h0KCkpLFxuXHRcdFx0XHRcdHNjcm9sbEFtb3VudFsxXS8obUNTQl9kcmFnZ2VyWzFdLnBhcmVudCgpLndpZHRoKCktbUNTQl9kcmFnZ2VyWzFdLndpZHRoKCkpXG5cdFx0XHRcdF07XG5cdFx0XHRkLnNjcm9sbFJhdGlvPXt5OnJhdGlvWzBdLHg6cmF0aW9bMV19O1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiB0b2dnbGVzIHNjcm9sbGluZyBjbGFzc2VzICovXG5cdFx0X29uRHJhZ0NsYXNzZXM9ZnVuY3Rpb24oZWwsYWN0aW9uLHhwbmQpe1xuXHRcdFx0dmFyIGV4cGFuZENsYXNzPXhwbmQgPyBjbGFzc2VzWzBdK1wiX2V4cGFuZGVkXCIgOiBcIlwiLFxuXHRcdFx0XHRzY3JvbGxiYXI9ZWwuY2xvc2VzdChcIi5tQ1NCX3Njcm9sbFRvb2xzXCIpO1xuXHRcdFx0aWYoYWN0aW9uPT09XCJhY3RpdmVcIil7XG5cdFx0XHRcdGVsLnRvZ2dsZUNsYXNzKGNsYXNzZXNbMF0rXCIgXCIrZXhwYW5kQ2xhc3MpOyBzY3JvbGxiYXIudG9nZ2xlQ2xhc3MoY2xhc3Nlc1sxXSk7IFxuXHRcdFx0XHRlbFswXS5fZHJhZ2dhYmxlPWVsWzBdLl9kcmFnZ2FibGUgPyAwIDogMTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRpZighZWxbMF0uX2RyYWdnYWJsZSl7XG5cdFx0XHRcdFx0aWYoYWN0aW9uPT09XCJoaWRlXCIpe1xuXHRcdFx0XHRcdFx0ZWwucmVtb3ZlQ2xhc3MoY2xhc3Nlc1swXSk7IHNjcm9sbGJhci5yZW1vdmVDbGFzcyhjbGFzc2VzWzFdKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGVsLmFkZENsYXNzKGNsYXNzZXNbMF0pOyBzY3JvbGxiYXIuYWRkQ2xhc3MoY2xhc3Nlc1sxXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIGNoZWNrcyBpZiBjb250ZW50IG92ZXJmbG93cyBpdHMgY29udGFpbmVyIHRvIGRldGVybWluZSBpZiBzY3JvbGxpbmcgaXMgcmVxdWlyZWQgKi9cblx0XHRfb3ZlcmZsb3dlZD1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksXG5cdFx0XHRcdG1DdXN0b21TY3JvbGxCb3g9JChcIiNtQ1NCX1wiK2QuaWR4KSxcblx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0Y29udGVudEhlaWdodD1kLm92ZXJmbG93ZWQ9PW51bGwgPyBtQ1NCX2NvbnRhaW5lci5oZWlnaHQoKSA6IG1DU0JfY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKSxcblx0XHRcdFx0Y29udGVudFdpZHRoPWQub3ZlcmZsb3dlZD09bnVsbCA/IG1DU0JfY29udGFpbmVyLndpZHRoKCkgOiBtQ1NCX2NvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSxcblx0XHRcdFx0aD1tQ1NCX2NvbnRhaW5lclswXS5zY3JvbGxIZWlnaHQsdz1tQ1NCX2NvbnRhaW5lclswXS5zY3JvbGxXaWR0aDtcblx0XHRcdGlmKGg+Y29udGVudEhlaWdodCl7Y29udGVudEhlaWdodD1oO31cblx0XHRcdGlmKHc+Y29udGVudFdpZHRoKXtjb250ZW50V2lkdGg9dzt9XG5cdFx0XHRyZXR1cm4gW2NvbnRlbnRIZWlnaHQ+bUN1c3RvbVNjcm9sbEJveC5oZWlnaHQoKSxjb250ZW50V2lkdGg+bUN1c3RvbVNjcm9sbEJveC53aWR0aCgpXTtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogcmVzZXRzIGNvbnRlbnQgcG9zaXRpb24gdG8gMCAqL1xuXHRcdF9yZXNldENvbnRlbnRQb3NpdGlvbj1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0bUN1c3RvbVNjcm9sbEJveD0kKFwiI21DU0JfXCIrZC5pZHgpLFxuXHRcdFx0XHRtQ1NCX2NvbnRhaW5lcj0kKFwiI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyXCIpLFxuXHRcdFx0XHRtQ1NCX2RyYWdnZXI9WyQoXCIjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsXCIpLCQoXCIjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIildO1xuXHRcdFx0X3N0b3AoJHRoaXMpOyAvKiBzdG9wIGFueSBjdXJyZW50IHNjcm9sbGluZyBiZWZvcmUgcmVzZXR0aW5nICovXG5cdFx0XHRpZigoby5heGlzIT09XCJ4XCIgJiYgIWQub3ZlcmZsb3dlZFswXSkgfHwgKG8uYXhpcz09PVwieVwiICYmIGQub3ZlcmZsb3dlZFswXSkpeyAvKiByZXNldCB5ICovXG5cdFx0XHRcdG1DU0JfZHJhZ2dlclswXS5hZGQobUNTQl9jb250YWluZXIpLmNzcyhcInRvcFwiLDApO1xuXHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsXCJfcmVzZXRZXCIpO1xuXHRcdFx0fVxuXHRcdFx0aWYoKG8uYXhpcyE9PVwieVwiICYmICFkLm92ZXJmbG93ZWRbMV0pIHx8IChvLmF4aXM9PT1cInhcIiAmJiBkLm92ZXJmbG93ZWRbMV0pKXsgLyogcmVzZXQgeCAqL1xuXHRcdFx0XHR2YXIgY3g9ZHg9MDtcblx0XHRcdFx0aWYoZC5sYW5nRGlyPT09XCJydGxcIil7IC8qIGFkanVzdCBsZWZ0IHBvc2l0aW9uIGZvciBydGwgZGlyZWN0aW9uICovXG5cdFx0XHRcdFx0Y3g9bUN1c3RvbVNjcm9sbEJveC53aWR0aCgpLW1DU0JfY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpO1xuXHRcdFx0XHRcdGR4PU1hdGguYWJzKGN4L2Quc2Nyb2xsUmF0aW8ueCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bUNTQl9jb250YWluZXIuY3NzKFwibGVmdFwiLGN4KTtcblx0XHRcdFx0bUNTQl9kcmFnZ2VyWzFdLmNzcyhcImxlZnRcIixkeCk7XG5cdFx0XHRcdF9zY3JvbGxUbygkdGhpcyxcIl9yZXNldFhcIik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIGJpbmRzIHNjcm9sbGJhciBldmVudHMgKi9cblx0XHRfYmluZEV2ZW50cz1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdDtcblx0XHRcdGlmKCFkLmJpbmRFdmVudHMpeyAvKiBjaGVjayBpZiBldmVudHMgYXJlIGFscmVhZHkgYm91bmQgKi9cblx0XHRcdFx0X2RyYWdnYWJsZS5jYWxsKHRoaXMpO1xuXHRcdFx0XHRpZihvLmNvbnRlbnRUb3VjaFNjcm9sbCl7X2NvbnRlbnREcmFnZ2FibGUuY2FsbCh0aGlzKTt9XG5cdFx0XHRcdF9zZWxlY3RhYmxlLmNhbGwodGhpcyk7XG5cdFx0XHRcdGlmKG8ubW91c2VXaGVlbC5lbmFibGUpeyAvKiBiaW5kIG1vdXNld2hlZWwgZm4gd2hlbiBwbHVnaW4gaXMgYXZhaWxhYmxlICovXG5cdFx0XHRcdFx0ZnVuY3Rpb24gX213dCgpe1xuXHRcdFx0XHRcdFx0bW91c2V3aGVlbFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRpZighJC5ldmVudC5zcGVjaWFsLm1vdXNld2hlZWwpe1xuXHRcdFx0XHRcdFx0XHRcdF9td3QoKTtcblx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KG1vdXNld2hlZWxUaW1lb3V0KTtcblx0XHRcdFx0XHRcdFx0XHRfbW91c2V3aGVlbC5jYWxsKCR0aGlzWzBdKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSwxMDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgbW91c2V3aGVlbFRpbWVvdXQ7XG5cdFx0XHRcdFx0X213dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9kcmFnZ2VyUmFpbC5jYWxsKHRoaXMpO1xuXHRcdFx0XHRfd3JhcHBlclNjcm9sbC5jYWxsKHRoaXMpO1xuXHRcdFx0XHRpZihvLmFkdmFuY2VkLmF1dG9TY3JvbGxPbkZvY3VzKXtfZm9jdXMuY2FsbCh0aGlzKTt9XG5cdFx0XHRcdGlmKG8uc2Nyb2xsQnV0dG9ucy5lbmFibGUpe19idXR0b25zLmNhbGwodGhpcyk7fVxuXHRcdFx0XHRpZihvLmtleWJvYXJkLmVuYWJsZSl7X2tleWJvYXJkLmNhbGwodGhpcyk7fVxuXHRcdFx0XHRkLmJpbmRFdmVudHM9dHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogdW5iaW5kcyBzY3JvbGxiYXIgZXZlbnRzICovXG5cdFx0X3VuYmluZEV2ZW50cz1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0bmFtZXNwYWNlPXBsdWdpblBmeCtcIl9cIitkLmlkeCxcblx0XHRcdFx0c2I9XCIubUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXJcIixcblx0XHRcdFx0c2VsPSQoXCIjbUNTQl9cIitkLmlkeCtcIiwjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXIsI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyX3dyYXBwZXIsXCIrc2IrXCIgLlwiK2NsYXNzZXNbMTJdK1wiLCNtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfdmVydGljYWwsI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl9ob3Jpem9udGFsLFwiK3NiK1wiPmFcIiksXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIik7XG5cdFx0XHRpZihvLmFkdmFuY2VkLnJlbGVhc2VEcmFnZ2FibGVTZWxlY3RvcnMpe3NlbC5hZGQoJChvLmFkdmFuY2VkLnJlbGVhc2VEcmFnZ2FibGVTZWxlY3RvcnMpKTt9XG5cdFx0XHRpZihvLmFkdmFuY2VkLmV4dHJhRHJhZ2dhYmxlU2VsZWN0b3JzKXtzZWwuYWRkKCQoby5hZHZhbmNlZC5leHRyYURyYWdnYWJsZVNlbGVjdG9ycykpO31cblx0XHRcdGlmKGQuYmluZEV2ZW50cyl7IC8qIGNoZWNrIGlmIGV2ZW50cyBhcmUgYm91bmQgKi9cblx0XHRcdFx0LyogdW5iaW5kIG5hbWVzcGFjZWQgZXZlbnRzIGZyb20gZG9jdW1lbnQvc2VsZWN0b3JzICovXG5cdFx0XHRcdCQoZG9jdW1lbnQpLmFkZCgkKCFfY2FuQWNjZXNzSUZyYW1lKCkgfHwgdG9wLmRvY3VtZW50KSkudW5iaW5kKFwiLlwiK25hbWVzcGFjZSk7XG5cdFx0XHRcdHNlbC5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCh0aGlzKS51bmJpbmQoXCIuXCIrbmFtZXNwYWNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8qIGNsZWFyIGFuZCBkZWxldGUgdGltZW91dHMvb2JqZWN0cyAqL1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoJHRoaXNbMF0uX2ZvY3VzVGltZW91dCk7IF9kZWxldGUoJHRoaXNbMF0sXCJfZm9jdXNUaW1lb3V0XCIpO1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoZC5zZXF1ZW50aWFsLnN0ZXApOyBfZGVsZXRlKGQuc2VxdWVudGlhbCxcInN0ZXBcIik7XG5cdFx0XHRcdGNsZWFyVGltZW91dChtQ1NCX2NvbnRhaW5lclswXS5vbkNvbXBsZXRlVGltZW91dCk7IF9kZWxldGUobUNTQl9jb250YWluZXJbMF0sXCJvbkNvbXBsZXRlVGltZW91dFwiKTtcblx0XHRcdFx0ZC5iaW5kRXZlbnRzPWZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiB0b2dnbGVzIHNjcm9sbGJhciB2aXNpYmlsaXR5ICovXG5cdFx0X3Njcm9sbGJhclZpc2liaWxpdHk9ZnVuY3Rpb24oZGlzYWJsZWQpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0Y29udGVudFdyYXBwZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lcl93cmFwcGVyXCIpLFxuXHRcdFx0XHRjb250ZW50PWNvbnRlbnRXcmFwcGVyLmxlbmd0aCA/IGNvbnRlbnRXcmFwcGVyIDogJChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0c2Nyb2xsYmFyPVskKFwiI21DU0JfXCIrZC5pZHgrXCJfc2Nyb2xsYmFyX3ZlcnRpY2FsXCIpLCQoXCIjbUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXJfaG9yaXpvbnRhbFwiKV0sXG5cdFx0XHRcdG1DU0JfZHJhZ2dlcj1bc2Nyb2xsYmFyWzBdLmZpbmQoXCIubUNTQl9kcmFnZ2VyXCIpLHNjcm9sbGJhclsxXS5maW5kKFwiLm1DU0JfZHJhZ2dlclwiKV07XG5cdFx0XHRpZihvLmF4aXMhPT1cInhcIil7XG5cdFx0XHRcdGlmKGQub3ZlcmZsb3dlZFswXSAmJiAhZGlzYWJsZWQpe1xuXHRcdFx0XHRcdHNjcm9sbGJhclswXS5hZGQobUNTQl9kcmFnZ2VyWzBdKS5hZGQoc2Nyb2xsYmFyWzBdLmNoaWxkcmVuKFwiYVwiKSkuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG5cdFx0XHRcdFx0Y29udGVudC5yZW1vdmVDbGFzcyhjbGFzc2VzWzhdK1wiIFwiK2NsYXNzZXNbMTBdKTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoby5hbHdheXNTaG93U2Nyb2xsYmFyKXtcblx0XHRcdFx0XHRcdGlmKG8uYWx3YXlzU2hvd1Njcm9sbGJhciE9PTIpe21DU0JfZHJhZ2dlclswXS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO31cblx0XHRcdFx0XHRcdGNvbnRlbnQucmVtb3ZlQ2xhc3MoY2xhc3Nlc1sxMF0pO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0c2Nyb2xsYmFyWzBdLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cdFx0XHRcdFx0XHRjb250ZW50LmFkZENsYXNzKGNsYXNzZXNbMTBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGVudC5hZGRDbGFzcyhjbGFzc2VzWzhdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoby5heGlzIT09XCJ5XCIpe1xuXHRcdFx0XHRpZihkLm92ZXJmbG93ZWRbMV0gJiYgIWRpc2FibGVkKXtcblx0XHRcdFx0XHRzY3JvbGxiYXJbMV0uYWRkKG1DU0JfZHJhZ2dlclsxXSkuYWRkKHNjcm9sbGJhclsxXS5jaGlsZHJlbihcImFcIikpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuXHRcdFx0XHRcdGNvbnRlbnQucmVtb3ZlQ2xhc3MoY2xhc3Nlc1s5XStcIiBcIitjbGFzc2VzWzExXSk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKG8uYWx3YXlzU2hvd1Njcm9sbGJhcil7XG5cdFx0XHRcdFx0XHRpZihvLmFsd2F5c1Nob3dTY3JvbGxiYXIhPT0yKXttQ1NCX2RyYWdnZXJbMV0uY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTt9XG5cdFx0XHRcdFx0XHRjb250ZW50LnJlbW92ZUNsYXNzKGNsYXNzZXNbMTFdKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHNjcm9sbGJhclsxXS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXHRcdFx0XHRcdFx0Y29udGVudC5hZGRDbGFzcyhjbGFzc2VzWzExXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRlbnQuYWRkQ2xhc3MoY2xhc3Nlc1s5XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKCFkLm92ZXJmbG93ZWRbMF0gJiYgIWQub3ZlcmZsb3dlZFsxXSl7XG5cdFx0XHRcdCR0aGlzLmFkZENsYXNzKGNsYXNzZXNbNV0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdCR0aGlzLnJlbW92ZUNsYXNzKGNsYXNzZXNbNV0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiByZXR1cm5zIGlucHV0IGNvb3JkaW5hdGVzIG9mIHBvaW50ZXIsIHRvdWNoIGFuZCBtb3VzZSBldmVudHMgKHJlbGF0aXZlIHRvIGRvY3VtZW50KSAqL1xuXHRcdF9jb29yZGluYXRlcz1mdW5jdGlvbihlKXtcblx0XHRcdHZhciB0PWUudHlwZSxvPWUudGFyZ2V0Lm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudCAmJiBmcmFtZUVsZW1lbnQhPT1udWxsID8gWyQoZnJhbWVFbGVtZW50KS5vZmZzZXQoKS50b3AsJChmcmFtZUVsZW1lbnQpLm9mZnNldCgpLmxlZnRdIDogbnVsbCxcblx0XHRcdFx0aW89X2NhbkFjY2Vzc0lGcmFtZSgpICYmIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQhPT10b3AuZG9jdW1lbnQgJiYgZnJhbWVFbGVtZW50IT09bnVsbCA/IFskKGUudmlldy5mcmFtZUVsZW1lbnQpLm9mZnNldCgpLnRvcCwkKGUudmlldy5mcmFtZUVsZW1lbnQpLm9mZnNldCgpLmxlZnRdIDogWzAsMF07XG5cdFx0XHRzd2l0Y2godCl7XG5cdFx0XHRcdGNhc2UgXCJwb2ludGVyZG93blwiOiBjYXNlIFwiTVNQb2ludGVyRG93blwiOiBjYXNlIFwicG9pbnRlcm1vdmVcIjogY2FzZSBcIk1TUG9pbnRlck1vdmVcIjogY2FzZSBcInBvaW50ZXJ1cFwiOiBjYXNlIFwiTVNQb2ludGVyVXBcIjpcblx0XHRcdFx0XHRyZXR1cm4gbyA/IFtlLm9yaWdpbmFsRXZlbnQucGFnZVktb1swXStpb1swXSxlLm9yaWdpbmFsRXZlbnQucGFnZVgtb1sxXStpb1sxXSxmYWxzZV0gOiBbZS5vcmlnaW5hbEV2ZW50LnBhZ2VZLGUub3JpZ2luYWxFdmVudC5wYWdlWCxmYWxzZV07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ0b3VjaHN0YXJ0XCI6IGNhc2UgXCJ0b3VjaG1vdmVcIjogY2FzZSBcInRvdWNoZW5kXCI6XG5cdFx0XHRcdFx0dmFyIHRvdWNoPWUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIHx8IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSxcblx0XHRcdFx0XHRcdHRvdWNoZXM9ZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIHx8IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7XG5cdFx0XHRcdFx0cmV0dXJuIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudCA/IFt0b3VjaC5zY3JlZW5ZLHRvdWNoLnNjcmVlblgsdG91Y2hlcz4xXSA6IFt0b3VjaC5wYWdlWSx0b3VjaC5wYWdlWCx0b3VjaGVzPjFdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBvID8gW2UucGFnZVktb1swXStpb1swXSxlLnBhZ2VYLW9bMV0raW9bMV0sZmFsc2VdIDogW2UucGFnZVksZS5wYWdlWCxmYWxzZV07XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIFxuXHRcdFNDUk9MTEJBUiBEUkFHIEVWRU5UU1xuXHRcdHNjcm9sbHMgY29udGVudCB2aWEgc2Nyb2xsYmFyIGRyYWdnaW5nIFxuXHRcdCovXG5cdFx0X2RyYWdnYWJsZT1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0bmFtZXNwYWNlPXBsdWdpblBmeCtcIl9cIitkLmlkeCxcblx0XHRcdFx0ZHJhZ2dlcklkPVtcIm1DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbFwiLFwibUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIl0sXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIiksXG5cdFx0XHRcdG1DU0JfZHJhZ2dlcj0kKFwiI1wiK2RyYWdnZXJJZFswXStcIiwjXCIrZHJhZ2dlcklkWzFdKSxcblx0XHRcdFx0ZHJhZ2dhYmxlLGRyYWdZLGRyYWdYLFxuXHRcdFx0XHRyZHM9by5hZHZhbmNlZC5yZWxlYXNlRHJhZ2dhYmxlU2VsZWN0b3JzID8gbUNTQl9kcmFnZ2VyLmFkZCgkKG8uYWR2YW5jZWQucmVsZWFzZURyYWdnYWJsZVNlbGVjdG9ycykpIDogbUNTQl9kcmFnZ2VyLFxuXHRcdFx0XHRlZHM9by5hZHZhbmNlZC5leHRyYURyYWdnYWJsZVNlbGVjdG9ycyA/ICQoIV9jYW5BY2Nlc3NJRnJhbWUoKSB8fCB0b3AuZG9jdW1lbnQpLmFkZCgkKG8uYWR2YW5jZWQuZXh0cmFEcmFnZ2FibGVTZWxlY3RvcnMpKSA6ICQoIV9jYW5BY2Nlc3NJRnJhbWUoKSB8fCB0b3AuZG9jdW1lbnQpO1xuXHRcdFx0bUNTQl9kcmFnZ2VyLmJpbmQoXCJjb250ZXh0bWVudS5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHJpZ2h0IGNsaWNrXG5cdFx0XHR9KS5iaW5kKFwibW91c2Vkb3duLlwiK25hbWVzcGFjZStcIiB0b3VjaHN0YXJ0LlwiK25hbWVzcGFjZStcIiBwb2ludGVyZG93bi5cIituYW1lc3BhY2UrXCIgTVNQb2ludGVyRG93bi5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYoIV9tb3VzZUJ0bkxlZnQoZSkpe3JldHVybjt9IC8qIGxlZnQgbW91c2UgYnV0dG9uIG9ubHkgKi9cblx0XHRcdFx0dG91Y2hBY3RpdmU9dHJ1ZTtcblx0XHRcdFx0aWYob2xkSUUpe2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gZmFsc2U7fX0gLyogZGlzYWJsZSB0ZXh0IHNlbGVjdGlvbiBmb3IgSUUgPCA5ICovXG5cdFx0XHRcdF9pZnJhbWUuY2FsbChtQ1NCX2NvbnRhaW5lcixmYWxzZSk7IC8qIGVuYWJsZSBzY3JvbGxiYXIgZHJhZ2dpbmcgb3ZlciBpZnJhbWVzIGJ5IGRpc2FibGluZyB0aGVpciBldmVudHMgKi9cblx0XHRcdFx0X3N0b3AoJHRoaXMpO1xuXHRcdFx0XHRkcmFnZ2FibGU9JCh0aGlzKTtcblx0XHRcdFx0dmFyIG9mZnNldD1kcmFnZ2FibGUub2Zmc2V0KCkseT1fY29vcmRpbmF0ZXMoZSlbMF0tb2Zmc2V0LnRvcCx4PV9jb29yZGluYXRlcyhlKVsxXS1vZmZzZXQubGVmdCxcblx0XHRcdFx0XHRoPWRyYWdnYWJsZS5oZWlnaHQoKStvZmZzZXQudG9wLHc9ZHJhZ2dhYmxlLndpZHRoKCkrb2Zmc2V0LmxlZnQ7XG5cdFx0XHRcdGlmKHk8aCAmJiB5PjAgJiYgeDx3ICYmIHg+MCl7XG5cdFx0XHRcdFx0ZHJhZ1k9eTsgXG5cdFx0XHRcdFx0ZHJhZ1g9eDtcblx0XHRcdFx0fVxuXHRcdFx0XHRfb25EcmFnQ2xhc3NlcyhkcmFnZ2FibGUsXCJhY3RpdmVcIixvLmF1dG9FeHBhbmRTY3JvbGxiYXIpOyBcblx0XHRcdH0pLmJpbmQoXCJ0b3VjaG1vdmUuXCIrbmFtZXNwYWNlLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHZhciBvZmZzZXQ9ZHJhZ2dhYmxlLm9mZnNldCgpLHk9X2Nvb3JkaW5hdGVzKGUpWzBdLW9mZnNldC50b3AseD1fY29vcmRpbmF0ZXMoZSlbMV0tb2Zmc2V0LmxlZnQ7XG5cdFx0XHRcdF9kcmFnKGRyYWdZLGRyYWdYLHkseCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoZG9jdW1lbnQpLmFkZChlZHMpLmJpbmQoXCJtb3VzZW1vdmUuXCIrbmFtZXNwYWNlK1wiIHBvaW50ZXJtb3ZlLlwiK25hbWVzcGFjZStcIiBNU1BvaW50ZXJNb3ZlLlwiK25hbWVzcGFjZSxmdW5jdGlvbihlKXtcblx0XHRcdFx0aWYoZHJhZ2dhYmxlKXtcblx0XHRcdFx0XHR2YXIgb2Zmc2V0PWRyYWdnYWJsZS5vZmZzZXQoKSx5PV9jb29yZGluYXRlcyhlKVswXS1vZmZzZXQudG9wLHg9X2Nvb3JkaW5hdGVzKGUpWzFdLW9mZnNldC5sZWZ0O1xuXHRcdFx0XHRcdGlmKGRyYWdZPT09eSAmJiBkcmFnWD09PXgpe3JldHVybjt9IC8qIGhhcyBpdCByZWFsbHkgbW92ZWQ/ICovXG5cdFx0XHRcdFx0X2RyYWcoZHJhZ1ksZHJhZ1gseSx4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSkuYWRkKHJkcykuYmluZChcIm1vdXNldXAuXCIrbmFtZXNwYWNlK1wiIHRvdWNoZW5kLlwiK25hbWVzcGFjZStcIiBwb2ludGVydXAuXCIrbmFtZXNwYWNlK1wiIE1TUG9pbnRlclVwLlwiK25hbWVzcGFjZSxmdW5jdGlvbihlKXtcblx0XHRcdFx0aWYoZHJhZ2dhYmxlKXtcblx0XHRcdFx0XHRfb25EcmFnQ2xhc3NlcyhkcmFnZ2FibGUsXCJhY3RpdmVcIixvLmF1dG9FeHBhbmRTY3JvbGxiYXIpOyBcblx0XHRcdFx0XHRkcmFnZ2FibGU9bnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0b3VjaEFjdGl2ZT1mYWxzZTtcblx0XHRcdFx0aWYob2xkSUUpe2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQ9bnVsbDt9IC8qIGVuYWJsZSB0ZXh0IHNlbGVjdGlvbiBmb3IgSUUgPCA5ICovXG5cdFx0XHRcdF9pZnJhbWUuY2FsbChtQ1NCX2NvbnRhaW5lcix0cnVlKTsgLyogZW5hYmxlIGlmcmFtZXMgZXZlbnRzICovXG5cdFx0XHR9KTtcblx0XHRcdGZ1bmN0aW9uIF9kcmFnKGRyYWdZLGRyYWdYLHkseCl7XG5cdFx0XHRcdG1DU0JfY29udGFpbmVyWzBdLmlkbGVUaW1lcj1vLnNjcm9sbEluZXJ0aWE8MjMzID8gMjUwIDogMDtcblx0XHRcdFx0aWYoZHJhZ2dhYmxlLmF0dHIoXCJpZFwiKT09PWRyYWdnZXJJZFsxXSl7XG5cdFx0XHRcdFx0dmFyIGRpcj1cInhcIix0bz0oKGRyYWdnYWJsZVswXS5vZmZzZXRMZWZ0LWRyYWdYKSt4KSpkLnNjcm9sbFJhdGlvLng7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHZhciBkaXI9XCJ5XCIsdG89KChkcmFnZ2FibGVbMF0ub2Zmc2V0VG9wLWRyYWdZKSt5KSpkLnNjcm9sbFJhdGlvLnk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3Njcm9sbFRvKCR0aGlzLHRvLnRvU3RyaW5nKCkse2RpcjpkaXIsZHJhZzp0cnVlfSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIFxuXHRcdFRPVUNIIFNXSVBFIEVWRU5UU1xuXHRcdHNjcm9sbHMgY29udGVudCB2aWEgdG91Y2ggc3dpcGUgXG5cdFx0RW11bGF0ZXMgdGhlIG5hdGl2ZSB0b3VjaC1zd2lwZSBzY3JvbGxpbmcgd2l0aCBtb21lbnR1bSBmb3VuZCBpbiBpT1MsIEFuZHJvaWQgYW5kIFdQIGRldmljZXMgXG5cdFx0Ki9cblx0XHRfY29udGVudERyYWdnYWJsZT1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0bmFtZXNwYWNlPXBsdWdpblBmeCtcIl9cIitkLmlkeCxcblx0XHRcdFx0bUN1c3RvbVNjcm9sbEJveD0kKFwiI21DU0JfXCIrZC5pZHgpLFxuXHRcdFx0XHRtQ1NCX2NvbnRhaW5lcj0kKFwiI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyXCIpLFxuXHRcdFx0XHRtQ1NCX2RyYWdnZXI9WyQoXCIjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX3ZlcnRpY2FsXCIpLCQoXCIjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIildLFxuXHRcdFx0XHRkcmFnZ2FibGUsZHJhZ1ksZHJhZ1gsdG91Y2hTdGFydFksdG91Y2hTdGFydFgsdG91Y2hNb3ZlWT1bXSx0b3VjaE1vdmVYPVtdLHN0YXJ0VGltZSxydW5uaW5nVGltZSxlbmRUaW1lLGRpc3RhbmNlLHNwZWVkLGFtb3VudCxcblx0XHRcdFx0ZHVyQT0wLGR1ckIsb3ZlcndyaXRlPW8uYXhpcz09PVwieXhcIiA/IFwibm9uZVwiIDogXCJhbGxcIix0b3VjaEludGVudD1bXSx0b3VjaERyYWcsZG9jRHJhZyxcblx0XHRcdFx0aWZyYW1lPW1DU0JfY29udGFpbmVyLmZpbmQoXCJpZnJhbWVcIiksXG5cdFx0XHRcdGV2ZW50cz1bXG5cdFx0XHRcdFx0XCJ0b3VjaHN0YXJ0LlwiK25hbWVzcGFjZStcIiBwb2ludGVyZG93bi5cIituYW1lc3BhY2UrXCIgTVNQb2ludGVyRG93bi5cIituYW1lc3BhY2UsIC8vc3RhcnRcblx0XHRcdFx0XHRcInRvdWNobW92ZS5cIituYW1lc3BhY2UrXCIgcG9pbnRlcm1vdmUuXCIrbmFtZXNwYWNlK1wiIE1TUG9pbnRlck1vdmUuXCIrbmFtZXNwYWNlLCAvL21vdmVcblx0XHRcdFx0XHRcInRvdWNoZW5kLlwiK25hbWVzcGFjZStcIiBwb2ludGVydXAuXCIrbmFtZXNwYWNlK1wiIE1TUG9pbnRlclVwLlwiK25hbWVzcGFjZSAvL2VuZFxuXHRcdFx0XHRdLFxuXHRcdFx0XHR0b3VjaEFjdGlvbj1kb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uIT09dW5kZWZpbmVkICYmIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24hPT1cIlwiO1xuXHRcdFx0bUNTQl9jb250YWluZXIuYmluZChldmVudHNbMF0sZnVuY3Rpb24oZSl7XG5cdFx0XHRcdF9vblRvdWNoc3RhcnQoZSk7XG5cdFx0XHR9KS5iaW5kKGV2ZW50c1sxXSxmdW5jdGlvbihlKXtcblx0XHRcdFx0X29uVG91Y2htb3ZlKGUpO1xuXHRcdFx0fSk7XG5cdFx0XHRtQ3VzdG9tU2Nyb2xsQm94LmJpbmQoZXZlbnRzWzBdLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRfb25Ub3VjaHN0YXJ0MihlKTtcblx0XHRcdH0pLmJpbmQoZXZlbnRzWzJdLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRfb25Ub3VjaGVuZChlKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYoaWZyYW1lLmxlbmd0aCl7XG5cdFx0XHRcdGlmcmFtZS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCh0aGlzKS5iaW5kKFwibG9hZFwiLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHQvKiBiaW5kIGV2ZW50cyBvbiBhY2Nlc3NpYmxlIGlmcmFtZXMgKi9cblx0XHRcdFx0XHRcdGlmKF9jYW5BY2Nlc3NJRnJhbWUodGhpcykpe1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMuY29udGVudERvY3VtZW50IHx8IHRoaXMuY29udGVudFdpbmRvdy5kb2N1bWVudCkuYmluZChldmVudHNbMF0sZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRcdFx0X29uVG91Y2hzdGFydChlKTtcblx0XHRcdFx0XHRcdFx0XHRfb25Ub3VjaHN0YXJ0MihlKTtcblx0XHRcdFx0XHRcdFx0fSkuYmluZChldmVudHNbMV0sZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRcdFx0X29uVG91Y2htb3ZlKGUpO1xuXHRcdFx0XHRcdFx0XHR9KS5iaW5kKGV2ZW50c1syXSxmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdFx0XHRfb25Ub3VjaGVuZChlKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gX29uVG91Y2hzdGFydChlKXtcblx0XHRcdFx0aWYoIV9wb2ludGVyVG91Y2goZSkgfHwgdG91Y2hBY3RpdmUgfHwgX2Nvb3JkaW5hdGVzKGUpWzJdKXt0b3VjaGFibGU9MDsgcmV0dXJuO31cblx0XHRcdFx0dG91Y2hhYmxlPTE7IHRvdWNoRHJhZz0wOyBkb2NEcmFnPTA7IGRyYWdnYWJsZT0xO1xuXHRcdFx0XHQkdGhpcy5yZW1vdmVDbGFzcyhcIm1DU190b3VjaF9hY3Rpb25cIik7XG5cdFx0XHRcdHZhciBvZmZzZXQ9bUNTQl9jb250YWluZXIub2Zmc2V0KCk7XG5cdFx0XHRcdGRyYWdZPV9jb29yZGluYXRlcyhlKVswXS1vZmZzZXQudG9wO1xuXHRcdFx0XHRkcmFnWD1fY29vcmRpbmF0ZXMoZSlbMV0tb2Zmc2V0LmxlZnQ7XG5cdFx0XHRcdHRvdWNoSW50ZW50PVtfY29vcmRpbmF0ZXMoZSlbMF0sX2Nvb3JkaW5hdGVzKGUpWzFdXTtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIF9vblRvdWNobW92ZShlKXtcblx0XHRcdFx0aWYoIV9wb2ludGVyVG91Y2goZSkgfHwgdG91Y2hBY3RpdmUgfHwgX2Nvb3JkaW5hdGVzKGUpWzJdKXtyZXR1cm47fVxuXHRcdFx0XHRpZighby5kb2N1bWVudFRvdWNoU2Nyb2xsKXtlLnByZXZlbnREZWZhdWx0KCk7fSBcblx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0aWYoZG9jRHJhZyAmJiAhdG91Y2hEcmFnKXtyZXR1cm47fVxuXHRcdFx0XHRpZihkcmFnZ2FibGUpe1xuXHRcdFx0XHRcdHJ1bm5pbmdUaW1lPV9nZXRUaW1lKCk7XG5cdFx0XHRcdFx0dmFyIG9mZnNldD1tQ3VzdG9tU2Nyb2xsQm94Lm9mZnNldCgpLHk9X2Nvb3JkaW5hdGVzKGUpWzBdLW9mZnNldC50b3AseD1fY29vcmRpbmF0ZXMoZSlbMV0tb2Zmc2V0LmxlZnQsXG5cdFx0XHRcdFx0XHRlYXNpbmc9XCJtY3NMaW5lYXJPdXRcIjtcblx0XHRcdFx0XHR0b3VjaE1vdmVZLnB1c2goeSk7XG5cdFx0XHRcdFx0dG91Y2hNb3ZlWC5wdXNoKHgpO1xuXHRcdFx0XHRcdHRvdWNoSW50ZW50WzJdPU1hdGguYWJzKF9jb29yZGluYXRlcyhlKVswXS10b3VjaEludGVudFswXSk7IHRvdWNoSW50ZW50WzNdPU1hdGguYWJzKF9jb29yZGluYXRlcyhlKVsxXS10b3VjaEludGVudFsxXSk7XG5cdFx0XHRcdFx0aWYoZC5vdmVyZmxvd2VkWzBdKXtcblx0XHRcdFx0XHRcdHZhciBsaW1pdD1tQ1NCX2RyYWdnZXJbMF0ucGFyZW50KCkuaGVpZ2h0KCktbUNTQl9kcmFnZ2VyWzBdLmhlaWdodCgpLFxuXHRcdFx0XHRcdFx0XHRwcmV2ZW50PSgoZHJhZ1kteSk+MCAmJiAoeS1kcmFnWSk+LShsaW1pdCpkLnNjcm9sbFJhdGlvLnkpICYmICh0b3VjaEludGVudFszXSoyPHRvdWNoSW50ZW50WzJdIHx8IG8uYXhpcz09PVwieXhcIikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihkLm92ZXJmbG93ZWRbMV0pe1xuXHRcdFx0XHRcdFx0dmFyIGxpbWl0WD1tQ1NCX2RyYWdnZXJbMV0ucGFyZW50KCkud2lkdGgoKS1tQ1NCX2RyYWdnZXJbMV0ud2lkdGgoKSxcblx0XHRcdFx0XHRcdFx0cHJldmVudFg9KChkcmFnWC14KT4wICYmICh4LWRyYWdYKT4tKGxpbWl0WCpkLnNjcm9sbFJhdGlvLngpICYmICh0b3VjaEludGVudFsyXSoyPHRvdWNoSW50ZW50WzNdIHx8IG8uYXhpcz09PVwieXhcIikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwcmV2ZW50IHx8IHByZXZlbnRYKXsgLyogcHJldmVudCBuYXRpdmUgZG9jdW1lbnQgc2Nyb2xsaW5nICovXG5cdFx0XHRcdFx0XHRpZighdG91Y2hBY3Rpb24pe2UucHJldmVudERlZmF1bHQoKTt9IFxuXHRcdFx0XHRcdFx0dG91Y2hEcmFnPTE7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRkb2NEcmFnPTE7XG5cdFx0XHRcdFx0XHQkdGhpcy5hZGRDbGFzcyhcIm1DU190b3VjaF9hY3Rpb25cIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHRvdWNoQWN0aW9uKXtlLnByZXZlbnREZWZhdWx0KCk7fSBcblx0XHRcdFx0XHRhbW91bnQ9by5heGlzPT09XCJ5eFwiID8gWyhkcmFnWS15KSwoZHJhZ1gteCldIDogby5heGlzPT09XCJ4XCIgPyBbbnVsbCwoZHJhZ1gteCldIDogWyhkcmFnWS15KSxudWxsXTtcblx0XHRcdFx0XHRtQ1NCX2NvbnRhaW5lclswXS5pZGxlVGltZXI9MjUwO1xuXHRcdFx0XHRcdGlmKGQub3ZlcmZsb3dlZFswXSl7X2RyYWcoYW1vdW50WzBdLGR1ckEsZWFzaW5nLFwieVwiLFwiYWxsXCIsdHJ1ZSk7fVxuXHRcdFx0XHRcdGlmKGQub3ZlcmZsb3dlZFsxXSl7X2RyYWcoYW1vdW50WzFdLGR1ckEsZWFzaW5nLFwieFwiLG92ZXJ3cml0ZSx0cnVlKTt9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIF9vblRvdWNoc3RhcnQyKGUpe1xuXHRcdFx0XHRpZighX3BvaW50ZXJUb3VjaChlKSB8fCB0b3VjaEFjdGl2ZSB8fCBfY29vcmRpbmF0ZXMoZSlbMl0pe3RvdWNoYWJsZT0wOyByZXR1cm47fVxuXHRcdFx0XHR0b3VjaGFibGU9MTtcblx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0X3N0b3AoJHRoaXMpO1xuXHRcdFx0XHRzdGFydFRpbWU9X2dldFRpbWUoKTtcblx0XHRcdFx0dmFyIG9mZnNldD1tQ3VzdG9tU2Nyb2xsQm94Lm9mZnNldCgpO1xuXHRcdFx0XHR0b3VjaFN0YXJ0WT1fY29vcmRpbmF0ZXMoZSlbMF0tb2Zmc2V0LnRvcDtcblx0XHRcdFx0dG91Y2hTdGFydFg9X2Nvb3JkaW5hdGVzKGUpWzFdLW9mZnNldC5sZWZ0O1xuXHRcdFx0XHR0b3VjaE1vdmVZPVtdOyB0b3VjaE1vdmVYPVtdO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gX29uVG91Y2hlbmQoZSl7XG5cdFx0XHRcdGlmKCFfcG9pbnRlclRvdWNoKGUpIHx8IHRvdWNoQWN0aXZlIHx8IF9jb29yZGluYXRlcyhlKVsyXSl7cmV0dXJuO31cblx0XHRcdFx0ZHJhZ2dhYmxlPTA7XG5cdFx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdHRvdWNoRHJhZz0wOyBkb2NEcmFnPTA7XG5cdFx0XHRcdGVuZFRpbWU9X2dldFRpbWUoKTtcblx0XHRcdFx0dmFyIG9mZnNldD1tQ3VzdG9tU2Nyb2xsQm94Lm9mZnNldCgpLHk9X2Nvb3JkaW5hdGVzKGUpWzBdLW9mZnNldC50b3AseD1fY29vcmRpbmF0ZXMoZSlbMV0tb2Zmc2V0LmxlZnQ7XG5cdFx0XHRcdGlmKChlbmRUaW1lLXJ1bm5pbmdUaW1lKT4zMCl7cmV0dXJuO31cblx0XHRcdFx0c3BlZWQ9MTAwMC8oZW5kVGltZS1zdGFydFRpbWUpO1xuXHRcdFx0XHR2YXIgZWFzaW5nPVwibWNzRWFzZU91dFwiLHNsb3c9c3BlZWQ8Mi41LFxuXHRcdFx0XHRcdGRpZmY9c2xvdyA/IFt0b3VjaE1vdmVZW3RvdWNoTW92ZVkubGVuZ3RoLTJdLHRvdWNoTW92ZVhbdG91Y2hNb3ZlWC5sZW5ndGgtMl1dIDogWzAsMF07XG5cdFx0XHRcdGRpc3RhbmNlPXNsb3cgPyBbKHktZGlmZlswXSksKHgtZGlmZlsxXSldIDogW3ktdG91Y2hTdGFydFkseC10b3VjaFN0YXJ0WF07XG5cdFx0XHRcdHZhciBhYnNEaXN0YW5jZT1bTWF0aC5hYnMoZGlzdGFuY2VbMF0pLE1hdGguYWJzKGRpc3RhbmNlWzFdKV07XG5cdFx0XHRcdHNwZWVkPXNsb3cgPyBbTWF0aC5hYnMoZGlzdGFuY2VbMF0vNCksTWF0aC5hYnMoZGlzdGFuY2VbMV0vNCldIDogW3NwZWVkLHNwZWVkXTtcblx0XHRcdFx0dmFyIGE9W1xuXHRcdFx0XHRcdE1hdGguYWJzKG1DU0JfY29udGFpbmVyWzBdLm9mZnNldFRvcCktKGRpc3RhbmNlWzBdKl9tKChhYnNEaXN0YW5jZVswXS9zcGVlZFswXSksc3BlZWRbMF0pKSxcblx0XHRcdFx0XHRNYXRoLmFicyhtQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRMZWZ0KS0oZGlzdGFuY2VbMV0qX20oKGFic0Rpc3RhbmNlWzFdL3NwZWVkWzFdKSxzcGVlZFsxXSkpXG5cdFx0XHRcdF07XG5cdFx0XHRcdGFtb3VudD1vLmF4aXM9PT1cInl4XCIgPyBbYVswXSxhWzFdXSA6IG8uYXhpcz09PVwieFwiID8gW251bGwsYVsxXV0gOiBbYVswXSxudWxsXTtcblx0XHRcdFx0ZHVyQj1bKGFic0Rpc3RhbmNlWzBdKjQpK28uc2Nyb2xsSW5lcnRpYSwoYWJzRGlzdGFuY2VbMV0qNCkrby5zY3JvbGxJbmVydGlhXTtcblx0XHRcdFx0dmFyIG1kPXBhcnNlSW50KG8uY29udGVudFRvdWNoU2Nyb2xsKSB8fCAwOyAvKiBhYnNvbHV0ZSBtaW5pbXVtIGRpc3RhbmNlIHJlcXVpcmVkICovXG5cdFx0XHRcdGFtb3VudFswXT1hYnNEaXN0YW5jZVswXT5tZCA/IGFtb3VudFswXSA6IDA7XG5cdFx0XHRcdGFtb3VudFsxXT1hYnNEaXN0YW5jZVsxXT5tZCA/IGFtb3VudFsxXSA6IDA7XG5cdFx0XHRcdGlmKGQub3ZlcmZsb3dlZFswXSl7X2RyYWcoYW1vdW50WzBdLGR1ckJbMF0sZWFzaW5nLFwieVwiLG92ZXJ3cml0ZSxmYWxzZSk7fVxuXHRcdFx0XHRpZihkLm92ZXJmbG93ZWRbMV0pe19kcmFnKGFtb3VudFsxXSxkdXJCWzFdLGVhc2luZyxcInhcIixvdmVyd3JpdGUsZmFsc2UpO31cblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIF9tKGRzLHMpe1xuXHRcdFx0XHR2YXIgcj1bcyoxLjUscyoyLHMvMS41LHMvMl07XG5cdFx0XHRcdGlmKGRzPjkwKXtcblx0XHRcdFx0XHRyZXR1cm4gcz40ID8gclswXSA6IHJbM107XG5cdFx0XHRcdH1lbHNlIGlmKGRzPjYwKXtcblx0XHRcdFx0XHRyZXR1cm4gcz4zID8gclszXSA6IHJbMl07XG5cdFx0XHRcdH1lbHNlIGlmKGRzPjMwKXtcblx0XHRcdFx0XHRyZXR1cm4gcz44ID8gclsxXSA6IHM+NiA/IHJbMF0gOiBzPjQgPyBzIDogclsyXTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0cmV0dXJuIHM+OCA/IHMgOiByWzNdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiBfZHJhZyhhbW91bnQsZHVyLGVhc2luZyxkaXIsb3ZlcndyaXRlLGRyYWcpe1xuXHRcdFx0XHRpZighYW1vdW50KXtyZXR1cm47fVxuXHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsYW1vdW50LnRvU3RyaW5nKCkse2R1cjpkdXIsc2Nyb2xsRWFzaW5nOmVhc2luZyxkaXI6ZGlyLG92ZXJ3cml0ZTpvdmVyd3JpdGUsZHJhZzpkcmFnfSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIFxuXHRcdFNFTEVDVCBURVhUIEVWRU5UUyBcblx0XHRzY3JvbGxzIGNvbnRlbnQgd2hlbiB0ZXh0IGlzIHNlbGVjdGVkIFxuXHRcdCovXG5cdFx0X3NlbGVjdGFibGU9ZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkdGhpcz0kKHRoaXMpLGQ9JHRoaXMuZGF0YShwbHVnaW5QZngpLG89ZC5vcHQsc2VxPWQuc2VxdWVudGlhbCxcblx0XHRcdFx0bmFtZXNwYWNlPXBsdWdpblBmeCtcIl9cIitkLmlkeCxcblx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0d3JhcHBlcj1tQ1NCX2NvbnRhaW5lci5wYXJlbnQoKSxcblx0XHRcdFx0YWN0aW9uO1xuXHRcdFx0bUNTQl9jb250YWluZXIuYmluZChcIm1vdXNlZG93bi5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGlmKHRvdWNoYWJsZSl7cmV0dXJuO31cblx0XHRcdFx0aWYoIWFjdGlvbil7YWN0aW9uPTE7IHRvdWNoQWN0aXZlPXRydWU7fVxuXHRcdFx0fSkuYWRkKGRvY3VtZW50KS5iaW5kKFwibW91c2Vtb3ZlLlwiK25hbWVzcGFjZSxmdW5jdGlvbihlKXtcblx0XHRcdFx0aWYoIXRvdWNoYWJsZSAmJiBhY3Rpb24gJiYgX3NlbCgpKXtcblx0XHRcdFx0XHR2YXIgb2Zmc2V0PW1DU0JfY29udGFpbmVyLm9mZnNldCgpLFxuXHRcdFx0XHRcdFx0eT1fY29vcmRpbmF0ZXMoZSlbMF0tb2Zmc2V0LnRvcCttQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRUb3AseD1fY29vcmRpbmF0ZXMoZSlbMV0tb2Zmc2V0LmxlZnQrbUNTQl9jb250YWluZXJbMF0ub2Zmc2V0TGVmdDtcblx0XHRcdFx0XHRpZih5PjAgJiYgeTx3cmFwcGVyLmhlaWdodCgpICYmIHg+MCAmJiB4PHdyYXBwZXIud2lkdGgoKSl7XG5cdFx0XHRcdFx0XHRpZihzZXEuc3RlcCl7X3NlcShcIm9mZlwiLG51bGwsXCJzdGVwcGVkXCIpO31cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGlmKG8uYXhpcyE9PVwieFwiICYmIGQub3ZlcmZsb3dlZFswXSl7XG5cdFx0XHRcdFx0XHRcdGlmKHk8MCl7XG5cdFx0XHRcdFx0XHRcdFx0X3NlcShcIm9uXCIsMzgpO1xuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZih5PndyYXBwZXIuaGVpZ2h0KCkpe1xuXHRcdFx0XHRcdFx0XHRcdF9zZXEoXCJvblwiLDQwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoby5heGlzIT09XCJ5XCIgJiYgZC5vdmVyZmxvd2VkWzFdKXtcblx0XHRcdFx0XHRcdFx0aWYoeDwwKXtcblx0XHRcdFx0XHRcdFx0XHRfc2VxKFwib25cIiwzNyk7XG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmKHg+d3JhcHBlci53aWR0aCgpKXtcblx0XHRcdFx0XHRcdFx0XHRfc2VxKFwib25cIiwzOSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLmJpbmQoXCJtb3VzZXVwLlwiK25hbWVzcGFjZStcIiBkcmFnZW5kLlwiK25hbWVzcGFjZSxmdW5jdGlvbihlKXtcblx0XHRcdFx0aWYodG91Y2hhYmxlKXtyZXR1cm47fVxuXHRcdFx0XHRpZihhY3Rpb24pe2FjdGlvbj0wOyBfc2VxKFwib2ZmXCIsbnVsbCk7fVxuXHRcdFx0XHR0b3VjaEFjdGl2ZT1mYWxzZTtcblx0XHRcdH0pO1xuXHRcdFx0ZnVuY3Rpb24gX3NlbCgpe1xuXHRcdFx0XHRyZXR1cm4gXHR3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkgOiBcblx0XHRcdFx0XHRcdGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24udHlwZSE9XCJDb250cm9sXCIgPyBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0IDogMDtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIF9zZXEoYSxjLHMpe1xuXHRcdFx0XHRzZXEudHlwZT1zICYmIGFjdGlvbiA/IFwic3RlcHBlZFwiIDogXCJzdGVwbGVzc1wiO1xuXHRcdFx0XHRzZXEuc2Nyb2xsQW1vdW50PTEwO1xuXHRcdFx0XHRfc2VxdWVudGlhbFNjcm9sbCgkdGhpcyxhLGMsXCJtY3NMaW5lYXJPdXRcIixzID8gNjAgOiBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogXG5cdFx0TU9VU0UgV0hFRUwgRVZFTlRcblx0XHRzY3JvbGxzIGNvbnRlbnQgdmlhIG1vdXNlLXdoZWVsIFxuXHRcdHZpYSBtb3VzZS13aGVlbCBwbHVnaW4gKGh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uYWFyb24vanF1ZXJ5LW1vdXNld2hlZWwpXG5cdFx0Ki9cblx0XHRfbW91c2V3aGVlbD1mdW5jdGlvbigpe1xuXHRcdFx0aWYoISQodGhpcykuZGF0YShwbHVnaW5QZngpKXtyZXR1cm47fSAvKiBDaGVjayBpZiB0aGUgc2Nyb2xsYmFyIGlzIHJlYWR5IHRvIHVzZSBtb3VzZXdoZWVsIGV2ZW50cyAoaXNzdWU6ICMxODUpICovXG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxvPWQub3B0LFxuXHRcdFx0XHRuYW1lc3BhY2U9cGx1Z2luUGZ4K1wiX1wiK2QuaWR4LFxuXHRcdFx0XHRtQ3VzdG9tU2Nyb2xsQm94PSQoXCIjbUNTQl9cIitkLmlkeCksXG5cdFx0XHRcdG1DU0JfZHJhZ2dlcj1bJChcIiNtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfdmVydGljYWxcIiksJChcIiNtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKV0sXG5cdFx0XHRcdGlmcmFtZT0kKFwiI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyXCIpLmZpbmQoXCJpZnJhbWVcIik7XG5cdFx0XHRpZihpZnJhbWUubGVuZ3RoKXtcblx0XHRcdFx0aWZyYW1lLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHQkKHRoaXMpLmJpbmQoXCJsb2FkXCIsZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdC8qIGJpbmQgZXZlbnRzIG9uIGFjY2Vzc2libGUgaWZyYW1lcyAqL1xuXHRcdFx0XHRcdFx0aWYoX2NhbkFjY2Vzc0lGcmFtZSh0aGlzKSl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcy5jb250ZW50RG9jdW1lbnQgfHwgdGhpcy5jb250ZW50V2luZG93LmRvY3VtZW50KS5iaW5kKFwibW91c2V3aGVlbC5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSxkZWx0YSl7XG5cdFx0XHRcdFx0XHRcdFx0X29uTW91c2V3aGVlbChlLGRlbHRhKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bUN1c3RvbVNjcm9sbEJveC5iaW5kKFwibW91c2V3aGVlbC5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSxkZWx0YSl7XG5cdFx0XHRcdF9vbk1vdXNld2hlZWwoZSxkZWx0YSk7XG5cdFx0XHR9KTtcblx0XHRcdGZ1bmN0aW9uIF9vbk1vdXNld2hlZWwoZSxkZWx0YSl7XG5cdFx0XHRcdF9zdG9wKCR0aGlzKTtcblx0XHRcdFx0aWYoX2Rpc2FibGVNb3VzZXdoZWVsKCR0aGlzLGUudGFyZ2V0KSl7cmV0dXJuO30gLyogZGlzYWJsZXMgbW91c2Utd2hlZWwgd2hlbiBob3ZlcmluZyBzcGVjaWZpYyBlbGVtZW50cyAqL1xuXHRcdFx0XHR2YXIgZGVsdGFGYWN0b3I9by5tb3VzZVdoZWVsLmRlbHRhRmFjdG9yIT09XCJhdXRvXCIgPyBwYXJzZUludChvLm1vdXNlV2hlZWwuZGVsdGFGYWN0b3IpIDogKG9sZElFICYmIGUuZGVsdGFGYWN0b3I8MTAwKSA/IDEwMCA6IGUuZGVsdGFGYWN0b3IgfHwgMTAwLFxuXHRcdFx0XHRcdGR1cj1vLnNjcm9sbEluZXJ0aWE7XG5cdFx0XHRcdGlmKG8uYXhpcz09PVwieFwiIHx8IG8ubW91c2VXaGVlbC5heGlzPT09XCJ4XCIpe1xuXHRcdFx0XHRcdHZhciBkaXI9XCJ4XCIsXG5cdFx0XHRcdFx0XHRweD1bTWF0aC5yb3VuZChkZWx0YUZhY3RvcipkLnNjcm9sbFJhdGlvLngpLHBhcnNlSW50KG8ubW91c2VXaGVlbC5zY3JvbGxBbW91bnQpXSxcblx0XHRcdFx0XHRcdGFtb3VudD1vLm1vdXNlV2hlZWwuc2Nyb2xsQW1vdW50IT09XCJhdXRvXCIgPyBweFsxXSA6IHB4WzBdPj1tQ3VzdG9tU2Nyb2xsQm94LndpZHRoKCkgPyBtQ3VzdG9tU2Nyb2xsQm94LndpZHRoKCkqMC45IDogcHhbMF0sXG5cdFx0XHRcdFx0XHRjb250ZW50UG9zPU1hdGguYWJzKCQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIilbMF0ub2Zmc2V0TGVmdCksXG5cdFx0XHRcdFx0XHRkcmFnZ2VyUG9zPW1DU0JfZHJhZ2dlclsxXVswXS5vZmZzZXRMZWZ0LFxuXHRcdFx0XHRcdFx0bGltaXQ9bUNTQl9kcmFnZ2VyWzFdLnBhcmVudCgpLndpZHRoKCktbUNTQl9kcmFnZ2VyWzFdLndpZHRoKCksXG5cdFx0XHRcdFx0XHRkbHQ9by5tb3VzZVdoZWVsLmF4aXM9PT1cInlcIiA/IChlLmRlbHRhWSB8fCBkZWx0YSkgOiBlLmRlbHRhWDtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dmFyIGRpcj1cInlcIixcblx0XHRcdFx0XHRcdHB4PVtNYXRoLnJvdW5kKGRlbHRhRmFjdG9yKmQuc2Nyb2xsUmF0aW8ueSkscGFyc2VJbnQoby5tb3VzZVdoZWVsLnNjcm9sbEFtb3VudCldLFxuXHRcdFx0XHRcdFx0YW1vdW50PW8ubW91c2VXaGVlbC5zY3JvbGxBbW91bnQhPT1cImF1dG9cIiA/IHB4WzFdIDogcHhbMF0+PW1DdXN0b21TY3JvbGxCb3guaGVpZ2h0KCkgPyBtQ3VzdG9tU2Nyb2xsQm94LmhlaWdodCgpKjAuOSA6IHB4WzBdLFxuXHRcdFx0XHRcdFx0Y29udGVudFBvcz1NYXRoLmFicygkKFwiI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyXCIpWzBdLm9mZnNldFRvcCksXG5cdFx0XHRcdFx0XHRkcmFnZ2VyUG9zPW1DU0JfZHJhZ2dlclswXVswXS5vZmZzZXRUb3AsXG5cdFx0XHRcdFx0XHRsaW1pdD1tQ1NCX2RyYWdnZXJbMF0ucGFyZW50KCkuaGVpZ2h0KCktbUNTQl9kcmFnZ2VyWzBdLmhlaWdodCgpLFxuXHRcdFx0XHRcdFx0ZGx0PWUuZGVsdGFZIHx8IGRlbHRhO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKChkaXI9PT1cInlcIiAmJiAhZC5vdmVyZmxvd2VkWzBdKSB8fCAoZGlyPT09XCJ4XCIgJiYgIWQub3ZlcmZsb3dlZFsxXSkpe3JldHVybjt9XG5cdFx0XHRcdGlmKG8ubW91c2VXaGVlbC5pbnZlcnQgfHwgZS53ZWJraXREaXJlY3Rpb25JbnZlcnRlZEZyb21EZXZpY2Upe2RsdD0tZGx0O31cblx0XHRcdFx0aWYoby5tb3VzZVdoZWVsLm5vcm1hbGl6ZURlbHRhKXtkbHQ9ZGx0PDAgPyAtMSA6IDE7fVxuXHRcdFx0XHRpZigoZGx0PjAgJiYgZHJhZ2dlclBvcyE9PTApIHx8IChkbHQ8MCAmJiBkcmFnZ2VyUG9zIT09bGltaXQpIHx8IG8ubW91c2VXaGVlbC5wcmV2ZW50RGVmYXVsdCl7XG5cdFx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoZS5kZWx0YUZhY3Rvcjw1ICYmICFvLm1vdXNlV2hlZWwubm9ybWFsaXplRGVsdGEpe1xuXHRcdFx0XHRcdC8vdmVyeSBsb3cgZGVsdGFGYWN0b3IgdmFsdWVzIG1lYW4gc29tZSBraW5kIG9mIGRlbHRhIGFjY2VsZXJhdGlvbiAoZS5nLiBvc3ggdHJhY2twYWQpLCBzbyBhZGp1c3Rpbmcgc2Nyb2xsaW5nIGFjY29yZGluZ2x5XG5cdFx0XHRcdFx0YW1vdW50PWUuZGVsdGFGYWN0b3I7IGR1cj0xNztcblx0XHRcdFx0fVxuXHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsKGNvbnRlbnRQb3MtKGRsdCphbW91bnQpKS50b1N0cmluZygpLHtkaXI6ZGlyLGR1cjpkdXJ9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogY2hlY2tzIGlmIGlmcmFtZSBjYW4gYmUgYWNjZXNzZWQgKi9cblx0XHRfY2FuQWNjZXNzSUZyYW1lQ2FjaGU9bmV3IE9iamVjdCgpLFxuXHRcdF9jYW5BY2Nlc3NJRnJhbWU9ZnVuY3Rpb24oaWZyYW1lKXtcblx0XHQgICAgdmFyIHJlc3VsdD1mYWxzZSxjYWNoZUtleT1mYWxzZSxodG1sPW51bGw7XG5cdFx0ICAgIGlmKGlmcmFtZT09PXVuZGVmaW5lZCl7XG5cdFx0XHRcdGNhY2hlS2V5PVwiI2VtcHR5XCI7XG5cdFx0ICAgIH1lbHNlIGlmKCQoaWZyYW1lKS5hdHRyKFwiaWRcIikhPT11bmRlZmluZWQpe1xuXHRcdFx0XHRjYWNoZUtleT0kKGlmcmFtZSkuYXR0cihcImlkXCIpO1xuXHRcdCAgICB9XG5cdFx0XHRpZihjYWNoZUtleSE9PWZhbHNlICYmIF9jYW5BY2Nlc3NJRnJhbWVDYWNoZVtjYWNoZUtleV0hPT11bmRlZmluZWQpe1xuXHRcdFx0XHRyZXR1cm4gX2NhbkFjY2Vzc0lGcmFtZUNhY2hlW2NhY2hlS2V5XTtcblx0XHRcdH1cblx0XHRcdGlmKCFpZnJhbWUpe1xuXHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0dmFyIGRvYz10b3AuZG9jdW1lbnQ7XG5cdFx0XHRcdFx0aHRtbD1kb2MuYm9keS5pbm5lckhUTUw7XG5cdFx0XHRcdH1jYXRjaChlcnIpey8qIGRvIG5vdGhpbmcgKi99XG5cdFx0XHRcdHJlc3VsdD0oaHRtbCE9PW51bGwpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHR2YXIgZG9jPWlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRcdFx0aHRtbD1kb2MuYm9keS5pbm5lckhUTUw7XG5cdFx0XHRcdH1jYXRjaChlcnIpey8qIGRvIG5vdGhpbmcgKi99XG5cdFx0XHRcdHJlc3VsdD0oaHRtbCE9PW51bGwpO1xuXHRcdFx0fVxuXHRcdFx0aWYoY2FjaGVLZXkhPT1mYWxzZSl7X2NhbkFjY2Vzc0lGcmFtZUNhY2hlW2NhY2hlS2V5XT1yZXN1bHQ7fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0Lyogc3dpdGNoZXMgaWZyYW1lJ3MgcG9pbnRlci1ldmVudHMgcHJvcGVydHkgKGRyYWcsIG1vdXNld2hlZWwgZXRjLiBvdmVyIGNyb3NzLWRvbWFpbiBpZnJhbWVzKSAqL1xuXHRcdF9pZnJhbWU9ZnVuY3Rpb24oZXZ0KXtcblx0XHRcdHZhciBlbD10aGlzLmZpbmQoXCJpZnJhbWVcIik7XG5cdFx0XHRpZighZWwubGVuZ3RoKXtyZXR1cm47fSAvKiBjaGVjayBpZiBjb250ZW50IGNvbnRhaW5zIGlmcmFtZXMgKi9cblx0XHRcdHZhciB2YWw9IWV2dCA/IFwibm9uZVwiIDogXCJhdXRvXCI7XG5cdFx0XHRlbC5jc3MoXCJwb2ludGVyLWV2ZW50c1wiLHZhbCk7IC8qIGZvciBJRTExLCBpZnJhbWUncyBkaXNwbGF5IHByb3BlcnR5IHNob3VsZCBub3QgYmUgXCJibG9ja1wiICovXG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIGRpc2FibGVzIG1vdXNlLXdoZWVsIHdoZW4gaG92ZXJpbmcgc3BlY2lmaWMgZWxlbWVudHMgbGlrZSBzZWxlY3QsIGRhdGFsaXN0IGV0Yy4gKi9cblx0XHRfZGlzYWJsZU1vdXNld2hlZWw9ZnVuY3Rpb24oZWwsdGFyZ2V0KXtcblx0XHRcdHZhciB0YWc9dGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdHRhZ3M9ZWwuZGF0YShwbHVnaW5QZngpLm9wdC5tb3VzZVdoZWVsLmRpc2FibGVPdmVyLFxuXHRcdFx0XHQvKiBlbGVtZW50cyB0aGF0IHJlcXVpcmUgZm9jdXMgKi9cblx0XHRcdFx0Zm9jdXNUYWdzPVtcInNlbGVjdFwiLFwidGV4dGFyZWFcIl07XG5cdFx0XHRyZXR1cm4gJC5pbkFycmF5KHRhZyx0YWdzKSA+IC0xICYmICEoJC5pbkFycmF5KHRhZyxmb2N1c1RhZ3MpID4gLTEgJiYgISQodGFyZ2V0KS5pcyhcIjpmb2N1c1wiKSk7XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIFxuXHRcdERSQUdHRVIgUkFJTCBDTElDSyBFVkVOVFxuXHRcdHNjcm9sbHMgY29udGVudCB2aWEgZHJhZ2dlciByYWlsIFxuXHRcdCovXG5cdFx0X2RyYWdnZXJSYWlsPWZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxcblx0XHRcdFx0bmFtZXNwYWNlPXBsdWdpblBmeCtcIl9cIitkLmlkeCxcblx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0d3JhcHBlcj1tQ1NCX2NvbnRhaW5lci5wYXJlbnQoKSxcblx0XHRcdFx0bUNTQl9kcmFnZ2VyQ29udGFpbmVyPSQoXCIubUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXIgLlwiK2NsYXNzZXNbMTJdKSxcblx0XHRcdFx0Y2xpY2thYmxlO1xuXHRcdFx0bUNTQl9kcmFnZ2VyQ29udGFpbmVyLmJpbmQoXCJtb3VzZWRvd24uXCIrbmFtZXNwYWNlK1wiIHRvdWNoc3RhcnQuXCIrbmFtZXNwYWNlK1wiIHBvaW50ZXJkb3duLlwiK25hbWVzcGFjZStcIiBNU1BvaW50ZXJEb3duLlwiK25hbWVzcGFjZSxmdW5jdGlvbihlKXtcblx0XHRcdFx0dG91Y2hBY3RpdmU9dHJ1ZTtcblx0XHRcdFx0aWYoISQoZS50YXJnZXQpLmhhc0NsYXNzKFwibUNTQl9kcmFnZ2VyXCIpKXtjbGlja2FibGU9MTt9XG5cdFx0XHR9KS5iaW5kKFwidG91Y2hlbmQuXCIrbmFtZXNwYWNlK1wiIHBvaW50ZXJ1cC5cIituYW1lc3BhY2UrXCIgTVNQb2ludGVyVXAuXCIrbmFtZXNwYWNlLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHR0b3VjaEFjdGl2ZT1mYWxzZTtcblx0XHRcdH0pLmJpbmQoXCJjbGljay5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGlmKCFjbGlja2FibGUpe3JldHVybjt9XG5cdFx0XHRcdGNsaWNrYWJsZT0wO1xuXHRcdFx0XHRpZigkKGUudGFyZ2V0KS5oYXNDbGFzcyhjbGFzc2VzWzEyXSkgfHwgJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJtQ1NCX2RyYWdnZXJSYWlsXCIpKXtcblx0XHRcdFx0XHRfc3RvcCgkdGhpcyk7XG5cdFx0XHRcdFx0dmFyIGVsPSQodGhpcyksbUNTQl9kcmFnZ2VyPWVsLmZpbmQoXCIubUNTQl9kcmFnZ2VyXCIpO1xuXHRcdFx0XHRcdGlmKGVsLnBhcmVudChcIi5tQ1NCX3Njcm9sbFRvb2xzX2hvcml6b250YWxcIikubGVuZ3RoPjApe1xuXHRcdFx0XHRcdFx0aWYoIWQub3ZlcmZsb3dlZFsxXSl7cmV0dXJuO31cblx0XHRcdFx0XHRcdHZhciBkaXI9XCJ4XCIsXG5cdFx0XHRcdFx0XHRcdGNsaWNrRGlyPWUucGFnZVg+bUNTQl9kcmFnZ2VyLm9mZnNldCgpLmxlZnQgPyAtMSA6IDEsXG5cdFx0XHRcdFx0XHRcdHRvPU1hdGguYWJzKG1DU0JfY29udGFpbmVyWzBdLm9mZnNldExlZnQpLShjbGlja0Rpciood3JhcHBlci53aWR0aCgpKjAuOSkpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0aWYoIWQub3ZlcmZsb3dlZFswXSl7cmV0dXJuO31cblx0XHRcdFx0XHRcdHZhciBkaXI9XCJ5XCIsXG5cdFx0XHRcdFx0XHRcdGNsaWNrRGlyPWUucGFnZVk+bUNTQl9kcmFnZ2VyLm9mZnNldCgpLnRvcCA/IC0xIDogMSxcblx0XHRcdFx0XHRcdFx0dG89TWF0aC5hYnMobUNTQl9jb250YWluZXJbMF0ub2Zmc2V0VG9wKS0oY2xpY2tEaXIqKHdyYXBwZXIuaGVpZ2h0KCkqMC45KSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF9zY3JvbGxUbygkdGhpcyx0by50b1N0cmluZygpLHtkaXI6ZGlyLHNjcm9sbEVhc2luZzpcIm1jc0Vhc2VJbk91dFwifSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBcblx0XHRGT0NVUyBFVkVOVFxuXHRcdHNjcm9sbHMgY29udGVudCB2aWEgZWxlbWVudCBmb2N1cyAoZS5nLiBjbGlja2luZyBhbiBpbnB1dCwgcHJlc3NpbmcgVEFCIGtleSBldGMuKVxuXHRcdCovXG5cdFx0X2ZvY3VzPWZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxvPWQub3B0LFxuXHRcdFx0XHRuYW1lc3BhY2U9cGx1Z2luUGZ4K1wiX1wiK2QuaWR4LFxuXHRcdFx0XHRtQ1NCX2NvbnRhaW5lcj0kKFwiI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyXCIpLFxuXHRcdFx0XHR3cmFwcGVyPW1DU0JfY29udGFpbmVyLnBhcmVudCgpO1xuXHRcdFx0bUNTQl9jb250YWluZXIuYmluZChcImZvY3VzaW4uXCIrbmFtZXNwYWNlLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHR2YXIgZWw9JChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSxcblx0XHRcdFx0XHRuZXN0ZWQ9bUNTQl9jb250YWluZXIuZmluZChcIi5tQ3VzdG9tU2Nyb2xsQm94XCIpLmxlbmd0aCxcblx0XHRcdFx0XHRkdXI9MDtcblx0XHRcdFx0aWYoIWVsLmlzKG8uYWR2YW5jZWQuYXV0b1Njcm9sbE9uRm9jdXMpKXtyZXR1cm47fVxuXHRcdFx0XHRfc3RvcCgkdGhpcyk7XG5cdFx0XHRcdGNsZWFyVGltZW91dCgkdGhpc1swXS5fZm9jdXNUaW1lb3V0KTtcblx0XHRcdFx0JHRoaXNbMF0uX2ZvY3VzVGltZXI9bmVzdGVkID8gKGR1cisxNykqbmVzdGVkIDogMDtcblx0XHRcdFx0JHRoaXNbMF0uX2ZvY3VzVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyXHR0bz1bX2NoaWxkUG9zKGVsKVswXSxfY2hpbGRQb3MoZWwpWzFdXSxcblx0XHRcdFx0XHRcdGNvbnRlbnRQb3M9W21DU0JfY29udGFpbmVyWzBdLm9mZnNldFRvcCxtQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRMZWZ0XSxcblx0XHRcdFx0XHRcdGlzVmlzaWJsZT1bXG5cdFx0XHRcdFx0XHRcdChjb250ZW50UG9zWzBdK3RvWzBdPj0wICYmIGNvbnRlbnRQb3NbMF0rdG9bMF08d3JhcHBlci5oZWlnaHQoKS1lbC5vdXRlckhlaWdodChmYWxzZSkpLFxuXHRcdFx0XHRcdFx0XHQoY29udGVudFBvc1sxXSt0b1sxXT49MCAmJiBjb250ZW50UG9zWzBdK3RvWzFdPHdyYXBwZXIud2lkdGgoKS1lbC5vdXRlcldpZHRoKGZhbHNlKSlcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRvdmVyd3JpdGU9KG8uYXhpcz09PVwieXhcIiAmJiAhaXNWaXNpYmxlWzBdICYmICFpc1Zpc2libGVbMV0pID8gXCJub25lXCIgOiBcImFsbFwiO1xuXHRcdFx0XHRcdGlmKG8uYXhpcyE9PVwieFwiICYmICFpc1Zpc2libGVbMF0pe1xuXHRcdFx0XHRcdFx0X3Njcm9sbFRvKCR0aGlzLHRvWzBdLnRvU3RyaW5nKCkse2RpcjpcInlcIixzY3JvbGxFYXNpbmc6XCJtY3NFYXNlSW5PdXRcIixvdmVyd3JpdGU6b3ZlcndyaXRlLGR1cjpkdXJ9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoby5heGlzIT09XCJ5XCIgJiYgIWlzVmlzaWJsZVsxXSl7XG5cdFx0XHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsdG9bMV0udG9TdHJpbmcoKSx7ZGlyOlwieFwiLHNjcm9sbEVhc2luZzpcIm1jc0Vhc2VJbk91dFwiLG92ZXJ3cml0ZTpvdmVyd3JpdGUsZHVyOmR1cn0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwkdGhpc1swXS5fZm9jdXNUaW1lcik7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0Lyogc2V0cyBjb250ZW50IHdyYXBwZXIgc2Nyb2xsVG9wL3Njcm9sbExlZnQgYWx3YXlzIHRvIDAgKi9cblx0XHRfd3JhcHBlclNjcm9sbD1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksXG5cdFx0XHRcdG5hbWVzcGFjZT1wbHVnaW5QZngrXCJfXCIrZC5pZHgsXG5cdFx0XHRcdHdyYXBwZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKS5wYXJlbnQoKTtcblx0XHRcdHdyYXBwZXIuYmluZChcInNjcm9sbC5cIituYW1lc3BhY2UsZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGlmKHdyYXBwZXIuc2Nyb2xsVG9wKCkhPT0wIHx8IHdyYXBwZXIuc2Nyb2xsTGVmdCgpIT09MCl7XG5cdFx0XHRcdFx0JChcIi5tQ1NCX1wiK2QuaWR4K1wiX3Njcm9sbGJhclwiKS5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIik7IC8qIGhpZGUgc2Nyb2xsYmFyKHMpICovXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBcblx0XHRCVVRUT05TIEVWRU5UU1xuXHRcdHNjcm9sbHMgY29udGVudCB2aWEgdXAsIGRvd24sIGxlZnQgYW5kIHJpZ2h0IGJ1dHRvbnMgXG5cdFx0Ki9cblx0XHRfYnV0dG9ucz1mdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxzZXE9ZC5zZXF1ZW50aWFsLFxuXHRcdFx0XHRuYW1lc3BhY2U9cGx1Z2luUGZ4K1wiX1wiK2QuaWR4LFxuXHRcdFx0XHRzZWw9XCIubUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXJcIixcblx0XHRcdFx0YnRuPSQoc2VsK1wiPmFcIik7XG5cdFx0XHRidG4uYmluZChcImNvbnRleHRtZW51LlwiK25hbWVzcGFjZSxmdW5jdGlvbihlKXtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgcmlnaHQgY2xpY2tcblx0XHRcdH0pLmJpbmQoXCJtb3VzZWRvd24uXCIrbmFtZXNwYWNlK1wiIHRvdWNoc3RhcnQuXCIrbmFtZXNwYWNlK1wiIHBvaW50ZXJkb3duLlwiK25hbWVzcGFjZStcIiBNU1BvaW50ZXJEb3duLlwiK25hbWVzcGFjZStcIiBtb3VzZXVwLlwiK25hbWVzcGFjZStcIiB0b3VjaGVuZC5cIituYW1lc3BhY2UrXCIgcG9pbnRlcnVwLlwiK25hbWVzcGFjZStcIiBNU1BvaW50ZXJVcC5cIituYW1lc3BhY2UrXCIgbW91c2VvdXQuXCIrbmFtZXNwYWNlK1wiIHBvaW50ZXJvdXQuXCIrbmFtZXNwYWNlK1wiIE1TUG9pbnRlck91dC5cIituYW1lc3BhY2UrXCIgY2xpY2suXCIrbmFtZXNwYWNlLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlmKCFfbW91c2VCdG5MZWZ0KGUpKXtyZXR1cm47fSAvKiBsZWZ0IG1vdXNlIGJ1dHRvbiBvbmx5ICovXG5cdFx0XHRcdHZhciBidG5DbGFzcz0kKHRoaXMpLmF0dHIoXCJjbGFzc1wiKTtcblx0XHRcdFx0c2VxLnR5cGU9by5zY3JvbGxCdXR0b25zLnNjcm9sbFR5cGU7XG5cdFx0XHRcdHN3aXRjaChlLnR5cGUpe1xuXHRcdFx0XHRcdGNhc2UgXCJtb3VzZWRvd25cIjogY2FzZSBcInRvdWNoc3RhcnRcIjogY2FzZSBcInBvaW50ZXJkb3duXCI6IGNhc2UgXCJNU1BvaW50ZXJEb3duXCI6XG5cdFx0XHRcdFx0XHRpZihzZXEudHlwZT09PVwic3RlcHBlZFwiKXtyZXR1cm47fVxuXHRcdFx0XHRcdFx0dG91Y2hBY3RpdmU9dHJ1ZTtcblx0XHRcdFx0XHRcdGQudHdlZW5SdW5uaW5nPWZhbHNlO1xuXHRcdFx0XHRcdFx0X3NlcShcIm9uXCIsYnRuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIm1vdXNldXBcIjogY2FzZSBcInRvdWNoZW5kXCI6IGNhc2UgXCJwb2ludGVydXBcIjogY2FzZSBcIk1TUG9pbnRlclVwXCI6XG5cdFx0XHRcdFx0Y2FzZSBcIm1vdXNlb3V0XCI6IGNhc2UgXCJwb2ludGVyb3V0XCI6IGNhc2UgXCJNU1BvaW50ZXJPdXRcIjpcblx0XHRcdFx0XHRcdGlmKHNlcS50eXBlPT09XCJzdGVwcGVkXCIpe3JldHVybjt9XG5cdFx0XHRcdFx0XHR0b3VjaEFjdGl2ZT1mYWxzZTtcblx0XHRcdFx0XHRcdGlmKHNlcS5kaXIpe19zZXEoXCJvZmZcIixidG5DbGFzcyk7fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImNsaWNrXCI6XG5cdFx0XHRcdFx0XHRpZihzZXEudHlwZSE9PVwic3RlcHBlZFwiIHx8IGQudHdlZW5SdW5uaW5nKXtyZXR1cm47fVxuXHRcdFx0XHRcdFx0X3NlcShcIm9uXCIsYnRuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuY3Rpb24gX3NlcShhLGMpe1xuXHRcdFx0XHRcdHNlcS5zY3JvbGxBbW91bnQ9by5zY3JvbGxCdXR0b25zLnNjcm9sbEFtb3VudDtcblx0XHRcdFx0XHRfc2VxdWVudGlhbFNjcm9sbCgkdGhpcyxhLGMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogXG5cdFx0S0VZQk9BUkQgRVZFTlRTXG5cdFx0c2Nyb2xscyBjb250ZW50IHZpYSBrZXlib2FyZCBcblx0XHRLZXlzOiB1cCBhcnJvdywgZG93biBhcnJvdywgbGVmdCBhcnJvdywgcmlnaHQgYXJyb3csIFBnVXAsIFBnRG4sIEhvbWUsIEVuZFxuXHRcdCovXG5cdFx0X2tleWJvYXJkPWZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxkPSR0aGlzLmRhdGEocGx1Z2luUGZ4KSxvPWQub3B0LHNlcT1kLnNlcXVlbnRpYWwsXG5cdFx0XHRcdG5hbWVzcGFjZT1wbHVnaW5QZngrXCJfXCIrZC5pZHgsXG5cdFx0XHRcdG1DdXN0b21TY3JvbGxCb3g9JChcIiNtQ1NCX1wiK2QuaWR4KSxcblx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0d3JhcHBlcj1tQ1NCX2NvbnRhaW5lci5wYXJlbnQoKSxcblx0XHRcdFx0ZWRpdGFibGVzPVwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0LGRhdGFsaXN0LGtleWdlbixbY29udGVudGVkaXRhYmxlPSd0cnVlJ11cIixcblx0XHRcdFx0aWZyYW1lPW1DU0JfY29udGFpbmVyLmZpbmQoXCJpZnJhbWVcIiksXG5cdFx0XHRcdGV2ZW50cz1bXCJibHVyLlwiK25hbWVzcGFjZStcIiBrZXlkb3duLlwiK25hbWVzcGFjZStcIiBrZXl1cC5cIituYW1lc3BhY2VdO1xuXHRcdFx0aWYoaWZyYW1lLmxlbmd0aCl7XG5cdFx0XHRcdGlmcmFtZS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCh0aGlzKS5iaW5kKFwibG9hZFwiLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHQvKiBiaW5kIGV2ZW50cyBvbiBhY2Nlc3NpYmxlIGlmcmFtZXMgKi9cblx0XHRcdFx0XHRcdGlmKF9jYW5BY2Nlc3NJRnJhbWUodGhpcykpe1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMuY29udGVudERvY3VtZW50IHx8IHRoaXMuY29udGVudFdpbmRvdy5kb2N1bWVudCkuYmluZChldmVudHNbMF0sZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRcdFx0X29uS2V5Ym9hcmQoZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdG1DdXN0b21TY3JvbGxCb3guYXR0cihcInRhYmluZGV4XCIsXCIwXCIpLmJpbmQoZXZlbnRzWzBdLGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRfb25LZXlib2FyZChlKTtcblx0XHRcdH0pO1xuXHRcdFx0ZnVuY3Rpb24gX29uS2V5Ym9hcmQoZSl7XG5cdFx0XHRcdHN3aXRjaChlLnR5cGUpe1xuXHRcdFx0XHRcdGNhc2UgXCJibHVyXCI6XG5cdFx0XHRcdFx0XHRpZihkLnR3ZWVuUnVubmluZyAmJiBzZXEuZGlyKXtfc2VxKFwib2ZmXCIsbnVsbCk7fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImtleWRvd25cIjogY2FzZSBcImtleXVwXCI6XG5cdFx0XHRcdFx0XHR2YXIgY29kZT1lLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoLGFjdGlvbj1cIm9uXCI7XG5cdFx0XHRcdFx0XHRpZigoby5heGlzIT09XCJ4XCIgJiYgKGNvZGU9PT0zOCB8fCBjb2RlPT09NDApKSB8fCAoby5heGlzIT09XCJ5XCIgJiYgKGNvZGU9PT0zNyB8fCBjb2RlPT09MzkpKSl7XG5cdFx0XHRcdFx0XHRcdC8qIHVwICgzOCksIGRvd24gKDQwKSwgbGVmdCAoMzcpLCByaWdodCAoMzkpIGFycm93cyAqL1xuXHRcdFx0XHRcdFx0XHRpZigoKGNvZGU9PT0zOCB8fCBjb2RlPT09NDApICYmICFkLm92ZXJmbG93ZWRbMF0pIHx8ICgoY29kZT09PTM3IHx8IGNvZGU9PT0zOSkgJiYgIWQub3ZlcmZsb3dlZFsxXSkpe3JldHVybjt9XG5cdFx0XHRcdFx0XHRcdGlmKGUudHlwZT09PVwia2V5dXBcIil7YWN0aW9uPVwib2ZmXCI7fVxuXHRcdFx0XHRcdFx0XHRpZighJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhlZGl0YWJsZXMpKXtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRfc2VxKGFjdGlvbixjb2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fWVsc2UgaWYoY29kZT09PTMzIHx8IGNvZGU9PT0zNCl7XG5cdFx0XHRcdFx0XHRcdC8qIFBnVXAgKDMzKSwgUGdEbiAoMzQpICovXG5cdFx0XHRcdFx0XHRcdGlmKGQub3ZlcmZsb3dlZFswXSB8fCBkLm92ZXJmbG93ZWRbMV0pe1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmKGUudHlwZT09PVwia2V5dXBcIil7XG5cdFx0XHRcdFx0XHRcdFx0X3N0b3AoJHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBrZXlib2FyZERpcj1jb2RlPT09MzQgPyAtMSA6IDE7XG5cdFx0XHRcdFx0XHRcdFx0aWYoby5heGlzPT09XCJ4XCIgfHwgKG8uYXhpcz09PVwieXhcIiAmJiBkLm92ZXJmbG93ZWRbMV0gJiYgIWQub3ZlcmZsb3dlZFswXSkpe1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRpcj1cInhcIix0bz1NYXRoLmFicyhtQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRMZWZ0KS0oa2V5Ym9hcmREaXIqKHdyYXBwZXIud2lkdGgoKSowLjkpKTtcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBkaXI9XCJ5XCIsdG89TWF0aC5hYnMobUNTQl9jb250YWluZXJbMF0ub2Zmc2V0VG9wKS0oa2V5Ym9hcmREaXIqKHdyYXBwZXIuaGVpZ2h0KCkqMC45KSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF9zY3JvbGxUbygkdGhpcyx0by50b1N0cmluZygpLHtkaXI6ZGlyLHNjcm9sbEVhc2luZzpcIm1jc0Vhc2VJbk91dFwifSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1lbHNlIGlmKGNvZGU9PT0zNSB8fCBjb2RlPT09MzYpe1xuXHRcdFx0XHRcdFx0XHQvKiBFbmQgKDM1KSwgSG9tZSAoMzYpICovXG5cdFx0XHRcdFx0XHRcdGlmKCEkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGVkaXRhYmxlcykpe1xuXHRcdFx0XHRcdFx0XHRcdGlmKGQub3ZlcmZsb3dlZFswXSB8fCBkLm92ZXJmbG93ZWRbMV0pe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYoZS50eXBlPT09XCJrZXl1cFwiKXtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKG8uYXhpcz09PVwieFwiIHx8IChvLmF4aXM9PT1cInl4XCIgJiYgZC5vdmVyZmxvd2VkWzFdICYmICFkLm92ZXJmbG93ZWRbMF0pKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRpcj1cInhcIix0bz1jb2RlPT09MzUgPyBNYXRoLmFicyh3cmFwcGVyLndpZHRoKCktbUNTQl9jb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSkpIDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgZGlyPVwieVwiLHRvPWNvZGU9PT0zNSA/IE1hdGguYWJzKHdyYXBwZXIuaGVpZ2h0KCktbUNTQl9jb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpKSA6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRfc2Nyb2xsVG8oJHRoaXMsdG8udG9TdHJpbmcoKSx7ZGlyOmRpcixzY3JvbGxFYXNpbmc6XCJtY3NFYXNlSW5PdXRcIn0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuY3Rpb24gX3NlcShhLGMpe1xuXHRcdFx0XHRcdHNlcS50eXBlPW8ua2V5Ym9hcmQuc2Nyb2xsVHlwZTtcblx0XHRcdFx0XHRzZXEuc2Nyb2xsQW1vdW50PW8ua2V5Ym9hcmQuc2Nyb2xsQW1vdW50O1xuXHRcdFx0XHRcdGlmKHNlcS50eXBlPT09XCJzdGVwcGVkXCIgJiYgZC50d2VlblJ1bm5pbmcpe3JldHVybjt9XG5cdFx0XHRcdFx0X3NlcXVlbnRpYWxTY3JvbGwoJHRoaXMsYSxjKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBzY3JvbGxzIGNvbnRlbnQgc2VxdWVudGlhbGx5ICh1c2VkIHdoZW4gc2Nyb2xsaW5nIHZpYSBidXR0b25zLCBrZXlib2FyZCBhcnJvd3MgZXRjLikgKi9cblx0XHRfc2VxdWVudGlhbFNjcm9sbD1mdW5jdGlvbihlbCxhY3Rpb24sdHJpZ2dlcixlLHMpe1xuXHRcdFx0dmFyIGQ9ZWwuZGF0YShwbHVnaW5QZngpLG89ZC5vcHQsc2VxPWQuc2VxdWVudGlhbCxcblx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0b25jZT1zZXEudHlwZT09PVwic3RlcHBlZFwiID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRzdGVwbGVzc1NwZWVkPW8uc2Nyb2xsSW5lcnRpYSA8IDI2ID8gMjYgOiBvLnNjcm9sbEluZXJ0aWEsIC8qIDI2LzEuNT0xNyAqL1xuXHRcdFx0XHRzdGVwcGVkU3BlZWQ9by5zY3JvbGxJbmVydGlhIDwgMSA/IDE3IDogby5zY3JvbGxJbmVydGlhO1xuXHRcdFx0c3dpdGNoKGFjdGlvbil7XG5cdFx0XHRcdGNhc2UgXCJvblwiOlxuXHRcdFx0XHRcdHNlcS5kaXI9W1xuXHRcdFx0XHRcdFx0KHRyaWdnZXI9PT1jbGFzc2VzWzE2XSB8fCB0cmlnZ2VyPT09Y2xhc3Nlc1sxNV0gfHwgdHJpZ2dlcj09PTM5IHx8IHRyaWdnZXI9PT0zNyA/IFwieFwiIDogXCJ5XCIpLFxuXHRcdFx0XHRcdFx0KHRyaWdnZXI9PT1jbGFzc2VzWzEzXSB8fCB0cmlnZ2VyPT09Y2xhc3Nlc1sxNV0gfHwgdHJpZ2dlcj09PTM4IHx8IHRyaWdnZXI9PT0zNyA/IC0xIDogMSlcblx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdF9zdG9wKGVsKTtcblx0XHRcdFx0XHRpZihfaXNOdW1lcmljKHRyaWdnZXIpICYmIHNlcS50eXBlPT09XCJzdGVwcGVkXCIpe3JldHVybjt9XG5cdFx0XHRcdFx0X29uKG9uY2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwib2ZmXCI6XG5cdFx0XHRcdFx0X29mZigpO1xuXHRcdFx0XHRcdGlmKG9uY2UgfHwgKGQudHdlZW5SdW5uaW5nICYmIHNlcS5kaXIpKXtcblx0XHRcdFx0XHRcdF9vbih0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8qIHN0YXJ0cyBzZXF1ZW5jZSAqL1xuXHRcdFx0ZnVuY3Rpb24gX29uKG9uY2Upe1xuXHRcdFx0XHRpZihvLnNuYXBBbW91bnQpe3NlcS5zY3JvbGxBbW91bnQ9IShvLnNuYXBBbW91bnQgaW5zdGFuY2VvZiBBcnJheSkgPyBvLnNuYXBBbW91bnQgOiBzZXEuZGlyWzBdPT09XCJ4XCIgPyBvLnNuYXBBbW91bnRbMV0gOiBvLnNuYXBBbW91bnRbMF07fSAvKiBzY3JvbGxpbmcgc25hcHBpbmcgKi9cblx0XHRcdFx0dmFyIGM9c2VxLnR5cGUhPT1cInN0ZXBwZWRcIiwgLyogY29udGludW91cyBzY3JvbGxpbmcgKi9cblx0XHRcdFx0XHR0PXMgPyBzIDogIW9uY2UgPyAxMDAwLzYwIDogYyA/IHN0ZXBsZXNzU3BlZWQvMS41IDogc3RlcHBlZFNwZWVkLCAvKiB0aW1lciAqL1xuXHRcdFx0XHRcdG09IW9uY2UgPyAyLjUgOiBjID8gNy41IDogNDAsIC8qIG11bHRpcGxpZXIgKi9cblx0XHRcdFx0XHRjb250ZW50UG9zPVtNYXRoLmFicyhtQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRUb3ApLE1hdGguYWJzKG1DU0JfY29udGFpbmVyWzBdLm9mZnNldExlZnQpXSxcblx0XHRcdFx0XHRyYXRpbz1bZC5zY3JvbGxSYXRpby55PjEwID8gMTAgOiBkLnNjcm9sbFJhdGlvLnksZC5zY3JvbGxSYXRpby54PjEwID8gMTAgOiBkLnNjcm9sbFJhdGlvLnhdLFxuXHRcdFx0XHRcdGFtb3VudD1zZXEuZGlyWzBdPT09XCJ4XCIgPyBjb250ZW50UG9zWzFdKyhzZXEuZGlyWzFdKihyYXRpb1sxXSptKSkgOiBjb250ZW50UG9zWzBdKyhzZXEuZGlyWzFdKihyYXRpb1swXSptKSksXG5cdFx0XHRcdFx0cHg9c2VxLmRpclswXT09PVwieFwiID8gY29udGVudFBvc1sxXSsoc2VxLmRpclsxXSpwYXJzZUludChzZXEuc2Nyb2xsQW1vdW50KSkgOiBjb250ZW50UG9zWzBdKyhzZXEuZGlyWzFdKnBhcnNlSW50KHNlcS5zY3JvbGxBbW91bnQpKSxcblx0XHRcdFx0XHR0bz1zZXEuc2Nyb2xsQW1vdW50IT09XCJhdXRvXCIgPyBweCA6IGFtb3VudCxcblx0XHRcdFx0XHRlYXNpbmc9ZSA/IGUgOiAhb25jZSA/IFwibWNzTGluZWFyXCIgOiBjID8gXCJtY3NMaW5lYXJPdXRcIiA6IFwibWNzRWFzZUluT3V0XCIsXG5cdFx0XHRcdFx0b25Db21wbGV0ZT0hb25jZSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0aWYob25jZSAmJiB0PDE3KXtcblx0XHRcdFx0XHR0bz1zZXEuZGlyWzBdPT09XCJ4XCIgPyBjb250ZW50UG9zWzFdIDogY29udGVudFBvc1swXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfc2Nyb2xsVG8oZWwsdG8udG9TdHJpbmcoKSx7ZGlyOnNlcS5kaXJbMF0sc2Nyb2xsRWFzaW5nOmVhc2luZyxkdXI6dCxvbkNvbXBsZXRlOm9uQ29tcGxldGV9KTtcblx0XHRcdFx0aWYob25jZSl7XG5cdFx0XHRcdFx0c2VxLmRpcj1mYWxzZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlcS5zdGVwKTtcblx0XHRcdFx0c2VxLnN0ZXA9c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdF9vbigpO1xuXHRcdFx0XHR9LHQpO1xuXHRcdFx0fVxuXHRcdFx0Lyogc3RvcHMgc2VxdWVuY2UgKi9cblx0XHRcdGZ1bmN0aW9uIF9vZmYoKXtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlcS5zdGVwKTtcblx0XHRcdFx0X2RlbGV0ZShzZXEsXCJzdGVwXCIpO1xuXHRcdFx0XHRfc3RvcChlbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIHJldHVybnMgYSB5eCBhcnJheSBmcm9tIHZhbHVlICovXG5cdFx0X2Fycj1mdW5jdGlvbih2YWwpe1xuXHRcdFx0dmFyIG89JCh0aGlzKS5kYXRhKHBsdWdpblBmeCkub3B0LHZhbHM9W107XG5cdFx0XHRpZih0eXBlb2YgdmFsPT09XCJmdW5jdGlvblwiKXt2YWw9dmFsKCk7fSAvKiBjaGVjayBpZiB0aGUgdmFsdWUgaXMgYSBzaW5nbGUgYW5vbnltb3VzIGZ1bmN0aW9uICovXG5cdFx0XHQvKiBjaGVjayBpZiB2YWx1ZSBpcyBvYmplY3Qgb3IgYXJyYXksIGl0cyBsZW5ndGggYW5kIGNyZWF0ZSBhbiBhcnJheSB3aXRoIHl4IHZhbHVlcyAqL1xuXHRcdFx0aWYoISh2YWwgaW5zdGFuY2VvZiBBcnJheSkpeyAvKiBvYmplY3QgdmFsdWUgKGUuZy4ge3k6XCIxMDBcIix4OlwiMTAwXCJ9LCAxMDAgZXRjLikgKi9cblx0XHRcdFx0dmFsc1swXT12YWwueSA/IHZhbC55IDogdmFsLnggfHwgby5heGlzPT09XCJ4XCIgPyBudWxsIDogdmFsO1xuXHRcdFx0XHR2YWxzWzFdPXZhbC54ID8gdmFsLnggOiB2YWwueSB8fCBvLmF4aXM9PT1cInlcIiA/IG51bGwgOiB2YWw7XG5cdFx0XHR9ZWxzZXsgLyogYXJyYXkgdmFsdWUgKGUuZy4gWzEwMCwxMDBdKSAqL1xuXHRcdFx0XHR2YWxzPXZhbC5sZW5ndGg+MSA/IFt2YWxbMF0sdmFsWzFdXSA6IG8uYXhpcz09PVwieFwiID8gW251bGwsdmFsWzBdXSA6IFt2YWxbMF0sbnVsbF07XG5cdFx0XHR9XG5cdFx0XHQvKiBjaGVjayBpZiBhcnJheSB2YWx1ZXMgYXJlIGFub255bW91cyBmdW5jdGlvbnMgKi9cblx0XHRcdGlmKHR5cGVvZiB2YWxzWzBdPT09XCJmdW5jdGlvblwiKXt2YWxzWzBdPXZhbHNbMF0oKTt9XG5cdFx0XHRpZih0eXBlb2YgdmFsc1sxXT09PVwiZnVuY3Rpb25cIil7dmFsc1sxXT12YWxzWzFdKCk7fVxuXHRcdFx0cmV0dXJuIHZhbHM7XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIHRyYW5zbGF0ZXMgdmFsdWVzIChlLmcuIFwidG9wXCIsIDEwMCwgXCIxMDBweFwiLCBcIiNpZFwiKSB0byBhY3R1YWwgc2Nyb2xsLXRvIHBvc2l0aW9ucyAqL1xuXHRcdF90bz1mdW5jdGlvbih2YWwsZGlyKXtcblx0XHRcdGlmKHZhbD09bnVsbCB8fCB0eXBlb2YgdmFsPT1cInVuZGVmaW5lZFwiKXtyZXR1cm47fVxuXHRcdFx0dmFyICR0aGlzPSQodGhpcyksZD0kdGhpcy5kYXRhKHBsdWdpblBmeCksbz1kLm9wdCxcblx0XHRcdFx0bUNTQl9jb250YWluZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2NvbnRhaW5lclwiKSxcblx0XHRcdFx0d3JhcHBlcj1tQ1NCX2NvbnRhaW5lci5wYXJlbnQoKSxcblx0XHRcdFx0dD10eXBlb2YgdmFsO1xuXHRcdFx0aWYoIWRpcil7ZGlyPW8uYXhpcz09PVwieFwiID8gXCJ4XCIgOiBcInlcIjt9XG5cdFx0XHR2YXIgY29udGVudExlbmd0aD1kaXI9PT1cInhcIiA/IG1DU0JfY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpLXdyYXBwZXIud2lkdGgoKSA6IG1DU0JfY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKS13cmFwcGVyLmhlaWdodCgpLFxuXHRcdFx0XHRjb250ZW50UG9zPWRpcj09PVwieFwiID8gbUNTQl9jb250YWluZXJbMF0ub2Zmc2V0TGVmdCA6IG1DU0JfY29udGFpbmVyWzBdLm9mZnNldFRvcCxcblx0XHRcdFx0Y3NzUHJvcD1kaXI9PT1cInhcIiA/IFwibGVmdFwiIDogXCJ0b3BcIjtcblx0XHRcdHN3aXRjaCh0KXtcblx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6IC8qIHRoaXMgY3VycmVudGx5IGlzIG5vdCB1c2VkLiBDb25zaWRlciByZW1vdmluZyBpdCAqL1xuXHRcdFx0XHRcdHJldHVybiB2YWwoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOiAvKiBqcy9qcXVlcnkgb2JqZWN0ICovXG5cdFx0XHRcdFx0dmFyIG9iaj12YWwuanF1ZXJ5ID8gdmFsIDogJCh2YWwpO1xuXHRcdFx0XHRcdGlmKCFvYmoubGVuZ3RoKXtyZXR1cm47fVxuXHRcdFx0XHRcdHJldHVybiBkaXI9PT1cInhcIiA/IF9jaGlsZFBvcyhvYmopWzFdIDogX2NoaWxkUG9zKG9iailbMF07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjogY2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRcdGlmKF9pc051bWVyaWModmFsKSl7IC8qIG51bWVyaWMgdmFsdWUgKi9cblx0XHRcdFx0XHRcdHJldHVybiBNYXRoLmFicyh2YWwpO1xuXHRcdFx0XHRcdH1lbHNlIGlmKHZhbC5pbmRleE9mKFwiJVwiKSE9PS0xKXsgLyogcGVyY2VudGFnZSB2YWx1ZSAqL1xuXHRcdFx0XHRcdFx0cmV0dXJuIE1hdGguYWJzKGNvbnRlbnRMZW5ndGgqcGFyc2VJbnQodmFsKS8xMDApO1xuXHRcdFx0XHRcdH1lbHNlIGlmKHZhbC5pbmRleE9mKFwiLT1cIikhPT0tMSl7IC8qIGRlY3JlYXNlIHZhbHVlICovXG5cdFx0XHRcdFx0XHRyZXR1cm4gTWF0aC5hYnMoY29udGVudFBvcy1wYXJzZUludCh2YWwuc3BsaXQoXCItPVwiKVsxXSkpO1xuXHRcdFx0XHRcdH1lbHNlIGlmKHZhbC5pbmRleE9mKFwiKz1cIikhPT0tMSl7IC8qIGlucmVhc2UgdmFsdWUgKi9cblx0XHRcdFx0XHRcdHZhciBwPShjb250ZW50UG9zK3BhcnNlSW50KHZhbC5zcGxpdChcIis9XCIpWzFdKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcD49MCA/IDAgOiBNYXRoLmFicyhwKTtcblx0XHRcdFx0XHR9ZWxzZSBpZih2YWwuaW5kZXhPZihcInB4XCIpIT09LTEgJiYgX2lzTnVtZXJpYyh2YWwuc3BsaXQoXCJweFwiKVswXSkpeyAvKiBwaXhlbHMgc3RyaW5nIHZhbHVlIChlLmcuIFwiMTAwcHhcIikgKi9cblx0XHRcdFx0XHRcdHJldHVybiBNYXRoLmFicyh2YWwuc3BsaXQoXCJweFwiKVswXSk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRpZih2YWw9PT1cInRvcFwiIHx8IHZhbD09PVwibGVmdFwiKXsgLyogc3BlY2lhbCBzdHJpbmdzICovXG5cdFx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdFx0fWVsc2UgaWYodmFsPT09XCJib3R0b21cIil7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBNYXRoLmFicyh3cmFwcGVyLmhlaWdodCgpLW1DU0JfY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKSk7XG5cdFx0XHRcdFx0XHR9ZWxzZSBpZih2YWw9PT1cInJpZ2h0XCIpe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTWF0aC5hYnMod3JhcHBlci53aWR0aCgpLW1DU0JfY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpKTtcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHZhbD09PVwiZmlyc3RcIiB8fCB2YWw9PT1cImxhc3RcIil7XG5cdFx0XHRcdFx0XHRcdHZhciBvYmo9bUNTQl9jb250YWluZXIuZmluZChcIjpcIit2YWwpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlyPT09XCJ4XCIgPyBfY2hpbGRQb3Mob2JqKVsxXSA6IF9jaGlsZFBvcyhvYmopWzBdO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdGlmKCQodmFsKS5sZW5ndGgpeyAvKiBqcXVlcnkgc2VsZWN0b3IgKi9cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlyPT09XCJ4XCIgPyBfY2hpbGRQb3MoJCh2YWwpKVsxXSA6IF9jaGlsZFBvcygkKHZhbCkpWzBdO1xuXHRcdFx0XHRcdFx0XHR9ZWxzZXsgLyogb3RoZXIgdmFsdWVzIChlLmcuIFwiMTAwZW1cIikgKi9cblx0XHRcdFx0XHRcdFx0XHRtQ1NCX2NvbnRhaW5lci5jc3MoY3NzUHJvcCx2YWwpO1xuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZHMudXBkYXRlLmNhbGwobnVsbCwkdGhpc1swXSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBjYWxscyB0aGUgdXBkYXRlIG1ldGhvZCBhdXRvbWF0aWNhbGx5ICovXG5cdFx0X2F1dG9VcGRhdGU9ZnVuY3Rpb24ocmVtKXtcblx0XHRcdHZhciAkdGhpcz0kKHRoaXMpLGQ9JHRoaXMuZGF0YShwbHVnaW5QZngpLG89ZC5vcHQsXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIik7XG5cdFx0XHRpZihyZW0pe1xuXHRcdFx0XHQvKiBcblx0XHRcdFx0cmVtb3ZlcyBhdXRvVXBkYXRlIHRpbWVyIFxuXHRcdFx0XHR1c2FnZTogX2F1dG9VcGRhdGUuY2FsbCh0aGlzLFwicmVtb3ZlXCIpO1xuXHRcdFx0XHQqL1xuXHRcdFx0XHRjbGVhclRpbWVvdXQobUNTQl9jb250YWluZXJbMF0uYXV0b1VwZGF0ZSk7XG5cdFx0XHRcdF9kZWxldGUobUNTQl9jb250YWluZXJbMF0sXCJhdXRvVXBkYXRlXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR1cGQoKTtcblx0XHRcdGZ1bmN0aW9uIHVwZCgpe1xuXHRcdFx0XHRjbGVhclRpbWVvdXQobUNTQl9jb250YWluZXJbMF0uYXV0b1VwZGF0ZSk7XG5cdFx0XHRcdGlmKCR0aGlzLnBhcmVudHMoXCJodG1sXCIpLmxlbmd0aD09PTApe1xuXHRcdFx0XHRcdC8qIGNoZWNrIGVsZW1lbnQgaW4gZG9tIHRyZWUgKi9cblx0XHRcdFx0XHQkdGhpcz1udWxsO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRtQ1NCX2NvbnRhaW5lclswXS5hdXRvVXBkYXRlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHQvKiB1cGRhdGUgb24gc3BlY2lmaWMgc2VsZWN0b3IocykgbGVuZ3RoIGFuZCBzaXplIGNoYW5nZSAqL1xuXHRcdFx0XHRcdGlmKG8uYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZSl7XG5cdFx0XHRcdFx0XHRkLnBvbGwuY2hhbmdlLm49c2l6ZXNTdW0oKTtcblx0XHRcdFx0XHRcdGlmKGQucG9sbC5jaGFuZ2UubiE9PWQucG9sbC5jaGFuZ2Uubyl7XG5cdFx0XHRcdFx0XHRcdGQucG9sbC5jaGFuZ2Uubz1kLnBvbGwuY2hhbmdlLm47XG5cdFx0XHRcdFx0XHRcdGRvVXBkKDMpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qIHVwZGF0ZSBvbiBtYWluIGVsZW1lbnQgYW5kIHNjcm9sbGJhciBzaXplIGNoYW5nZXMgKi9cblx0XHRcdFx0XHRpZihvLmFkdmFuY2VkLnVwZGF0ZU9uQ29udGVudFJlc2l6ZSl7XG5cdFx0XHRcdFx0XHRkLnBvbGwuc2l6ZS5uPSR0aGlzWzBdLnNjcm9sbEhlaWdodCskdGhpc1swXS5zY3JvbGxXaWR0aCttQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRIZWlnaHQrJHRoaXNbMF0ub2Zmc2V0SGVpZ2h0KyR0aGlzWzBdLm9mZnNldFdpZHRoO1xuXHRcdFx0XHRcdFx0aWYoZC5wb2xsLnNpemUubiE9PWQucG9sbC5zaXplLm8pe1xuXHRcdFx0XHRcdFx0XHRkLnBvbGwuc2l6ZS5vPWQucG9sbC5zaXplLm47XG5cdFx0XHRcdFx0XHRcdGRvVXBkKDEpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qIHVwZGF0ZSBvbiBpbWFnZSBsb2FkICovXG5cdFx0XHRcdFx0aWYoby5hZHZhbmNlZC51cGRhdGVPbkltYWdlTG9hZCl7XG5cdFx0XHRcdFx0XHRpZighKG8uYWR2YW5jZWQudXBkYXRlT25JbWFnZUxvYWQ9PT1cImF1dG9cIiAmJiBvLmF4aXM9PT1cInlcIikpeyAvL2J5IGRlZmF1bHQsIGl0IGRvZXNuJ3QgcnVuIG9uIHZlcnRpY2FsIGNvbnRlbnRcblx0XHRcdFx0XHRcdFx0ZC5wb2xsLmltZy5uPW1DU0JfY29udGFpbmVyLmZpbmQoXCJpbWdcIikubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRpZihkLnBvbGwuaW1nLm4hPT1kLnBvbGwuaW1nLm8pe1xuXHRcdFx0XHRcdFx0XHRcdGQucG9sbC5pbWcubz1kLnBvbGwuaW1nLm47XG5cdFx0XHRcdFx0XHRcdFx0bUNTQl9jb250YWluZXIuZmluZChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRpbWdMb2FkZXIodGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKG8uYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZSB8fCBvLmFkdmFuY2VkLnVwZGF0ZU9uQ29udGVudFJlc2l6ZSB8fCBvLmFkdmFuY2VkLnVwZGF0ZU9uSW1hZ2VMb2FkKXt1cGQoKTt9XG5cdFx0XHRcdH0sby5hZHZhbmNlZC5hdXRvVXBkYXRlVGltZW91dCk7XG5cdFx0XHR9XG5cdFx0XHQvKiBhIHRpbnkgaW1hZ2UgbG9hZGVyICovXG5cdFx0XHRmdW5jdGlvbiBpbWdMb2FkZXIoZWwpe1xuXHRcdFx0XHRpZigkKGVsKS5oYXNDbGFzcyhjbGFzc2VzWzJdKSl7ZG9VcGQoKTsgcmV0dXJuO31cblx0XHRcdFx0dmFyIGltZz1uZXcgSW1hZ2UoKTtcblx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlRGVsZWdhdGUoY29udGV4dE9iamVjdCxkZWxlZ2F0ZU1ldGhvZCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGRlbGVnYXRlTWV0aG9kLmFwcGx5KGNvbnRleHRPYmplY3QsYXJndW1lbnRzKTt9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuY3Rpb24gaW1nT25Mb2FkKCl7XG5cdFx0XHRcdFx0dGhpcy5vbmxvYWQ9bnVsbDtcblx0XHRcdFx0XHQkKGVsKS5hZGRDbGFzcyhjbGFzc2VzWzJdKTtcblx0XHRcdFx0XHRkb1VwZCgyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbWcub25sb2FkPWNyZWF0ZURlbGVnYXRlKGltZyxpbWdPbkxvYWQpO1xuXHRcdFx0XHRpbWcuc3JjPWVsLnNyYztcblx0XHRcdH1cblx0XHRcdC8qIHJldHVybnMgdGhlIHRvdGFsIGhlaWdodCBhbmQgd2lkdGggc3VtIG9mIGFsbCBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VsZWN0b3IgKi9cblx0XHRcdGZ1bmN0aW9uIHNpemVzU3VtKCl7XG5cdFx0XHRcdGlmKG8uYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZT09PXRydWUpe28uYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZT1cIipcIjt9XG5cdFx0XHRcdHZhciB0b3RhbD0wLHNlbD1tQ1NCX2NvbnRhaW5lci5maW5kKG8uYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZSk7XG5cdFx0XHRcdGlmKG8uYWR2YW5jZWQudXBkYXRlT25TZWxlY3RvckNoYW5nZSAmJiBzZWwubGVuZ3RoPjApe3NlbC5lYWNoKGZ1bmN0aW9uKCl7dG90YWwrPXRoaXMub2Zmc2V0SGVpZ2h0K3RoaXMub2Zmc2V0V2lkdGg7fSk7fVxuXHRcdFx0XHRyZXR1cm4gdG90YWw7XG5cdFx0XHR9XG5cdFx0XHQvKiBjYWxscyB0aGUgdXBkYXRlIG1ldGhvZCAqL1xuXHRcdFx0ZnVuY3Rpb24gZG9VcGQoY2Ipe1xuXHRcdFx0XHRjbGVhclRpbWVvdXQobUNTQl9jb250YWluZXJbMF0uYXV0b1VwZGF0ZSk7XG5cdFx0XHRcdG1ldGhvZHMudXBkYXRlLmNhbGwobnVsbCwkdGhpc1swXSxjYik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIHNuYXBzIHNjcm9sbGluZyB0byBhIG11bHRpcGxlIG9mIGEgcGl4ZWxzIG51bWJlciAqL1xuXHRcdF9zbmFwQW1vdW50PWZ1bmN0aW9uKHRvLGFtb3VudCxvZmZzZXQpe1xuXHRcdFx0cmV0dXJuIChNYXRoLnJvdW5kKHRvL2Ftb3VudCkqYW1vdW50LW9mZnNldCk7IFxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBzdG9wcyBjb250ZW50IGFuZCBzY3JvbGxiYXIgYW5pbWF0aW9ucyAqL1xuXHRcdF9zdG9wPWZ1bmN0aW9uKGVsKXtcblx0XHRcdHZhciBkPWVsLmRhdGEocGx1Z2luUGZ4KSxcblx0XHRcdFx0c2VsPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXIsI21DU0JfXCIrZC5pZHgrXCJfY29udGFpbmVyX3dyYXBwZXIsI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbCwjbUNTQl9cIitkLmlkeCtcIl9kcmFnZ2VyX2hvcml6b250YWxcIik7XG5cdFx0XHRzZWwuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRfc3RvcFR3ZWVuLmNhbGwodGhpcyk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogXG5cdFx0QU5JTUFURVMgQ09OVEVOVCBcblx0XHRUaGlzIGlzIHdoZXJlIHRoZSBhY3R1YWwgc2Nyb2xsaW5nIGhhcHBlbnNcblx0XHQqL1xuXHRcdF9zY3JvbGxUbz1mdW5jdGlvbihlbCx0byxvcHRpb25zKXtcblx0XHRcdHZhciBkPWVsLmRhdGEocGx1Z2luUGZ4KSxvPWQub3B0LFxuXHRcdFx0XHRkZWZhdWx0cz17XG5cdFx0XHRcdFx0dHJpZ2dlcjpcImludGVybmFsXCIsXG5cdFx0XHRcdFx0ZGlyOlwieVwiLFxuXHRcdFx0XHRcdHNjcm9sbEVhc2luZzpcIm1jc0Vhc2VPdXRcIixcblx0XHRcdFx0XHRkcmFnOmZhbHNlLFxuXHRcdFx0XHRcdGR1cjpvLnNjcm9sbEluZXJ0aWEsXG5cdFx0XHRcdFx0b3ZlcndyaXRlOlwiYWxsXCIsXG5cdFx0XHRcdFx0Y2FsbGJhY2tzOnRydWUsXG5cdFx0XHRcdFx0b25TdGFydDp0cnVlLFxuXHRcdFx0XHRcdG9uVXBkYXRlOnRydWUsXG5cdFx0XHRcdFx0b25Db21wbGV0ZTp0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wdGlvbnM9JC5leHRlbmQoZGVmYXVsdHMsb3B0aW9ucyksXG5cdFx0XHRcdGR1cj1bb3B0aW9ucy5kdXIsKG9wdGlvbnMuZHJhZyA/IDAgOiBvcHRpb25zLmR1cildLFxuXHRcdFx0XHRtQ3VzdG9tU2Nyb2xsQm94PSQoXCIjbUNTQl9cIitkLmlkeCksXG5cdFx0XHRcdG1DU0JfY29udGFpbmVyPSQoXCIjbUNTQl9cIitkLmlkeCtcIl9jb250YWluZXJcIiksXG5cdFx0XHRcdHdyYXBwZXI9bUNTQl9jb250YWluZXIucGFyZW50KCksXG5cdFx0XHRcdHRvdGFsU2Nyb2xsT2Zmc2V0cz1vLmNhbGxiYWNrcy5vblRvdGFsU2Nyb2xsT2Zmc2V0ID8gX2Fyci5jYWxsKGVsLG8uY2FsbGJhY2tzLm9uVG90YWxTY3JvbGxPZmZzZXQpIDogWzAsMF0sXG5cdFx0XHRcdHRvdGFsU2Nyb2xsQmFja09mZnNldHM9by5jYWxsYmFja3Mub25Ub3RhbFNjcm9sbEJhY2tPZmZzZXQgPyBfYXJyLmNhbGwoZWwsby5jYWxsYmFja3Mub25Ub3RhbFNjcm9sbEJhY2tPZmZzZXQpIDogWzAsMF07XG5cdFx0XHRkLnRyaWdnZXI9b3B0aW9ucy50cmlnZ2VyO1xuXHRcdFx0aWYod3JhcHBlci5zY3JvbGxUb3AoKSE9PTAgfHwgd3JhcHBlci5zY3JvbGxMZWZ0KCkhPT0wKXsgLyogYWx3YXlzIHJlc2V0IHNjcm9sbFRvcC9MZWZ0ICovXG5cdFx0XHRcdCQoXCIubUNTQl9cIitkLmlkeCtcIl9zY3JvbGxiYXJcIikuY3NzKFwidmlzaWJpbGl0eVwiLFwidmlzaWJsZVwiKTtcblx0XHRcdFx0d3JhcHBlci5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcblx0XHRcdH1cblx0XHRcdGlmKHRvPT09XCJfcmVzZXRZXCIgJiYgIWQuY29udGVudFJlc2V0Lnkpe1xuXHRcdFx0XHQvKiBjYWxsYmFja3M6IG9uT3ZlcmZsb3dZTm9uZSAqL1xuXHRcdFx0XHRpZihfY2IoXCJvbk92ZXJmbG93WU5vbmVcIikpe28uY2FsbGJhY2tzLm9uT3ZlcmZsb3dZTm9uZS5jYWxsKGVsWzBdKTt9XG5cdFx0XHRcdGQuY29udGVudFJlc2V0Lnk9MTtcblx0XHRcdH1cblx0XHRcdGlmKHRvPT09XCJfcmVzZXRYXCIgJiYgIWQuY29udGVudFJlc2V0Lngpe1xuXHRcdFx0XHQvKiBjYWxsYmFja3M6IG9uT3ZlcmZsb3dYTm9uZSAqL1xuXHRcdFx0XHRpZihfY2IoXCJvbk92ZXJmbG93WE5vbmVcIikpe28uY2FsbGJhY2tzLm9uT3ZlcmZsb3dYTm9uZS5jYWxsKGVsWzBdKTt9XG5cdFx0XHRcdGQuY29udGVudFJlc2V0Lng9MTtcblx0XHRcdH1cblx0XHRcdGlmKHRvPT09XCJfcmVzZXRZXCIgfHwgdG89PT1cIl9yZXNldFhcIil7cmV0dXJuO31cblx0XHRcdGlmKChkLmNvbnRlbnRSZXNldC55IHx8ICFlbFswXS5tY3MpICYmIGQub3ZlcmZsb3dlZFswXSl7XG5cdFx0XHRcdC8qIGNhbGxiYWNrczogb25PdmVyZmxvd1kgKi9cblx0XHRcdFx0aWYoX2NiKFwib25PdmVyZmxvd1lcIikpe28uY2FsbGJhY2tzLm9uT3ZlcmZsb3dZLmNhbGwoZWxbMF0pO31cblx0XHRcdFx0ZC5jb250ZW50UmVzZXQueD1udWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYoKGQuY29udGVudFJlc2V0LnggfHwgIWVsWzBdLm1jcykgJiYgZC5vdmVyZmxvd2VkWzFdKXtcblx0XHRcdFx0LyogY2FsbGJhY2tzOiBvbk92ZXJmbG93WCAqL1xuXHRcdFx0XHRpZihfY2IoXCJvbk92ZXJmbG93WFwiKSl7by5jYWxsYmFja3Mub25PdmVyZmxvd1guY2FsbChlbFswXSk7fVxuXHRcdFx0XHRkLmNvbnRlbnRSZXNldC54PW51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZihvLnNuYXBBbW91bnQpeyAvKiBzY3JvbGxpbmcgc25hcHBpbmcgKi9cblx0XHRcdFx0dmFyIHNuYXBBbW91bnQ9IShvLnNuYXBBbW91bnQgaW5zdGFuY2VvZiBBcnJheSkgPyBvLnNuYXBBbW91bnQgOiBvcHRpb25zLmRpcj09PVwieFwiID8gby5zbmFwQW1vdW50WzFdIDogby5zbmFwQW1vdW50WzBdO1xuXHRcdFx0XHR0bz1fc25hcEFtb3VudCh0byxzbmFwQW1vdW50LG8uc25hcE9mZnNldCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2gob3B0aW9ucy5kaXIpe1xuXHRcdFx0XHRjYXNlIFwieFwiOlxuXHRcdFx0XHRcdHZhciBtQ1NCX2RyYWdnZXI9JChcIiNtQ1NCX1wiK2QuaWR4K1wiX2RyYWdnZXJfaG9yaXpvbnRhbFwiKSxcblx0XHRcdFx0XHRcdHByb3BlcnR5PVwibGVmdFwiLFxuXHRcdFx0XHRcdFx0Y29udGVudFBvcz1tQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRMZWZ0LFxuXHRcdFx0XHRcdFx0bGltaXQ9W1xuXHRcdFx0XHRcdFx0XHRtQ3VzdG9tU2Nyb2xsQm94LndpZHRoKCktbUNTQl9jb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSksXG5cdFx0XHRcdFx0XHRcdG1DU0JfZHJhZ2dlci5wYXJlbnQoKS53aWR0aCgpLW1DU0JfZHJhZ2dlci53aWR0aCgpXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0c2Nyb2xsVG89W3RvLHRvPT09MCA/IDAgOiAodG8vZC5zY3JvbGxSYXRpby54KV0sXG5cdFx0XHRcdFx0XHR0c289dG90YWxTY3JvbGxPZmZzZXRzWzFdLFxuXHRcdFx0XHRcdFx0dHNibz10b3RhbFNjcm9sbEJhY2tPZmZzZXRzWzFdLFxuXHRcdFx0XHRcdFx0dG90YWxTY3JvbGxPZmZzZXQ9dHNvPjAgPyB0c28vZC5zY3JvbGxSYXRpby54IDogMCxcblx0XHRcdFx0XHRcdHRvdGFsU2Nyb2xsQmFja09mZnNldD10c2JvPjAgPyB0c2JvL2Quc2Nyb2xsUmF0aW8ueCA6IDA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ5XCI6XG5cdFx0XHRcdFx0dmFyIG1DU0JfZHJhZ2dlcj0kKFwiI21DU0JfXCIrZC5pZHgrXCJfZHJhZ2dlcl92ZXJ0aWNhbFwiKSxcblx0XHRcdFx0XHRcdHByb3BlcnR5PVwidG9wXCIsXG5cdFx0XHRcdFx0XHRjb250ZW50UG9zPW1DU0JfY29udGFpbmVyWzBdLm9mZnNldFRvcCxcblx0XHRcdFx0XHRcdGxpbWl0PVtcblx0XHRcdFx0XHRcdFx0bUN1c3RvbVNjcm9sbEJveC5oZWlnaHQoKS1tQ1NCX2NvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSksXG5cdFx0XHRcdFx0XHRcdG1DU0JfZHJhZ2dlci5wYXJlbnQoKS5oZWlnaHQoKS1tQ1NCX2RyYWdnZXIuaGVpZ2h0KClcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRzY3JvbGxUbz1bdG8sdG89PT0wID8gMCA6ICh0by9kLnNjcm9sbFJhdGlvLnkpXSxcblx0XHRcdFx0XHRcdHRzbz10b3RhbFNjcm9sbE9mZnNldHNbMF0sXG5cdFx0XHRcdFx0XHR0c2JvPXRvdGFsU2Nyb2xsQmFja09mZnNldHNbMF0sXG5cdFx0XHRcdFx0XHR0b3RhbFNjcm9sbE9mZnNldD10c28+MCA/IHRzby9kLnNjcm9sbFJhdGlvLnkgOiAwLFxuXHRcdFx0XHRcdFx0dG90YWxTY3JvbGxCYWNrT2Zmc2V0PXRzYm8+MCA/IHRzYm8vZC5zY3JvbGxSYXRpby55IDogMDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmKHNjcm9sbFRvWzFdPDAgfHwgKHNjcm9sbFRvWzBdPT09MCAmJiBzY3JvbGxUb1sxXT09PTApKXtcblx0XHRcdFx0c2Nyb2xsVG89WzAsMF07XG5cdFx0XHR9ZWxzZSBpZihzY3JvbGxUb1sxXT49bGltaXRbMV0pe1xuXHRcdFx0XHRzY3JvbGxUbz1bbGltaXRbMF0sbGltaXRbMV1dO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHNjcm9sbFRvWzBdPS1zY3JvbGxUb1swXTtcblx0XHRcdH1cblx0XHRcdGlmKCFlbFswXS5tY3Mpe1xuXHRcdFx0XHRfbWNzKCk7ICAvKiBpbml0IG1jcyBvYmplY3QgKG9uY2UpIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGJlZm9yZSBjYWxsYmFja3MgKi9cblx0XHRcdFx0aWYoX2NiKFwib25Jbml0XCIpKXtvLmNhbGxiYWNrcy5vbkluaXQuY2FsbChlbFswXSk7fSAvKiBjYWxsYmFja3M6IG9uSW5pdCAqL1xuXHRcdFx0fVxuXHRcdFx0Y2xlYXJUaW1lb3V0KG1DU0JfY29udGFpbmVyWzBdLm9uQ29tcGxldGVUaW1lb3V0KTtcblx0XHRcdF90d2VlblRvKG1DU0JfZHJhZ2dlclswXSxwcm9wZXJ0eSxNYXRoLnJvdW5kKHNjcm9sbFRvWzFdKSxkdXJbMV0sb3B0aW9ucy5zY3JvbGxFYXNpbmcpO1xuXHRcdFx0aWYoIWQudHdlZW5SdW5uaW5nICYmICgoY29udGVudFBvcz09PTAgJiYgc2Nyb2xsVG9bMF0+PTApIHx8IChjb250ZW50UG9zPT09bGltaXRbMF0gJiYgc2Nyb2xsVG9bMF08PWxpbWl0WzBdKSkpe3JldHVybjt9XG5cdFx0XHRfdHdlZW5UbyhtQ1NCX2NvbnRhaW5lclswXSxwcm9wZXJ0eSxNYXRoLnJvdW5kKHNjcm9sbFRvWzBdKSxkdXJbMF0sb3B0aW9ucy5zY3JvbGxFYXNpbmcsb3B0aW9ucy5vdmVyd3JpdGUse1xuXHRcdFx0XHRvblN0YXJ0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0aWYob3B0aW9ucy5jYWxsYmFja3MgJiYgb3B0aW9ucy5vblN0YXJ0ICYmICFkLnR3ZWVuUnVubmluZyl7XG5cdFx0XHRcdFx0XHQvKiBjYWxsYmFja3M6IG9uU2Nyb2xsU3RhcnQgKi9cblx0XHRcdFx0XHRcdGlmKF9jYihcIm9uU2Nyb2xsU3RhcnRcIikpe19tY3MoKTsgby5jYWxsYmFja3Mub25TY3JvbGxTdGFydC5jYWxsKGVsWzBdKTt9XG5cdFx0XHRcdFx0XHRkLnR3ZWVuUnVubmluZz10cnVlO1xuXHRcdFx0XHRcdFx0X29uRHJhZ0NsYXNzZXMobUNTQl9kcmFnZ2VyKTtcblx0XHRcdFx0XHRcdGQuY2JPZmZzZXRzPV9jYk9mZnNldHMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sb25VcGRhdGU6ZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRpZihvcHRpb25zLmNhbGxiYWNrcyAmJiBvcHRpb25zLm9uVXBkYXRlKXtcblx0XHRcdFx0XHRcdC8qIGNhbGxiYWNrczogd2hpbGVTY3JvbGxpbmcgKi9cblx0XHRcdFx0XHRcdGlmKF9jYihcIndoaWxlU2Nyb2xsaW5nXCIpKXtfbWNzKCk7IG8uY2FsbGJhY2tzLndoaWxlU2Nyb2xsaW5nLmNhbGwoZWxbMF0pO31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sb25Db21wbGV0ZTpmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGlmKG9wdGlvbnMuY2FsbGJhY2tzICYmIG9wdGlvbnMub25Db21wbGV0ZSl7XG5cdFx0XHRcdFx0XHRpZihvLmF4aXM9PT1cInl4XCIpe2NsZWFyVGltZW91dChtQ1NCX2NvbnRhaW5lclswXS5vbkNvbXBsZXRlVGltZW91dCk7fVxuXHRcdFx0XHRcdFx0dmFyIHQ9bUNTQl9jb250YWluZXJbMF0uaWRsZVRpbWVyIHx8IDA7XG5cdFx0XHRcdFx0XHRtQ1NCX2NvbnRhaW5lclswXS5vbkNvbXBsZXRlVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdC8qIGNhbGxiYWNrczogb25TY3JvbGwsIG9uVG90YWxTY3JvbGwsIG9uVG90YWxTY3JvbGxCYWNrICovXG5cdFx0XHRcdFx0XHRcdGlmKF9jYihcIm9uU2Nyb2xsXCIpKXtfbWNzKCk7IG8uY2FsbGJhY2tzLm9uU2Nyb2xsLmNhbGwoZWxbMF0pO31cblx0XHRcdFx0XHRcdFx0aWYoX2NiKFwib25Ub3RhbFNjcm9sbFwiKSAmJiBzY3JvbGxUb1sxXT49bGltaXRbMV0tdG90YWxTY3JvbGxPZmZzZXQgJiYgZC5jYk9mZnNldHNbMF0pe19tY3MoKTsgby5jYWxsYmFja3Mub25Ub3RhbFNjcm9sbC5jYWxsKGVsWzBdKTt9XG5cdFx0XHRcdFx0XHRcdGlmKF9jYihcIm9uVG90YWxTY3JvbGxCYWNrXCIpICYmIHNjcm9sbFRvWzFdPD10b3RhbFNjcm9sbEJhY2tPZmZzZXQgJiYgZC5jYk9mZnNldHNbMV0pe19tY3MoKTsgby5jYWxsYmFja3Mub25Ub3RhbFNjcm9sbEJhY2suY2FsbChlbFswXSk7fVxuXHRcdFx0XHRcdFx0XHRkLnR3ZWVuUnVubmluZz1mYWxzZTtcblx0XHRcdFx0XHRcdFx0bUNTQl9jb250YWluZXJbMF0uaWRsZVRpbWVyPTA7XG5cdFx0XHRcdFx0XHRcdF9vbkRyYWdDbGFzc2VzKG1DU0JfZHJhZ2dlcixcImhpZGVcIik7XG5cdFx0XHRcdFx0XHR9LHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvKiBjaGVja3MgaWYgY2FsbGJhY2sgZnVuY3Rpb24gZXhpc3RzICovXG5cdFx0XHRmdW5jdGlvbiBfY2IoY2Ipe1xuXHRcdFx0XHRyZXR1cm4gZCAmJiBvLmNhbGxiYWNrc1tjYl0gJiYgdHlwZW9mIG8uY2FsbGJhY2tzW2NiXT09PVwiZnVuY3Rpb25cIjtcblx0XHRcdH1cblx0XHRcdC8qIGNoZWNrcyB3aGV0aGVyIGNhbGxiYWNrIG9mZnNldHMgYWx3YXlzIHRyaWdnZXIgKi9cblx0XHRcdGZ1bmN0aW9uIF9jYk9mZnNldHMoKXtcblx0XHRcdFx0cmV0dXJuIFtvLmNhbGxiYWNrcy5hbHdheXNUcmlnZ2VyT2Zmc2V0cyB8fCBjb250ZW50UG9zPj1saW1pdFswXSt0c28sby5jYWxsYmFja3MuYWx3YXlzVHJpZ2dlck9mZnNldHMgfHwgY29udGVudFBvczw9LXRzYm9dO1xuXHRcdFx0fVxuXHRcdFx0LyogXG5cdFx0XHRwb3B1bGF0ZXMgb2JqZWN0IHdpdGggdXNlZnVsIHZhbHVlcyBmb3IgdGhlIHVzZXIgXG5cdFx0XHR2YWx1ZXM6IFxuXHRcdFx0XHRjb250ZW50OiB0aGlzLm1jcy5jb250ZW50XG5cdFx0XHRcdGNvbnRlbnQgdG9wIHBvc2l0aW9uOiB0aGlzLm1jcy50b3AgXG5cdFx0XHRcdGNvbnRlbnQgbGVmdCBwb3NpdGlvbjogdGhpcy5tY3MubGVmdCBcblx0XHRcdFx0ZHJhZ2dlciB0b3AgcG9zaXRpb246IHRoaXMubWNzLmRyYWdnZXJUb3AgXG5cdFx0XHRcdGRyYWdnZXIgbGVmdCBwb3NpdGlvbjogdGhpcy5tY3MuZHJhZ2dlckxlZnQgXG5cdFx0XHRcdHNjcm9sbGluZyB5IHBlcmNlbnRhZ2U6IHRoaXMubWNzLnRvcFBjdCBcblx0XHRcdFx0c2Nyb2xsaW5nIHggcGVyY2VudGFnZTogdGhpcy5tY3MubGVmdFBjdCBcblx0XHRcdFx0c2Nyb2xsaW5nIGRpcmVjdGlvbjogdGhpcy5tY3MuZGlyZWN0aW9uXG5cdFx0XHQqL1xuXHRcdFx0ZnVuY3Rpb24gX21jcygpe1xuXHRcdFx0XHR2YXIgY3A9W21DU0JfY29udGFpbmVyWzBdLm9mZnNldFRvcCxtQ1NCX2NvbnRhaW5lclswXS5vZmZzZXRMZWZ0XSwgLyogY29udGVudCBwb3NpdGlvbiAqL1xuXHRcdFx0XHRcdGRwPVttQ1NCX2RyYWdnZXJbMF0ub2Zmc2V0VG9wLG1DU0JfZHJhZ2dlclswXS5vZmZzZXRMZWZ0XSwgLyogZHJhZ2dlciBwb3NpdGlvbiAqL1xuXHRcdFx0XHRcdGNsPVttQ1NCX2NvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSksbUNTQl9jb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSldLCAvKiBjb250ZW50IGxlbmd0aCAqL1xuXHRcdFx0XHRcdHBsPVttQ3VzdG9tU2Nyb2xsQm94LmhlaWdodCgpLG1DdXN0b21TY3JvbGxCb3gud2lkdGgoKV07IC8qIGNvbnRlbnQgcGFyZW50IGxlbmd0aCAqL1xuXHRcdFx0XHRlbFswXS5tY3M9e1xuXHRcdFx0XHRcdGNvbnRlbnQ6bUNTQl9jb250YWluZXIsIC8qIG9yaWdpbmFsIGNvbnRlbnQgd3JhcHBlciBhcyBqcXVlcnkgb2JqZWN0ICovXG5cdFx0XHRcdFx0dG9wOmNwWzBdLGxlZnQ6Y3BbMV0sZHJhZ2dlclRvcDpkcFswXSxkcmFnZ2VyTGVmdDpkcFsxXSxcblx0XHRcdFx0XHR0b3BQY3Q6TWF0aC5yb3VuZCgoMTAwKk1hdGguYWJzKGNwWzBdKSkvKE1hdGguYWJzKGNsWzBdKS1wbFswXSkpLGxlZnRQY3Q6TWF0aC5yb3VuZCgoMTAwKk1hdGguYWJzKGNwWzFdKSkvKE1hdGguYWJzKGNsWzFdKS1wbFsxXSkpLFxuXHRcdFx0XHRcdGRpcmVjdGlvbjpvcHRpb25zLmRpclxuXHRcdFx0XHR9O1xuXHRcdFx0XHQvKiBcblx0XHRcdFx0dGhpcyByZWZlcnMgdG8gdGhlIG9yaWdpbmFsIGVsZW1lbnQgY29udGFpbmluZyB0aGUgc2Nyb2xsYmFyKHMpXG5cdFx0XHRcdHVzYWdlOiB0aGlzLm1jcy50b3AsIHRoaXMubWNzLmxlZnRQY3QgZXRjLiBcblx0XHRcdFx0Ki9cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogXG5cdFx0Q1VTVE9NIEpBVkFTQ1JJUFQgQU5JTUFUSU9OIFRXRUVOIFxuXHRcdExpZ2h0ZXIgYW5kIGZhc3RlciB0aGFuIGpxdWVyeSBhbmltYXRlKCkgYW5kIGNzcyB0cmFuc2l0aW9ucyBcblx0XHRBbmltYXRlcyB0b3AvbGVmdCBwcm9wZXJ0aWVzIGFuZCBpbmNsdWRlcyBlYXNpbmdzIFxuXHRcdCovXG5cdFx0X3R3ZWVuVG89ZnVuY3Rpb24oZWwscHJvcCx0byxkdXJhdGlvbixlYXNpbmcsb3ZlcndyaXRlLGNhbGxiYWNrcyl7XG5cdFx0XHRpZighZWwuX21Ud2Vlbil7ZWwuX21Ud2Vlbj17dG9wOnt9LGxlZnQ6e319O31cblx0XHRcdHZhciBjYWxsYmFja3M9Y2FsbGJhY2tzIHx8IHt9LFxuXHRcdFx0XHRvblN0YXJ0PWNhbGxiYWNrcy5vblN0YXJ0IHx8IGZ1bmN0aW9uKCl7fSxvblVwZGF0ZT1jYWxsYmFja3Mub25VcGRhdGUgfHwgZnVuY3Rpb24oKXt9LG9uQ29tcGxldGU9Y2FsbGJhY2tzLm9uQ29tcGxldGUgfHwgZnVuY3Rpb24oKXt9LFxuXHRcdFx0XHRzdGFydFRpbWU9X2dldFRpbWUoKSxfZGVsYXkscHJvZ3Jlc3M9MCxmcm9tPWVsLm9mZnNldFRvcCxlbFN0eWxlPWVsLnN0eWxlLF9yZXF1ZXN0LHRvYmo9ZWwuX21Ud2Vlbltwcm9wXTtcblx0XHRcdGlmKHByb3A9PT1cImxlZnRcIil7ZnJvbT1lbC5vZmZzZXRMZWZ0O31cblx0XHRcdHZhciBkaWZmPXRvLWZyb207XG5cdFx0XHR0b2JqLnN0b3A9MDtcblx0XHRcdGlmKG92ZXJ3cml0ZSE9PVwibm9uZVwiKXtfY2FuY2VsVHdlZW4oKTt9XG5cdFx0XHRfc3RhcnRUd2VlbigpO1xuXHRcdFx0ZnVuY3Rpb24gX3N0ZXAoKXtcblx0XHRcdFx0aWYodG9iai5zdG9wKXtyZXR1cm47fVxuXHRcdFx0XHRpZighcHJvZ3Jlc3Mpe29uU3RhcnQuY2FsbCgpO31cblx0XHRcdFx0cHJvZ3Jlc3M9X2dldFRpbWUoKS1zdGFydFRpbWU7XG5cdFx0XHRcdF90d2VlbigpO1xuXHRcdFx0XHRpZihwcm9ncmVzcz49dG9iai50aW1lKXtcblx0XHRcdFx0XHR0b2JqLnRpbWU9KHByb2dyZXNzPnRvYmoudGltZSkgPyBwcm9ncmVzcytfZGVsYXktKHByb2dyZXNzLXRvYmoudGltZSkgOiBwcm9ncmVzcytfZGVsYXktMTtcblx0XHRcdFx0XHRpZih0b2JqLnRpbWU8cHJvZ3Jlc3MrMSl7dG9iai50aW1lPXByb2dyZXNzKzE7fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHRvYmoudGltZTxkdXJhdGlvbil7dG9iai5pZD1fcmVxdWVzdChfc3RlcCk7fWVsc2V7b25Db21wbGV0ZS5jYWxsKCk7fVxuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gX3R3ZWVuKCl7XG5cdFx0XHRcdGlmKGR1cmF0aW9uPjApe1xuXHRcdFx0XHRcdHRvYmouY3VyclZhbD1fZWFzZSh0b2JqLnRpbWUsZnJvbSxkaWZmLGR1cmF0aW9uLGVhc2luZyk7XG5cdFx0XHRcdFx0ZWxTdHlsZVtwcm9wXT1NYXRoLnJvdW5kKHRvYmouY3VyclZhbCkrXCJweFwiO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRlbFN0eWxlW3Byb3BdPXRvK1wicHhcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRvblVwZGF0ZS5jYWxsKCk7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiBfc3RhcnRUd2Vlbigpe1xuXHRcdFx0XHRfZGVsYXk9MTAwMC82MDtcblx0XHRcdFx0dG9iai50aW1lPXByb2dyZXNzK19kZWxheTtcblx0XHRcdFx0X3JlcXVlc3Q9KCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IGZ1bmN0aW9uKGYpe190d2VlbigpOyByZXR1cm4gc2V0VGltZW91dChmLDAuMDEpO30gOiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdFx0XHR0b2JqLmlkPV9yZXF1ZXN0KF9zdGVwKTtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIF9jYW5jZWxUd2Vlbigpe1xuXHRcdFx0XHRpZih0b2JqLmlkPT1udWxsKXtyZXR1cm47fVxuXHRcdFx0XHRpZighd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSl7Y2xlYXJUaW1lb3V0KHRvYmouaWQpO1xuXHRcdFx0XHR9ZWxzZXt3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodG9iai5pZCk7fVxuXHRcdFx0XHR0b2JqLmlkPW51bGw7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiBfZWFzZSh0LGIsYyxkLHR5cGUpe1xuXHRcdFx0XHRzd2l0Y2godHlwZSl7XG5cdFx0XHRcdFx0Y2FzZSBcImxpbmVhclwiOiBjYXNlIFwibWNzTGluZWFyXCI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gYyp0L2QgKyBiO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIm1jc0xpbmVhck91dFwiOlxuXHRcdFx0XHRcdFx0dC89ZDsgdC0tOyByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gdCp0KSArIGI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZWFzZUluT3V0U21vb3RoXCI6XG5cdFx0XHRcdFx0XHR0Lz1kLzI7XG5cdFx0XHRcdFx0XHRpZih0PDEpIHJldHVybiBjLzIqdCp0ICsgYjtcblx0XHRcdFx0XHRcdHQtLTtcblx0XHRcdFx0XHRcdHJldHVybiAtYy8yICogKHQqKHQtMikgLSAxKSArIGI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZWFzZUluT3V0U3Ryb25nXCI6XG5cdFx0XHRcdFx0XHR0Lz1kLzI7XG5cdFx0XHRcdFx0XHRpZih0PDEpIHJldHVybiBjLzIgKiBNYXRoLnBvdyggMiwgMTAgKiAodCAtIDEpICkgKyBiO1xuXHRcdFx0XHRcdFx0dC0tO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGMvMiAqICggLU1hdGgucG93KCAyLCAtMTAgKiB0KSArIDIgKSArIGI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZWFzZUluT3V0XCI6IGNhc2UgXCJtY3NFYXNlSW5PdXRcIjpcblx0XHRcdFx0XHRcdHQvPWQvMjtcblx0XHRcdFx0XHRcdGlmKHQ8MSkgcmV0dXJuIGMvMip0KnQqdCArIGI7XG5cdFx0XHRcdFx0XHR0LT0yO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGMvMioodCp0KnQgKyAyKSArIGI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZWFzZU91dFNtb290aFwiOlxuXHRcdFx0XHRcdFx0dC89ZDsgdC0tO1xuXHRcdFx0XHRcdFx0cmV0dXJuIC1jICogKHQqdCp0KnQgLSAxKSArIGI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZWFzZU91dFN0cm9uZ1wiOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGMgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogdC9kICkgKyAxICkgKyBiO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImVhc2VPdXRcIjogY2FzZSBcIm1jc0Vhc2VPdXRcIjogZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciB0cz0odC89ZCkqdCx0Yz10cyp0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGIrYyooMC40OTk5OTk5OTk5OTk5OTcqdGMqdHMgKyAtMi41KnRzKnRzICsgNS41KnRjICsgLTYuNSp0cyArIDQqdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogcmV0dXJucyBjdXJyZW50IHRpbWUgKi9cblx0XHRfZ2V0VGltZT1mdW5jdGlvbigpe1xuXHRcdFx0aWYod2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpe1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KXtcblx0XHRcdFx0XHRyZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdygpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihEYXRlLm5vdyl7cmV0dXJuIERhdGUubm93KCk7fWVsc2V7cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO31cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBzdG9wcyBhIHR3ZWVuICovXG5cdFx0X3N0b3BUd2Vlbj1mdW5jdGlvbigpe1xuXHRcdFx0dmFyIGVsPXRoaXM7XG5cdFx0XHRpZighZWwuX21Ud2Vlbil7ZWwuX21Ud2Vlbj17dG9wOnt9LGxlZnQ6e319O31cblx0XHRcdHZhciBwcm9wcz1bXCJ0b3BcIixcImxlZnRcIl07XG5cdFx0XHRmb3IodmFyIGk9MDsgaTxwcm9wcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHZhciBwcm9wPXByb3BzW2ldO1xuXHRcdFx0XHRpZihlbC5fbVR3ZWVuW3Byb3BdLmlkKXtcblx0XHRcdFx0XHRpZighd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSl7Y2xlYXJUaW1lb3V0KGVsLl9tVHdlZW5bcHJvcF0uaWQpO1xuXHRcdFx0XHRcdH1lbHNle3dpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShlbC5fbVR3ZWVuW3Byb3BdLmlkKTt9XG5cdFx0XHRcdFx0ZWwuX21Ud2Vlbltwcm9wXS5pZD1udWxsO1xuXHRcdFx0XHRcdGVsLl9tVHdlZW5bcHJvcF0uc3RvcD0xO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcdFxuXHRcdC8qIGRlbGV0ZXMgYSBwcm9wZXJ0eSAoYXZvaWRpbmcgdGhlIGV4Y2VwdGlvbiB0aHJvd24gYnkgSUUpICovXG5cdFx0X2RlbGV0ZT1mdW5jdGlvbihjLG0pe1xuXHRcdFx0dHJ5e2RlbGV0ZSBjW21dO31jYXRjaChlKXtjW21dPW51bGw7fVxuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBkZXRlY3RzIGxlZnQgbW91c2UgYnV0dG9uICovXG5cdFx0X21vdXNlQnRuTGVmdD1mdW5jdGlvbihlKXtcblx0XHRcdHJldHVybiAhKGUud2hpY2ggJiYgZS53aGljaCE9PTEpO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBkZXRlY3RzIGlmIHBvaW50ZXIgdHlwZSBldmVudCBpcyB0b3VjaCAqL1xuXHRcdF9wb2ludGVyVG91Y2g9ZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgdD1lLm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGU7XG5cdFx0XHRyZXR1cm4gISh0ICYmIHQhPT1cInRvdWNoXCIgJiYgdCE9PTIpO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiBjaGVja3MgaWYgdmFsdWUgaXMgbnVtZXJpYyAqL1xuXHRcdF9pc051bWVyaWM9ZnVuY3Rpb24odmFsKXtcblx0XHRcdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKSAmJiBpc0Zpbml0ZSh2YWwpO1xuXHRcdH0sXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcblx0XHRcblx0XHQvKiByZXR1cm5zIGVsZW1lbnQgcG9zaXRpb24gYWNjb3JkaW5nIHRvIGNvbnRlbnQgKi9cblx0XHRfY2hpbGRQb3M9ZnVuY3Rpb24oZWwpe1xuXHRcdFx0dmFyIHA9ZWwucGFyZW50cyhcIi5tQ1NCX2NvbnRhaW5lclwiKTtcblx0XHRcdHJldHVybiBbZWwub2Zmc2V0KCkudG9wLXAub2Zmc2V0KCkudG9wLGVsLm9mZnNldCgpLmxlZnQtcC5vZmZzZXQoKS5sZWZ0XTtcblx0XHR9LFxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0XG5cdFx0XG5cdFx0LyogY2hlY2tzIGlmIGJyb3dzZXIgdGFiIGlzIGhpZGRlbi9pbmFjdGl2ZSB2aWEgUGFnZSBWaXNpYmlsaXR5IEFQSSAqL1xuXHRcdF9pc1RhYkhpZGRlbj1mdW5jdGlvbigpe1xuXHRcdFx0dmFyIHByb3A9X2dldEhpZGRlblByb3AoKTtcblx0XHRcdGlmKCFwcm9wKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnRbcHJvcF07XG5cdFx0XHRmdW5jdGlvbiBfZ2V0SGlkZGVuUHJvcCgpe1xuXHRcdFx0XHR2YXIgcGZ4PVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXTtcblx0XHRcdFx0aWYoXCJoaWRkZW5cIiBpbiBkb2N1bWVudCkgcmV0dXJuIFwiaGlkZGVuXCI7IC8vbmF0aXZlbHkgc3VwcG9ydGVkXG5cdFx0XHRcdGZvcih2YXIgaT0wOyBpPHBmeC5sZW5ndGg7IGkrKyl7IC8vcHJlZml4ZWRcblx0XHRcdFx0ICAgIGlmKChwZnhbaV0rXCJIaWRkZW5cIikgaW4gZG9jdW1lbnQpIFxuXHRcdFx0XHQgICAgICAgIHJldHVybiBwZnhbaV0rXCJIaWRkZW5cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDsgLy9ub3Qgc3VwcG9ydGVkXG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFxuXHRcblx0XG5cdFxuXHRcblx0LyogXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0UExVR0lOIFNFVFVQIFxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCovXG5cdFxuXHQvKiBwbHVnaW4gY29uc3RydWN0b3IgZnVuY3Rpb25zICovXG5cdCQuZm5bcGx1Z2luTlNdPWZ1bmN0aW9uKG1ldGhvZCl7IC8qIHVzYWdlOiAkKHNlbGVjdG9yKS5tQ3VzdG9tU2Nyb2xsYmFyKCk7ICovXG5cdFx0aWYobWV0aG9kc1ttZXRob2RdKXtcblx0XHRcdHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpO1xuXHRcdH1lbHNlIGlmKHR5cGVvZiBtZXRob2Q9PT1cIm9iamVjdFwiIHx8ICFtZXRob2Qpe1xuXHRcdFx0cmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG5cdFx0fWVsc2V7XG5cdFx0XHQkLmVycm9yKFwiTWV0aG9kIFwiK21ldGhvZCtcIiBkb2VzIG5vdCBleGlzdFwiKTtcblx0XHR9XG5cdH07XG5cdCRbcGx1Z2luTlNdPWZ1bmN0aW9uKG1ldGhvZCl7IC8qIHVzYWdlOiAkLm1DdXN0b21TY3JvbGxiYXIoKTsgKi9cblx0XHRpZihtZXRob2RzW21ldGhvZF0pe1xuXHRcdFx0cmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk7XG5cdFx0fWVsc2UgaWYodHlwZW9mIG1ldGhvZD09PVwib2JqZWN0XCIgfHwgIW1ldGhvZCl7XG5cdFx0XHRyZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcblx0XHR9ZWxzZXtcblx0XHRcdCQuZXJyb3IoXCJNZXRob2QgXCIrbWV0aG9kK1wiIGRvZXMgbm90IGV4aXN0XCIpO1xuXHRcdH1cblx0fTtcblx0XG5cdC8qIFxuXHRhbGxvdyBzZXR0aW5nIHBsdWdpbiBkZWZhdWx0IG9wdGlvbnMuIFxuXHR1c2FnZTogJC5tQ3VzdG9tU2Nyb2xsYmFyLmRlZmF1bHRzLnNjcm9sbEluZXJ0aWE9NTAwOyBcblx0dG8gYXBwbHkgYW55IGNoYW5nZWQgZGVmYXVsdCBvcHRpb25zIG9uIGRlZmF1bHQgc2VsZWN0b3JzIChiZWxvdyksIHVzZSBpbnNpZGUgZG9jdW1lbnQgcmVhZHkgZm4gXG5cdGUuZy46ICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7ICQubUN1c3RvbVNjcm9sbGJhci5kZWZhdWx0cy5zY3JvbGxJbmVydGlhPTUwMDsgfSk7XG5cdCovXG5cdCRbcGx1Z2luTlNdLmRlZmF1bHRzPWRlZmF1bHRzO1xuXHRcblx0LyogXG5cdGFkZCB3aW5kb3cgb2JqZWN0ICh3aW5kb3cubUN1c3RvbVNjcm9sbGJhcikgXG5cdHVzYWdlOiBpZih3aW5kb3cubUN1c3RvbVNjcm9sbGJhcil7Y29uc29sZS5sb2coXCJjdXN0b20gc2Nyb2xsYmFyIHBsdWdpbiBsb2FkZWRcIik7fVxuXHQqL1xuXHR3aW5kb3dbcGx1Z2luTlNdPXRydWU7XG5cdFxuXHQkKHdpbmRvdykuYmluZChcImxvYWRcIixmdW5jdGlvbigpe1xuXHRcdFxuXHRcdCQoZGVmYXVsdFNlbGVjdG9yKVtwbHVnaW5OU10oKTsgLyogYWRkIHNjcm9sbGJhcnMgYXV0b21hdGljYWxseSBvbiBkZWZhdWx0IHNlbGVjdG9yICovXG5cdFx0XG5cdFx0LyogZXh0ZW5kIGpRdWVyeSBleHByZXNzaW9ucyAqL1xuXHRcdCQuZXh0ZW5kKCQuZXhwcltcIjpcIl0se1xuXHRcdFx0LyogY2hlY2tzIGlmIGVsZW1lbnQgaXMgd2l0aGluIHNjcm9sbGFibGUgdmlld3BvcnQgKi9cblx0XHRcdG1jc0luVmlldzokLmV4cHJbXCI6XCJdLm1jc0luVmlldyB8fCBmdW5jdGlvbihlbCl7XG5cdFx0XHRcdHZhciAkZWw9JChlbCksY29udGVudD0kZWwucGFyZW50cyhcIi5tQ1NCX2NvbnRhaW5lclwiKSx3cmFwcGVyLGNQb3M7XG5cdFx0XHRcdGlmKCFjb250ZW50Lmxlbmd0aCl7cmV0dXJuO31cblx0XHRcdFx0d3JhcHBlcj1jb250ZW50LnBhcmVudCgpO1xuXHRcdFx0XHRjUG9zPVtjb250ZW50WzBdLm9mZnNldFRvcCxjb250ZW50WzBdLm9mZnNldExlZnRdO1xuXHRcdFx0XHRyZXR1cm4gXHRjUG9zWzBdK19jaGlsZFBvcygkZWwpWzBdPj0wICYmIGNQb3NbMF0rX2NoaWxkUG9zKCRlbClbMF08d3JhcHBlci5oZWlnaHQoKS0kZWwub3V0ZXJIZWlnaHQoZmFsc2UpICYmIFxuXHRcdFx0XHRcdFx0Y1Bvc1sxXStfY2hpbGRQb3MoJGVsKVsxXT49MCAmJiBjUG9zWzFdK19jaGlsZFBvcygkZWwpWzFdPHdyYXBwZXIud2lkdGgoKS0kZWwub3V0ZXJXaWR0aChmYWxzZSk7XG5cdFx0XHR9LFxuXHRcdFx0LyogY2hlY2tzIGlmIGVsZW1lbnQgb3IgcGFydCBvZiBlbGVtZW50IGlzIGluIHZpZXcgb2Ygc2Nyb2xsYWJsZSB2aWV3cG9ydCAqL1xuXHRcdFx0bWNzSW5TaWdodDokLmV4cHJbXCI6XCJdLm1jc0luU2lnaHQgfHwgZnVuY3Rpb24oZWwsaSxtKXtcblx0XHRcdFx0dmFyICRlbD0kKGVsKSxlbEQsY29udGVudD0kZWwucGFyZW50cyhcIi5tQ1NCX2NvbnRhaW5lclwiKSx3cmFwcGVyVmlldyxwb3Msd3JhcHBlclZpZXdQY3QsXG5cdFx0XHRcdFx0cGN0VmFscz1tWzNdPT09XCJleGFjdFwiID8gW1sxLDBdLFsxLDBdXSA6IFtbMC45LDAuMV0sWzAuNiwwLjRdXTtcblx0XHRcdFx0aWYoIWNvbnRlbnQubGVuZ3RoKXtyZXR1cm47fVxuXHRcdFx0XHRlbEQ9WyRlbC5vdXRlckhlaWdodChmYWxzZSksJGVsLm91dGVyV2lkdGgoZmFsc2UpXTtcblx0XHRcdFx0cG9zPVtjb250ZW50WzBdLm9mZnNldFRvcCtfY2hpbGRQb3MoJGVsKVswXSxjb250ZW50WzBdLm9mZnNldExlZnQrX2NoaWxkUG9zKCRlbClbMV1dO1xuXHRcdFx0XHR3cmFwcGVyVmlldz1bY29udGVudC5wYXJlbnQoKVswXS5vZmZzZXRIZWlnaHQsY29udGVudC5wYXJlbnQoKVswXS5vZmZzZXRXaWR0aF07XG5cdFx0XHRcdHdyYXBwZXJWaWV3UGN0PVtlbERbMF08d3JhcHBlclZpZXdbMF0gPyBwY3RWYWxzWzBdIDogcGN0VmFsc1sxXSxlbERbMV08d3JhcHBlclZpZXdbMV0gPyBwY3RWYWxzWzBdIDogcGN0VmFsc1sxXV07XG5cdFx0XHRcdHJldHVybiBcdHBvc1swXS0od3JhcHBlclZpZXdbMF0qd3JhcHBlclZpZXdQY3RbMF1bMF0pPDAgJiYgcG9zWzBdK2VsRFswXS0od3JhcHBlclZpZXdbMF0qd3JhcHBlclZpZXdQY3RbMF1bMV0pPj0wICYmIFxuXHRcdFx0XHRcdFx0cG9zWzFdLSh3cmFwcGVyVmlld1sxXSp3cmFwcGVyVmlld1BjdFsxXVswXSk8MCAmJiBwb3NbMV0rZWxEWzFdLSh3cmFwcGVyVmlld1sxXSp3cmFwcGVyVmlld1BjdFsxXVsxXSk+PTA7XG5cdFx0XHR9LFxuXHRcdFx0LyogY2hlY2tzIGlmIGVsZW1lbnQgaXMgb3ZlcmZsb3dlZCBoYXZpbmcgdmlzaWJsZSBzY3JvbGxiYXIocykgKi9cblx0XHRcdG1jc092ZXJmbG93OiQuZXhwcltcIjpcIl0ubWNzT3ZlcmZsb3cgfHwgZnVuY3Rpb24oZWwpe1xuXHRcdFx0XHR2YXIgZD0kKGVsKS5kYXRhKHBsdWdpblBmeCk7XG5cdFx0XHRcdGlmKCFkKXtyZXR1cm47fVxuXHRcdFx0XHRyZXR1cm4gZC5vdmVyZmxvd2VkWzBdIHx8IGQub3ZlcmZsb3dlZFsxXTtcblx0XHRcdH1cblx0XHR9KTtcblx0XG5cdH0pO1xuXG59KSl9KSk7IiwiIWZ1bmN0aW9uKCQsdCxpLHMpe1widXNlIHN0cmljdFwiO3ZhciBvPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O28ucHJvdG90eXBlPXtkZWZhdWx0czp7b25zdGF0ZWNoYW5nZTpmdW5jdGlvbigpe30sb25kcmFnZW5kOmZ1bmN0aW9uKCl7fSxvbmJhcmNsaWNrZWQ6ZnVuY3Rpb24oKXt9LGlzUmFuZ2U6ITEsc2hvd0xhYmVsczohMCxzaG93U2NhbGU6ITAsc3RlcDoxLGZvcm1hdDpcIiVzXCIsdGhlbWU6XCJ0aGVtZS1ncmVlblwiLHdpZHRoOjMwMCxkaXNhYmxlOiExLHNuYXA6ITF9LHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRhaW5lclwiPlx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrLWJhclwiPiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtYmFyXCI+PC9kaXY+ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludGVyIGxvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJwb2ludGVyLWxhYmVsIGxvd1wiPjEyMzQ1NjwvZGl2PiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlciBoaWdoXCI+PC9kaXY+PGRpdiBjbGFzcz1cInBvaW50ZXItbGFiZWwgaGlnaFwiPjQ1Njc4OTwvZGl2PiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xpY2thYmxlLWR1bW15XCI+PC9kaXY+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjYWxlXCI+PC9kaXY+XHRcdDwvZGl2PicsaW5pdDpmdW5jdGlvbih0LGkpe3RoaXMub3B0aW9ucz0kLmV4dGVuZCh7fSx0aGlzLmRlZmF1bHRzLGkpLHRoaXMuaW5wdXROb2RlPSQodCksdGhpcy5vcHRpb25zLnZhbHVlPXRoaXMuaW5wdXROb2RlLnZhbCgpfHwodGhpcy5vcHRpb25zLmlzUmFuZ2U/dGhpcy5vcHRpb25zLmZyb20rXCIsXCIrdGhpcy5vcHRpb25zLmZyb206XCJcIit0aGlzLm9wdGlvbnMuZnJvbSksdGhpcy5kb21Ob2RlPSQodGhpcy50ZW1wbGF0ZSksdGhpcy5kb21Ob2RlLmFkZENsYXNzKHRoaXMub3B0aW9ucy50aGVtZSksdGhpcy5pbnB1dE5vZGUuYWZ0ZXIodGhpcy5kb21Ob2RlKSx0aGlzLmRvbU5vZGUub24oXCJjaGFuZ2VcIix0aGlzLm9uQ2hhbmdlKSx0aGlzLnBvaW50ZXJzPSQoXCIucG9pbnRlclwiLHRoaXMuZG9tTm9kZSksdGhpcy5sb3dQb2ludGVyPXRoaXMucG9pbnRlcnMuZmlyc3QoKSx0aGlzLmhpZ2hQb2ludGVyPXRoaXMucG9pbnRlcnMubGFzdCgpLHRoaXMubGFiZWxzPSQoXCIucG9pbnRlci1sYWJlbFwiLHRoaXMuZG9tTm9kZSksdGhpcy5sb3dMYWJlbD10aGlzLmxhYmVscy5maXJzdCgpLHRoaXMuaGlnaExhYmVsPXRoaXMubGFiZWxzLmxhc3QoKSx0aGlzLnNjYWxlPSQoXCIuc2NhbGVcIix0aGlzLmRvbU5vZGUpLHRoaXMuYmFyPSQoXCIuc2VsZWN0ZWQtYmFyXCIsdGhpcy5kb21Ob2RlKSx0aGlzLmNsaWNrYWJsZUJhcj10aGlzLmRvbU5vZGUuZmluZChcIi5jbGlja2FibGUtZHVtbXlcIiksdGhpcy5pbnRlcnZhbD10aGlzLm9wdGlvbnMudG8tdGhpcy5vcHRpb25zLmZyb20sdGhpcy5yZW5kZXIoKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIDAhPT10aGlzLmlucHV0Tm9kZS53aWR0aCgpfHx0aGlzLm9wdGlvbnMud2lkdGg/KHRoaXMub3B0aW9ucy53aWR0aD10aGlzLm9wdGlvbnMud2lkdGh8fHRoaXMuaW5wdXROb2RlLndpZHRoKCksdGhpcy5kb21Ob2RlLndpZHRoKHRoaXMub3B0aW9ucy53aWR0aCksdGhpcy5pbnB1dE5vZGUuaGlkZSgpLHRoaXMuaXNTaW5nbGUoKSYmKHRoaXMubG93UG9pbnRlci5oaWRlKCksdGhpcy5sb3dMYWJlbC5oaWRlKCkpLHRoaXMub3B0aW9ucy5zaG93TGFiZWxzfHx0aGlzLmxhYmVscy5oaWRlKCksdGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLm9wdGlvbnMuc2hvd1NjYWxlJiZ0aGlzLnJlbmRlclNjYWxlKCksdm9pZCB0aGlzLnNldFZhbHVlKHRoaXMub3B0aW9ucy52YWx1ZSkpOnZvaWQgY29uc29sZS5sb2coXCJqUmFuZ2UgOiBubyB3aWR0aCBmb3VuZCwgcmV0dXJuaW5nXCIpfSxpc1NpbmdsZTpmdW5jdGlvbigpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMudmFsdWU/ITA6LTE9PT10aGlzLm9wdGlvbnMudmFsdWUuaW5kZXhPZihcIixcIikmJiF0aGlzLm9wdGlvbnMuaXNSYW5nZX0sYXR0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5jbGlja2FibGVCYXIuY2xpY2soJC5wcm94eSh0aGlzLmJhckNsaWNrZWQsdGhpcykpLHRoaXMucG9pbnRlcnMub24oXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLCQucHJveHkodGhpcy5vbkRyYWdTdGFydCx0aGlzKSksdGhpcy5wb2ludGVycy5iaW5kKFwiZHJhZ3N0YXJ0XCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSl9LG9uRHJhZ1N0YXJ0OmZ1bmN0aW9uKHQpe2lmKCEodGhpcy5vcHRpb25zLmRpc2FibGV8fFwibW91c2Vkb3duXCI9PT10LnR5cGUmJjEhPT10LndoaWNoKSl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCk7dmFyIHM9JCh0LnRhcmdldCk7dGhpcy5wb2ludGVycy5yZW1vdmVDbGFzcyhcImxhc3QtYWN0aXZlXCIpLHMuYWRkQ2xhc3MoXCJmb2N1c2VkIGxhc3QtYWN0aXZlXCIpLHRoaXNbKHMuaGFzQ2xhc3MoXCJsb3dcIik/XCJsb3dcIjpcImhpZ2hcIikrXCJMYWJlbFwiXS5hZGRDbGFzcyhcImZvY3VzZWRcIiksJChpKS5vbihcIm1vdXNlbW92ZS5zbGlkZXIgdG91Y2htb3ZlLnNsaWRlclwiLCQucHJveHkodGhpcy5vbkRyYWcsdGhpcyxzKSksJChpKS5vbihcIm1vdXNldXAuc2xpZGVyIHRvdWNoZW5kLnNsaWRlciB0b3VjaGNhbmNlbC5zbGlkZXJcIiwkLnByb3h5KHRoaXMub25EcmFnRW5kLHRoaXMpKX19LG9uRHJhZzpmdW5jdGlvbih0LGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksaS5wcmV2ZW50RGVmYXVsdCgpLGkub3JpZ2luYWxFdmVudC50b3VjaGVzJiZpLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGg/aT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTppLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMmJmkub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGgmJihpPWkub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSk7dmFyIHM9aS5jbGllbnRYLXRoaXMuZG9tTm9kZS5vZmZzZXQoKS5sZWZ0O3RoaXMuZG9tTm9kZS50cmlnZ2VyKFwiY2hhbmdlXCIsW3RoaXMsdCxzXSl9LG9uRHJhZ0VuZDpmdW5jdGlvbih0KXt0aGlzLnBvaW50ZXJzLnJlbW92ZUNsYXNzKFwiZm9jdXNlZFwiKS50cmlnZ2VyKFwicmFuZ2VzbGlkZWVuZFwiKSx0aGlzLmxhYmVscy5yZW1vdmVDbGFzcyhcImZvY3VzZWRcIiksJChpKS5vZmYoXCIuc2xpZGVyXCIpLHRoaXMub3B0aW9ucy5vbmRyYWdlbmQuY2FsbCh0aGlzLHRoaXMub3B0aW9ucy52YWx1ZSl9LGJhckNsaWNrZWQ6ZnVuY3Rpb24odCl7aWYoIXRoaXMub3B0aW9ucy5kaXNhYmxlKXt2YXIgaT10LnBhZ2VYLXRoaXMuY2xpY2thYmxlQmFyLm9mZnNldCgpLmxlZnQ7aWYodGhpcy5pc1NpbmdsZSgpKXRoaXMuc2V0UG9zaXRpb24odGhpcy5wb2ludGVycy5sYXN0KCksaSwhMCwhMCk7ZWxzZXt2YXIgcz1NYXRoLmFicyhwYXJzZUZsb2F0KHRoaXMucG9pbnRlcnMuZmlyc3QoKS5jc3MoXCJsZWZ0XCIpLDEwKSksbz10aGlzLnBvaW50ZXJzLmZpcnN0KCkud2lkdGgoKS8yLGU9TWF0aC5hYnMocGFyc2VGbG9hdCh0aGlzLnBvaW50ZXJzLmxhc3QoKS5jc3MoXCJsZWZ0XCIpLDEwKSksbj10aGlzLnBvaW50ZXJzLmZpcnN0KCkud2lkdGgoKS8yLGE9TWF0aC5hYnMocy1pK28pLGg9TWF0aC5hYnMoZS1pK24pLGw7bD1hPT1oP3M+aT90aGlzLnBvaW50ZXJzLmZpcnN0KCk6dGhpcy5wb2ludGVycy5sYXN0KCk6aD5hP3RoaXMucG9pbnRlcnMuZmlyc3QoKTp0aGlzLnBvaW50ZXJzLmxhc3QoKSx0aGlzLnNldFBvc2l0aW9uKGwsaSwhMCwhMCl9dGhpcy5vcHRpb25zLm9uYmFyY2xpY2tlZC5jYWxsKHRoaXMsdGhpcy5vcHRpb25zLnZhbHVlKX19LG9uQ2hhbmdlOmZ1bmN0aW9uKHQsaSxzLG8pe3ZhciBlLG47ZT0wLG49aS5kb21Ob2RlLndpZHRoKCksaS5pc1NpbmdsZSgpfHwoZT1zLmhhc0NsYXNzKFwiaGlnaFwiKT9wYXJzZUZsb2F0KGkubG93UG9pbnRlci5jc3MoXCJsZWZ0XCIpKStpLmxvd1BvaW50ZXIud2lkdGgoKS8yOjAsbj1zLmhhc0NsYXNzKFwibG93XCIpP3BhcnNlRmxvYXQoaS5oaWdoUG9pbnRlci5jc3MoXCJsZWZ0XCIpKStpLmhpZ2hQb2ludGVyLndpZHRoKCkvMjppLmRvbU5vZGUud2lkdGgoKSk7dmFyIGE9TWF0aC5taW4oTWF0aC5tYXgobyxlKSxuKTtpLnNldFBvc2l0aW9uKHMsYSwhMCl9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKHQsaSxzLG8pe3ZhciBlLG4sYT1wYXJzZUZsb2F0KHRoaXMubG93UG9pbnRlci5jc3MoXCJsZWZ0XCIpKSxoPXBhcnNlRmxvYXQodGhpcy5oaWdoUG9pbnRlci5jc3MoXCJsZWZ0XCIpKXx8MCxsPXRoaXMuaGlnaFBvaW50ZXIud2lkdGgoKS8yO2lmKHN8fChpPXRoaXMucHJjVG9QeChpKSksdGhpcy5vcHRpb25zLnNuYXApe3ZhciByPXRoaXMuY29ycmVjdFBvc2l0aW9uRm9yU25hcChpKTtpZigtMT09PXIpcmV0dXJuO2k9cn10WzBdPT09dGhpcy5oaWdoUG9pbnRlclswXT9oPU1hdGgucm91bmQoaS1sKTphPU1hdGgucm91bmQoaS1sKSx0W28/XCJhbmltYXRlXCI6XCJjc3NcIl0oe2xlZnQ6TWF0aC5yb3VuZChpLWwpfSksdGhpcy5pc1NpbmdsZSgpP2U9MDooZT1hK2wsbj1oK2wpO3ZhciBkPU1hdGgucm91bmQoaCtsLWUpO3RoaXMuYmFyW28/XCJhbmltYXRlXCI6XCJjc3NcIl0oe3dpZHRoOk1hdGguYWJzKGQpLGxlZnQ6ZD4wP2U6ZStkfSksdGhpcy5zaG93UG9pbnRlclZhbHVlKHQsaSxvKSx0aGlzLmlzUmVhZG9ubHkoKX0sY29ycmVjdFBvc2l0aW9uRm9yU25hcDpmdW5jdGlvbih0KXt2YXIgaT10aGlzLnBvc2l0aW9uVG9WYWx1ZSh0KS10aGlzLm9wdGlvbnMuZnJvbSxzPXRoaXMub3B0aW9ucy53aWR0aC8odGhpcy5pbnRlcnZhbC90aGlzLm9wdGlvbnMuc3RlcCksbz1pL3RoaXMub3B0aW9ucy5zdGVwKnM7cmV0dXJuIG8rcy8yPj10JiZ0Pj1vLXMvMj9vOi0xfSxzZXRWYWx1ZTpmdW5jdGlvbih0KXt2YXIgaT10LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpO2lbMF09TWF0aC5taW4oTWF0aC5tYXgoaVswXSx0aGlzLm9wdGlvbnMuZnJvbSksdGhpcy5vcHRpb25zLnRvKStcIlwiLGkubGVuZ3RoPjEmJihpWzFdPU1hdGgubWluKE1hdGgubWF4KGlbMV0sdGhpcy5vcHRpb25zLmZyb20pLHRoaXMub3B0aW9ucy50bykrXCJcIiksdGhpcy5vcHRpb25zLnZhbHVlPXQ7dmFyIHM9dGhpcy52YWx1ZXNUb1ByYygyPT09aS5sZW5ndGg/aTpbMCxpWzBdXSk7dGhpcy5pc1NpbmdsZSgpP3RoaXMuc2V0UG9zaXRpb24odGhpcy5oaWdoUG9pbnRlcixzWzFdKToodGhpcy5zZXRQb3NpdGlvbih0aGlzLmxvd1BvaW50ZXIsc1swXSksdGhpcy5zZXRQb3NpdGlvbih0aGlzLmhpZ2hQb2ludGVyLHNbMV0pKX0scmVuZGVyU2NhbGU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5vcHRpb25zLnNjYWxlfHxbdGhpcy5vcHRpb25zLmZyb20sdGhpcy5vcHRpb25zLnRvXSxpPU1hdGgucm91bmQoMTAwLyh0Lmxlbmd0aC0xKSoxMCkvMTAscz1cIlwiLG89MDtvPHQubGVuZ3RoO28rKylzKz0nPHNwYW4gc3R5bGU9XCJsZWZ0OiAnK28qaSsnJVwiPicrKFwifFwiIT10W29dP1wiPGlucz5cIit0W29dK1wiPC9pbnM+XCI6XCJcIikrXCI8L3NwYW4+XCI7dGhpcy5zY2FsZS5odG1sKHMpLCQoXCJpbnNcIix0aGlzLnNjYWxlKS5lYWNoKGZ1bmN0aW9uKCl7JCh0aGlzKS5jc3Moe21hcmdpbkxlZnQ6LSQodGhpcykub3V0ZXJXaWR0aCgpLzJ9KX0pfSxnZXRCYXJXaWR0aDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy52YWx1ZS5zcGxpdChcIixcIik7cmV0dXJuIHQubGVuZ3RoPjE/cGFyc2VGbG9hdCh0WzFdKS1wYXJzZUZsb2F0KHRbMF0pOnBhcnNlRmxvYXQodFswXSl9LHNob3dQb2ludGVyVmFsdWU6ZnVuY3Rpb24odCxpLG8pe3ZhciBlPSQoXCIucG9pbnRlci1sYWJlbFwiLHRoaXMuZG9tTm9kZSlbdC5oYXNDbGFzcyhcImxvd1wiKT9cImZpcnN0XCI6XCJsYXN0XCJdKCksbixhPXRoaXMucG9zaXRpb25Ub1ZhbHVlKGkpO2lmKCQuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMuZm9ybWF0KSl7dmFyIGg9dGhpcy5pc1NpbmdsZSgpP3M6dC5oYXNDbGFzcyhcImxvd1wiKT9cImxvd1wiOlwiaGlnaFwiO249dGhpcy5vcHRpb25zLmZvcm1hdChhLGgpfWVsc2Ugbj10aGlzLm9wdGlvbnMuZm9ybWF0LnJlcGxhY2UoXCIlc1wiLGEpO3ZhciBsPWUuaHRtbChuKS53aWR0aCgpLHI9aS1sLzI7cj1NYXRoLm1pbihNYXRoLm1heChyLDApLHRoaXMub3B0aW9ucy53aWR0aC1sKSxlW28/XCJhbmltYXRlXCI6XCJjc3NcIl0oe2xlZnQ6cn0pLHRoaXMuc2V0SW5wdXRWYWx1ZSh0LGEpfSx2YWx1ZXNUb1ByYzpmdW5jdGlvbih0KXt2YXIgaT0xMDAqKHBhcnNlRmxvYXQodFswXSktcGFyc2VGbG9hdCh0aGlzLm9wdGlvbnMuZnJvbSkpL3RoaXMuaW50ZXJ2YWwscz0xMDAqKHBhcnNlRmxvYXQodFsxXSktcGFyc2VGbG9hdCh0aGlzLm9wdGlvbnMuZnJvbSkpL3RoaXMuaW50ZXJ2YWw7cmV0dXJuW2ksc119LHByY1RvUHg6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZG9tTm9kZS53aWR0aCgpKnQvMTAwfSxpc0RlY2ltYWw6ZnVuY3Rpb24oKXtyZXR1cm4tMSE9PSh0aGlzLm9wdGlvbnMudmFsdWUrdGhpcy5vcHRpb25zLmZyb20rdGhpcy5vcHRpb25zLnRvKS5pbmRleE9mKFwiLlwiKX0scG9zaXRpb25Ub1ZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBpPXQvdGhpcy5kb21Ob2RlLndpZHRoKCkqdGhpcy5pbnRlcnZhbDtpZihpPXBhcnNlRmxvYXQoaSwxMCkrcGFyc2VGbG9hdCh0aGlzLm9wdGlvbnMuZnJvbSwxMCksdGhpcy5pc0RlY2ltYWwoKSl7dmFyIHM9TWF0aC5yb3VuZChNYXRoLnJvdW5kKGkvdGhpcy5vcHRpb25zLnN0ZXApKnRoaXMub3B0aW9ucy5zdGVwKjEwMCkvMTAwO2lmKDAhPT1zKWZvcihzPVwiXCIrcywtMT09PXMuaW5kZXhPZihcIi5cIikmJihzKz1cIi5cIik7cy5sZW5ndGgtcy5pbmRleE9mKFwiLlwiKTwzOylzKz1cIjBcIjtlbHNlIHM9XCIwLjAwXCI7cmV0dXJuIHN9cmV0dXJuIE1hdGgucm91bmQoaS90aGlzLm9wdGlvbnMuc3RlcCkqdGhpcy5vcHRpb25zLnN0ZXB9LHNldElucHV0VmFsdWU6ZnVuY3Rpb24odCxpKXtpZih0aGlzLmlzU2luZ2xlKCkpdGhpcy5vcHRpb25zLnZhbHVlPWkudG9TdHJpbmcoKTtlbHNle3ZhciBzPXRoaXMub3B0aW9ucy52YWx1ZS5zcGxpdChcIixcIik7dC5oYXNDbGFzcyhcImxvd1wiKT90aGlzLm9wdGlvbnMudmFsdWU9aStcIixcIitzWzFdOnRoaXMub3B0aW9ucy52YWx1ZT1zWzBdK1wiLFwiK2l9dGhpcy5pbnB1dE5vZGUudmFsKCkhPT10aGlzLm9wdGlvbnMudmFsdWUmJih0aGlzLmlucHV0Tm9kZS52YWwodGhpcy5vcHRpb25zLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpLHRoaXMub3B0aW9ucy5vbnN0YXRlY2hhbmdlLmNhbGwodGhpcyx0aGlzLm9wdGlvbnMudmFsdWUpKX0sZ2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLnZhbHVlfSxnZXRPcHRpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9uc30sZ2V0UmFuZ2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLmZyb20rXCIsXCIrdGhpcy5vcHRpb25zLnRvfSxpc1JlYWRvbmx5OmZ1bmN0aW9uKCl7dGhpcy5kb21Ob2RlLnRvZ2dsZUNsYXNzKFwic2xpZGVyLXJlYWRvbmx5XCIsdGhpcy5vcHRpb25zLmRpc2FibGUpfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmRpc2FibGU9ITAsdGhpcy5pc1JlYWRvbmx5KCl9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMub3B0aW9ucy5kaXNhYmxlPSExLHRoaXMuaXNSZWFkb25seSgpfSx0b2dnbGVEaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmRpc2FibGU9IXRoaXMub3B0aW9ucy5kaXNhYmxlLHRoaXMuaXNSZWFkb25seSgpfSx1cGRhdGVSYW5nZTpmdW5jdGlvbih0LGkpe3ZhciBzPXQudG9TdHJpbmcoKS5zcGxpdChcIixcIik7dGhpcy5pbnRlcnZhbD1wYXJzZUludChzWzFdKS1wYXJzZUludChzWzBdKSxpP3RoaXMuc2V0VmFsdWUoaSk6dGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCkpfX07dmFyIGU9XCJqUmFuZ2VcIjskLmZuW2VdPWZ1bmN0aW9uKGkpe3ZhciBzPWFyZ3VtZW50cyxuO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYT0kKHRoaXMpLGg9JC5kYXRhKHRoaXMsXCJwbHVnaW5fXCIrZSksbD1cIm9iamVjdFwiPT10eXBlb2YgaSYmaTtofHwoYS5kYXRhKFwicGx1Z2luX1wiK2UsaD1uZXcgbyh0aGlzLGwpKSwkKHQpLnJlc2l6ZShmdW5jdGlvbigpe2guc2V0VmFsdWUoaC5nZXRWYWx1ZSgpKX0pKSxcInN0cmluZ1wiPT10eXBlb2YgaSYmKG49aFtpXS5hcHBseShoLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHMsMSkpKX0pLG58fHRoaXN9fShqUXVlcnksd2luZG93LGRvY3VtZW50KTtcclxuXHJcbiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5ybi1zbGlkZXInKS5qUmFuZ2Uoe1xyXG4gICAgZnJvbTogMCxcclxuICAgIHRvOiAxMDAsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgc2NhbGU6IFtdLFxyXG4gICAgZm9ybWF0OiAnJXMnLFxyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIHNob3dMYWJlbHM6IHRydWUsXHJcbiAgICBpc1JhbmdlIDogdHJ1ZVxyXG59KTtcclxuXHJcbn0pIiwiJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIFxuXG4gICAgLy8gID09PT09PT09PT09PT0gUE9TVCBQUk9KRUNUIFBPUFVQIEZVTkNUSU9OID09PT09PT09PVxuXG4gICAgJChcIi5wb3N0X3Byb2plY3RcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLnBvc3QtcG9wdXAucHN0LXBqXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikuYWRkQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChcIi5wb3N0LXByb2plY3QgPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5wb3N0LXBvcHVwLnBzdC1walwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwib3ZlcmxheVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gID09PT09PT09PT09PT0gUE9TVCBKT0IgUE9QVVAgRlVOQ1RJT04gPT09PT09PT09XG5cbiAgICAkKFwiLnBvc3QtamJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLnBvc3QtcG9wdXAuam9iX3Bvc3RcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5hZGRDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiLnBvc3QtcHJvamVjdCA+IGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLnBvc3QtcG9wdXAuam9iX3Bvc3RcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09IFNJR05JTiBDT05UUk9MIEZVTkNUSU9OID09PT09PT09PVxuXG4gICAgJCgnLnNpZ24tY29udHJvbCBsaScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRhYl9pZCA9ICQodGhpcykuYXR0cignZGF0YS10YWInKTtcbiAgICAgICAgJCgnLnNpZ24tY29udHJvbCBsaScpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgICAgICQoJy5zaWduX2luX3NlYycpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQgYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgICAgICQoXCIjXCIrdGFiX2lkKS5hZGRDbGFzcygnY3VycmVudCBhbmltYXRlZCBmYWRlSW4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gID09PT09PT09PT09PT0gU0lHTklOIFRBQiBGVU5DVElPTkFMSVRZID09PT09PT09PVxuXG4gICAgJCgnLnNpZ251cC10YWIgdWwgbGknKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0YWJfaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFiJyk7XG4gICAgICAgICQoJy5zaWdudXAtdGFiIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAgICAgJCgnLmRmZi10YWInKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50IGFuaW1hdGVkIGZhZGVJbicpO1xuICAgICAgICAkKFwiI1wiK3RhYl9pZCkuYWRkQ2xhc3MoJ2N1cnJlbnQgYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09IFNJR05JTiBTV0lUQ0ggVEFCIEZVTkNUSU9OQUxJVFkgPT09PT09PT09XG5cbiAgICAkKCcudGFiLWZlZWQgdWwgbGknKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0YWJfaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFiJyk7XG4gICAgICAgICQoJy50YWItZmVlZCB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLnByb2R1Y3QtZmVlZC10YWInKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgICAgICQoXCIjXCIrdGFiX2lkKS5hZGRDbGFzcygnY3VycmVudCBhbmltYXRlZCBmYWRlSW4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gID09PT09PT09PT09PT0gQ09WRVIgR0FQIEZVTkNUSU9OID09PT09PT09PVxuXG4gICAgdmFyIGdhcCA9ICQoXCIuY29udGFpbmVyXCIpLm9mZnNldCgpLmxlZnQ7XG4gICAgJChcIi5jb3Zlci1zZWMgPiBhLCAuY2hhdGJveC1saXN0XCIpLmNzcyh7XG4gICAgICAgIFwicmlnaHRcIjogZ2FwXG4gICAgfSk7XG5cbiAgICAvLyAgPT09PT09PT09PT09PSBPVkVSVklFVyBFRElUIEZVTkNUSU9OID09PT09PT09PVxuXG4gICAgJChcIi5vdmVydmlldy1vcGVuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIiNvdmVydmlldy1ib3hcIikuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikuYWRkQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChcIi5jbG9zZS1ib3hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI292ZXJ2aWV3LWJveFwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09IEVYUEVSSUVOQ0UgRURJVCBGVU5DVElPTiA9PT09PT09PT1cblxuICAgICQoXCIuZXhwLWJ4LW9wZW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI2V4cGVyaWVuY2UtYm94XCIpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLmFkZENsYXNzKFwib3ZlcmxheVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoXCIuY2xvc2UtYm94XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIiNleHBlcmllbmNlLWJveFwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09IEVEVUNBVElPTiBFRElUIEZVTkNUSU9OID09PT09PT09PVxuXG4gICAgJChcIi5lZC1ib3gtb3BlblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjZWR1Y2F0aW9uLWJveFwiKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5hZGRDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiLmNsb3NlLWJveFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjZWR1Y2F0aW9uLWJveFwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09IExPQ0FUSU9OIEVESVQgRlVOQ1RJT04gPT09PT09PT09XG5cbiAgICAkKFwiLmxjdC1ib3gtb3BlblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjbG9jYXRpb24tYm94XCIpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLmFkZENsYXNzKFwib3ZlcmxheVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoXCIuY2xvc2UtYm94XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIiNsb2NhdGlvbi1ib3hcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyAgPT09PT09PT09PT09PSBTS0lMTFMgRURJVCBGVU5DVElPTiA9PT09PT09PT1cblxuICAgICQoXCIuc2tpbGxzLW9wZW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI3NraWxscy1ib3hcIikuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikuYWRkQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChcIi5jbG9zZS1ib3hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI3NraWxscy1ib3hcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyAgPT09PT09PT09PT09PSBFU1RBQkxJU0ggRURJVCBGVU5DVElPTiA9PT09PT09PT1cblxuICAgICQoXCIuZXNwLWJ4LW9wZW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI2VzdGFibGlzaC1ib3hcIikuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikuYWRkQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChcIi5jbG9zZS1ib3hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI2VzdGFibGlzaC1ib3hcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyAgPT09PT09PT09PT09PSBDUkVBVEUgUE9SVEZPTElPIEZVTkNUSU9OID09PT09PT09PVxuXG4gICAgJChcIi5nYWxsZXJ5X3B0ID4gYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjY3JlYXRlLXBvcnRmb2xpb1wiKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5hZGRDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiLmNsb3NlLWJveFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjY3JlYXRlLXBvcnRmb2xpb1wiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09IEVNUExPWUVFIEVESVQgRlVOQ1RJT04gPT09PT09PT09XG5cbiAgICAkKFwiLmVtcC1vcGVuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIiN0b3RhbC1lbXBsb3llc1wiKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5hZGRDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiLmNsb3NlLWJveFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjdG90YWwtZW1wbG95ZXNcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAkKFwiLndyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJvdmVybGF5XCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyAgPT09PT09PT09PT09PT09IEFzayBhIFF1ZXN0aW9uIFBvcHVwID09PT09PT09PT09PVxuXG4gICAgJChcIi5hc2stcXVlc3Rpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiI3F1ZXN0aW9uLWJveFwiKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIud3JhcHBlclwiKS5hZGRDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiLmNsb3NlLWJveFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIjcXVlc3Rpb24tYm94XCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwib3ZlcmxheVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG5cbiAgICAvLyAgPT09PT09PT09PT09PT0gQ2hhdEJveCA9PT09PT09PT09PT09PSBcblxuXG4gICAgJChcIi5jaGF0LW1nXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5uZXh0KFwiLmNvbnZlcnNhdGlvbi1ib3hcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiLmNsb3NlLWNoYXRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmNvbnZlcnNhdGlvbi1ib3hcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vICA9PT09PT09PT09PT09PT09PT0gRWRpdCBPcHRpb25zIEZ1bmN0aW9uID09PT09PT09PT09PT09PT09XG5cblxuICAgICQoXCIuZWQtb3B0cy1vcGVuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5uZXh0KFwiLmVkLW9wdGlvbnNcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG4gICAgLy8gPT09PT09PT09PT09PT0gTWVudSBTY3JpcHQgPT09PT09PT09PT09PVxuXG4gICAgJChcIi5tZW51LWJ0biA+IGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAkKFwibmF2XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cblxuICAgIC8vICA9PT09PT09PT09PT0gTm90aWZpY2F0aW9ucyBPcGVuID09PT09PT09PT09PT1cblxuICAgICQoXCIubm90LWJveC1vcGVuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5uZXh0KFwiLm5vdGlmaWNhdGlvbi1ib3hcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyA9PT09PT09PT09PT09IFVzZXIgQWNjb3VudCBTZXR0aW5nIE9wZW4gPT09PT09PT09PT1cblxuICAgICQoXCIudXNlci1pbmZvXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5uZXh0KFwiLnVzZXItYWNjb3VudC1zZXR0aW5nc3NcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyAgPT09PT09PT09PT09PSBGT1JVTSBMSU5LUyBNT0JJTEUgTUVOVSBGVU5DVElPTiA9PT09PT09PT1cblxuICAgICQoXCIuZm9ydW0tbGlua3MtYnRuID4gYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIuZm9ydW0tbGlua3NcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiaHRtbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIuZm9ydW0tbGlua3NcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgJChcIi5mb3J1bS1saW5rcy1idG4gPiBhLCAuZm9ydW0tbGlua3NcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgLy8gID09PT09PT09PT09PT0gUE9SVEZPTElPIFNMSURFUiBGVU5DVElPTiA9PT09PT09PT1cblxuICAgICQoJy5wcm9maWxlcy1zbGlkZXInKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xjazp0cnVlLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcHJldkFycm93Oic8c3BhbiBjbGFzcz1cInNsaWNrLXByZXZpb3VzXCI+PC9zcGFuPicsXG4gICAgICAgIG5leHRBcnJvdzonPHNwYW4gY2xhc3M9XCJzbGljay1uZXh0aVwiPjwvc3Bhbj4nLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgIF1cblxuXG4gICAgfSk7XG5cblxuXG5cblxufSk7XG5cblxuIiwiKGZ1bmN0aW9uKCQpe1xyXG4gICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5jaGF0LWhpc3QsIC5tZXNzYWdlcy1saW5lXCIpLm1DdXN0b21TY3JvbGxiYXIoKTtcclxuICAgICAgICAgYXhpczpcInl4XCJcclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=