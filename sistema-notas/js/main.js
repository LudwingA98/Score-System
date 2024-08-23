const averageGrade = () => {
    let name;
    let nota1, nota2, nota3;
    let status1, status2, status3;

    name = document.getElementById('name').value;
    nota1 = parseInt(document.getElementById('note1').value);
    nota2 = parseInt(document.getElementById('note2').value);
    nota3 = parseInt(document.getElementById('note3').value);
    status1 = "aprobado";
    status2 = "regular";
    status3 = "reprobado";
    
    var result = (nota1 + nota2 + nota3)/3;

    if (result >= 7){
    console.log(`${name} a ${status1}, el resultado fue ${result}`)
        }else{
    if(result >= 6){
        console.log(`${name} a estado ${status2}, el resultado fue ${result}`);
    }
        else{
        console.log(`${name} a ${status3}, el resultado fue ${result}`);
    }
}

    let nameStudent = name;
    let score1 = nota1;
    let score2 = nota2;
    let score3 = nota3;
    let scoreResult = result;

    document.getElementById('nameStudent').innerHTML = nameStudent;
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    document.getElementById('score3').innerHTML = score3;
    document.getElementById('scoreResult').innerHTML = scoreResult;

    if(result >= 7){
        document.getElementById('scoreStatus').innerHTML = status1 ;
    }
    else{
        if(result >= 6){
            document.getElementById('scoreStatus').innerHTML = status2;
        }
        else{
            document.getElementById('scoreStatus').innerHTML = status3;
        }
    }
    //document.getElementById('scoreStatus').innerHTML = status1;
}



/*
const averageGrade = () => {
    let nombreUsuario = document.getElementById('name').value;
    console.log(nombreUsuario);
    return;    
}
*/
