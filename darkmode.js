const btn = document.querySelector('.btn-toggle');

// Lắng nghe sự kiện click vào button
btn.addEventListener('click', function() {
  // Thêm hoặc xóa class dark-theme ở body
  document.body.classList.toggle('dark-theme');  
})