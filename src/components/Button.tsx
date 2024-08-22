type ButtonProps= {
  backgroundColor: string, 
  fontSize:number, 
  padding?:number[] // padding is of type array that can accept number values
  margin : [number, number, number ,number] // this is a tuple, which is a more specific/strict form of array in TS.
}; //we need to as specific in terms of the data type of the variable when working with TS.



//"padding?:" tells that this value/parameter is optional and not mandatorily required to be passed to the child component Button as props. 



type Color = "red" | "yellow" | "green"; // so the Color type in TS can have one of the 3 values specified, either red, yellow or green.


let textColor: Color = "red"; //here the variable textColor of type Color has a value red. 'Color' here is similar to a string or number, etc.



const Button = ({backgroundColor, fontSize, padding, margin}:ButtonProps):JSX.Element=> { // explicitly letting the interpreter know that we're gonna return a JSX element.
  

  const url:string = "www.google.com";

  function showAmount(amount:number, currency:string): string{ //string here tells that the return type of this function is gonna be a string
    
    console.log(url, amount, currency, backgroundColor, fontSize, padding, margin);

    return "Hello"; //returned string value.
  }

  showAmount(1000, "USD");
  
  return (
    <div className=" bg-slate-300 p-4 flex justify-center">
      <button className="bg-purple-500 p-3 rounded-md text-white font-bold">Click me</button>
    </div>
  )//returned JSX  element

}

export default Button;