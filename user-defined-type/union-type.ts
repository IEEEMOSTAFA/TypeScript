let userId: string | number | boolean;
userId = "100" ;
userId = 100 ;
userId = true;

function displayUserInfo(userId : string | number){
    console.log(userId);
}

displayUserInfo("100");
displayUserInfo(101);