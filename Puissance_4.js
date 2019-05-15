$.fn.puissance_4 = function(y=6, x=7, color1="red", color2="yellow")
{

/*const param = $.extend({
			y				: 7,
			x				: 6,
			color1			:"yellow",
			color2			:"red"
		}, options );

return this({
			x				: param.x,
			y				: param.y,
			color1			: param.color1,
			color2			: param.color2

		});
*/
    let theo = 1;
    let partie_null = 0;
    let tab_x = [];
    let tab_y = [];
    let tmp_tab_index_a = "";
    let tmp_tab_index_b = "";
    let pion ="";
    let replay = 0;
    let score1 = 0;
    let score2 = 0;
	var player1_ligne = 0;
	var player2_ligne = 0;
	var player1_colonne = 0;
	var player2_colonne = 0;
	var player1_diago_bg = 0;
	var player2_diago_bg = 0;
	var player1_diago_bg1 = 0;
	var player2_diago_bg1 = 0;
	var player1_diago_bd = 0;
	var player2_diago_bd = 0;
	var player2_diago_bd1 = 0;
	var player1_diago_bd1 = 0;
	var status = 2;

	grille(x, y);
	algo_tab(y, x);
	style_css();

	if (color1 == color2 && color1 != "red")
	{
		color2 = "red";
	}
	else if(color1 == color2)
	{
		color2 = "yellow";
	}

	function grille(x, y)
	{
		$("body").append("<table></table>");
		for (var i = 0; i < x; i++) {
			$("table").append("<tr id='" + i + "'></tr>");
			for (var j = 0; j < y; j++) {
				var td = $("<td></td>").addClass(j + "-" + i);
				$("#" + i).append(td);
			}
		}

		$("body").append("<div class='container'></div>");
		$(".container").append("<div class='score'><div class='j1'><p>Joueur 1</p><p class='score1'>0</p></div><div class='j2'><p>Joueur 2</p><p class='score2'>0</p></div></div>");
		$(".container").append("<div class='button'></div>");
		$(".button").append("<input type='button' id='back' value='Back'></input>");
		$(".button").append("<input type='button' id='replay' value='Rejouer'></input>");
	}

	function style_css() {

			/*$("*").css("padding", 0);
			$("*").css("margin", 0)*/;
		$("header").css('display','flex');
		$("header").css('justify-content','center');
		$("header").css('color','black');
		$("header h1").css('padding','10px 0px');
		$("header h1").css('color','black');
		$("table").css('margin','0px auto');
		$("table").css('background-color','blue');
		$("table").css('transform','rotate(270deg)');
		$("td").css("cursor","pointer");
		$("td").css("display","inline-block");
		$("td").css("margin","5px");
		$("td").css("border-radius","50%");
		$("td").css("width","50px");
		$("td").css("height","50px");
		$("td").css("background-color","white");
		$(".score").css("color","black");
		$(".score").css("margin","0 auto");
		$(".score").css("text-align","center");
		$(".score p").css("display","inline-block");
		$(".score p").css("margin","20px");
		$(".hide").css("display","none");
		$("span").css("width","50px");
		$("span").css("height","50px");
		$("span").css("border-radius","50%");
	}

	$("window").ready(function(){

		$(".j1").css("background-color",color1);
		$(".j2").css("background-color","grey");
		$("head").append("<link rel='stylesheet' type='text/css' href='Puissance_4.css'>");

	})

	$("tr").click(function(e)
	{
		partie_null = 0;

		var colonne = e.currentTarget.id;
		console.log(tab_y[colonne]);


		if(tab_y[colonne].indexOf("") != -1)
		{
			if (status == 2 || status == 3)
			{
				var color = color1;
				pion = 1;
				status++;
				$(".j2").css("background-color",color2);
				$(".j1").css("background-color","grey");
			}
			else if( status == 4 || status == 5)
			{
				color = color2;
				pion = 2;
				status ++;
				if (status == 6)
				{
					status = 2;	
				}
				$(".j1").css("background-color",color1);
				$(".j2").css("background-color","grey");
			}
			
		}
		check_pion(colonne);
		move_pion(tmp_tab_index_a, tmp_tab_index_b, color);

		win_test_x();
		win_test_y();
		win_test_x_digonale_bg();
		win_test_x_digonale_bd();
		replay = 1;

		for (var index = 0; index < tab_x.length; index++)
		{
			if (tab_x[index].indexOf("") == -1)
			{
				partie_null++;
			}

			if(partie_null == tab_x.length)
			{
				alert("Match Null !");
			}
		}

		partie_null = 0;

		var colonne = e.currentTarget.id;
		console.log(tab_y[colonne]);


		if(tab_y[colonne].indexOf("") != -1)
		{
			if (status == 2 || status == 3)
			{
				var color = color1;
				pion = 1;
				status++;
				$(".j2").css("background-color",color2);
				$(".j1").css("background-color","grey");
			}
			else if( status == 4 || status == 5)
			{
				color = color2;
				pion = 2;
				status ++;
				if (status == 6)
				{
					status = 2;	
				}
				$(".j1").css("background-color",color1);
				$(".j2").css("background-color","grey");
			}
			
		}
		check_pion(colonne);
		move_pion(tmp_tab_index_a, tmp_tab_index_b, color);

		win_test_x();
		win_test_y();
		win_test_x_digonale_bg();
		win_test_x_digonale_bd();
		replay = 1;

		for (var index = 0; index < tab_x.length; index++)
		{
			if (tab_x[index].indexOf("") == -1)
			{
				partie_null++;
			}

			if(partie_null == tab_x.length)
			{
				alert("Match Null !");
			}
		}
	})


	$("#back").click(function()
	{
		console.log("okok");
		var ko = $("." + tmp_tab_index_b + "-" + tmp_tab_index_a);
		console.log(ko)
		console.log(replay)
		if (replay == 2)
		{
			alert("Vous ne pouvez revenir en arriere qu'une seule fois par tour");
		}
		else if(replay == 1)
		{
			replay = 2;
			ko.empty();
			tab_y[tmp_tab_index_a][tmp_tab_index_b] = "";
			tab_x[tmp_tab_index_b][tmp_tab_index_a] = "";
			if (status == 1)
			{
				status ++;	
				$(".j2").css("background-color",color2);
				$(".j1").css("background-color","grey");
			}
			else
			{
				status--;
				$(".j1").css("background-color",color1);
				$(".j2").css("background-color","grey");
			}
		}
	})

	$("#replay").click(function(){
		algo_tab(y, x);
		$("td").empty();
	})

	function move_pion(a, b, color)	
	{
		var current = $("." + b + "-" + a);


		current.append("<span></span>");
		current.find("span").animate({marginTop: 0},"slow").css("background-color", color);
		$("span").css("display","block");
		$("span").css("width","50px");
		$("span").css("height","50px");
		$("span").css("border-radius","50%");
	}

	function check_pion(col)
	{
		
		var tmp = tab_y[col].indexOf("");
		tab_y[col][tmp] = pion;
		tab_x[tmp][col] = pion;
		tmp_tab_index_a = col;
		tmp_tab_index_b = tmp;
	}		

	function win_test_x_digonale_bg()
	{
		for (var k_x_bg = 0; k_x_bg < tab_x.length; k_x_bg++)
		{
			var g_bg = 0;
			for (var k_x_g_bg = k_x_bg; k_x_g_bg < tab_x.length; k_x_g_bg++)
			{
				if (tab_x[k_x_g_bg][g_bg] == 1)
				{
					player1_diago_bg1 ++;
					player2_diago_bg1 = 0;
				}
				else if(tab_x[k_x_g_bg][g_bg] == 2)
				{
					player2_diago_bg1 ++;
					player1_diago_bg1 = 0;
				}
				else if(tab_x[k_x_g_bg][g_bg] == "")
				{
					player1_diago_bg1 = 0;
					player2_diago_bg1 = 0;
				}

				if(player1_diago_bg1 >= 4)
				{
					win(1, "diagonale bas gauche haut");
				}
				else if(player2_diago_bg1 >= 4)
				{
					win(2, "diagonale bas gauche haut");
				}
				g_bg++
			}

			player2_diago_bg1 = 0;
			player1_diago_bg1 = 0;
		}

		player2_diago_bg = 0;
		player1_diago_bg = 0;

		for (var indi_col = 0; indi_col < tab_y.length; indi_col++)
		{
			var temp = indi_col;
			for (indi_lign = 0; indi_lign < tab_x.length; indi_lign++)
			{
				if (tab_x[indi_lign][temp] == 1)
				{
					player1_diago_bg ++;
					player2_diago_bg = 0;
				}
				else if(tab_x[indi_lign][temp] == 2)
				{
					player2_diago_bg ++;
					player1_diago_bg = 0;
				}
				else if(tab_x[indi_lign][temp] == "")
				{
					player1_diago_bg = 0;
					player2_diago_bg = 0;
				}

				if(player1_diago_bg >= 4)
				{
					win(1, "diagonale bas gauche inferieur");
				}
				else if(player2_diago_bg >= 4)
				{
					win(2, "diagonale bas gauche inferieur");
				}
				temp++
			}
			
			player2_diago_bg = 0;
			player1_diago_bg = 0;
		}
	}

	function win_test_x_digonale_bd()
	{
		for (var k_x_bd = tab_x.length; k_x_bd >= 0; k_x_bd--)
		{
			var g_bd = k_x_bd;
			for (var k_x_g_bd = 0; k_x_g_bd < tab_x.length; k_x_g_bd++)
			{
				if (tab_x[k_x_g_bd][g_bd] == 1)
				{
					player1_diago_bd1 ++;
					player2_diago_bd1 = 0;
				}
				else if(tab_x[k_x_g_bd][g_bd] == 2)
				{
					player2_diago_bd1 ++;
					player1_diago_bd1 = 0;
				}
				else if(tab_x[k_x_g_bd][g_bd] == "")
				{
					player1_diago_bd1 = 0;
					player2_diago_bd1 = 0;
				}

				if(player1_diago_bd1 >= 4)
				{
					win(1, "diagonale bas droitehh");
				}
				else if(player2_diago_bd1 >= 4)
				{
					win(2, "diagonale bas droitehh");
				}
				g_bd--;
			}
			player2_diago_bd1 = 0;
			player1_diago_bd1 = 0;
		}

		player2_diago_bd = 0;
		player1_diago_bd = 0;

		for (var indice1 = 0; indice1 < tab_x.length-1; indice1++)
		{
			var starter = indice1;
			for (var indice2 = tab_y.length-1; starter < tab_x.length-1; indice2--)
			{
				console.log(starter + " - " + indice2);
				if (tab_x[starter][indice2] == 1)
				{
					player1_diago_bd ++;
					player2_diago_bd = 0;
				}
				else if(tab_x[starter][indice2] == 2)
				{
					player2_diago_bd ++;
					player1_diago_bd = 0;
				}
				else if(tab_x[starter][indice2] == "")
				{
					player1_diago_bd = 0;
					player2_diago_bd = 0;
				}

				console.log(player1_diago_bd + " vs " + player2_diago_bd)

				if(player1_diago_bd >= 4)
				{
					win(1, "diagonale bas droite");
				}
				else if(player2_diago_bd >= 4)
				{
					win(2, "diagonale bas droite");
				}
				starter++;
			}
			player2_diago_bd = 0;
			player1_diago_bd = 0;
		}
	}

	function win_test_x()
	{
		for (var k_x = 0; k_x < tab_x.length; k_x++)
		{
			for (var xh = 0; xh < tab_x[k_x].length; xh++)
			{

				if(tab_x[k_x][xh] == 1)
				{
					player1_ligne ++;
					player2_ligne = 0;
				}
				else if(tab_x[k_x][xh] == 2)
				{
					player2_ligne ++;
					player1_ligne = 0;
				}
				else if(tab_x[k_x][xh] == "")
				{
					player1_ligne = 0;
					player2_ligne = 0;
				}

				if(player1_ligne >= 4)
				{
					win(1, "ligne");
				}
				else if(player2_ligne >= 4)
				{
					win(2, "ligne");
				}
			}

			player2_ligne = 0;
			player1_ligne = 0;
		}
	}

	function win_test_y()
	{
		for (var k_y = 0; k_y < tab_y.length; k_y++)
		{
			for (var yh = 0; yh < tab_y[k_y].length; yh++)
			{
				if(tab_y[k_y][yh] == 1)
				{
					player1_colonne ++;
					player2_colonne = 0;
				}
				else if(tab_y[k_y][yh] == 2)
				{
					player2_colonne ++;
					player1_colonne = 0;
				}
				else if(tab_y[k_y][yh] == "")
				{
					player1_colonne = 0;
					player2_colonne = 0;
				}

				if(player1_colonne >= 4)
				{
					win(1, "colonne");
				}
				else if(player2_colonne >= 4)
				{
					win(2, "colonne");
				}
			}
			player1_colonne = 0;
			player2_colonne = 0;
		}
	}

	function win(player, algo)
	{
		alert("Le joueur " + player + " a gagne");
	
		if (player == 1)
		{
			score1++;
			$(".score1").html(score1);
		}
		else
		{
			score2++;
			$(".score2").html(score2);
		}


		player1_ligne = 0;
		player2_ligne = 0;
		player1_colonne = 0;
		player2_colonne = 0;
		player1_diago_bg = 0;
		player2_diago_bg = 0;
		player1_diago_bd = 0;
		player2_diago_bd = 0;
		return true;
	}


	function algo_tab(x, y)
	{
		tab_y = [];
		tab_x = [];

		for (var q = 0; q <y; q++)
		{
			tab_y[q] = [];
		}

		for (var i = 0; i < y; i++)
		{
			for (var v = 0; v < x; v++)
			{
				tab_y[i][v] = "";
			}
		}

		for (var j = 0; j < x; j++)
		{
			tab_x[j] = [];
		}

		for (var a = 0; a < x; a++)
		{
			for (var b = 0; b < y; b++)
			{
				tab_x[a][b] = "";
			}
		}
	}
}

$(function() {
	$('window').puissance_4(10, 10, "red", "red");
})