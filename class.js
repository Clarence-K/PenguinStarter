var Studentpromise=d3.json("classData.json");

var StuPromiseSucc=function(classData)
{
    console.log("Collection Success",classData);
    MakeTable(classData)
}
var StuPromiseFail=function(ErrorMsg)
{
    console.log("Collection failure",ErrorMsg)
}
Studentpromise.then(StuPromiseSucc,StuPromiseFail);
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
    
    //    for images
 rows.append("td")
    .append("img")
.attr("src",function(classData){return "imgs/"+classData.picture})
.text(function(classData){return "imgs/"+classData.picture})

    
//    for final grades
    rows.append("td")
    .text(function(classData)
         {return classData.final[0].grade})
//    Making means/ does not work
    
var HWMean = function(penguin)
    {
        var getHW = function(homework)
            {
                return homework.grade
            }
        var HWGrade = penguin.homework.map(getHW)
        return d3.mean(HWGrade)
    }
    
//  homework averages
    rows.append("td")
    .text(HWMean)
    

var QMean = function(penguin)
    {
        var getQ = function(quiz)
            {
                return quiz.grade
            }
        var QGrade = penguin.quizes.map(getQ)
        return d3.mean(QGrade)
    }
    
//  Quiz averages
    rows.append("td")
    .text(QMean)
   

var TMean = function(penguin)
    {
        var getT = function(Test)
            {
                return Test.grade
            }
        var TGrade = penguin.homework.map(getT)
        return d3.mean(TGrade)
    }
    
// Test averages
    rows.append("td")
    .text(TMean)
      

//    filtering the pengs by final grades
 

}