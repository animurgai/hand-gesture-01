prediction1="";
perdiction2="";

Webcam.set(
{
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach("#camera");


function capture_image()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";

    });
    
    
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/zDOxYvPBk/model.json",modelLoded);

function modelLoded()
{
    console.log("Model Loded !");
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction1;
    var utterThis=new SpeechSynthesisUtterance (speak_data_1);
    synth.speak(utterThis);

}
function predict()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
    {
   if(error)
   {
    console.error(error);
   }else{
    console.log(results);
    document.getElementById('result_emotion_name').innerHTML = results[0].label;
    document.getElementById('result_emotion_name2').innerHTML = results[1].label
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak();
    if(results[0].label == "good")
    {
        document.getElementById("result_emoji").innerHTML="&#128076;";
    }
    if(results[0].label == "thums up")
    {
        document.getElementById("result_emoji").innerHTML="&#128077;";
    }
    if(results[0].label == "victory")
    {

   
    document.getElementById("result_emoji").innerHTML="&#9996;";
    }
    
}}
       