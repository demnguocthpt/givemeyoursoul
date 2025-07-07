document.addEventListener("DOMContentLoaded", () => {
  const bgVideo = document.getElementById("bg-video");
  const bgChangeBtn = document.getElementById("bgChangeBtn");

  // Nếu có nút chuyển nền
  if (bgChangeBtn) {
    bgChangeBtn.addEventListener("click", () => {
      changeBackground();
    });
  }

  // Hàm chuyển đổi nền giữa các ảnh/video (tuỳ biến)
  function changeBackground() {
    // Danh sách video hoặc ảnh nền có thể chuyển đổi
    const backgrounds = [
      "./media/4.mp4",
      "./media/123.mp4",
      "./media/1234.mp4",
    ];
    let current = bgVideo.getAttribute("src") || bgVideo.querySelector("source").getAttribute("src");

    // Tìm index hiện tại và chuyển sang cái tiếp theo
    const index = backgrounds.findIndex(bg => current.includes(bg));
    const nextIndex = (index + 1) % backgrounds.length;
    const nextSource = backgrounds[nextIndex];

    // Cập nhật src video
    const source = bgVideo.querySelector("source");
    source.setAttribute("src", nextSource);
    bgVideo.load();
    bgVideo.play();
  }

  // Tự động phát lại nếu bị dừng
  if (bgVideo) {
    bgVideo.addEventListener("ended", () => {
      bgVideo.play();
    });
  }
});
