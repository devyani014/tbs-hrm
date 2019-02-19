import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  status:String;

  constructor(
    private validateService: ValidateService,
    public flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    $("#username").focusout(function () {

      var fn = $(this).val();
      var regex = /^[0-9a-zA-Z]+$/

      if ($(this).val() == ''){
          $(this).css("border-color", "#cd2d00");
          $("#buone").attr('disabled', true);
          $("#uid").text("* You have to enter your first name!");
      }
      else if($(this).val().length<3)
      {
         $(this).css("border-color", "#cd2d00");
          $('#buone').attr('disabled', true);
          $("#uid").text("User ID is invalid.Between 3 to 35 character.Only letter and number are allowed.");
      } 
      else if($(this).val().length>35)
      {
         $(this).css("border-color", "#cd2d00");
          $('#buone').attr('disabled', true);
          $("#uid").text("User ID is invalid.Between 3 to 35 character.Only letter and number are allowed.");
      } 
       else if(!regex.test(fn))
      {
         $(this).css("border-color", "#cd2d00");
          $('#buone').attr('disabled', true);
          $("#uid").text("User ID is invalid.Between 3 to 35 character.Only letter and number are allowed.");
      } 
      else {
          $(this).css("border-color", "#ccc");
          $('#buone').attr('disabled', false);
          $("#uid").text("");

      }
 

  }); 
  $("#cpassword").focusout(function () {
    var fn = $(this).val();
 var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
 if ($(this).val() == '') {
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#cid").text("* confirm password");
 }
 else if($(this).val().length<8)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#cid").text("Password is invalid.Min 8 character & Max 15 character. Password must contain at least one small & one capital alphabet and numeric digit");
 } 
 else if($(this).val().length>15)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#cid").text("Password is invalid.Min 8 character & Max 15 character. Password must contain at least one small & one capital alphabet and numeric digit");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#cid").text("Password is invalid.Min 8 character & Max 15 character. Password must contain at least one small & one capital alphabet and numeric digit");
 } 

  else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#cid").text("");

 }


});
$("#password").focusout(function () {
  var fn = $(this).val();
var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
if ($(this).val() == '') {
   $(this).css("border-color", "#cd2d00");
   $('#buone').attr('disabled', true);
   $("#pid").text("* enter password");
}
else if($(this).val().length<8)
{
  $(this).css("border-color", "#cd2d00");
   $('#buone').attr('disabled', true);
   $("#pid").text("Password is invalid.Min 8 character & Max 15 character. Password must contain at least one small & one capital alphabet and numeric digit");
} 
else if($(this).val().length>15)
{
  $(this).css("border-color", "#cd2d00");
   $('#buone').attr('disabled', true);
   $("#pid").text("Password is invalid.Min 8 character & Max 15 character. Password must contain at least one small & one capital alphabet and numeric digit");
} 
else if(!regex.test(fn))
{
  $(this).css("border-color", "#cd2d00");
   $('#buone').attr('disabled', true);
   $("#pid").text("Password is invalid.Min 8 character & Max 15 character. Password must contain at least one small & one capital alphabet and numeric digit");
} 

else {
   $(this).css("border-color", "#ccc");
   $('#buone').attr('disabled', false);
   $("#pid").text("");

}


});
$("#security").focusout(function () {
  var sec=$("#security").val();
 if (sec == "none"){
     $("#security").css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#sid").text("Please select an option!");
 }
 
 else {
     $("#security").css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#sid").text("");

 }


});
$("#pselect").focusout(function () {
  var seca=$("#security").val();
 if (seca == "none"){
     $("#pselect").css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ppid").text("Please select an option!");
 }
 
 else {
     $("#pselect").css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#ppid").text("");

 }


});

$("#oselect").focusout(function () {
  var sec=$("#security").val();
 if (sec == "none"){
     $("#oselect").css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#osid").text("Please select an option!");
 }
 
 else {
     $("#oselect").css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#osid").text("");

 }


});
$("#nselect").focusout(function () {
  var sec=$("#security").val();
 if (sec == "none"){
     $("#nselect").css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#nsid").text("Please select an option!");
 }
 
 else {
     $("#nselect").css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#nsid").text("");

 }


});
$("#anssecurity").focusout(function () {

 var fn = $(this).val();
 var regex = /^[0-9a-zA-Z]+$/

 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#asid").text("* enter security answer");
 }
 else if($(this).val().length<3)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#asid").text("Security Answer is invalid.Between 3 to 20 character.Only letter and number are allowed.");
 } 
 else if($(this).val().length>35)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#asid").text("Security Answer is invalid.Between 3 to 20 character.Only letter and number are allowed.");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#asid").text("Security Answer is invalid.Between 3 to 20 character.Only letter and number are allowed.");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#asid").text("");

 }


});

