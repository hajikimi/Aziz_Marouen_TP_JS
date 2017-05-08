/**
 * Created by Hajikimi on 2017-05-08.
 */
document.write('<table border="0" align="center">');
for (i=1 ;i<(nbc/4)+1 ;i++){
    document.write('<tr>');
    for (t=1 ;t<5 ; t++){
        cpt++;
        document.write('<td><a href="#" onClick="change_im('+(cpt)+')"><img src="img/back.jpg" width="308" height="560" border="0"></a></td>');
    }
    document.write('</tr>');
}
