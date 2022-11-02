/**
 * ^Nhập vào số nguyên và lưu trữ mảng
 * Khối 1: Input
 *          n
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện vào button
 *      lấy giá trị từ form
 *      thêm giá trị vào mảng
 * Khối 3: Output
 *      mãng numArray
 */

var numArray = [];

function addItem(){
    var n = Number(document.querySelector("#arrayItem").value);

    numArray.push(n);
    document.querySelector("#numArrayResult").innerHTML = numArray;
}

document.querySelector("#addBtn").onclick = addItem;