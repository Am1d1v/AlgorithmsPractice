


// O(n)

function search(){

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const x = 8;

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === x){
            console.log(arr[i]);
            return arr[i];
        }
    }
}
search();


function swap(a, b){

    console.log(`a: ${a}, b: ${b}`);

    let t = a;
    a = b;
    b = t;

    console.log(`a: ${a}, b: ${b}`);
}
swap(100, 5);















































