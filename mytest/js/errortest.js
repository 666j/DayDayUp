
function ErrorTest(){
	var err = new Error("出错了");
	console.log(err.message);
}
//ErrorTest();
function throwWit(){
	throw new Error('');
}
function catchit(){
	try{
		var 1a;
	}
	catch(e){
		console.log(e.stack);
	}
}
catchit();
