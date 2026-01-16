#!/usr/bin/env bash
# tiny brainfuck interpreter (supports + - < > . , [ ])
code="$1"
# Convert code file to single string
brainfuck=$(cat "$code")

# Use awk for simplicity
output=$(awk 'BEGIN{
  split("0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",mem," ");
  ptr=1;
  code=ARGV[1];
  len=length(code);
  i=1;
  while(i<=len){
    c=substr(code,i,1);
    if(c==">") ptr++;
    else if(c=="<") ptr--;
    else if(c=="+") mem[ptr]= (mem[ptr]+1)%256;
    else if(c=="-") mem[ptr]= (mem[ptr]-1+256)%256;
    else if(c==".") printf("%c",mem[ptr]);
    else if(c==",") mem[ptr]=0; # no input support
    else if(c=="["){
      if(mem[ptr]==0){
        # jump forward
        depth=1; j=i+1;
        while(j<=len && depth>0){
          ch=substr(code,j,1);
          if(ch=="[") depth++;
          else if(ch=="]") depth--;
          j++;
        }
        i=j-1;
      }
    }
    else if(c=="]"){
      if(mem[ptr]!=0){
        # jump back
        depth=1; j=i-1;
        while(j>=1 && depth>0){
          ch=substr(code,j,1);
          if(ch=="]") depth++;
          else if(ch=="[") depth--;
          j--;
        }
        i=j+1;
      }
    }
    i++;
  }
}' "$brainfuck")
echo "$output"

