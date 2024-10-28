$(document).ready(function() {
    // Khi click vào hình ảnh, mở modal xem hình ảnh lớn
    $('.img-fluid').on('click', function() {
        var src = $(this).attr('src');
        $('#galleryModal .modal-body img').attr('src', src);
        $('#galleryModal').modal('show');
    });
});