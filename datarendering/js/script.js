window.App = angular.module('App', ['ui.bootstrap', 'ngResource']);

App.controller('mainCtrl', ['$scope', function($scope) {
  $scope.data = {
    "data":
    [
      {
        "user_id": "1",
        "user_name": "Satyabrata Rakshit",
        "appnt_date": "2017-07-24",
        "appnt_time": "10:56:26",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "12, MG Road, Bangalore 560001",
        "user_picture": "images/1.jpg",
        "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 1,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.5"
      },
      {
        "user_id": "2",
        "user_name": "Praksh Raj",
        "appnt_date": "2017-07-02",
        "appnt_time": "08:00:10",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "24, MG Road, Bangalore 560001",
        "user_picture": "images/2.jpg",
         "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 10,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.2"
      },
      {
        "user_id": "3",
        "user_name": "Rohit Rony",
        "appnt_date": "2017-07-24",
        "appnt_time": "10:56:26",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "12, MG Road, Bangalore 560001",
        "user_picture": "images/3.jpg",
        "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 1,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.5"
      },
      {
        "user_id": "4",
        "user_name": "Gaurav Kumar",
        "appnt_date": "2017-09-02",
        "appnt_time": "08:59:10",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "24, MG Road, Bangalore 560001",
        "user_picture": "images/4.jpg",
         "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 10,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.2"
      },
      {
        "user_id": "5",
        "user_name": "Satish",
        "appnt_date": "2017-12-24",
        "appnt_time": "10:30:26",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "12, MG Road, Bangalore 560001",
        "user_picture": "images/5.jpg",
        "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 1,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.5"
      },
      {
        "user_id": "6",
        "user_name": "Sibanand Babu",
        "appnt_date": "2017-12-02",
        "appnt_time": "17:00:10",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "24, MG Road, Bangalore 560001",
        "user_picture": "images/6.jpg",
         "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 10,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.2"
      },
      {
        "user_id": "7",
        "user_name": "Victor Mondal",
        "appnt_date": "2017-08-24",
        "appnt_time": "14:56:26",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "12, MG Road, Bangalore 560001",
        "user_picture": "images/7.jpg",
        "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 1,000",
        "status": "Cancelled",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.5"
      },
      {
        "user_id": "8",
        "user_name": "Surash M.",
        "appnt_date": "2017-11-02",
        "appnt_time": "08:00:10",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "24, MG Road, Bangalore 560001",
        "user_picture": "images/8.jpg",
         "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 10,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.2"
      },
      {
        "user_id": "9",
        "user_name": "Rajesh",
        "appnt_date": "2017-10-24",
        "appnt_time": "10:56:26",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "12, MG Road, Bangalore 560001",
        "user_picture": "images/3.jpg",
        "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 1,000",
        "status": "Booked",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.5"
      },
      {
        "user_id": "10",
        "user_name": "Sital Mandal",
        "appnt_date": "2014-07-02",
        "appnt_time": "12:00:15",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "24, MG Road, Bangalore 560001",
        "user_picture": "images/2.jpg",
         "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 10,000",
        "status": "Cancelled",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.2"
      },
      {
        "user_id": "11",
        "user_name": "Aveksha Jane",
        "appnt_date": "2015-07-24",
        "appnt_time": "10:56:26",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "12, MG Road, Bangalore 560001",
        "user_picture": "images/1.jpg",
        "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 1,000",
        "status": "Cancelled",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.5"
      },
      {
        "user_id": "12",
        "user_name": "Pranjal Kumar",
        "appnt_date": "2016-07-02",
        "appnt_time": "09:00:10",
        "qualification": "LLB",
        "experience": "4 Years",          
        "full_address": "24, MG Road, Bangalore 560001",
        "user_picture": "images/8.jpg",
         "phone":"12345679",
        "email_id":"abc@xyz.com",
        "consultation_fee": "Rs. 10,000",
        "status": "Cancelled",
        "service_type": "cupidatat commodo",
        "Case": "cupidatat commodo",
        "rating": "4.2"
      },
    ]
  }
  $scope.objects = $scope.data.data
  $scope.totalItems = $scope.objects.length;
  $scope.currentPage = 1;
  $scope.numPerPage = 10;
  
  $scope.paginate = function(value) {
    var begin, end, index;
    begin = ($scope.currentPage - 1) * $scope.numPerPage;
    end = begin + $scope.numPerPage;
    index = $scope.objects.indexOf(value);
    return (begin <= index && index < end);
  };
  $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    };  
}]);

$(function(){    
    $(".table").on("click", ".arrow", function(){
        $(this).toggleClass("rotateicon");
        $('.messageblock').slimScroll({
            height: '180px'      
        });
        $('[data-toggle="tooltip"]').tooltip();
        });       
    });
