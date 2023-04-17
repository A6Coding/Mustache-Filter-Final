noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/Kcw2FvCJ/Mustache.png");
}

function setup() {
    canvas = createCanvas(500, 375);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 375);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function modelLoaded() {
    console.log("poseNet is ready!");
}

function capture_image() {
    save('My_Mustache_Filter_Image.png');
}



function draw() {
    image(video, 0, 0, 500, 375);
    image(mustache, noseX, noseY, 70, 40);
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 35;
        noseY = results[0].pose.nose.y;
        console.log("x = " + noseX);
        console.log("y = " + noseY);
    }
}