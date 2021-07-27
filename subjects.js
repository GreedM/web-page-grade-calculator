// function to show user input values
function subjects() {
    document.getElementById("formArea").style.display="none";
    var numSubjects = document.getElementById("numOfSubjects").value;
    var subjNames = document.getElementById("subjectNames").value;
    var subjMarks = document.getElementById("marks").value;
    document.getElementById("message").innerHTML="<br /><span class='yourAnswer'> Your answers:</span> <br /><br />Number of subjects: " + numSubjects + "<br /> Subject names: " + subjNames + "<br /> Marks: " + subjMarks;
}

// function to grade user input marks
function grades() {
    // split textarea values into array
    var gradeArray = document.getElementById("marks").value.split('\n');
    // declare array for grades
    var resultArray =[];
    // loop through array
    for(var i=0;i < gradeArray.length;i++){
        if(gradeArray[i]<40 && gradeArray[i]>=0){
            resultArray[i] = " F";
        }
        else if(gradeArray[i]>=40 && gradeArray[i]<50){
            resultArray[i] = " E";      
        }
        else if(gradeArray[i]>=50 && gradeArray[i]<60){
            resultArray[i] = " D";        
        }
        else if(gradeArray[i]>=70 && gradeArray[i]<80){
            resultArray[i] = " C";          
        }
        else if(gradeArray[i]>=80 && gradeArray[i]<90){
            resultArray[i] = " B";      
        }
        else if(gradeArray[i]>=90 && gradeArray[i]<=100){
            resultArray[i] = " A";         
        }
        else {
            resultArray[i] = " Undefined";
        }
    }
    // output the array
    document.getElementById("grades").innerHTML="<br /><span class='yourResult'> Your results respectively:</span> <br /><br />"+resultArray.toString();
}