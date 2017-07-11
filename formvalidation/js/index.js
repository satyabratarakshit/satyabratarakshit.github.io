$(function(){
$(".myclass").blur(function(){
		var data = $(this).val();
		data = data.trim();
		var id = $(this).attr("id");
		var type = $(this).attr("type");						
	if(type=="radio")
		{
		if($(".gender:checked").length==0)
			{
			$("#egender").show();
			}else{
			$("#egender").hide();
			}
	    }
	else if(type=="checkbox")
	 {
		if($("#condition:checked").length==0){
			$("#econdition").show();
		}else{
			$("#econdition").hide();
		}
	 }
	else{
		if(data==""){
			$("#e"+id).show();
		}else{
			$("#e"+id).hide();
		}
	}
	});
	$("#btn1").click(function(){
	var name = document.getElementById("fname").value;
	name=name.trim();
	if(name==""){					
			document.getElementById("fname").style.borderColor="red";
			document.getElementById("efname").style.display = 'block';
		}
		else{
			document.getElementById("efname").style.display = 'none';
			document.getElementById("fname").style.borderColor="";
		}
	// for email===================
	var email = document.getElementById("email").value;
	email=email.trim();
	if(email==""){					
		document.getElementById("email").style.borderColor="red";
		document.getElementById("eemail").style.display = 'block';
	}
	else{			
		document.getElementById("email").style.borderColor="";
		document.getElementById("eemail").style.display = 'none';
	}	
	// for Mobile===================
	var mobile = document.getElementById("mobile").value;
	mobile=mobile.trim();
	if(mobile==""){					
		document.getElementById("mobile").style.borderColor="red";
		document.getElementById("emobile").style.display = 'block';
	}
	else{			
		document.getElementById("mobile").style.borderColor="";
		document.getElementById("emobile").style.display = 'none';
	}
	// for City===================
	var city = document.getElementById("city").value;
	city=city.trim();
	if(city==""){					
		document.getElementById("city").style.borderColor="red";
		document.getElementById("ecity").style.display = 'block';
	}
	else{				
		document.getElementById("city").style.borderColor="";
		document.getElementById("ecity").style.display = 'none';
	}	
	// for Address===================
	var address = document.getElementById("address").value;
	address=address.trim();
	if(address==""){					
		document.getElementById("address").style.borderColor="red";
		document.getElementById("eaddress").style.display = 'block';
	}
	else{						
		document.getElementById("address").style.borderColor="";
		document.getElementById("eaddress").style.display = 'none';
	}
	// for Gender===================
	var male = document.getElementById("m").checked;
	var female = document.getElementById("f").checked;					
	if(male==true || female==true){
		document.getElementById("egender").style.display = 'none';
	}else{
		document.getElementById("egender").style.display = 'block';
	}
	// for Terms and condition===================
	var condition =document.getElementById("condition").checked;						
	if(condition==true){
		document.getElementById("econdition").style.display = 'none';
	}else{
		document.getElementById("econdition").style.display = 'block';
	}
	});
	$("#btn2").click(function(){
		$("#myForm")[0].reset();		
	});
});
