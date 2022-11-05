/**
 * ^ Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 * Khối 1: Input
 *      newNumArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho nút button
 *      tạo biến đếm count
 *      duyệt mảng
 *          nếu giá trị phần tử là số nguyên thì tăng biến đếm
 * Khối 3: Output
 *      count
 */
 var newNumArray1 = [];
function luuTruMangMoi(){
   
        var n = Number(document.querySelector("#newArrayItem").value);
    
        newNumArray1.push(n);
        document.querySelector("#bai9NewArrayResult").innerHTML = newNumArray1;
  
}
document.querySelector("#bai9AddBtn").onclick = luuTruMangMoi;

function demSoNguyen(){
    var count = 0;
    for(var i = 0; i < newNumArray1.length; i++){
        if(Number.isInteger(newNumArray1[i])){
            count++;
        }
    }
    document.querySelector("#bai9Result").innerHTML = "Số lượng số nguyên: " + count;
}
document.querySelector("#bai9Btn").onclick = demSoNguyen;