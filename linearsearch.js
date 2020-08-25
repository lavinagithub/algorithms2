function sequential_search_trace(a, x) {
    var trace_string = "Item to be searched " +  x + "\n"
    for(var i = 0; i < a.length; i++) {
      trace_string += "Iteration " + i + ":\n"
      trace_string += "   Current Value of A[i]: " + a[i] + "\n"
      trace_string += "   Is Current Value == " + x + " ? " + (x == a[i] ? "Yes" : "No") + "\n"
      if(x == a[i]) {
        trace_string += "Item found at index " + i+ "\n"
        trace_string += "Stopping algorithm..." + "\n";
        return trace_string
      }
    }
    trace_string += "The item couldn't be found."
    trace_string += "Stopping algorithm."
    return trace_string
  }
  
  let a = [10,50,30,70,80,60,20,90,40];
  const trace = sequential_search_trace(a,20); 
  console.log(trace);