$("#firstname").focusout(function () {

 var fn = $(this).val();
 var regex = /^[a-zA-Z]+$/

 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#fid").text("* You have to enter your first name!");
 }
 else if($(this).val().length<3)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#fid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
 else if($(this).val().length>35)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#fid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#fid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#fid").text("");

 }


});
$("#birthdate").focusout(function () {
var fn = $(this).val();
 var regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

 if ($(this).val() == '') {
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#dobid").text("* enter Date of Birth");
 } 
 else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#dobid").text("DOB format should be like this 01-10-2019");
 }
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#dobid").text("");

 }
});
$("#email").focusout(function () {

 var fn = $(this).val();
 var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#eid").text("* You have to enter your first name!");
 }
 else if($(this).val().length<10)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#eid").text("Email is invalid.Email Min 10 character & Max 70 character");
 } 
 else if($(this).val().length>70)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#eid").text("Email is invalid.Email Min 10 character & Max 70 character");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#eid").text("Email is invalid.Email Min 10 character & Max 70 character");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#eid").text("");

 }


});
/*$("#flatno").focusout(function () {
 var fn = $(this).val();
 var regex = /^[0-9a-zA-Z ]+$/
 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#flatid").text("*Enter address");
 }
 else if($(this).val().length<3)
 {
      $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#flatid").text("Only letter, number ,spaces and characters are allowed between 3 to 225 character.");
 } 
 else if($(this).val().length>255)
 {
      $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#flatid").text("Only letter, number ,spaces and characters are allowed between 3 to 225 character.");
 } 
  else if(!regex.test(fn))
 {
      $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#flatid").text("Only letter, number ,spaces and characters are allowed between 3 to 225 character.");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#flatid").text("");

 }
});*/
$("#number").focusout(function () {

if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#nid").text("* Number is required");
 }
 else if($(this).val().length<1)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#pid").text("* Number is required");
 } 
 else if($(this).val().length>10)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#pid").text("Number should be less than 10");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#nid").text(" ");

 }


});
$("#pnum").focusout(function () {

if ($(this).val() == ''){
     $(this).css("border-color","#cd2d00");
     $('#buone').attr('disabled', true);
     $("#pnid").text("* Number is required");
 }
  else if($(this).val().length<1)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#pnid").text("* Number is required");
 } 
 else if($(this).val().length>10)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#pnid").text("Number should be less than 10");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#pnid").text("");

 }


});

$("#phonepe").focusout(function () {

if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ppeid").text("* Number is required");
 }
else if($(this).val().length<1)
 {
      $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ppeid").text("Number should be less than 10");
 } 
 else if($(this).val().length>10)
 {
      $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ppeid").text("Number should be less than 10");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#ppeid").text("");

 }


});
$("#postoff").focusout(function () {

 var fn = $(this).val();
 var regex = /^[0-9a-zA-Z]+$/

 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#poid").text("* enter post office");
 }
 else if($(this).val().length<3)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#poid").text("Post office is invalid.Between 3 to 35 character.Only letter and number are allowed.");
 } 
 else if($(this).val().length>35)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#poid").text("Post office is invalid.Between 3 to 35 character.Only letter and number are allowed.");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#poid").text("Post office is invalid.Between 3 to 35 character.Only letter and number are allowed.");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#poid").text("");

 }


});

$("#state").focusout(function () {

 var fn = $(this).val();
 var regex = /^[a-zA-Z]+$/

 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#stid").text("enter state");
 }
 else if($(this).val().length<3)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#stid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
 else if($(this).val().length>35)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#stid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#stid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#stid").text("");

 }


});
$("#city").focusout(function () {

 var fn = $(this).val();
 var regex = /^[a-zA-Z]+$/

 if ($(this).val() == ''){
     $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ctid").text("* enter city");
 }
 else if($(this).val().length<3)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ctid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
 else if($(this).val().length>35)
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ctid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
  else if(!regex.test(fn))
 {
    $(this).css("border-color", "#cd2d00");
     $('#buone').attr('disabled', true);
     $("#ctid").text("First Name Invalid only alphabet[A-Z,a-z]");
 } 
 else {
     $(this).css("border-color", "#ccc");
     $('#buone').attr('disabled', false);
     $("#ctid").text("");

 }


});  
$("#clfoot1").click(function(){
  $("#clfo1").toggle();
});  
$("#clfoot").click(function(){
   $("#clfo").toggle();
}); 
$("#clfoot2").click(function(){
   $("#clfo2").toggle();
});     
$("#clfoot3").click(function(){
   $("#clfo3").toggle();
}); 
$("#clfoot4").click(function(){
   $("#clfo4").toggle();
});
$("#clfoot5").click(function(){
   $("#clfo5").toggle();
});
$("#clfoot6").click(function(){
   $("#clfo6").toggle();
});
$("#clfoot7").click(function(){
  $("#clfo7").toggle();
}); 
$("#clfoot8").click(function(){
   $("#clfo8").toggle();
});     
$("#clfoot9").click(function(){
   $("#clfo9").toggle();
}); 
$("#clfoot10").click(function(){
   $("#clfo10").toggle();
});
$("#clfoot11").click(function(){
   $("#clfo11").toggle();
});
$("#clfoot12").click(function(){
   $("#clfo12").toggle();
});
$("#clfoot13").click(function(){
   $("#clfo13").toggle();
});
$("#clfoot22").click(function(){
   $("#clfo22").toggle();
});
$("#clfoot91").click(function(){
   $("#clfo91").toggle();
});


   
  }
 

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      status:this.status
      
    }
    console.log(user.status);
    // Required Fields
   /*if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 6000});
      return false;
   }

    // Validate Email
   if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 8000});
      return false;
    }  */
    
  
    if ($("#username").val() == ''){
      $("#username").css("border-color", "#cd2d00");
      $('#buone').attr('disabled', true);
      $("#uid").text("* You have to enter your first name!");
      
       }
     else {
       $("#username").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#uid").text("");

     }
