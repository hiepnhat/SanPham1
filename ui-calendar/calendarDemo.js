var calendarProject = angular.module('calendarProject', ['ui.calendar', 'ui.bootstrap']);
calendarProject.controller('CalendarCtrl',
   function($scope, $compile, $timeout, uiCalendarConfig) {
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();


    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'Meeting with client',start: new Date(2022, 2, 27, 10, 0)},
	  {title: 'Design new pages',start: new Date(2022, 2, 30, 14, 30)},
	  {title: 'Visit course',start: new Date(2022, 3, 8, 11, 30)},
      {title: 'Design new project and check sales',start: new Date(2022, 3, 11, 9, 0),end: new Date(2022, 3, 12, 12, 00)},
      {title: 'Meeting with client',start: new Date(2022, 3, 26, 10, 0)},

    ];
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 714,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
		views: {
		  timelineDay: {
			slotLabelFormat: ['H:mm'],
		  },
		  timelineMonth: {
			slotLabelFormat: ['DD'],
		  },
		},
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
});

/*
** Change time Function
*/
function ConvertTimeformat(str) {
	var hours = Number(str.match(/^(\d+)/)[1]);
	var minutes;
	if(str.indexOf(':') == true) {
    	minutes = Number(str.match(/:(\d+)/)[1]);
    } else {
        minutes = "0";
    }
	var AMPM = str.match(/\s?([AaPp][Mm]?)$/)[1];
	var pm = ['P', 'p', 'PM', 'pM', 'pm', 'Pm'];
	var am = ['A', 'a', 'AM', 'aM', 'am', 'Am'];
	
	if (pm.indexOf(AMPM) >= 0 && hours < 12) hours = hours + 12;
	if (am.indexOf(AMPM) >= 0 && hours == 12) hours = hours - 12;
	var sHours = hours.toString();
	var sMinutes = minutes.toString();
	//if (hours < 10) sHours = "0" + sHours;
	if (minutes < 10) sMinutes = "0" + sMinutes;
	
	return (sHours + ":" + sMinutes);
}

/*
** Change time on Party Eco Project clendar
*/
jQuery(document).ready( function(){
	var x;
	jQuery('.fc-content .fc-time').each(function () {
	   x = jQuery(this).text();
		if( x != ""){
			var time = ConvertTimeformat(x);
			jQuery(this).text(time);
		}
	});
	jQuery(document).on('click', '.calendar .fc-button-group .fc-button' , function(){
		setTimeout(() => {
			var x;
			jQuery('.fc-content .fc-time').each(function () {
			   x = jQuery(this).text();
				if( x != ""){
					var time = ConvertTimeformat(x);
					jQuery(this).text(time);
				}
			});
		}, "100");
	});
});

