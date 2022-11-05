/**
 * ^ Sắp xếp mảng theo thứ tự tăng dần
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho button
 *      tạo mảng phụ để chứa mảng sắp xếp
 *      tạo 2 vòng lặp
 *              vòng lớn : chạy vòng nhỏ nhiều lần để đem các số lớn về cuối mảng
 *                  vòng nhỏ: đem số lớn về cuối mảng
 *                            kiểm tra 2 số liền kề, nếu số bên trái lớn hơn bên phải
 *                            => hoán đổi vị trí
 * Khối 3: Output
 *      numArrayCopy
 *  
 */

function sapXepTangDan(){
    var numArrayCopy = [];  
    for(var i = 0; i < numArray.length; i++){
        numArrayCopy.push(numArray[i]);
    }

    for(var i = 0; i < numArrayCopy.length - 1; i++){
        for(var j = 0; j < numArrayCopy.length; j++){
            if(numArrayCopy[j] > numArrayCopy[j+1]){
                var temp = numArrayCopy[j];
                numArrayCopy[j] = numArrayCopy[j+1];
                numArrayCopy[j+1] = temp;
            }
        }
    }
    document.querySelector("#bai7Result").innerHTML = numArrayCopy;
}

document.querySelector("#bai7Btn").onclick = sapXepTangDan;