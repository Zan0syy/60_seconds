let fullness = 0;

let max_fullness = 0;

let blok_coridor = false;
let blok_kitchen = false;
let blok_room = false;
let blok_toilet = false;


var difficulty = 0;

var water = 0;
var food = 0;

let a = 0;
let b = 0;
let c = 0;
let d = 0;
items_in_kitchen = ["суп", "вода","игральные карты", "радио"];
items_in_room = ["пособие по выживанию", "фонарик", "вода"]
items_in_toilet = ["мыло", "противогаз", "аптечка"]
items_in_coridor = ["карта города", "документы", "топор"]

inventory= []


rooms = [items_in_kitchen, items_in_room, items_in_toilet, items_in_coridor]

let i = 0;

function upd_inv(){
    document.getElementById("play_console_l").innerHTML = "<h2>ИНВЕРНТАРЬ</h2>"
    for (i = 0; i < inventory.length; i++){
        document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>" + inventory[i] + "</p>"
    }
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function add_text(text){
    document.getElementById("text").innerHTML += text;
}
function add_text_stat(text){
    document.getElementById("stats").innerHTML += text;
}

function clear_text(text){
    document.getElementById('text').innerHTML = " ";
}

function full_inventory(){
    if(fullness>=max_fullness){
        document.getElementById("get_map").disabled = "disabled";
        document.getElementById("get_doki").disabled = "disabled";
        document.getElementById("get_axe").disabled = "disabled";
        document.getElementById("next_room_but").style.display = 'none';
    }
}

function blok_rooms(){
    if ( blok_coridor == true || fullness == max_fullness){
		document.getElementById('go_coridor').disabled = "disabled";
        document.documentElement.style.setProperty('--lines-coridor', 'line-through');
    };
    if ( blok_kitchen == true || fullness == max_fullness){
        document.getElementById('go_kitchen').disabled = "disabled";
        document.documentElement.style.setProperty("--lines-kitchen", "line-through");
    };
    if ( blok_room == true || fullness == max_fullness){
        document.getElementById('go_room').disabled = "disabled";
        document.documentElement.style.setProperty('--lines-room', 'line-through');
    };
    if ( blok_toilet == true || fullness == max_fullness){
        document.getElementById('go_toilet').disabled = "disabled";
        document.documentElement.style.setProperty('--lines-toilet', 'line-through');
    };
}

function start_game(){
    document.getElementById("st").style.display = "none";
    document.getElementById("secs").innerHTML = '';
    document.getElementById("text").innerHTML = "Игра начинается. Выберите уровень сложности: <p class='p_st'></p><div><button class='dif_but' onclick='dif_easy(this)'><h2 class='start_text'>Легкий</h2></button><p class='p_st'></p><button class='dif_but' onclick='dif_normal(this)'><h2 class='start_text'>средний</h2></button><p class='p_st'></p><button class='dif_but' onclick='dif_hard(this)'><h2 class='start_text'>Сложный</h2></button></div>"
}

function dif_easy(){
    difficulty = 1
    max_fullness = 15
    document.getElementById("max_fullness").innerHTML = max_fullness
    document.getElementById("text").innerHTML = "Отличный выбор для новичка!";
    document.getElementById("text").innerHTML += "<p class='p_st'></p><div><button class='dif_but' onclick='game(this)'><h2 class='start_text'>Продолжить</h2></button>";
    
}

function dif_normal(){
    difficulty = 2
    max_fullness = 12
    document.getElementById("max_fullness").innerHTML = max_fullness
    document.getElementById("text").innerHTML = "Отличный выбор для бывалого игрока!"
    document.getElementById("text").innerHTML += "<p class='p_st'></p><div><button class='dif_but' onclick='game(this)'><h2 class='start_text'>Продолжить</h2></button>";
}

function dif_hard(){
    difficulty = 3
    max_fullness = 10;
    document.getElementById("max_fullness").innerHTML = max_fullness
    document.getElementById("text").innerHTML = "Отличный выбор для настоящего профессионала!"
    document.getElementById("text").innerHTML += "<p class='p_st'></p><div><button class='dif_but' onclick='game(this)'><h2 class='start_text'>Продолжить</h2></button>";
}


function game(){
    document.getElementById("text").innerHTML = '<p style="font-size:x-large">Радио- и телестанции по всему миру передают: В сторону восточного побережья США летит межконтинентальная ракета секретного образца. Её полёт - ошибка автоматический систем безопасности, а последствия - губительны для всего мира. От радиации спастись будет очень тяжело." <p class="p_st"></p>Нужно как можно быстрее отправляться в Бункер!<p class="p_st"></p><div><button class="continue_but" onclick="looting(this)"><h2 class="start_text">Продолжить</h2></button></p>'
    
}

function looting(){
    document.getElementById("text").innerHTML = 'В вашем доме точно есть что-нибудь, что может пригодиться. нужно хорошенько осмотреться, но время ограничено!';
    document.getElementById("text").innerHTML += '<p class="p_st"></p> (Собери нужные предметы для продолжительного нахождения в бункере. Твои карманы не резиновые, ты можешь взять с собой только 10 различных предметов)<p>доступные предметы в коридоре: </p>';
    document.getElementById("text").innerHTML += items_in_coridor[0] +"<p class='p_st'></p>"+items_in_coridor[1] +"<p class='p_st'></p>"+items_in_coridor[2];
    document.getElementById("text").innerHTML +='<button class="continue_but"  id="con_btn"onclick="another_rooms(this)"><h2 class="start_text">Продолжить</h2></button>'
    document.getElementById("con_btn").disabled = "disabled";

    document.getElementById("text").innerHTML +='<button class="continue_but" style="left:176px;" id="get_map"onclick="get_map(this)"><h2 class="start_text">Взять карту</h2></button>';
    document.getElementById("text").innerHTML +='<button class="continue_but" style="left:352px;" id="get_doki"onclick="get_doki(this)"><h2 class="start_text">Взять документы</h2></button>';
    document.getElementById("text").innerHTML +='<button class="continue_but" style="left:592px;" id="get_axe"onclick="get_axe(this)"><h2 class="start_text">Взять топор</h2></button>';
    full_inventory();
    
}

function get_map(){
    document.getElementById("get_map").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_coridor[0];+"</p>";
    inventory.push(items_in_coridor[0]);
    fullness++;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("con_btn").style.display = 'none';
        if (fullness >= max_fullness) {  
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
        }
    if(c==0){
        document.getElementById("text").innerHTML += '<button class="next_room_but"  id="next_room_but"onclick="another_rooms(this)"><h2 class="start_text">Идти в другую комнату</h2></button>';
        c++;
    };
}

function get_doki(){
    document.getElementById("get_doki").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_coridor[1];+"</p>";
    inventory.push(items_in_coridor[1]);
    fullness++;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("con_btn").style.display = 'none';
        if (fullness >= max_fullness) {  
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
	};
        if(c==0){
            document.getElementById("text").innerHTML += '<button class="next_room_but"  id="next_room_but"onclick="another_rooms(this)"><h2 class="start_text">Идти в другую комнату</h2></button>';
            c++;
        };
}

function get_axe(){
    document.getElementById("get_axe").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_coridor[2];+"</p>";
    inventory.push(items_in_coridor[2]);
    fullness++;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("con_btn").style.display = 'none';
        if (fullness >= max_fullness) {  
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
	};
    if(c==0){
        c++;
        document.getElementById("text").innerHTML += '<button class="next_room_but"  id="next_room_but"onclick="another_rooms(this)"><h2 class="start_text">Идти в другую комнату</h2></button>';
    };
}

function another_rooms(){
    
    if (not_enought == 1){
        document.getElementById("not_enought").style.display = 'none'
    }
    document.getElementById("text").innerHTML =  "<h1>Комнаты в доме: </h1> <h5 id='kitchen' style='kitchen'>кухня</h5><h5 id='room' style='room'>спальня</h5><h5 id='toilet' style='toilet'>туалет</h5><h5 id = 'coridor' style='coridor'>коридор</h5>"
    document.getElementById("text").innerHTML += '<button class="continue_but"  id="go_kitchen"onclick="kithcen(this)"><h3 class="start_text">Идти на кухню</h3></button>';
    document.getElementById("text").innerHTML +='<button class="continue_but" style="left:191px;" id="go_room"onclick="room(this)"><h3 class="start_text">Идти в спальню</h3></button>';
    document.getElementById("text").innerHTML +='<button class="continue_but" style="left:392px;" id="go_toilet"onclick="toilet(this)"><h3 class="start_text">Идти в туалет</h3></button>';
    document.getElementById("text").innerHTML +='<button class="continue_but" style="left:592px;" id="go_coridor"onclick="coridor(this)"><h3 class="start_text">Идти в коридор</h3></button>';
    blok_coridor = true;


    if(a ==1){
        blok_kitchen = true;
    };
    if(b==1){
        blok_room = true;
    }
    if(d ==1){
        blok_toilet = true;
    }
    if(blok_toilet == true && blok_kitchen == true && blok_room == true || fullness == max_fullness){
        document.getElementById("text").innerHTML =  "<h1>Комнаты в доме: </h1> <h5 id='kitchen' style='kitchen'>кухня</h5><h5 id='room' style='room'>спальня</h5><h5 id='toilet' style='toilet'>туалет</h5><h5 id = 'coridor' style='coridor'>коридор</h5>"
        document.getElementById("text").innerHTML += '<button class="next_room_but"  id="continue_but"onclick="bunker(this)"><h2 class="start_text">Идти в бункер</h2></button>';
    }
    else{
		blok_rooms();
		}
}

function kithcen(){
    document.getElementById("text").innerHTML = "<h1>Кухня</h1>"
    add_text("<h4 class='items' style='text-align:left;left:0px;'>Предметы на кухне:</h4> <h6 class='items'>Суп (3 банки)</h6><h6 class='items'>Вода (2 литрa)</h6><h6 class='items'>Игральные карты</h6><h6 class='items'>Радио</h6>")
    add_text("<h5>Что взять?</h5>")
    document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)" disabled="disabled"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    add_text('<button class="continue_but" style="left:271px;" id="get_soup"onclick="get_soup(this)"><h3 class="start_text">Cуп</h3></button>')
    add_text('<button class="continue_but" style="left:330px;" id="get_water"onclick="get_water(this)"><h3 class="start_text">Воду</h3></button>')
    add_text('<button class="continue_but" style="left:400px;" id="get_cards"onclick="get_cards(this)"><h3 class="start_text">Игральные карты</h3></button>')
    add_text('<button class="continue_but" style="left:593px;" id="get_radio"onclick="get_radio(this)"><h3 class="start_text">Радио</h3></button>')
        if (fullness >= max_fullness) {  
            document.getElementById("get_soup").disabled= "disabled"
            document.getElementById("get_water").disabled= "disabled"
            document.getElementById("get_cards").disabled= "disabled"
            document.getElementById("get_radio").disabled= "disabled"
		    document.getElementById("next_room_but").style.display = 'none';
		    document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
		    a++;
	    };

}


