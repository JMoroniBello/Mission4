
$("#btnCalc").click( function () {
    var as = $("#txtAssignments").val() * .5
    var grp = $("#txtGroup").val() * .1
    var quiz = $("#txtQuiz").val() * .1
    var mt = $("#txtMidterm").val() * .1
    var fn = $("#txtFinal").val() * .1
    var itx = $("#txtINTEX").val() * .1

    var fnGrdPct = as + grp + quiz + mt + fn + itx
    var fnGrdLtr
    var x = 0
    var y = 0
    const letters = ['A','A-','B+','B','B-','C+','C', 'C-', 'D+','D','D-','E']
    const percentages = [94,90,87,84,80,77,74,70,67,64,60,0]

    while (x < 1) {
        if (fnGrdPct >= percentages[y]) {
            fnGrdLtr = letters[y]
            x++
        }
        else {
            y++
        }
    }

    
    $('#fGrade').html('Letter Grade: ' + fnGrdLtr + '\nPercentage: ' + fnGrdPct)
  

})