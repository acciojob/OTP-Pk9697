//your JS code here. If required.

const firstCode=document.getElementById(`code-1`).focus()
for(let currentCodeCount=1;currentCodeCount<=6;++currentCodeCount){
	const currentCode=document.getElementById(`code-${currentCodeCount}`)
	currentCode.addEventListener('input',(event)=>{  
		const {value}=event.target 
		if(value>=0 && value<=9){  
			if(currentCodeCount==6) return;
			const nextCode=document.getElementById(`code-${currentCodeCount+1}`)
			nextCode.focus()
		}
	})
	currentCode.addEventListener('keydown',(event)=>{ 
		const key = event.key;
		if (key !== "Backspace") {
			return;
		}
		
		if(currentCodeCount==6) { 
			if(currentCode.value!==""){
				currentCode.value="" 
				return;
			}
		}
		if(currentCodeCount==1) return;
		const prevCode=document.getElementById(`code-${currentCodeCount-1}`)
		prevCode.value=""
		prevCode.focus()
	})
}

