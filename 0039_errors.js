try {
    console.log("no error");
    throw "error";
}catch(error){
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}