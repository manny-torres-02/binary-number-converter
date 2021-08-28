// let value=document.getElementById('number').value

document.getElementById('convert').addEventListener('click', function() {
    // console.log(document.getElementById('number').value)
    let numToBin=document.getElementById('number').value
    console.log(document.getElementById('number').value)
    console.log((numToBin>>>0).toString(2))
    document.getElementById('conversion').innerHTML=(numToBin>>>0).toString(2)
})

