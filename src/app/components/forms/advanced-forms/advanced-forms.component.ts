import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-advanced-forms',
  templateUrl: './advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.scss']
})
export class AdvancedFormsComponent implements OnInit {
	MultiseletDropDown = [];
	MultiseletDropDown1 = [];
	groupDropdown = [];
	SingleItems = [];
	SingleSettings = {};
	DisableItem = [];
	DisableSettings = {};
	SingleSearchItem = [];
	SingleSearchSettings = {};
	multipleItems = [];
	multipleSettings = {};
	groupItems = [];
	groupSettings = {};

	
  constructor() { }

  ngOnInit(): void {
	this.MultiseletDropDown = [
		{ "id": 1, "itemName": 'Volvo' },
		{ "id": 2, "itemName": 'Saab' },
		{ "id": 3, "itemName": 'Mercedes' },
		{ "id": 4, "itemName": 'Audi' },
	]
	this.MultiseletDropDown1 = [
		{ "id": 1, "itemName": 'Volvo' },
		{ "id": 2, "itemName": 'Saab' },
		{ "id": 3, "itemName": 'Mercedes' },
		{ "id": 4, "itemName": 'Audi' },
		{ "id": 5, "itemName": 'Volvo' },
		{ "id": 6, "itemName": 'Saab' },
		{ "id": 7, "itemName": 'Mercedes' },
		{ "id": 8, "itemName": 'Audi' },
		{ "id": 9, "itemName": 'Volvo' },
		{ "id": 10, "itemName": 'Saab' },
		{ "id": 11, "itemName": 'Mercedes' },
		{ "id": 12, "itemName": 'Audi' },
		{ "id": 13, "itemName": 'Volvo' },
		{ "id": 14, "itemName": 'Saab' },
		{ "id": 15, "itemName": 'Mercedes' },
		{ "id": 16, "itemName": 'Audi' },
	]
	this.groupDropdown = [
		{ "id": 1, "itemName": "India", "category": "asia" },
		{ "id": 2, "itemName": "Singapore", "category": "asia pacific" },
		{ "id": 3, "itemName": "Germany", "category": "Europe" },
		{ "id": 4, "itemName": "France", "category": "Europe" },
		{ "id": 5, "itemName": "South Korea", "category": "asia" },
		{ "id": 6, "itemName": "Sweden", "category": "Europe" },
	];
	
	this.SingleSettings = {
		singleSelection: true,
		text: "Choose One",
		classes: "myclass custom-class"
	};

	this.DisableSettings = {
		disabled: true
	}

	this.SingleSearchSettings = {
		singleSelection: true,
		text: 'Choose One',
		enableSearchFilter: true,
	}

	this.multipleSettings = {
		text: "Select Multiple Values",
		classes: "myclass custom-class"
	};

	this.groupSettings = {
		singleSelection: false,
		text: 'Select Group',
		selectAllText: 'Select All',
		unSelectAllText: 'UnSelect All',
		searchPlaceholderText: 'Search Group',
		enableSearchFilter: true,
		badgeShowLimit: 5,
		groupBy: 'category'
	}

  }

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	
	public config1: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 1,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

	public config2: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 5,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

	public config3: DropzoneConfigInterface = {
		clickable: true,
		maxFiles: 1,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null,
		acceptedFiles: '.png',
	};
}
