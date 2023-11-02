let istatus = document.querySelector('h3')
let addFriend = document.querySelector('#add')
let flag=0
addFriend.addEventListener('click' , function(){
    if(flag==0){
    istatus.innerHTML="Following"
    addFriend.innerHTML="Unfollow"
    istatus.style.color="green"
    flag=1
    }
    else{
        istatus.innerHTML="unknown"
        addFriend.innerHTML="follow"
        istatus.style.color="red"
        flag=0
    }
})