/**
 * Created by Hajikimi on 2017-05-08.
 */



document.write('<div id="game" >'+'<table id="game" border="0" align="center">');
for (i=1 ;i<(nbc/4)+1 ;i++) {
    document.write('<tr>');
    for (t = 1; t < 5; t++) {
        cpt++;
        document.write('<td><a href="#" onClick="change_im(' + (cpt) + ')"><img src="img/back2.jpg" width="65" height="110" border="0"></a></td>');
    }
    document.write('</tr>');

}
document.write('<div id = "win" style="display: none"></div>');
document.write('<div id = "lose" style="display: none"></div>');



document.write('</table></div>'+
    '<form name="form1" align="center">'+
    '<table class="aff" >'+
    '<tr><td width="200" >'+
    'Nombre de coups '+
    '<input name="result" type="text" id="result2" size="5">'+
    '</td><td width="100" align="center">'+
    '<input type="button" name="Submit" onClick="window.location=\'MediumGame.html\'" value="Rejouer">'+
    '</td><td align="center">'+
    '<input type="button" name="Submit" onClick="window.location=\'Interface.html\'" value="Quiter">'+
    '</td></tr><tr>'+
    '<td colspan="3">Le but du jeu est de retourner '+
    'les cartes 2 par 2, afin de trouver les cartes identiques</td>'+
    '</tr></table></form>');