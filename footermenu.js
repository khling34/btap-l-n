 const searchInput = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    const searchIcon = document.querySelector(".search-box i");

    const places = [
      { name: "Nhà Hàng", link: "nhahang.html" },
      { name: "Khách Sạn", link: "khachsan.html" },
      { name: "Chợ Đêm", link: "chodem.html" },
      { name: "Tour Sapa", link: "toursapa.html" },
      { name: "Cà Phê View Đẹp", link: "cafe.html" },
      { name: "Nhà Hàng Cây Xanh", link: "nhahangcayxanh.html" },
      { name: "Tour Tây Bắc", link: "tourtaybac.html" }
    ];

    function renderSuggestions(keyword) {
      suggestions.innerHTML = "";
      const inputValue = keyword.toLowerCase();

      const filteredPlaces = places.filter(place =>
        place.name.toLowerCase().includes(inputValue)
      );

      if (inputValue && filteredPlaces.length > 0) {
        filteredPlaces.forEach(place => {
          const div = document.createElement("div");
          const regex = new RegExp(`(${keyword})`, "gi");
          const highlighted = place.name.replace(regex, `<span class="highlight">$1</span>`);
          div.innerHTML = highlighted;
          div.onclick = () => {
            window.location.href = place.link;
          };
          suggestions.appendChild(div);
        });
        suggestions.classList.add("active");
      } else {
        suggestions.classList.remove("active");
      }
    }

    searchInput.addEventListener("input", () => {
      renderSuggestions(searchInput.value);
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const inputValue = searchInput.value.toLowerCase();
        const matchedPlace = places.find(place =>
          place.name.toLowerCase() === inputValue
        );
        if (matchedPlace) {
          window.location.href = matchedPlace.link;
        } else {
          alert("Không tìm thấy địa điểm phù hợp.");
        }
      }
    });

    searchIcon.onclick = () => {
      const inputValue = searchInput.value.toLowerCase();
      const matchedPlace = places.find(place =>
        place.name.toLowerCase() === inputValue
      );
      if (matchedPlace) {
        window.location.href = matchedPlace.link;
      } else {
        alert("Không tìm thấy địa điểm phù hợp.");
      }
    };

    // Tắt gợi ý khi click ngoài
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        suggestions.classList.remove("active");
      }
    });
    document.addEventListener("click", function(e) {
  const searchBox = document.querySelector(".search-box");
  const suggestions = document.querySelector(".suggestions");
  if (!searchBox.contains(e.target)) {
    suggestions.innerHTML = "";
  }
});
 function submitPhone() {
  const phone = document.getElementById("phoneInput").value.trim();

  // Kiểm tra trống
  if (phone === "") {
    alert("Vui lòng nhập số điện thoại trước khi gửi.");
    return;
  }

  // Kiểm tra chỉ chứa số
  if (!/^\d+$/.test(phone)) {
    alert("Số điện thoại chỉ được chứa các chữ số.");
    return;
  }

  // Kiểm tra độ dài hợp lệ (9-11 số)
  if (phone.length < 9 || phone.length > 11) {
    alert("Số điện thoại phải từ 9 đến 11 chữ số.");
    return;
  }

  // Nếu hợp lệ
  alert("Cảm ơn bạn đã để lại thông tin! Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.");
  document.getElementById("phoneInput").value = "";
}