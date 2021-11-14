$(document).ready(function() {
                $('#btnPreview').click(function() {
                    $("#previewCard").modal("show");
                
                    let valueNama = $('#name').val();
                    let valueTTGL = $('#age').val();
                    let valueGender = $('input[name="gender"]:checked').val();
                    let valueReligion = $('#religion').val();
                    let valuePhone = $('#phone').val();
                    let valueFoto = $('#photo').val();

                    $('#outName').html(valueNama);
                    $('#outAge').html(valueTTGL);
                    $('#outGender').html(valueGender);
                    $('#outReligion').html(valueReligion);
                    $('#outPhone').html(valuePhone);
                });
            });

            function readURL(input) {
                if (input.files && input.files[0]) {
                    let reader = new FileReader();

                    reader.onload = function (e) {
                        $('#card-photo').attr('src', e.target.result);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
}