if ($("#password").val() == ''){
      $("#password").css("border-color", "#cd2d00");
      $('#buone').attr('disabled', true);
      $("#pid").text("* You have to enter password");
      
       }
     else {
       $("#password").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#pid").text("");

     }
if ($("#cpassword").val() == '') {
       $("#cpassword").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
      $("#cid").text("* confirm password");
     
        }
else {
       $("#cpassword").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#cid").text("");

     }  
if ($("#security").val() == "none"){
       $("#security").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#sid").text("Please select an option!");
       
     }

else {
       $("#security").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#sid").text("");

    }
  if ($("#pselect").val() == "none"){
       $("#pselect").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#ppid").text("Please select an option!");
       
     }

else {
       $("#pselect").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#ppid").text("");

    }
  

  
     if ($("#oselect").val() == "none"){
       $("#oselect").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#osid").text("Please select an option!");
     
     }

else {
       $("#oselect").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#osid").text("");

    }
     if ($("#nselect").val() == "none"){
       $("#nselect").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#nsid").text("Please select an option!");
       
     }

else {
       $("#nselect").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#nsid").text("");

    }
     
     if ($("#anssecurity").val() == ''){
       $("#anssecurity").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#asid").text("* enter security answer");
       
        }
         else {
       $("#anssecurity").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#asid").text("");

    }
     if ($("#firstname").val() == ''){
             $("#firstname").css("border-color", "#cd2d00");
             $('#buone').attr('disabled', true);
             $("#fid").text("* You have to enter your first name!");
             
         }
          else {
           $("#firstname").css("border-color", "#ccc");
           $('#buone').attr('disabled', false);
           $("#fid").text("");
          }

     if ($("#birthdate").val() == '') {
          $("#birthdate").css("border-color", "#cd2d00");
          $('#buone').attr('disabled', true);
          $("#dobid").text("* enter Date of Birth");
        
          } 
     else {
        $("#birthdate").css("border-color", "#ccc");
        $('#buone').attr('disabled', false);
        $("#dobid").text("");
       }

     if ($("#email").val() == ''){
        $("#email").css("border-color", "#cd2d00");
        $('#buone').attr('disabled', true);
        $("#eid").text("* You have to enter your first name!");
        
        }
     else {
       $("#email").css("border-color", "#ccc");
        $('#buone').attr('disabled', false);
       $("#eid").text("");

       }
     if ($("#number").val() == ''){
         $("#number").css("border-color", "#cd2d00");
         $('#buone').attr('disabled', true);
        $("#nid").text("* Number is required");
        
       }
     else {
       $("#number").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#nid").text(" ");
       }
     if ($("#pnum").val() == ''){
       $("#pnum").css("border-color","#cd2d00");
       $('#buone').attr('disabled', true);
       $("#pnid").text("* Number is required");
       
       }

     else {
       $("#pnum").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
       $("#pnid").text("");
       }
     if ($("#phonepe").val() == ''){
       $("#phonepe").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#ppeid").text("* Number is required");
       
      }
     else {
       $("#phonepe").css("border-color", "#ccc");
        $('#buone').attr('disabled', false);
       $("#ppeid").text("");
      }
     if ($("#postoff").val() == ''){
       $("#postoff").css("border-color", "#cd2d00");
       $('#buone').attr('disabled', true);
       $("#poid").text("* enter post office");
       
       }
    else {
       $("#postoff").css("border-color", "#ccc");
       $('#buone').attr('disabled', false);
      $("#poid").text("");
     }
     if ($("#state").val() == ''){
         $("#state").css("border-color", "#cd2d00");
         $('#buone').attr('disabled', true);
         $("#stid").text("enter state");
         
      }
     else {
        $("#state").css("border-color", "#ccc");
        $('#buone').attr('disabled', false);
        $("#stid").text("");
      }




     if ($("#city").val() == ''){
          $("#city").css("border-color", "#cd2d00");
          $('#buone').attr('disabled', true);
          $("#ctid").text("* enter city");
          
       }

    else {
         $("#city").css("border-color", "#ccc");
         $('#buone').attr('disabled', false);
        $("#ctid").text("");

          }
      /* if (!$("#checkbox").is(":checked")) {
            alert("Checkbox should be checked");
          }
       else if($("#resia:checked").length == 0){
           alert("Copy Residence to office Address");
         }
       else
         {
           $('#buone').attr('disabled', false);
         }*/

   


    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }
  //validation
  login()
  {
    this.router.navigate(['/login']);
  }
   
}
