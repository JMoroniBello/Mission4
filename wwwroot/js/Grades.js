
$("#btnCalc").click(function () {
    //get variables from html page
    var as = $("#txtAssignments").val() * .5
    var grp = $("#txtGroup").val() * .1
    var quiz = $("#txtQuiz").val() * .1
    var mt = $("#txtMidterm").val() * .1
    var fn = $("#txtFinal").val() * .1
    var itx = $("#txtINTEX").val() * .1

    // varables for final percent and letter
    var fnGrdPct = as + grp + quiz + mt + fn + itx
    var fnGrdLtr

    //prepare variables and arrays for grade calclation
    var x = 0
    var y = 0
    const letters = ['A','A-','B+','B','B-','C+','C', 'C-', 'D+','D','D-','E']
    const percentages = [94,90,87,84,80,77,74,70,67,64,60,0]

    //calculate letter grade
    while (x < 1) {
        if (fnGrdPct >= percentages[y]) {
            fnGrdLtr = letters[y]
            x++
        }
        else {
            y++
        }
    }

    //return html with grade
    $('#fGrade').html('Letter Grade: ' + fnGrdLtr + '<br/>Percentage: ' + fnGrdPct)
    

})