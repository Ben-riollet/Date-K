function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('canvas-container');
  angleMode(DEGREES);

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getArcs(jours) {

    //Jours de la semaine
    // Noir
    let jour9 = [0, 0, 0];
    // Gris
    let jour8 = [136, 136, 136];
    // Blanc
    let jour7 = [255, 255, 255];
    // okra
    let jour6 = [255, 204, 0];
    // fukia
    let jour5 = [204, 0, 136];
    // orkida
    let jour4 = [204, 136, 204];
    // Kiélé
    let jour3 = [136, 204, 255];
    // Kwazé
    let jour2 = [0, 204, 204];
    // Kiwé
    let jour1 = [136, 204, 0];

    //Saisons cycle 1
    // rouge
    let AutomneA1 = [255, 0, 0];
    // orange
    let AutomneB1 = [255, 136, 0];
    // bleu ciel
    let HiverA1 = [0, 136, 255];
    // cyan
    let HiverB1 = [0, 255, 255];
    // vert
    let PrintempsA1 = [0, 255, 0];
    // jaune
    let PrintempsB1 = [255, 255, 0];
    // bleu
    let ÉtéA1 = [0, 0, 255];
    // magenta
    let ÉtéB1 = [255, 0, 255];


    //Saisons cycle 2
    // rouge
    let AutomneA2 = [255, 136, 136];
    // orange
    let AutomneB2 = [255, 196, 136];
    // bleu ciel
    let HiverA2 = [136, 202, 255];
    // cyan
    let HiverB2 = [136, 255, 255];
    // vert
    let PrintempsA2 = [136, 255, 136];
    // jaune
    let PrintempsB2 = [255, 255, 136];
    // bleu
    let ÉtéA2 = [136, 136, 255];
    // magenta
    let ÉtéB2 = [255, 136, 255];

    //Saisons cycle 3
    // rouge
    let AutomneA3 = [195, 69, 69];
    // orange
    let AutomneB3 = [255, 136, 69];
    // bleu ciel
    let HiverA3 = [69, 136, 195];
    // cyan
    let HiverB3 = [69, 195, 195];
    // vert
    let PrintempsA3 = [69, 195, 69];
    // jaune
    let PrintempsB3 = [195, 195, 69];
    // bleu
    let ÉtéA3 = [69, 69, 195];
    // magenta
    let ÉtéB3 = [195, 69, 195];

    //Saisons cycle 4
    // rouge
    let AutomneA4 = [135, 0, 0];
    // orange
    let AutomneB4 = [136, 69, 0];
    // bleu ciel
    let HiverA4 = [0, 69, 136];
    // cyan
    let HiverB4 = [0, 136, 136];
    // vert
    let PrintempsA4 = [0, 136, 0];
    // jaune
    let PrintempsB4 = [136, 136, 0];
    // bleu
    let ÉtéA4 = [0, 0, 136];
    // magenta
    let ÉtéB4 = [136, 0, 136];

    //Années
    let yearcolor = (random)

// yeure = yeure %32;
//-------------------------NUIT----------------------

    //Semaine 1
    {
        [
        [jour1, 357.5, 2.5],
        [yearcolor, 292.5, 67.5],
        [HiverA1, 67.5, 292.5]];

    }
    {
        [
        [jour9, 337.5, 22.5],
        [yearcolor, 292.5, 67.5],
        [HiverA1, 67.5, 292.5]];

    }
    //Semaine 2
    {
        [
        [jour1, 22.5, 47.5],
        [yearcolor, 315, 135],
        [HiverA1, 135, 315]];

    }
    {
        [
        [jour1, 0, 45],
        [yearcolor, 315, 135],
        [HiverA1, 135, 315]];

    }
    //Semaine 3
    {
        [
        [jour1, 45, 135],
        [yearcolor, 337.5, 202.5],
        [HiverA1, 202.5, 337.5]];

    }
    {
        [
        [jour9, 22.5, 157.5],
        [yearcolor, 337.5, 202.5],
        [HiverA1, 202.5, 337.5]];

    }
    //Semaine 4
    {
        [
        [jour1, 67.5, 202.5],
        [yearcolor, 0, 270],
        [HiverA1, 270, 360]];

    }
    {
        [
        [jour9, 45, 225],
        [yearcolor, 0, 270],
        [HiverA1, 270, 360]];

    }
    //Semaine 5
    {
        [
        [jour1, 67.5, 292.5],
        [yearcolor, 90, 270],
        [HiverA1, 337.5, 22.5]];

    }
    {
        [
        [jour9, 270, 0],
        [yearcolor, 67.5, 292.5],
        [HiverA1, 337.5, 22.5]];

    }
}
