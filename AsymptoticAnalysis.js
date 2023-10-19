


/*

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


// O(1)

function swap(a, b){

    console.log(`a: ${a}, b: ${b}`);

    let t = a;
    a = b;
    b = t;

    console.log(`a: ${a}, b: ${b}`);
}
swap(100, 5);


// 0(n)

function f2(n){
    //const c = 5;

    for(let i = 0; i < n; i++){
        console.log(i);
    }
}
f2(10);

*/

/*
// 0(n + m)

function cycle1(n, m){

    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
    }

    for(let i = 0; i < m; i++){
        console.log(`J: ${i}`)
    }
}
cycle1(10, 12);
*/

/*


//  O(n * m)

function cycle2(n, m){

    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
        for(let j = 0; j < m; j++){
            console.log(`J: ${j}`)
        }
    }

    
}
cycle2(3, 2);
*/

/*
//  O(n ^ 2)

function cycle3(n){

    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
        for(let j = 0; j < n; j++){
            console.log(`J: ${j}`)
        }
    }

    
}
cycle3(3);
*/

/*
//  O(n ^ 2)

function cycle_ij(n){

    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
        for(let j = i; j < n; j++){ // n + (n-1) + (n-2) + ... + 1 = n*(n+1)/2 = 1/2 * (n*n + n)
            console.log(`J: ${j}`)
        }
    }

    
}
cycle_ij(3);
*/


function cycle1(n){

    // 0(n)
    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
    }

    // O(n ^ 2)
    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
        for(let j = 0; j < n; j++){ 
            console.log(`J: ${j}`)
        }
    }

    // O(n ^ 3)
    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
        for(let j = i; j < n; j++){ 
            console.log(`J: ${j}`)
            for(let k = 0; k < n; k++){ 
                console.log(`J: ${k}`)
            }
        }
    }


    
}
cycle1(3);


function cycle2(a, b, c){ // 0(a + b^2 + c^3)

    // 0(a)
    for(let i = 0; i < a; i++){
        console.log(`I: ${i}`)
    }

    // O(b ^ 2)
    for(let i = 0; i < b; i++){
        console.log(`I: ${i}`)
        for(let j = 0; j < b; j++){ 
            console.log(`J: ${j}`)
        }
    }

    // O(c ^ 3)
    for(let i = 0; i < n; i++){
        console.log(`I: ${i}`)
        for(let j = i; j < n; j++){ 
            console.log(`J: ${j}`)
            for(let k = 0; k < n; k++){ 
                console.log(`J: ${k}`)
            }
        }
    }



    
}
cycle2(3);

































