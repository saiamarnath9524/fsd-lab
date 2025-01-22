// Write a function delayedMessage(message, delay) that prints the
// message after the specified delay using setTimeout. Use a callback for when
// the message has been printed
function maim(name,callback)
{
    setTimeout(function(){
        callback(name)
    },2000)

}
function message(name)
{
    console.log(name)
}

maim("amar",message)
