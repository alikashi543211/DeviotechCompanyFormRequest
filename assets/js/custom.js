function onClickFirstSectionSubmit()
{

	$(document).on("click", ".first-section-next-btn", function(e){
        result = validateWithoutPlugin();
        $file_result = validateFileInputs();

        if(result && $file_result)
        {
            $original_id = $("#disabledSectionOne").attr("data-original-id");
            $("#disabledSectionOne").attr("id", $original_id);
            $(".first-section-next-to-next-btn").click();
        }else
        {
            $($next_targetted_id).attr("data-is-show", "0");
            $($next_targetted_id).attr("id", "disabled-by-section-one");
        }

		e.preventDefault();

	});
    
}

function onClickSecondSectionSubmit()
{

    $(document).on("click", ".second-section-next-btn", function(e){
        result = validateWithoutPlugin();
        $file_result = validateFileInputs();

        if(result && $file_result)
        {
            $original_id = $("#disabledSectionTwo").attr("data-original-id");
            $("#disabledSectionTwo").attr("id", $original_id);
            $(".second-section-next-to-next-btn").click();
        }
        e.preventDefault();

    });

}

function onClickThirdSectionSubmit()
{

    $(document).on("click", ".third-section-next-btn", function(e){
        result = validateWithoutPlugin();
        $file_result = validateFileInputs();

        if(result && $file_result)
        {
            $original_id = $("#disabledSectionThree").attr("data-original-id");
            $("#disabledSectionThree").attr("id", $original_id);
            $(".third-section-next-to-next-btn").click();
        }
        e.preventDefault();

    });

}

function onClickFourthSectionSubmit()
{

    $(document).on("click", ".fourth-section-next-btn", function(e){
        result = validateWithoutPlugin();
        $file_result = validateFileInputs();

        if(result && $file_result)
        {
            $(".fourth-section-next-to-next-btn").click();
        }
        e.preventDefault();

    });

}


function textOnly()
{
	$(document).on("keyup", ".text_only", function () { 
        var node = $(this);
    	node.val(node.val().replace(/[0-9]*$/,'') );
    });
}


function validateCompanyRequestForm()
{
	$.validator.setDefaults({
        ignore: []
    });
    
    $(".company-request-form").validate({
        rules: {
            name: {
                required: true,
            },
            day: {
                required: true,
            },
            month: {
                required: true,
            },
            year: {
                required: true,
            },
            pps_number: {
                required: true,
            },
            address: {
                required: true,
            },
            nationality: {
                required: true,
            },
            occupation: {
                required: true,
            },
            other_directorship: {
                required: true,
            },
            other_directorship_detail: {
                required: true,
            },
            verification_file: {
                required: true,
            },
            id_card_file: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'Enter your name',
            },
            day: {
                required: 'Enter your date of birth',
            },
            month: {
                required: 'Enter your date of birth',
            },
            year: {
                required: 'Enter your date of birth',
            },
            pps_number: {
                required: "Enter PPS Number",
            },
            address: {
                required: "Enter address",
            },
            nationality: {
                required: "Enter nationality",
            },
            occupation: {
                required: "Enter occupation",
            },
            other_directorship: {
                required: "Select other directorship",
            },
            other_directorship_detail: {
                required: "Enter other directorship detail",
            },
            verification_file: {
                required: "Upload verification document",
            },
            id_card_file: {
                required: "Upload id card",
            },
        },
        errorPlacement: function(error, element) {
            $(element).addClass('is-invalid');
            console.log($(element).closest('.form-group'));
            $(element).closest('.form-group').find('.invalid-feedback').html('<strong>'+error.html()+'</strong>');
            console.log($(element).closest('.form-group').html());
        },
        // set this class to error-labels to indicate valid fields
        success: function(label) {
            // set &nbsp; as text for IE
            label.html("&nbsp;").addClass("checked");
        },
        highlight: function(element, errorClass) {
            $(element).parent().next().find("." + errorClass).removeClass("checked");
        },
        unhighlight: function (element) {
            $(element).removeClass('is-invalid');
            $(element).closest('.form-group').find('.invalid-feedback').html('');
        }
    });
}






function startDatePicker()
{
    $('.datepicker').datetimepicker({
        useCurrent: false,
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'fa fa-bullseye',
            clear: 'fa fa-trash',
            close: 'fa fa-times'
        },
        format: 'YYYY/MM/DD',
        maxDate: new Date(),
    });
}









function validateWithoutPlugin() 
{
    var valid = true;
    $("form").find('.alert-warning').remove();
    $(".valid-control:visible").each(function () {
        if ($(this).val() == "") {
            $(this).closest("div").find(".alert-danger").remove();
            $(this)
            .closest("div")
            .append('<div class="alert-danger mb-2 p-1">This field is required</div>');
            valid = false;
        } 
        else {
            $(this).closest("div").find(".alert-danger").remove();
        }
    });
    if (!valid) {
        $("html, body").animate(
            {
                scrollTop: $(".alert-danger:first").offset().top-80,
            },
            100
        );
    }
    return valid;
}



function onFileChange()
{
    $(document).on('change', '.input_file', function(e) {
        let fileName = e.target.files[0].name;
        $(this).attr("data-is-file", "1");
    });
}


function validateFileInputs()
{
    $result = true;
    $(".input_file:visible").each(function(index, value){
        $data_is_file = $(this).attr("data-is-file");
        if($data_is_file == '0')
        {
            $alert_box = '<div class="alert-danger mb-2 p-1">This field is required</div>';
            $(this).closest(".form-group").find(".input_file_alert").html($alert_box);
            $result = false;
        }else if($data_is_file == '1')
        {
            $(this).closest(".form-group").find(".input_file_alert").remove();
        }
    });

    return $result;
}



function onlyNumericValue()
{
    $(document).on('keypress', '.numeric_value', function() {
        return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57;
    });
}









function onChangeDirectorshipOption()
{
    $(document).on('change', '.other_directorship', function() {
        if($(this).val() == '1')
        {
            $(this).closest(".director_box").find(".other_directorship_detail").show();
        }else if($(this).val() == '0')
        {
            $(this).closest(".director_box").find(".other_directorship_detail").hide();
        }
    });
}












function onChangeIsSecondDirector()
{
    $(document).on('change', '.is_second_director', function() {
        if($(this).val() == '1')
        {
            $clone_content = $("#director-1").html();
            $start_div = '<div class="col-md-12 director_box" id="director-2">';
            $end_div = '</div>';
            $content = $start_div + $clone_content + $end_div;
            $("#director_section_accordian").append($content);
            $('#director-2').find(".director_number").html("2");
            $('#director-2').find(".other_directorship_detail").hide();
            $('#director-2').find(".input_file").attr("data-is-file", "0");

        }else if($(this).val() == '0')
        {
            $("#director_section_accordian").find("#director-2").remove();
        }
        
    });
}