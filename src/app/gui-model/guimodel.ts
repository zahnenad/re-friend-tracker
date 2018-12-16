export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Nadine's Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        }, 
                        {     
							"id": "nickname",     
							"type": "text",     
							"name": "Nickname",     
							"width": 2,     
							"required": true
                        }, 
						{  
							"id":   
							"group",     
							"type": "autocomplete",     
							"name": "Group",     
							"url": "/group",     
							"form": "GroupForm",     
							"width": 2 
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                    ]				
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
							"height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{   "id": "GroupForm",     
					"title": "Group",     
					"url": "/group",     
					"formFieldList": [         
						{             
							"id": "name",             
							"type": "text",             
							"name": "GroupName",             
							"width": 2,             
							"required": true         
						},
						{
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						{             
							"type": "deleteButton",             
							"name": "Delete"         
						},         
						{             
							"type": "cancelButton",             
							"name": "Cancel"         
						},         
						{             
							"type": "okButton",
							"name": "Ok"         
						}
					]	
				},	
				{   "id": "ActivityForm",     
					"title": "Activity",     
					"url": "/activity",     
					"formFieldList": [         
						{             
							"id": "name",             
							"type": "text",             
							"name": "Name",             
							"width": 2,             
							"required": true         
					},
					{
                            "id": "Date",
                            "type": "date",
                            "name": "Date",
                            "width": 1,
                            "required": true
                    },
					{
                            "id": "Comments",
                            "type": "text",
                            "name": "Comments",
                            "width": 1,
							"height": 4,
                            "maxLength": 5000,
					},
					{
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                    },
					{             
							"type": "deleteButton",             
							"name": "Delete"         
					},         
					{             
							"type": "cancelButton",             
							"name": "Cancel"         
					},         
					{             
							"type": "okButton",
							"name": "Ok"         
					},
					{             
							"type": "newButton",
							"name": "New"         
					},
				]
			},	
			{
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
						{
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
						{
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-cubes",
                            "color": "green",
                            "page": "activityspage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
						{
                            "type": "newButton",
                            "name": "Add Activity",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
				{    
					"id": "groupspage",     
					"elementList": [         
						{             
							"type": "backbutton",
						},         
						{             
							"type": "newButton",             
							"name": "NewGroup",             
							"icon": "fa-weixin",             
							"color": "green",             
							"form": {                 
								"form": "GroupForm"             
							}         
						},
						{  
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",  
							"search": true,  
							"url": "/group",  
							"form": {   
								"form": "GroupForm"  
							} 
						},
					 ]
				}, 
				{
					"id": "activityspage",     
					"elementList": [         
						{             
							"type": "backbutton",
						},         
						{             
							"type": "newButton",             
							"name": "NewActivity",             
							"icon": "fa-weixin",             
							"color": "green",             
							"form": {                 
								"form": "ActivityForm"             
							}         
						},
						{  
							"type": "list",
							"icon": "fa-weixin",
							"color": "orange",  
							"search": true,  
							"url": "/activity",  
							"form": {   
								"form": "ActivityForm"  
							} 
						},	
					] 
				}, 		
		}
    };


    get guiModel() {
        return this._guiModel;
    }
}
