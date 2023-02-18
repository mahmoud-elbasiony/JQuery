const tasks=$(".tasks")
const submit=$(".add")
const taskinput=$("#taskinput")

submit.on("click",function(){

    if(taskinput.val() != ""){
        addTaskToArray(taskinput.val())
    }
    taskinput.val("")
})

function addTaskToArray(taskvalue){
    const task={
        id:Date.now(),
        data:taskvalue,
        complete:false
    }
    // tasksArray.push(task);
    // addToPage(tasksArray);
    // addToLocalStorage(tasksArray);
    addToPage(task);

}

function addToPage(element){
    // array.forEach(element => {
        let taskcontainer=$("<div class='task'></div>");
        // taskcontainer.addClass("task");

        taskcontainer.attr("id",element.id);
        tasks.append(taskcontainer)
        console.log(element.id)
        taskcontainer=$("#"+element.id)

        let div=$("<div class='data'></div>");
        div.text(element.data);
        console.log(element.data)
        console.log(element.complete)


        taskcontainer.append(div);

        let btnContainers=$("<div></div>");
        btnContainers.addClass("btn-container")
        taskcontainer.append(btnContainers);
        btnContainers=$("#"+element.id+" .btn-container")

        let removebtn=$("<button></button>");
        removebtn.addClass("removebtn");
        removebtn.text("remove");

        let checkbtn=$("<button></button>");
        checkbtn.addClass("checkbtn");
        checkbtn.text("check")

        // if(element.complete){
            
        //     checkbtn.text("uncheck")

        //     taskcontainer.addClass("checked");
        //     task.css("text-decoration","line-through");



        // }
        
        btnContainers.append(checkbtn);
        btnContainers.append(removebtn);
        checkbtn=$("#"+element.id+" .checkbtn")
        // addBtnEvent(checkbtn)

        checkbtn=$("#"+element.id+" .removebtn")

        // addBtnEvent(removebtn)         
    // });
    
}
tasks.on("click","button",{},delegate)
function delegate(e){
    let btn=$(e.target);
    console.log(btn)
    let task=$(e.target.closest(".task"));
    console.log(task)

    if(btn.attr("class")=="checkbtn"){
        // task.toggleClass("checked");

        let update={
            data:task.first().text(),
            
        }
        console.log(task.hasClass("checked"));
        if(task.hasClass("checked")){
            update.complete=false;
            task.css("text-decoration","none");
            btn.text("check");
            task.removeClass("checked")
            task.css("color","black");

        }else{
            update.complete=true;
            task.css("text-decoration","line-through");
            task.css("color","green");
            // console.log(task);
            task.addClass("checked")
            btn.text("uncheck");

        }

        // localStorage.setItem(task.id,JSON.stringify(update))

    }
    if(btn.attr("class")=="removebtn"){
        console.log("remove")
        // localStorage.removeItem(task.id)
        task.remove();
        console.log(task.id);
    }
}







function addBtnEvent(btn){
        btn.on("click",function(e){
        console.log(btn.className)
        let task=btn.closest(".task");
        console.log(btn)
        if(btn.attr("class")=="checkbtn"){
            // task.toggleClass("checked");

            let update={
                data:task.first().text(),
                
            }
            console.log(task.hasClass("checked"));
            if(task.hasClass("checked")){
                update.complete=false;
                task.css("text-decoration","none");
                btn.text("check");
                task.removeClass("checked")
                task.css("color","black");

            }else{
                update.complete=true;
                task.css("text-decoration","line-through");
                task.css("color","green");
                // console.log(task);
                task.addClass("checked")
                btn.text("uncheck");

            }

            // localStorage.setItem(task.id,JSON.stringify(update))

        }
        if(btn.attr("class")=="removebtn"){
            console.log("remove")
            // localStorage.removeItem(task.id)
            task.remove();
            console.log(task.id);
        }
    })

}

