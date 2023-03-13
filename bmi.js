let form=document.querySelector('form');
form.addEventListener('submit',function(e)
{
	e.preventDefault();
	let height=parseInt(document.querySelector('#height').value);
	let weight=parseInt(document.querySelector('#weight').value);
	let result=document.querySelector('#result');
	if((height==' ')||(height<0)||(isNaN(height)))
	{
		 result.innerHTML="Please enter the correct height";
		 result.style.color="red";
		 
	}
	else if((weight==' ')||(weight<0)||(isNaN(weight)))
	{
		result.innerHTML="please enter correct Weight";
		result.style.color="red"
	}
	else 
	{
		let bmi=Math.round(weight/((height*height)/10000));
		result.innerHTML=`<p>${bmi}</p>`;
		
		if(bmi<22)
		{
			 result.innerHTML="your weight is under level:"+bmi;
			 result.style.color="yellow";
		}
		else if((bmi>22)&&(bmi<=25))
		{
			 result.innerHTML="your weight normal:"+bmi;
			 result.style.color="green";
		}
		else if((bmi>26))
		{
			 result.innerHTML="your weight over:"+bmi;
			 result.style.color="red";
		}
	}
})

