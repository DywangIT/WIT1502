document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử có class .js-toggle
    const buttons = document.querySelectorAll(".js-toggle");

    // Lấy phần tử sidebar cần thay đổi class
    const sidebar = document.querySelector(".sidebar");

    buttons.forEach((button) => {
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
    // Lấy tất cả các phần tử có class .qna-item
    const temp = document.querySelectorAll(".qna-item");

    temp.forEach((button) => {
        button.addEventListener("click", function () {
            // Tìm phần tử .qna-item__info gần nhất trong chính phần tử đang được nhấn
            const text = this.querySelector(".qna-item__info");
            // Show element được click
            if (text) {
                // Nếu text chưa có class "show", thêm "show" và xóa "hide"
                if (!text.classList.contains("show")) {
                    // Ẩn hết trước
                    document.querySelectorAll(".qna-item__info").forEach((info) => {
                        info.classList.remove("show");
                        info.classList.add("hide");
                    });
                    text.classList.add("show");
                    text.classList.remove("hide");
                }
                // Nếu đã có class "show", đổi thành "hide"
                else {
                    text.classList.add("hide");
                    text.classList.remove("show");
                }
            }
        });
    });
});

