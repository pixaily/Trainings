function sumArray() {
    function sum(arr) {
        if(!arr) {
            if(arr.length > 0) {
                var sum = 0;
                for(var i = 0; i < arr.length; i++) {
                    if (isNaN(Number(arr[i]))) {
                        sum += Number(arr[i]);
                    } else {
                        throw 'Error';
                    }
                }
                return sum;
            } else {
                return null;
            }
        } else {
            throw 'Error';
        }

    }
}