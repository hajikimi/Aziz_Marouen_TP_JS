/**
 * Created by Hajikimi on 2017-05-08.
 */




function nb_aleatoire(nb)
{
    nombre= Math.floor(Math.random() * nb)+1;
}

// variables*********
var nbc = 16
var non_im = "image" //début du nom des image



var tirage = [];//tirage aléatoire
var place = [];
var choix = 0 ; nbim2 = 0; nbim3 = 0;
var choixim = 1;
var gain = 0;
var cpt=0;
var coup = 0;
var divs=nbc/2;
var nb = nbc+1;


for (i=1 ;i<nb ;i++)
{
    nb_aleatoire(nbc);
    tirage[i]= nombre;
    for (t=1 ; t<i ;t++){
        if (tirage[t]=== nombre)
        {
            i=i-1;
        }}}
for (i=1 ;i<nb ;i++)
{
    if (tirage[i]>divs) nbtire=tirage[i]-divs;
    else nbtire=tirage[i];
    place[i]=nbtire;
}


function change_im(nbim) { //
    if (place[nbim] !==0) {
        if (nbim===nbim2) nbim=0;
        else{
            if (nbim===nbim3) nbim=0;
            else{
                if (choixim===3)
                {
                    if (val1===val2) {efface(nbim2);efface(nbim3);coup++;gain++}
                    else {no_efface(nbim2);no_efface(nbim3);coup++;document.getElementById("result2" ).innerHTML = coup;}
                    choixim=1;nbim3=0
                }
                if (choixim===1) {nbim2=nbim;val1 = place[nbim];choix++;}
                if (choixim===2) {nbim3=nbim;val2 = place[nbim];}
                choixim++;
            }}
        document.images[nbim-1].src = "img/"+non_im+place[nbim]+".jpg";
        if (choixim === 3){if (gain === divs-1) {

            for (var i=0; i<16;i++){
                document.images[i].src="img/Victory.png";
            }

        }}

    }}

function efface(eff) {
    document.images[eff-1].src = "img/"+non_im+place[eff]+".jpg";
    place[eff]=0}

function no_efface(eff) {
    document.images[eff-1].src = "img/back2.jpg";}