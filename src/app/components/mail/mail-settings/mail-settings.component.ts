import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail-settings',
  templateUrl: './mail-settings.component.html',
  styleUrls: ['./mail-settings.component.scss']
})
export class MailSettingsComponent implements OnInit {
  constructor(private modalService: NgbModal) {  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }
  TimeZone = [
		{
			id: 'group',
			Timezone: [
				{ id: "Pacific/Midway", value:"Pacific/Midway" , title: '(GMT-11:00) Midway Island, Samoa' },
				{ id: "America/Adak", value:"America/Adak", title: '(GMT-10:00) Hawaii-Aleutian' },
				{ id: "Etc/GMT+10", value:"Etc/GMT+10", title: '(GMT-10:00) Hawaii' },
				{ id: "Pacific/Marquesas", value: "Pacific/Marquesas", title: '(GMT-09:30) Marquesas Islands' },
				{ id: "Pacific/Gambier", value:"Pacific/Gambier", title: '(GMT-09:00) Gambier Islands' },
				{ id: "America/Anchorage",value:"America/Anchorage", title: '(GMT-09:00) Alaska' },
				{ id: "America/Ensenada",value:"America/Ensenada", title:"(GMT-08:00) Tijuana, Baja California"},
				{ id: "Etc/GMT+8",value:"Etc/GMT+8", title:"(GMT-08:00) Pitcairn Islands"},
				{ id: "America/Los_Angeles",value:"America/Los_Angeles", title:"(GMT-08:00) Pacific Time (US & Canada)"},
				{ id: "America/Denver",value:"America/Denver", title:"(GMT-07:00) Mountain Time (US & Canada)"},
				{ id: "America/Chihuahua",value:"America/Chihuahua", title:"(GMT-07:00) Chihuahua, La Paz, Mazatlan"},
				{ id: "America/Dawson_Creek",value:"America/Dawson_Creek", title:"(GMT-07:00) Arizona"},
				{ id: "America/Belize",value:"America/Belize", title:"(GMT-06:00) Saskatchewan, Central America"},
				{ id: "America/Cancun",value:"America/Cancun", title:"(GMT-06:00) Guadalajara, Mexico City, Monterrey"},
				{ id: "Chile/EasterIsland",value:"Chile/EasterIsland", title:"(GMT-06:00) Easter Island"},
				{ id: "America/Chicago",value:"America/Chicago", title:"(GMT-06:00) Central Time (US & Canada)"},
				{ id: "America/New_York",value:"America/New_York", title:"(GMT-05:00) Eastern Time (US & Canada)"},
				{ id: "America/Havana",value:"America/Havana", title:"(GMT-05:00) Cuba"},
				{ id: "America/Bogota",value:"America/Bogota", title:"(GMT-05:00) Bogota, Lima, Quito, Rio Branco"},
				{ id: "America/Caracas",value:"America/Caracas", title:"(GMT-04:30) Caracas"},
				{ id: "America/Santiago",value:"America/Santiago", title:"(GMT-04:00) Santiago"},
				{ id: "America/La_Paz",value:"America/La_Paz", title:"(GMT-04:00) La Paz"},
				{ id: "Atlantic/Stanley",value:"Atlantic/Stanley", title:"(GMT-04:00) Faukland Islands"},
				{ id: "America/Campo_Grande",value:"America/Campo_Grande", title:"(GMT-04:00) Brazil"},
				{ id: "America/Goose_Bay",value:"America/Goose_Bay", title:"(GMT-04:00) Atlantic Time (Goose Bay)"},
				{ id: "America/Glace_Bay",value:"America/Glace_Bay", title:"(GMT-04:00) Atlantic Time (Canada)"},
				{ id: "America/St_Johns",value:"America/St_Johns", title:"(GMT-03:30) Newfoundland"},
				{ id: "America/Araguaina",value:"America/Araguaina", title:"(GMT-03:00) UTC-3"},
				{ id: "America/Montevideo",value:"America/Montevideo", title:"(GMT-03:00) Montevideo"},
				{ id: "America/Miquelon",value:"America/Miquelon", title:"(GMT-03:00) Miquelon, St. Pierre"},
				{ id: "America/Godthab",value:"America/Godthab", title:"(GMT-03:00) Greenland"},
				{ id: "America/Argentina/Buenos_Aires",value:"America/Argentina/Buenos_Aires", title:"(GMT-03:00) Buenos Aires"},
				{ id: "America/Sao_Paulo",value:"America/Sao_Paulo", title:"(GMT-03:00) Brasilia"},
				{ id: "America/Noronha",value:"America/Noronha", title:"(GMT-02:00) Mid-Atlantic"},
				{ id: "Atlantic/Cape_Verde",value:"Atlantic/Cape_Verde", title:"(GMT-01:00) Cape Verde Is."},
				{ id: "Atlantic/Azores",value:"Atlantic/Azores", title:"(GMT-01:00) Azores"},
				{ id: "Europe/Belfast",value:"Europe/Belfast", title:"(GMT) Greenwich Mean Time : Belfast"},
				{ id: "Europe/Dublin",value:"Europe/Dublin", title:"(GMT) Greenwich Mean Time : Dublin"},
				{ id: "Europe/Lisbon",value:"Europe/Lisbon", title:"(GMT) Greenwich Mean Time : Lisbon"},
				{ id: "Europe/London",value:"Europe/London", title:"(GMT) Greenwich Mean Time : London"},
				{ id: "Africa/Abidjan",value:"Africa/Abidjan", title:"(GMT) Monrovia, Reykjavik"},
				{ id: "Europe/Amsterdam",value:"Europe/Amsterdam", title:"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},
				{ id: "Europe/Belgrade",value:"Europe/Belgrade", title:"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},
				{ id: "Europe/Brussels",value:"Europe/Brussels", title:"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"},
				{ id: "Africa/Algiers",value:"Africa/Algiers", title:"(GMT+01:00) West Central Africa"},
				{ id: "Africa/Windhoek",value:"Africa/Windhoek", title:"(GMT+01:00) Windhoek"},
				{ id: "Asia/Beirut",value:"Asia/Beirut", title:"(GMT+02:00) Beirut"},
				{ id: "Africa/Cairo",value:"Africa/Cairo", title:"(GMT+02:00) Cairo"},
				{ id: "Asia/Gaza",value:"Asia/Gaza", title:"(GMT+02:00) Gaza"},
				{ id: "Africa/Blantyre",value:"Africa/Blantyre", title:"(GMT+02:00) Harare, Pretoria"},
				{ id: "Asia/Jerusalem",value:"Asia/Jerusalem", title:"(GMT+02:00) Jerusalem"},
				{ id: "Europe/Minsk",value:"Europe/Minsk", title:"(GMT+02:00) Minsk"},
				{ id: "Asia/Damascus",value:"Asia/Damascus", title:"(GMT+02:00) Syria"},
				{ id: "Europe/Moscow",value:"Europe/Moscow", title:"(GMT+03:00) Moscow, St. Petersburg, Volgograd"},
				{ id: "Africa/Addis_Ababa",value:"Africa/Addis_Ababa", title:"(GMT+03:00) Nairobi"},
				{ id: "Asia/Dubai",value:"Asia/Dubai", title:"(GMT+04:00) Abu Dhabi, Muscat"},
				{ id: "Asia/Yerevan",value:"Asia/Yerevan", title:"(GMT+04:00) Yerevan"},
				{ id: "Asia/Kabul",value:"Asia/Kabul", title:"(GMT+04:30) Kabul"},
				{ id: "Asia/Yekaterinburg",value:"Asia/Yekaterinburg", title:"(GMT+05:00) Ekaterinburg"},
				{ id: "Asia/Tashkent",value:"Asia/Tashkent", title:"(GMT+05:00) Tashkent"},
				{ id: "Asia/Kolkata",value:"Asia/Kolkata", title:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"},
				{ id: "Asia/Katmandu",value:"Asia/Katmandu", title:"(GMT+05:45) Kathmandu"},
				{ id: "Asia/Dhaka",value:"Asia/Dhaka", title:"(GMT+06:00) Astana, Dhaka"},
				{ id: "Asia/Novosibirsk",value:"Asia/Novosibirsk", title:"(GMT+06:00) Novosibirsk"},
				{ id: "Asia/Rangoon",value:"Asia/Rangoon", title:"(GMT+06:30) Yangon (Rangoon)"},
				{ id: "Asia/Bangkok",value:"Asia/Bangkok", title:"(GMT+07:00) Bangkok, Hanoi, Jakarta"},
				{ id: "Asia/Krasnoyarsk",value:"Asia/Krasnoyarsk", title:"(GMT+07:00) Krasnoyarsk"},
				{ id: "Asia/Hong_Kong",value:"Asia/Hong_Kong", title:"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi"},
				{ id: "Asia/Irkutsk",value:"Asia/Irkutsk", title:"(GMT+08:00) Irkutsk, Ulaan Bataar"},
				{ id: "Australia/Perth",value:"Australia/Perth", title:"(GMT+08:00) Perth"},
				{ id: "Australia/Eucla",value:"Australia/Eucla", title:"(GMT+08:45) Eucla"},
				{ id: "Asia/Tokyo",value:"Asia/Tokyo", title:"(GMT+09:00) Osaka, Sapporo, Tokyo"},
				{ id: "Asia/Seoul",value:"Asia/Seoul", title:"(GMT+09:00) Seoul"},
				{ id: "Asia/Yakutsk",value:"Asia/Yakutsk", title:"(GMT+09:00) Yakutsk"},
				{ id: "Australia/Adelaide",value:"Australia/Adelaide", title:"(GMT+09:30) Adelaide"},
				{ id: "Australia/Darwin",value:"Australia/Darwin", title:"(GMT+09:30) Darwin"},
				{ id: "Australia/Brisbane",value:"Australia/Brisbane", title:"(GMT+10:00) Brisbane"},
				{ id: "Australia/Hobart",value:"Australia/Hobart", title:"(GMT+10:00) Hobart"},
				{ id: "Asia/Vladivostok",value:"Asia/Vladivostok", title:"(GMT+10:00) Vladivostok"},
				{ id: "Australia/Lord_Howe",value:"Australia/Lord_Howe", title:"(GMT+10:30) Lord Howe Island"},
				{ id: "Etc/GMT-11",value:"Etc/GMT-11", title:"(GMT+11:00) Solomon Is., New Caledonia"},
				{ id: "Asia/Magadan",value:"Asia/Magadan", title:"(GMT+11:00) Solomon Is., New Caledonia"},
				{ id: "Pacific/Norfolk",value:"Pacific/Norfolk", title:"(GMT+11:30) Norfolk Island"},
				{ id: "Asia/Anadyr",value:"Asia/Anadyr", title:"(GMT+12:00) Anadyr, Kamchatka"},
				{ id: "Pacific/Auckland",value:"Pacific/Auckland", title:"(GMT+12:00) Auckland, Wellington"},
				{ id: "Pacific/Etc/GMT-12",value:"Pacific/Etc/GMT-12", title:"(GMT+12:00) Fiji, Kamchatka, Marshall Is."},
				{ id: "Pacific/Chatham",value:"Pacific/Chatham", title:"(GMT+12:45) Chatham Islands"},
				{ id: "Pacific/Tongatapu",value:"Pacific/Tongatapu", title:"(GMT+13:00) Nuku'alofa"},
				{ id: "Pacific/Kiritimati",value:"Pacific/Kiritimati", title:"(GMT+14:00) Kiritimati"},

			]
		}
	]
}
