

const test = [30, 245, 1, 15, 122, 64, 5];

function sort(arr){
    for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++){
                console.log(arr[j]);
                // if(arr[j] > arr[j + 1]){
                //     const temp = arr[j]
                //     arr[j] = arr[j + 1];
                //     arr[j + 1] = temp;
                // }
            }
    }
    console.log(arr);
}
sort(test);













