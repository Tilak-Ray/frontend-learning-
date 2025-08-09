var question = ["what cow eats","what human eats", "what tiger eats"];
var answer = ["grass", "rice", "meat"];



for(var i = 0; i< question.length; i++)
{
    var ans = prompt(question[i] + "(meat, rice, grass)");

    
         if (ans === answer[i] ) {
            alert("your answer is right");
            if (i < ((question.length)-1)) {
                alert("here is another one");
            }
         }
        else{
            alert("your answer was wrong");

            if (i < ((question.length)-1)) {
                alert("here is another one");
            }
        }
    
}


// console.log(question.length); 