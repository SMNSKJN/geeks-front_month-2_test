let $sing =document.querySelector("#sing");
let $number1 = document.querySelector("#number1");
let $number2 = document.querySelector("#number2");

let maxLength = 50
$sing.oninput = () => {
    if ($sing.value.length > maxLength) {
        $sing.value = $sing.value.slice(0, maxLength);
    }
    $number1.textContent = $sing.value.length;

}
