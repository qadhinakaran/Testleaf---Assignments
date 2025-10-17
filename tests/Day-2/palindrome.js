let originalword = "madam"
let reversedWord = ""
for(i=originalword.length-1; i>=0; i--){
    reversedWord = reversedWord + originalword[i]
}
if(originalword == reversedWord){
    console.log(originalword + " is a Palindrome")
}   else{
    console.log(originalword + " is not a Palindrome")
}