let not_enought = 0;
function get_soup(){
    if(fullness + 3 <= max_fullness){
    	document.getElementById("get_soup").disabled = "disabled";
    	document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_kitchen[0];+"</p>";
    	inventory.push(items_in_kitchen[0]);
    	fullness+=3;
    	food +=3
    	document.getElementById("meal").innerHTML = food;
    	document.getElementById("fullness").innerHTML = fullness;
    	document.getElementById("next_room_but").style.display = 'none';
        if (fullness >= max_fullness) {  
        	document.getElementById("get_cards").disabled= "disabled"
        	document.getElementById("get_radio").disabled= "disabled"
        	document.getElementById("get_water").disabled= "disabled"
		    document.getElementById("get_soup").disabled= "disabled"
            add_text_stat("<h2>Инвентарь переполнен!</h2>")
	    };
    	if(a==0){
        	a++;
        	document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    	};
    }
    if(fullness + 3 > max_fullness && food == 0){
    	document.getElementById("get_soup").disabled = "disabled";
	    add_text_stat("<h2 id='not_enought'>Не хватит места!</h2>")
        not_enought = 1;
    }
}
function get_water(){
    if (not_enought == 1){
        document.getElementById("not_enought").style.display = 'none'
    }
    document.getElementById("get_water").disabled = "disabled";
    if (water == 0) {document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_kitchen[1];+"</p>";
    }
    inventory.push(items_in_kitchen[1]);
    fullness+=1;
    water += 2;
    document.getElementById("water").innerHTML = water;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
    if (fullness >= max_fullness) {  
    	document.getElementById("get_cards").disabled= "disabled"
    	document.getElementById("get_radio").disabled= "disabled"
    	document.getElementById("get_water").disabled= "disabled"
	    document.getElementById("get_soup").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
	};
    
    if(a==0){
        a++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
    
}
function get_cards(){
    if (not_enought == 1){
        document.getElementById("not_enought").style.display = 'none'
    }
    document.getElementById("get_cards").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_kitchen[2];+"</p>";
    inventory.push(items_in_kitchen[2]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
        if (fullness >= max_fullness) {  
        	document.getElementById("get_cards").disabled= "disabled"
        	document.getElementById("get_radio").disabled= "disabled"
        	document.getElementById("get_water").disabled= "disabled"
		    document.getElementById("get_soup").disabled= "disabled"
            add_text_stat("<h2>Инвентарь переполнен!</h2>")
	    };
    if(a==0){
        a++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}
function get_radio(){
    if (not_enought == 1){
        document.getElementById("not_enought").style.display = 'none'
    }
    document.getElementById("get_radio").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_kitchen[3];+"</p>";
    inventory.push(items_in_kitchen[3]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
	if (fullness >= max_fullness) {  
        document.getElementById("get_cards").disabled= "disabled"
        document.getElementById("get_radio").disabled= "disabled"
        document.getElementById("get_water").disabled= "disabled"
		document.getElementById("get_soup").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
	};
    if(a==0){
        a++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}

function room(){
    document.getElementById("text").innerHTML = "<h1>Спальня</h1>"
    add_text("<h4 class='items' style='text-align:left;left:0px;'>Предметы в спальне:</h4> <h6 class='items'>Пособие по выживанию</h6><h6 class='items'>Фонарик</h6><h6 class='items'>Вода (2 литра)</h6>")
    add_text("<h5>Что взять?</h5>")
    document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)" disabled="disabled"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    add_text('<button class="continue_but" style="left:271px;" id="get_book" onclick= "get_book(this)"><h3 class="start_text">Пособие по выживанию</h3></button>')
    add_text('<button class="continue_but" style="left:515px;" id="get_light" onclick= "get_light(this)"><h3 class="start_text">Фонарик</h3></button>')
    add_text('<button class="continue_but" style="left:619px;" id="get_water" onclick= "get_water1(this)"><h3 class="start_text">Воду</h3></button>')
        if (fullness >= max_fullness) {  
            document.getElementById("get_book").disabled= "disabled"
            document.getElementById("get_water").disabled= "disabled"
            document.getElementById("get_light").disabled= "disabled"
		    document.getElementById("next_room_but").style.display = 'none';
		    document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
		    b++;
    }
}

function get_book(){
    document.getElementById("get_book").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_room[0];+"</p>";
    inventory.push(items_in_room[0]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
        if (fullness >= max_fullness) {  
            document.getElementById("get_book").disabled= "disabled"
            document.getElementById("get_water").disabled= "disabled"
            document.getElementById("get_light").disabled= "disabled"
            add_text_stat("<h2>Инвентарь переполнен!</h2>")
	    };
    if(b==0){
        b++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}

function get_light(){
    document.getElementById("get_light").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_room[1];+"</p>";
    inventory.push(items_in_room[1]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
        if (fullness >= max_fullness) {  
            document.getElementById("get_book").disabled= "disabled"
            document.getElementById("get_water").disabled= "disabled"
            document.getElementById("get_light").disabled= "disabled"
            add_text_stat("<h2>Инвентарь переполнен!</h2>")
	    };
    if(b==0){
        b++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}

function get_water1(){
    document.getElementById("get_water").disabled = "disabled";
    if (water == 0 ){document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_kitchen[1];+"</p>";
    }
    inventory.push(items_in_room[2]);
    fullness+=1;
    water += 2;
    document.getElementById("water").innerHTML = water;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
        if (fullness >= max_fullness) {  
            document.getElementById("get_book").disabled= "disabled"
            document.getElementById("get_water").disabled= "disabled"
            document.getElementById("get_light").disabled= "disabled"
            add_text_stat("<h2>Инвентарь переполнен!</h2>")
	    };
    if(b==0){
        b++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}

function toilet(){
    document.getElementById("text").innerHTML = "<h1>Туалет</h1>"
    add_text("<h4 class='items' style='text-align:left;left:0px;'>Предметы в туалете:</h4> <h6 class='items'>мыло</h6><h6 class='items'>Противогаз</h6><h6 class='items'>Аптечка (2 литра)</h6>")
    add_text("<h5>Что взять?</h5>")
    document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)" disabled="disabled"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    add_text('<button class="continue_but" style="left:266px;" id="get_soap" onclick= "get_soap(this)"><h3 class="start_text">Мыло</h3></button>')
    add_text('<button class="continue_but" style="left:335px;" id="get_gas" onclick= "get_gas(this)"><h3 class="start_text">Противогаз</h3></button>')
    add_text('<button class="continue_but" style="left:472px;" id="get_med" onclick= "get_med(this)"><h3 class="start_text">Аптечку</h3></button>')
	if (fullness >= max_fullness) {  
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
		document.getElementById("next_room_but").style.display = 'none';
		document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
		d++;
	}
}


function get_soap(){
    document.getElementById("get_soap").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_toilet[0];+"</p>";
    inventory.push(items_in_toilet[0]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
	if (fullness >= max_fullness) {  
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
	};
    if(d==0){
        d++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}

function get_gas(){
    document.getElementById("get_gas").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_toilet[1];+"</p>";
    inventory.push(items_in_toilet[1]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
	if (fullness >= max_fullness) {  
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
	};
    if(d==0){
        d++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}


function get_med(){
    document.getElementById("get_med").disabled = "disabled";
    document.getElementById("play_console_l").innerHTML += "<p class='p_inv'>"+items_in_toilet[2];+"</p>";
    inventory.push(items_in_toilet[2]);
    fullness+=1;
    document.getElementById("fullness").innerHTML = fullness;
    document.getElementById("next_room_but").style.display = 'none';
	if (fullness >= max_fullness) {  
        document.getElementById("get_med").disabled= "disabled"
        document.getElementById("get_gas").disabled= "disabled"
        document.getElementById("get_soap").disabled= "disabled"
        add_text_stat("<h2>Инвентарь переполнен!</h2>")
	};
    if(d==0){
        d++;
        document.getElementById("text").innerHTML += '<button class="next_room_but" style="bottom:20px" id="next_room_but"onclick="another_rooms(this)"><h3 class="start_text" >Идти в другую комнату</h3></button>';
    };
}

function bunker(){
	clear_text();
	add_text("<p class='text'>Вы успешно собрались в продолжительное, а может и нет, обитание в бункере. В ближайшее время он станет вашим верным защитником от радиации и... нечестных людей.<p class='p_st'></p> Посторайтесь найти своё спасение и не умереть до прибытия помощи.</p>")
	add_text('<div class="start"><button class="aab" onclick="start_game_in_bunker(this)"><h3>Начать</h3></button></div>')

}

function start_game_in_bunker(){
    clear_text();
    upd_inv()
	if(difficulty == 1){
	add_text("<p class='text'>Вы запрыгнули в бункер, кажется что тут давно никого не было, но что-то здесь может и хранится...</p>")
	add_text('<div class="start"><button class="aab" onclick="bunker1(this)"><h3>Дальше</h3></button></div>')
    
    if(getRandomInRange(0, 2) == 1){
        add_text("вы нашли в бункере 2 банки супа и 5 литров воды")
        food+= 2
        water+=5;
        document.getElementById("meal").innerHTML = food;
        document.getElementById("water").innerHTML = water;
    }
	}

    if(difficulty == 2){
	add_text("<p class='text'>Вы запрыгнули в бункер, кажется что тут давно никого не было, но что-то здесь может и хранится...</p>")
	add_text('<div class="start"><button class="aab" onclick="bunker1(this)"><h3>Дальше</h3></button></div>')
    if(getRandomInRange(0, 4) == 1){
        add_text("вы нашли в бункере банку супа и 3 литра воды")
        food++
        water+=5;
        document.getElementById("meal").innerHTML = food;
        document.getElementById("water").innerHTML = water;
    }
	}

    if(difficulty == 3){
        add_text("<p class='text'>Вы запрыгнули в бункер, кажется что тут давно никого не было, но что-то здесь может и хранится...</p>")
        add_text('<div class="start"><button class="aab" onclick="bunker1(this)"><h3>Дальше</h3></button></div>')
        if(getRandomInRange(0, 9) == 1){
            add_text("вы нашли в бункере 2 литра воды")
            water+=2;
            document.getElementById("water").innerHTML = water;
        }
    }
}
//89080077324
