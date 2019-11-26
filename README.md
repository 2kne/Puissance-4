API COIN GUIDE

Votre headers doit toujours inclure

    {"Content-Type": "application/json"}


Sauf pour le REGISTER et LOGIN il doit aussi inclure le token de la sorte

    {"Authorization": "Token 466469064eab69e216254940d2352292c53f69a0"},


Routes:

////////////////////////////////////////////

LOGIN

url: "localhost/login/"

method: POST

body: 

    {"username": "votre_username",
	  "password": "votre_password"}

Return:

    {"token":"b84665e9467d9a14ef6f9d860eca1f901d639cbb",
    "user_id":6,
    "email":"votre_email@exemple.com"}

////////////////////////////////////////////

LOGOUT

url: "localhost/logout/"

method: GET

Supprime le token qui est dans le headers, il faudra ensuite se reconnecter via /register

Return: status.HTTP_200_OK

////////////////////USER////////////////////

REGISTER

url: "localhost/user/register/"

method: PUT

body: 

	{
		"username": "votre_username",
		"email": "votre_email@exemple.com",
		"password": "votre_password" (min_length=8)
	}
    
Return: 

    {"id":6,
    "username":"votre_username",
    "email":"votre_email@exemple.com",
    "password":"pbkdf2_sha256$150000$4Dk3FOgrB9K7$761T7SJdlNQjDUr50ETuFzsI6kdUQ0w8yWPsLb+7/qk="}

////////////////////////////////////////////

GET USER

url: "localhost/user/{id}/"

method: GET

Retourne les infos de l'user + ses alertes

Return: 

	{
		"id": 2,
		"username": "tom",
		"email": "lol@gmail.com",
		"alert": [
			{
				"id": 1,
				"id_user": 2,
				"ctr": "BTC",
				"alert_type": 1,
				"value": 3330,
				"created_at": "2019-11-25T14:20:57.853Z"
			},
			{
				"id": 2,
				"id_user": 2,
				"ctr": "test",
				"alert_type": 0,
				"value": 3232,
				"created_at": "2019-11-25T14:46:25.539Z"
			},
			{
				"id": 3,
				"id_user": 2,
				"ctr": "BTC",
				"alert_type": 0,
				"value": 32332,
				"created_at": "2019-11-25T14:56:16.583Z"
			}
		]
	}

////////////////////////////////////////////

UPDATE USER

url: "localhost/user/update/"

method: POST

Attention l'api se refere a l'id user pour selectionner la ligne a mettre a jour

body: 

	{
		"id": 2,
		"username": "new_username",
		"email": "new_email",
		"password": "new_password"
	}
	
return: HTTP_201_CREATED

///////Pas de verification d'email valide ou d'username valide///////TO COMPLETE

////////////////////////////////////////////

DELETE USER

url: "localhost/user/delete/"

method: DELETE

body: 

	{"id": "id_user you want delete"}

return: 

	[
		2,
		{
			"admin.LogEntry": 0,
			"auth.User_groups": 0,
			"auth.User_user_permissions": 0,
			"authtoken.Token": 1,
			"auth.User": 1
		}
	]


////////////////////ALERTS COIN////////////////////

CREATE ALERT

url: "localhost/alert/create/"

method: PUT

body:

	{
    	"id_user": 2, (id de a qui est associe l'alerte)
    	"ctr": "CVP", (l'abreviation de la cryptomonnaie qui doit correspondre avec celle de COINAPI)
    	"alert_type": 0, (0 = alerte de type au dessus de ou dessous d'un nombre, 1 = % d'augmentation ou diminution de la monnaie)
    	"value": 3232 (valeur pour les alertes de type 0 et valeur actuelle pour les alertes de type 1)
	}

return: HTTP_201_CREATED

////////////////////////////////////////////

UPDATE ALERT

url: "loclahost/alert/update/

method: POST

body:

	{
    	"id": 2, (id de l'alerte a update)
    	"ctr": "CVP", (l'abreviation de la cryptomonnaie qui doit correspondre avec celle de COINAPI)
    	"alert_type": 0, (0 = alerte de type au dessus de ou dessous d'un nombre, 1 = % d'augmentation ou diminution de la monnaie)
    	"value": 3232 (valeur pour les alertes de type 0 et valeur actuelle pour les alertes de type 1)
	}
	
return: None

////////////////////////////////////////////

GET ALERT

url: "localhost/alert/{id_alert}"

method: GET

return:

	{
    	"id": 2,
    	"id_user": 2,
    	"ctr": "OMGP",
    	"alert_type": 0,
    	"value": 3232,
    	"created_at": "2019-11-25T14:46:25.539Z"
	}
	
////////////////////////////////////////////	

DELETE ALERT

url: "loclahost/delete/"

method: DELETE

body: 

	{"id": 2 (id de l'alerte a delete) }
	
return: "Deleted
	
	






















