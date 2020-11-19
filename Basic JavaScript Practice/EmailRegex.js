function CheckEmailUsingRegex(email)
{
    let emailRegex = new RegExp(/^([a-z0-9]+)[.]([a-z]+)[@]([a-z]+)[.]([a-z]+)$/);

    if(emailRegex.test(email))
    {
        console.log("Valid Email");
    }
    else
    {
        console.log("Invalid email");
    }
}

CheckEmailUsingRegex("mohanee.capgemini@outlook.com");