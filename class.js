var Studentpromise=d3.json("classData.json");

var StuPromiseSucc=function(classData)
{
    console.log("Collection Success",classData);
    MakeTable(classData)
}
var StuPromieFail=function(ErrorMsg)
{
    console.log("Collection failure",ErrorMsg)
}
Studentpromise.then(StuPromiseSucc,StuPromieFail);
var HWMean=function(score)
    {
         return score.homework.grade
    }
var MakeTable=function(classData)
{
    var rows=d3.select("tbody")
    .selectAll("tr")
    .data(classData)
    .enter()
    .append("tr")
    
//    for final grades
    rows.append("td")
    .text(function(classData)
         {return classData.final[0].grade})
//    Making means/ does not work
//    rows.append("td")
//    var GetHw=function(Peng)
//    {
//        return Peng.homework
//     
//    }
// 
//    var Hwgrade=classData.map(GetHw)
//    console.log(Hwgrade)

//    for images
 rows.append("td")
    .append("img")
.attr("src",function(classData){return "imgs/"+classData.picture})
.text(function(classData){return "imgs/"+classData.picture})
}