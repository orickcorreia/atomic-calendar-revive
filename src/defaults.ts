export default {
	// text translations
	fullDayEventText: 'All day', // 'All day' custom text
	untilText: 'Until', // 'Until' custom text
	language: '',

	// main settings
	maxDaysToShow: 7, // maximum days to show (if zero, show only currently running events)
	maxEventCount: 0, // maximum number of events to show (if zero, unlimited)
	showLoader: true, // show animation when loading events from Google calendar

	showLocation: true, // show location (right side)
	showMonth: false, // show month under day (left side)
	showWeekDay: false, // show day name under day (left side)
	fullTextTime: true, // show advanced time messages, like: All day, until Friday 12
	showCurrentEventLine: false, // show a line between last and next event
	showDate: false,
	dateFormat: 'LL',
	hoursFormat: 'default', // 12h / 24h / default time format. Default is HA language setting.
	startDaysAhead: 0, // shows the events starting on x days from today. Default 0.
	showLastCalendarWeek: false, // always shows last line/week in calendar mode, even if it's not the current month
	showCalNameInEvent: false,
	sortByStartTime: false, // sort first by calendar, then by time
	disableEventLink: false, // disables links to event calendar
	disableLocationLink: false, // disables links to event calendar
	linkTarget: '_blank', // Target for links, can use any HTML target type

	// color and font settings
	nameColor: 'var(--primary-text-color)', // Card Name color

	dateColor: 'var(--primary-text-color)', // Date text color (left side)
	dateSize: 90, //Date text size (percent of standard text)

	descColor: 'var(--primary-text-color)', // Description text color (left side)
	descSize: 80, //Description text size (percent of standard text)

	showNoEventsForToday: false,
	noEventsForTodayText: 'No events for today',
	noEventsForNextDaysText: 'No events in the next days',

	timeColor: 'var(--primary-color)', // Time text color (center bottom)
	timeSize: 90, //Time text size
	showHours: true, //shows the bottom line (time, duration of event)

	eventTitleColor: 'var(--primary-text-color)', //Event title settings (center top), if no custom color set
	eventTitleSize: 100,

	locationIconColor: 'rgb(--primary-text-color)', //Location link settings (right side)
	locationLinkColor: 'var(--primary-text-color)',
	locationTextSize: 90,

	// finished events settings
	hideFinishedEvents: false, // show finished events
	dimFinishedEvents: true, // make finished events greyed out or set opacity
	finishedEventOpacity: 0.6, // opacity level
	finishedEventFilter: 'grayscale(100%)', // css filter

	// days separating
	dayWrapperLineColor: 'var(--primary-text-color)', // days separating line color
	eventBarColor: 'var(--primary-color)',

	eventCalNameColor: 'var(--primary-text-color)',
	eventCalNameSize: 90,

	showProgressBar: true,
	showFullDayProgress: false,
	progressBarColor: 'var(--primary-color)',

	enableModeChange: false,
	defaultMode: 1,

	// Calendar Mode Default Settings

	calGridColor: 'rgba(125, 125, 125, .1)',
	calDayColor: 'var(--primary-text-color)',
	calWeekDayColor: 'var(--primary-color)',
	calDateColor: 'var(--primary-text-color)',
	defaultCalColor: 'var(--primary-text-color)',

	calEventBackgroundColor: 'rgba(125, 125, 125, .35)',
	calEventBackgroundFilter: null,

	calActiveEventBackgroundColor: 'rgba(125, 125, 125, .35)',
	calActiveEventBackgroundFilter: null,

	calEventSatColor: 'rgba(125, 125, 125, .1)',
	calEventSunColor: 'rgba(125, 125, 125, .2)',

	calEventHolidayColor: 'red',
	calEventHolidayFilter: null,

	calEventIcon1: 'mdi:gift',
	calEventIcon1Color: 'var(--primary-text-color)',
	calEventIcon1Filter: null,

	calEventIcon2: 'mdi:home',
	calEventIcon2Color: 'var(--primary-text-color)',
	calEventIcon2Filter: null,

	calEventIcon3: 'mdi:star',
	calEventIcon3Color: 'var(--primary-text-color)',
	calEventIcon3Filter: null,

	calEventTime: false, // show calendar event summary time

	firstDayOfWeek: 1, // default 1 - monday
	blacklist: null,
	whitelist: null,
};
