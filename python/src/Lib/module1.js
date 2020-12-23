
var $B = __BRYTHON__;
var $bltns = __BRYTHON__.InjectBuiltins();eval($bltns);

var $locals = $locals___main__;
$locals___main__["__package__"] = ""
$locals.__annotations__ = _b_.dict.$factory()
var $top_frame = ["__main__", $locals___main__, "__main__", $locals___main__]
$locals.$f_trace = $B.enter_frame($top_frame)
var $stack_length = $B.frames_stack.length;
try{
    var main0 = $locals___main__["main"] = $B.genfunc("main", {"$locals___main__": $locals___main__},[function($defaults){function main0(){
 for(var attr in this.blocks){eval("var " + attr + " = this.blocks[attr]")};
var $locals___main___main_2 = this.env = {},
    $local_name = "__main___main_2",
    $locals = $locals___main___main_2;$locals.$parent = $locals___main__;
 var $nb_defaults = Object.keys($defaults).length,
     $parent = $locals.$parent
 var $len = arguments.length;
 if($len > 0 && arguments[$len - 1].$nat !== undefined){
    var $ns = $B.args("main", 0, {}, [], arguments, $defaults, null, null);
    for(var $var in $ns){$locals[$var] = $ns[$var]};

 }
 else{
    if($len == 0){
         //

    }
    else if($len > 0){$B.wrong_nb_args("main", $len, 0, [])}

 }
 $locals.$line_info = "1,__main__"
 var $top_frame = [$local_name, $locals,"__main__", $locals___main__, main0]
 $locals.$f_trace = $B.enter_frame($top_frame)
 var $stack_length = $B.frames_stack.length;
 $locals.__annotations__ = _b_.dict.$factory()
 $top_frame[1] = $locals
 $locals.$parent = $parent
 $B.js_this = this;
 ;$locals.$line_info = "1,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
 var sent_value = this.sent_value === undefined ? _b_.None : this.sent_value;
this.sent_value = _b_.None
if(sent_value.__class__ === $B.$GeneratorSendError){sent_value.err.$stack.splice(0, 0, $B.freeze([$top_frame])[0]); throw sent_value.err};
 var $yield_value2 = None
 return [$yield_value2, 0]

}
return main0},

function main0(){
 for(var attr in this.blocks){eval("var " + attr + " = this.blocks[attr]")};
var $locals___main___main_2 = this.env,
    $local_name = "__main___main_2",
    $locals = $locals___main___main_2;
 var $top_frame = ["__main___main_2",$locals,"__main__",$locals___main__];$B.frames_stack.push($top_frame); var $stack_length = $B.frames_stack.length;$locals.$is_generator = true;$locals.$yield_node_id = 0;
 ;$locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
 var sent_value = this.sent_value === undefined ? _b_.None : this.sent_value;
  this.sent_value = _b_.None
  if(sent_value.__class__ === $B.$GeneratorSendError){sent_value.err.$stack.splice(0, 0, $B.freeze([$top_frame])[0]); throw sent_value.err};
  var $yield_value2 = sent_value;
 $locals["$no_break1"] = true
 ;$locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
 while($B.$bool($locals["$no_break1"] && ($locals___main___main_2["a"] = $yield_value2))){
    ;$locals.$line_info = "3,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call($B.builtins.print)($locals["a"]);
    $locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};None;

 }

}
],{})
    main0.$is_func = true
    main0.$infos = {
        __name__:"main",
        __qualname__:"main",
        __annotations__: {},
        __dict__: _b_.dict.__new__(_b_.dict),
        __doc__: None,
        __module__ : "__main__",
        __code__:{
            co_argcount:0,
            co_filename:$locals___main__["__file__"],
            co_firstlineno:1,
            co_flags:99,
            co_freevars: [],
            co_kwonlyargcount:0,
            co_name: "main",
            co_nlocals: 0,
            co_posonlyargcount: 0,
            co_varnames: $B.fast_tuple([]
        )}
    };None;
    ;$locals.$line_info = "4,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call($B.builtins.next)(($locals___main__["test"] = $B.$call($locals___main__["main"])()));
    ;$locals.$line_info = "5,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call($B.$getattr($locals___main__["test"],"send"))('magic');
    $B.leave_frame({value: _b_.None})
}
catch(err){
    $B.leave_frame({value: _b_.None})
    throw err
}
py2js.js:10459:38
magic