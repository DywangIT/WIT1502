document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử có class .js-toggle
    const buttons = document.querySelectorAll(".js-toggle");
    
    // Lấy phần tử sidebar cần thay đổi class
    const sidebar = document.querySelector(".sidebar");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Nếu sidebar chưa có class "show", thêm "show" và xóa "hide"
            if (!sidebar.classList.contains("show")) {
                sidebar.classList.add("show");
                sidebar.classList.remove("hide");
            } 
            // Nếu đã có class "show", đổi thành "hide"
            else {
                sidebar.classList.add("hide");
                sidebar.classList.remove("show");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử có class .sidebar-info__heading
    const temp = document.querySelectorAll(".sidebar-info__heading");
    
    // Lấy phần tử text cần thay đổi class
    const text = document.querySelector(".sidebar-info__text");

    temp.forEach(button => {
        button.addEventListener("click", function () {
            // Nếu text chưa có class "show", thêm "show" và xóa "hide"
            if (!text.classList.contains("show")) {
                text.classList.add("show");
                text.classList.remove("hide");
            } 
            // Nếu đã có class "show", đổi thành "hide"
            else {
                text.classList.add("hide");
                text.classList.remove("show");
            }
        });
    });
});

